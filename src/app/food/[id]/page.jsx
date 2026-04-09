import Image from "next/image";
import React from "react";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
  );

  const data = await res.json();
  const { details } = data;
  return {
    title: details.title,
  };
}

const SingleFood = async (id) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
    // { cache: "no-store" },
  );
  const data = await res.json();
  // console.log(data);
  return data.details;
};

const FoodDetails = async ({ params }) => {
  // console.log(params);
  const { id } = await params;
  const food = await SingleFood(id);
  // console.log(food);
  if (!food) {
    return (
      <div className="text-center py-20 text-xl font-semibold">
        Food not found ❌
      </div>
    );
  }
  const { title, foodImg, price, video, category, area } = food;
  // console.log(food);
  return (
    // <div></div>
    <div className="max-w-3xl mx-auto p-6">
      {/* Food Image */}
      <Image
        src={foodImg}
        alt={title}
        height={300}
        width={150}
        className="w-full h-72 object-cover rounded-xl shadow"
      />

      {/* Title */}
      <h1 className="text-3xl font-bold mt-5">{title}</h1>

      {/* Category + Area */}
      <div className="flex gap-4 mt-2 text-gray-600">
        <p className="bg-gray-100 px-3 py-1 rounded-lg text-sm">{category}</p>
        <p className="bg-gray-100 px-3 py-1 rounded-lg text-sm">{area}</p>
      </div>

      {/* Price */}
      <p className="text-2xl font-semibold mt-4">{price}৳</p>

      {/* Buttons */}
      <div className="flex gap-4 mt-6">
        <a
          href={video}
          target="_blank"
          className="flex-1 bg-red-600 text-white py-3 rounded-lg text-center hover:bg-red-700"
        >
          Watch Video
        </a>

        <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FoodDetails;

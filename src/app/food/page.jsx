// import CartItem from "@/components/CartItem";
import CartItem from "@/components/CartItem";
import InputSearch from "@/components/InputSearch";
import React from "react";
const getFoods = async (search) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/random?search=${search}`,
    { next: { revalidate: 10 } },
  );
  const data = await res.json();
  // console.log(data);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return data.foods || [];
};
// console.log(data);
const FoodPage = async ({ searchParams }) => {
  const { search = "" } = await searchParams;
  const foods = await getFoods(search);
  return (
    <div>
      <h2 className="text-4xl font-bold text-center">
        Total food found {foods.length}
      </h2>
      <div className="my-4">
        <InputSearch />
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 max-w-11/12 mx-auto">
        {foods.map((food) => (
          <CartItem key={food.id} food={food}></CartItem>
        ))}
      </div>
    </div>
  );
};

export default FoodPage;

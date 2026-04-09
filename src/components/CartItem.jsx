import React from "react";
import CartBtn from "./CartBtn";
import Link from "next/link";

const CartItem = ({ food }) => {
  // console.log(food);
  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition flex">
      <figure>
        <img
          src={food.foodImg}
          alt={food.title}
          className="h-52 w-full object-cover"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title">
          {food.title}
          <div className="badge badge-secondary ml-2">{food.category}</div>
        </h2>

        <p className="text-lg font-semibold">৳{food.price}</p>

        <div className="card-actions justify-between mt-4">
          <Link
            href={`/food/${food.id}`}
            className="btn btn-outline btn-primary"
          >
            View Details
          </Link>

          <CartBtn></CartBtn>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

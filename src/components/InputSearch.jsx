"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const InputSearch = () => {
  const params = useSearchParams();
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const value = form.search.value;

    // 1
    const newParams = new URLSearchParams(params.toString());
    newParams.set("search", value);
    router.push(`?${newParams.toString()}`);
  };
  return (
    <div className="text-center flex justify-center">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          id=""
          placeholder="Enter Food Name"
          className="px-1 py-2 border-2 rounded-xl w-2xl"
        />
        <button className="px-5 py-2 border-2 rounded-xl cursor-pointer font-bold ml-2">
          Search
        </button>
      </form>
    </div>
  );
};

export default InputSearch;

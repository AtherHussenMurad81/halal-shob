// import React from 'react';
"use client";

import { useRouter } from "next/navigation";

const FeedbackForm = () => {
  const router = useRouter();
  const handelSubmit = async (e) => {
    e.preventDefault();

    const message = e.target.message.value;
    const res = await fetch(`http://localhost:3000/api/feedback`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message,
      }),
    });
    const data = await res.json();
    if (data.insertedId) {
      alert("found");
      router.push("/feedback");
    }
  };

  return (
    <div>
      <form onSubmit={handelSubmit} className="items-center text-center">
        <textarea
          className="w-xl border border-dashed"
          name="message"
          id=""
          cols={"30"}
          rows={"15"}
        ></textarea>
        <button className="btn">Add Feedback</button>
      </form>
    </div>
  );
};

export default FeedbackForm;

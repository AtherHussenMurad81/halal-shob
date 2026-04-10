// "use client";
import FeedbackCard from "@/components/FeedbackCard";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Feedback",
};

const getFeedback = async () => {
  const res = await fetch(`http://localhost:3000/api/feedback`);
  return await res.json();
};

const Feedback = async () => {
  const feedback = await getFeedback();
  console.log(feedback);

  return (
    <div className="max-w">
      <h2 className="text-2xl font-bold text-center">
        Total {feedback.length} found
      </h2>
      <Link className="btn my-5" href={"/feedback/add"}>
        Add Feedback
      </Link>
      <div className="my-3 space-y-5">
        {feedback.map((fd) => (
          <FeedbackCard key={fd._id} feedback={fd} />
        ))}
      </div>
    </div>
  );
};

export default Feedback;

"use client";
import React from "react";

const FeedbackCard = ({ feedback, onUpdate, onDelete }) => {
  return (
    <div className=" mx-auto bg-white shadow-md rounded-2xl p-5 border border-gray-200 hover:shadow-lg transition">
      <p className="text-gray-800 text-base mb-2">{feedback.message}</p>

      <small className="text-gray-500 text-sm">
        {new Date(feedback.date).toLocaleString()}
      </small>

      <div className="flex gap-3 mt-4">
        <button
          onClick={() => onUpdate(feedback)}
          className="px-4 py-1.5 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition"
        >
          Update
        </button>

        <button
          onClick={() => onDelete(feedback._id)}
          className="px-4 py-1.5 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default FeedbackCard;

import React from "react";
// import "./loading.css";

const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <div className="card bg-base-100 shadow-2xl p-8 items-center gap-4">
        {/* Loader Animation */}
        <div className="loader"></div>

        {/* Text */}
        <h2 className="text-xl font-semibold">Loading...</h2>
        <p className="text-sm text-gray-500">
          Please wait while we fetch your data
        </p>

        {/* Optional progress bar (UI only) */}
        <progress className="progress progress-primary w-56"></progress>
      </div>
    </div>
  );
};

export default Loading;

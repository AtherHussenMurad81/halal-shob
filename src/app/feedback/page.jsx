// "use client";
import FeedbackCard from "@/components/FeedbackCard";
import Link from "next/link";
import React from "react";
import { connect } from "../lib/dbConnect";
import { getFeedback } from "@/action/server/feedback";

export const metadata = {
  title: "Feedback",
};
export const dynamic = "force-dynamic";

// const getFeedback = async () => {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/api/feedback`, {
//     // cache: "force-cache",
//     next: {
//       revalidate: 60, //proti 1 minit por por cache korbe and revalided korbe
//     },
//     // cache: 'force-cache' ??sate sate ui te dekabe na reload korle o na

//     //  ei method ye server ye load na pataiye database ye load patabe. jeta onek onek usefull for a juniour developer
//   });
//   return await res.json();
// };

const Feedback = async () => {
  const feedback = await getFeedback();
  // console.log(feedback);

  // other ways
  // const feedback = await connect("feedback").find().toArray();
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

import { postFeedback } from "@/action/server/feedback";
import { connect } from "@/app/lib/dbConnect";
import FeedbackForm from "@/components/FeedbackForm";
import React from "react";

const Add_Feedback = () => {
  //   const postFeedback = async (message) => {
  //     "use server";
  //     const result = await connect("feedback").insertOne({
  //       message,
  //       date: new Date().toISOString(),
  //     });
  //     // return result;
  //     //  other ways
  //     return {
  //       ...result,
  //       //   insertedId is a object id whether i convert is toString() as a string value
  //       insertedId: result.insertedId.toString(),
  //     };
  //   };

  return (
    <div>
      <FeedbackForm postFeedback={postFeedback} />
    </div>
  );
};

export default Add_Feedback;

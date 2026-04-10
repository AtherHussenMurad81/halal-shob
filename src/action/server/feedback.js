"use server";

import { connect } from "@/app/lib/dbConnect";

export const postFeedback = async (message) => {
  const result = await connect("feedback").insertOne({
    message,
    date: new Date().toISOString(),
  });
  // return result;
  //  other ways
  return {
    ...result,
    //   insertedId is a object id whether i convert is toString() as a string value
    insertedId: result.insertedId.toString(),
  };
};

export const getFeedback = async () => {
  const feedback = await connect("feedback").find().toArray();
  return feedback;
};

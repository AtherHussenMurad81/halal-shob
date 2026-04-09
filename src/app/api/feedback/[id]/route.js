import { connect } from "@/app/lib/dbConnect";
import { feedback } from "../../route";
import { ObjectId } from "mongodb";

const feedbackCollection = connect("feedback");

export async function GET(req, { params }) {
  const { id } = await params;

  if (id.length != 24) {
    return Response.json({
      status: 400,
      message: "send currect _id",
    });
  }

  const query = { _id: new ObjectId(id) };
  //   const singleFeedback = feedback.find((s) => s.id == id) || "No Feedback Here";
  const result = await feedbackCollection.findOne(query);

  return Response.json(result);
}
export async function DELETE(req, { params }) {
  const { id } = await params;

  if (id.length != 24) {
    return Response.json({
      status: 400,
      message: "send currect _id",
    });
  }

  const query = { _id: new ObjectId(id) };
  //   const singleFeedback = feedback.find((s) => s.id == id) || "No Feedback Here";
  const result = await feedbackCollection.deleteOne(query);

  return Response.json(result);
}
export async function PATCH(req, { params }) {
  const { id } = await params;
  const { message } = await req.json();
  if (id.length != 24) {
    return Response.json({
      status: 400,
      message: "send currect _id",
    });
  }

  const query = { _id: new ObjectId(id) };

  const newData = {
    $set: {
      message,
    },
  };

  const result = await feedbackCollection.updateOne(query, newData);

  return Response.json(result);
}

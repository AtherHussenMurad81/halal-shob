import { connect } from "@/app/lib/dbConnect";
import { feedback } from "../route";
import { revalidatePath } from "next/cache";
const feedbackCollection = connect("feedback");
export async function GET(req) {
  //   return Response.json(feedback);

  const result = await feedbackCollection.find().toArray();
  return Response.json(result);
}

export async function POST(req) {
  const { message } = await req.json();
  if (!message || typeof message !== "string") {
    return Response.json({
      status: 400,
      message: "Please Send a message",
    });
  }

  const newFeedback = { message, date: new Date().toISOString() };

  const result = await feedbackCollection.insertOne(newFeedback);
  revalidatePath("/feedback");
  return Response.json(result);
}
// export async function DELETE(req) {
//   const { message } = await req.json();
//   if (!message || typeof message !== "string") {
//     return Response.json({
//       status: 400,
//       message: "Please Send a message",
//     });
//   }

//   const newFeedback = { message, date: new Date().toISOString() };

//   const result = await feedbackCollection.deleteOne(newFeedback);

//   return Response.json(result);
// }

import { feedback } from "../../route";

export async function GET(req, { params }) {
  const { id } = await params;

  const singleFeedback = feedback.find((s) => s.id == id) || "No Feedback Here";

  return Response.json(singleFeedback);
}
// I love you
// My Boin

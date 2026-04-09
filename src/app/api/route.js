export const feedback = [
  {
    id: 1,
    message: "This food very delicious",
  },
  {
    id: 2,
    message:
      "Absolutely incredible experience! The flavors were so well balanced and every bite felt like a celebration. I will definitely be coming back again very soon!",
  },
  {
    id: 3,
    message:
      "I was honestly blown away by the quality of the food. The portion sizes were generous, the presentation was beautiful, and the taste was out of this world. Highly recommend to anyone looking for a great meal.",
  },
  {
    id: 4,
    message:
      "One of the best dining experiences I have had in a long time. The chef clearly puts a lot of love and effort into every dish. The spices were perfectly balanced and the ingredients tasted very fresh.",
  },
  {
    id: 5,
    message:
      "From the moment the food arrived at the table, I knew it was going to be something special. The aroma alone was enough to make my mouth water. Every single dish we ordered exceeded our expectations.",
  },
  {
    id: 6,
    message:
      "Truly a hidden gem! The menu has so many amazing options and everything we tried was cooked to perfection. The staff were also very friendly and attentive. Will absolutely be recommending this place to all my friends and family.",
  },
];

export async function GET(req) {
  return Response.json({
    status: 200,
    message: "API created",
  });
}

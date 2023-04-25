const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;

const Stripe = require("stripe");

const API_BASE =
  "https://nodejs-serverless-function-express-psi-two.vercel.app/api/";

export default async function handler(req, res) {
  const { name, amount, email } = req.body;
  if (!STRIPE_SECRET_KEY) throw new Error("Payment Secret Not set");
  const stripe = Stripe(STRIPE_SECRET_KEY);
  const customer = await stripe.customers.create({
    name,
    email,
  });
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "inr",
          product_data: {
            name: "test payment",
          },
          unit_amount: amount * 100,
        },
        quantity: 1,
      },
    ],
    customer: customer.id,
    mode: "payment",
    success_url: `${API_BASE}/success`,
  });
  res.json({ id: session.id });
}

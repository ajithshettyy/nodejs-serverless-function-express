import type { VercelRequest, VercelResponse } from "@vercel/node";

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
const STRIPE_PUBLISHABLE_KEY = process.env.STRIPE_PUBLISHABLE_KEY;

const stripe = require("stripe")(STRIPE_SECRET_KEY);
// import Stripe from "stripe";
// const stripe = new Stripe(STRIPE_SECRET_KEY, {
//   apiVersion: "2022-11-15",
//   typescript: true,
// });

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const customer = await stripe.customer.create({
      name: "test",
      email: "ajith.shettyy@gmail.com"
    })
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: {
              name: "test payment",
            },
            unit_amount: 1 * 100,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      customer: customer.id,
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
    });
    res.json({ id: session.id });
  } catch (err) {
    res.send(err);
  }
}

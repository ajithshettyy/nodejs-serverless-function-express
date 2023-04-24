import type { VercelRequest, VercelResponse } from "@vercel/node";

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
const STRIPE_PUBLISHABLE_KEY = process.env.STRIPE_PUBLISHABLE_KEY;

const stripe = require('stripe')(STRIPE_SECRET_KEY);
// import Stripe from "stripe";
// const stripe = new Stripe(STRIPE_SECRET_KEY, {
//   apiVersion: "2022-11-15",
//   typescript: true,
// });

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const token = await stripe.tokens.create({
      card: {
        number: "4242424242424242",
        exp_month: 4,
        exp_year: 2024,
        cvc: "314",
      },
    });
    res.json(token);
  } catch (err) {
    res.send(err);
  }
}

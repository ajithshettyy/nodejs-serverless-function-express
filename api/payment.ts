import type { VercelRequest, VercelResponse } from "@vercel/node";

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
const STRIPE_PUBLISHABLE_KEY = process.env.STRIPE_PUBLISHABLE_KEY;

import Stripe from "stripe";
const stripe = new Stripe(STRIPE_SECRET_KEY, {
  apiVersion: "2022-11-15",
  typescript: true,
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { body } = req;
  const {
    name = "Ajith",
    email = "ajith.shettyy@gmail.com",
    amount = "1",
  } = body;
  try {
    stripe.customers
      .create({
        name,
        email,
        source: STRIPE_PUBLISHABLE_KEY
      })
      .then(customer =>
        stripe.charges.create({
          amount: amount * 100,
          currency: "inr",
          customer: customer.id
        })
      )
      .then((paymentDone) => res.json(paymentDone))
      .catch(err => console.log(err));
  } catch (err) {
    res.send(err);
  }
}

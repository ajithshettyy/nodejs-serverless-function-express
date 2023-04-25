import type { VercelRequest, VercelResponse } from "@vercel/node";

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;

const stripe = require("stripe")(STRIPE_SECRET_KEY);

const API_BASE = "https://nodejs-serverless-function-express-psi-two.vercel.app/api/"

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const transactions = await stripe.issuing.tranactions();
    res.json(transactions);
  } catch (err) {
    res.send(err);
  }
}

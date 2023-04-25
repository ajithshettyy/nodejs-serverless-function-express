import type { VercelRequest, VercelResponse } from "@vercel/node";

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;

const stripe = require("stripe")(STRIPE_SECRET_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const transactions = await stripe.balanceTransactions.list(
      {
        limit: 100,
      },
    )
    return res.json(transactions);
  } catch (err) {
    res.send(err);
  }
}

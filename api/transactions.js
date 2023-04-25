const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;

const stripe = require("stripe")(STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  try {
    const { data } = await stripe.balanceTransactions.list({
      limit: 100,
    });
    const transactionData = data.map((dt) => ({
      id: dt.id,
      created: new Date(dt.created * 1000).toLocaleString(),
      status: dt.status,
      amount: dt.amount / 100,
    }));
    return res.json({ data: transactions | [] });
  } catch (err) {
    res.send(err);
  }
}

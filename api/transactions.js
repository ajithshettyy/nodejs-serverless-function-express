const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;

const stripe = require("stripe")(STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  try {
    const { data } = await stripe.balanceTransactions.list({
      limit: 100,
    });
    const transactionData = data.map((dt) => ({
      id: dt.id,
      created: dt.created * 1000,
      status: dt.status,
      amount: dt.amount / 100,
    }));
    return res.json({ data: transactionData });
  } catch (err) {
    res.send(err);
  }
}

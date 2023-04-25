export default function handler(req, res) {
  // Handle post success transactions
  res.send("Payment Successfull");
  return res.redirect(302, "https://react-payment-app.vercel.app/")
}

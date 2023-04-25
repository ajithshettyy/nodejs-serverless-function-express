export default function handler(req, res) {
  // Handle post success transactions
  return res.send(`<div style="text-align: center;margin-top: 10%;">
 <h1>Payment Successful</h1>
 <h1>Go back to <a href="">App</a></h1>
 </div>`);
  //return res.redirect(302, "https://react-payment-app.vercel.app/")
}

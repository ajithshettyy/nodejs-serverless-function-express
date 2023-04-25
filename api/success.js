const APP_LINK = "https://react-payment-app.vercel.app/";
export default function handler(req, res) {
  // Handle post success transactions
  return res.send(`<div style="text-align: center;margin-top: 10%;">
 <h1>Payment Successful</h1>
 Go back to <a href="${APP_LINK}">App</a>
 </div>`);
}

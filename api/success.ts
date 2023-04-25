import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(req: VercelRequest, res: VercelResponse) {
  return res.send("Payment Successfull");
  // return res.redirect(302, "https://react-payment-app.vercel.app/")
}

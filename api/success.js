export default function handler(req, res) {
  return res.sendFile(__dirname + "/api/view/success.html");
}

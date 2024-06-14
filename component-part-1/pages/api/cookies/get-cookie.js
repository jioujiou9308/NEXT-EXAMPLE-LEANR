export default function handler(req, res) {
  if (req.method === "GET") {
    const cookieValue = req.cookies;
    res.setHeader("Content-Type", "application/json");
    res.status(200).json({ cookieValue });
  } else {
    res.status(405).end();
  }
}

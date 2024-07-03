export default function handler(req, res) {
  const data = req.body;
  console.log("data", data);
  return res.status(200).json({ node_env: process.env.NODE_ENV });
}

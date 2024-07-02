export default function handler(req, res) {
  const data = req.query.query;
  console.log("data", data);
  if (data === "1") {
    return res.status(200).json({ message: "success" });
  } else {
    return res.status(409).json({ response: { status: 409, message: "something went wrong" } });
  }
}

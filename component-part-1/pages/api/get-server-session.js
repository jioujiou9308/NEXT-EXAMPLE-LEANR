import { getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]";

export default async function handler(req, res) {
  const session = await getServerSession(req, res);
  console.log("session in api", session);

  if (!session) {
    res.status(401).json({ error: "Unauthenticated user" });
    return;
  }

  // Authenticated requests
  res.status(200).json({
    message: "Protected route accessed",
  });
}

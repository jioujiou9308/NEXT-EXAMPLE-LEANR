import { Inter } from "@next/font/google";
import { signIn } from "next-auth/react";
import requestIp from "request-ip";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <button
        onClick={() => {
          signIn();
        }}
      >
        Login{" "}
      </button>
    </>
  );
}

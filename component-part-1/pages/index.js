import { Inter } from "@next/font/google";
import { signIn } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
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

import React, { useEffect } from "react";
import { NextPage } from "next";
import { useSession } from "next-auth/react";
import Router from "next/router";

const Protected: NextPage = () => {
  const session = useSession();
  console.log("session", session);
  useEffect(() => {
    if (session.status === "unauthenticated") {
      Router.push("/auth/signin");
    }
  }, [session.status]);

  if (session.status === "loading") return "Loading...";

  return (
    <div>
      This page is protected for special people
      <h1>{session.status === "authenticated" ? "登入狀態" : "未登入狀態"}</h1>
      <h1>{JSON.stringify(session?.data.user, null, 2)}</h1>
    </div>
  );
};

export default Protected;

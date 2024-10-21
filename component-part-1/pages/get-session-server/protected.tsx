import React, { useEffect } from "react";
import { NextPage } from "next";
import { useSession } from "next-auth/react";
import Router from "next/router";

const Protected: NextPage = () => {
  const { data, status, update } = useSession({
    required: true,
    onUnauthenticated: () => {
      Router.push("/auth/signin");
    },
  });
  // console.log("data", data);
  // console.log("status", status);
  // console.log("update", update);

  return (
    <div>
      This page is protected for special people
      <h1>{status === "authenticated" ? "登入狀態" : "未登入狀態"}</h1>
      <h1>{JSON.stringify(data?.user, null, 2)}</h1>
    </div>
  );
};

export default Protected;

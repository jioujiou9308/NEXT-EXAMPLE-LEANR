import React, { useEffect, useState } from "react";
import { getServerSession } from "next-auth/next";
import { useSession, getSession } from "next-auth/react";
import { getToken } from "next-auth/jwt";
import jwt from "jsonwebtoken";

export async function getServerSideProps(context) {
  const cookie = context.req.headers.cookie;
  const secret = process.env.NEXTAUTH_SECRET;

  const res1 = await fetch("http://localhost:3000/api/get-server-session");
  const result1 = await res1.json();
  console.log("result1", result1);

  // * getServerSession
  // const sessionInServer = await getServerSession(context.req, context.res);
  // console.log("sessionInServer", sessionInServer);

  // * get token in server side by fetch
  // const res = await fetch("http://localhost:3000/api/get-token");
  // console.log("res", res);
  //   const result = await res.json();
  //   console.log("result", result);

  // * get token in server side directly
  const token = await getToken({ req: context.req, raw: true });
  console.log("token", token);
  // const payload = jwt.verify(token, secret);
  // console.log(payload);

  // * getSession
  // const getSessionDataInServer = await getSession({ req: context.req });
  // console.log("getSessionDataInServer", getSessionDataInServer);

  return {
    props: {},
  };
}

const Index = ({ session }) => {
  // getSession()是一個promise物件，以下方法不是用，只能使用useEffect的方式
  // const getSessionDirect = getSession()
  // console.log("getSessionDirect", getSessionDirect);

  //  * 2
  // const [getSessionData, setGetSessionData] = useState();
  // useEffect(() => {
  //   const fetchSession = async () => {
  //     const session = await getSession();
  //     setGetSessionData(session);
  //   };

  //   fetchSession();
  // }, []);
  // console.log("getSessionData", getSessionData); //getSession只有expires，user的資料

  //  * 3
  const useSessionData = useSession();
  //   console.log("useSessionData", useSessionData);

  //   以下為useSession的資料
  //   {
  //     "data": {
  //         "user": {
  //             "name": "Wei",
  //             "email": "test@gmail.com"
  //         },
  //         "expires": "2024-10-28T09:07:49.029Z"
  //     },
  //     "status": "authenticated"
  // }
  return <div>Index</div>;
};

export default Index;

// https://stackoverflow.com/questions/69234170/difference-between-usesession-and-getsession-in-next-auth

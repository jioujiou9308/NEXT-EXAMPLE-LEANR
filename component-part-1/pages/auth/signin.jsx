import React from "react";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

const SignIn = () => {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const [userStatus, setUserStatus] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("click submit");
    const res = await signIn("credentials", {
      email: userInfo.email,
      password: userInfo.password,
      redirect: false,
    });
    console.log("res", res);
  };
  const { data: session, status } = useSession();
  const all = useSession();
  console.log('all', all)

  useEffect(() => {
    if (status === "authenticated") {
      setUserStatus(true);
    }
    if (status === "unauthenticated") {
      setUserStatus(false);
    }
  }, [session]);

  if (status === "loading") return <div>Loading...</div>;
  console.log("session", session);
  return (
    <>
      <div>
        <h1>展示登入和登出的狀態</h1>
        {!userStatus && <div>還沒登入喔</div>}
        {userStatus && (
          <div>
            <div>已經登入囉</div>
            <div>名稱 : {session.user.name}</div>
            <div>Email : {session.user.email}</div>
            <button onClick={signOut}>登出</button>
          </div>
        )}
      </div>
      <div className="sign-in-form">
        <br />
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={userInfo.email}
            onChange={(e) => {
              setUserInfo({ ...userInfo, email: e.target.value });
            }}
          />
          <br />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={userInfo.password}
            onChange={(e) => {
              setUserInfo({ ...userInfo, password: e.target.value });
            }}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};

export default SignIn;

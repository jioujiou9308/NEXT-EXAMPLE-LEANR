import React from "react";
import { useState } from "react";
import { signIn } from "next-auth/react";

const SignIn = () => {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });

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
  return (
    <div className="sign-in-form">
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
        <input type="submit" value={"Login"} />
      </form>
    </div>
  );
};

export default SignIn;

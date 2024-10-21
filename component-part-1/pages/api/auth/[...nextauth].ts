import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      // 可以在credentials裡面加入內建提供的使用方法
      // 如果想要使用內建的方法的話可以在後面的pages裡面使用自己建立的page
      credentials: {
        // email: { label: "內建Email~", type: "email" },
        // password: { label: "內建Password", type: "password" },
      },
      authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        //  perform you login logic
        // find out user from db
        if (email !== "test@gmail.com" || password !== "123") {
          throw new Error("帳號或密碼錯誤");
        }

        return { id: "1234", name: "Wei", email: "test@gmail.com" };
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
  // account 是針對第三方登入的資料
  // profile 也是針對第三方登入的資料

  // 如果沒有callback我們就沒有辦法在protected中看到token夾帶的相關資料(iat,exp,jti等等)
  callbacks: {
    async session({ session, token }) {
      session.user = token;
      token.aaabbb = "aaabbb";
      return session;
    },
    async jwt({ token, user, profile, account }) {
      // console.log("profile", profile);
      // console.log("account", account);
      // console.log("token", token);
      token.test = "test";
      return { ...token, ...user };
    },

    async signIn({ user, account, profile }) {
      // console.log("signIn", user, account, profile);
      return true;
    },
    // async redirect({ url, baseUrl }) {
    //   // Allows relative callback URLs
    //   console.log("url", url);
    //   console.log("baseUrl", baseUrl);
    //   if (url.startsWith("/")) return `${baseUrl}${url}`;
    //   // Allows callback URLs on the same origin
    //   else if (new URL(url).origin === baseUrl) return url;
    //   return baseUrl;
    // },
  },
  cookies: {},
  secret: "1234567890",
});

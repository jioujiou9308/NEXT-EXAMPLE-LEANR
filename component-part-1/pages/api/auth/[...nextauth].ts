import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      // 可以在credentials裡面加入內建提供的使用方法
      // 如果想要使用內建的方法的話可以在後面的pages裡面使用自己建立的page
      credentials: {
        email: { label: "內建Email~", type: "email" },
        password: { label: "內建Password", type: "password" },
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

        return { id: "1234", name: "Wei", email: "asdfasdfasdf" };
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
};

export default NextAuth(authOptions);

import { NextResponse } from "next/server";

//  * 可以設定多個
// export function middleware(req, res) {
//   console.log("req.nextUrl.pathname", req.nextUrl.pathname);
//   console.log("middleware");
//   if (req.nextUrl.pathname === "/middleware/path-1") {
//     let cookies = req.cookies.getAll()
//     console.log('cookies', cookies)
//   }
// }
// export const config = {
//   matcher: ["/middleware/path-1", "/middleware/path-2", "/middleware/path-3"],
// };

// ------------------------
// *設定單層或使用:path*
// export function middleware(req, res) {
//   console.log("req.url", req.url);

//   return NextResponse.redirect(new URL("/language", req.url));
// }

// // * 設定單層
// export const config = {
//   matcher: "/middleware/path-2",
// };

// ----------------------------------

// * 使用正則表達是
// export function middleware(req, res) {
//   const url = req.nextUrl;
//   console.log("req.url", url.pathname);

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
// };
// ----------------------------------

// * 條件式語句
//   ^ rewrite 雖然路徑一樣，但是內容會重新寫新的url裡面的內容
// export function middleware(req, res) {
//   const pathnameUrl = req.nextUrl.pathname;
//   if (pathnameUrl.startsWith("/middleware")) {
//     return NextResponse.rewrite(new URL("/", req.url));
//   }

//   if (pathnameUrl === "/middleware/path-1") {
//     return NextResponse.rewrite(new URL("/language", req.url));
//   }
// }

// -------------------------
//  * cookie method
// export function middleware(req, res) {
//   // ^ 取得cookies的方法
//   let allCookies = req.cookies.getAll();
//   let cookies = req.cookies.get("next-js"); //沒有就返回undefined

//   // ^ 設置cookies的方法 1
//   req.cookies.set("next-js", "next-value");
//   let nextCookie = req.cookies.get("next-js"); //{ name: 'next-js', value: 'next-value' }

//   // ^ 設置cookies的方法2
//   const response = NextResponse.next(); // 回傳的是一個物件
//   response.cookies.set("vercel", "vercel-value");
//   const vercelCookie = response.cookies.get("vercel"); //{ name: 'vercel', value: 'vercel-value', path: '/' }

//   return response;
// }
// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
// };

// // 設定cookies方法1 與方法2的差別
// // req.cookies.set：用于在请求生命周期内临时设置或修改 cookies，不会持久化到客户端。这在某些内部逻辑处理中可能有用，但大多数情况下不会单独使用。
// // response.cookies.set：用于在响应中设置 cookies 并发送回客户端，是持久化 cookies 的正确方式。
// -------------------------

// * 設定 header
// export function middleware(req, res) {
//   // ^ 在website上面的header裡面 - 看不到
//   const requestHeaders = new Headers(req.headers);
//   requestHeaders.set("x-hello-from-middleware1", "hello");

//   const response = NextResponse.next({
//     request: {
//       headers: requestHeaders,
//     },
//   });
//   // ^ 在website上面的header裡面 - 看的到
//   response.headers.set("x-hello-from-middleware2", "hello");
//   return response;
// }
// -------------------------

// * 設定CORS
// const allowedOrigins = ["http://localhost:3000"];

// const corsOptions = {
//   "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
//   "Access-Control-Allow-Headers": "Content-Type, Authorization",
// };
// export function middleware(req, res) {
//   // Check the origin from the request
//   const origin = req.headers.get("origin") ?? "";
//   const isAllowedOrigin = allowedOrigins.includes(origin);

//   // Handle simple requests
//   const response = NextResponse.next();

//   Object.entries(corsOptions).forEach(([key, value]) => {
//     response.headers.set(key, value);
//   });

//   return response;
// }

// export const config = {
//   matcher: "/api/:path*",
// };
// ! Q1: 為什麼我設定了少了GET的時候我在path-2設定的fetch還是會成功拿到資料
// ---------------------------------------------------------------

export function middleware(req,event){}


// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
// };

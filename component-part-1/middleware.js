// export function middleware(req, res) {
//   console.log("req.nextUrl.pathname", req.nextUrl.pathname);
//   console.log("middleware");
//   if (req.nextUrl.pathname === "/middleware/path-1") {
//     let cookies = req.cookies.getAll()
//     console.log('cookies', cookies)
//   }
// }

//  * 可以設定多個
// export const config = {
//   matcher: ["/middleware/path-1", "/middleware/path-2", "/middleware/path-3"],
// };

// ------------------------
import { NextResponse } from "next/server";
export function middleware(req, res) {
  console.log("req.url", req.url);

  return NextResponse.redirect(new URL("/language", req.url));
}

// * 設定單層
export const config = {
  matcher: "/middleware/path-2",
};

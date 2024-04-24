// import type { NextRequest } from "next/server";
// import { NextResponse } from "next/server";

// export function middleware(req: NextRequest) {
//   console.log("middleware", req.cookies.get("userId"));
//   if (!req.cookies.get("userId") && !req.url.includes("/login")) {
//     return NextResponse.redirect("/login");
//   } else {
//     return NextResponse.next();
//   }
// }

// export const config = {
//   matcher: ["/users/:path*"],
// };

import { NextResponse } from "next/server";
import isAuthValid from "./lib/isAuthValid";

export const middleware = async (req) => {
  const jwtToken = req.cookies.get("Auth")?.value;

  const verifiedToken =
    jwtToken &&
    (await isAuthValid(jwtToken).catch((err) => {
      console.log(err, "err");
    }));

  if (
    req.nextUrl.pathname.startsWith("/signup") &&
    req.nextUrl.pathname.startsWith("/login") &&
    !verifiedToken
  ) {
    return;
  }

  if (req.url.includes("/signup") && verifiedToken) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (!verifiedToken) {
    return NextResponse.redirect(new URL("/signup", req.url));
  }
};

export const config = {
  matcher: "/checkout",
};

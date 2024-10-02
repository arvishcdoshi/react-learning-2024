import { NextResponse, type NextRequest } from "next/server";

// export function middleware(request: NextRequest) {
//     return NextResponse.redirect(new URL("/", request.url))
// }

// export const config = {
//     matcher: "/profile",

// }

// IN ABOVE CODE, WE'VE CONFIGURED THE MIDDLEWARE USING THE MATCHER CONFIG APPROACH.


// MIDDLEWARE CONFIGURATION USING CONDITIONAL STATEMENTS
export function middleware(request: NextRequest) {
    if (request.nextUrl.pathname === "/profile") {
        return NextResponse.redirect(new URL("/hello", request.url))
    }
}


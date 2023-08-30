import { redirect } from "next/navigation";
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";


export async function middleware(req, res){

    //redirect
    // if (req.nextUrl.pathname === "/api/redirect") {
    //     // return NextResponse.redirect(new URL("/about", req.url));
    //     redirect('/')
    // }

}

//where middleware wiill work
// export const config = {
//     matcher: '/:path*'
// }
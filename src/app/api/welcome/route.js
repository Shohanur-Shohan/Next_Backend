import { NextRequest } from "next/server";
import { NextResponse } from "next/server";



export async function GET(req, res) {

    return NextResponse.json({
        "message": "Welcome to our Api!",
        "version": "1.0"
        
    })
}
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { Headers } from 'next/headers';
import { redirect } from "next/navigation";

export async function GET(req, res) {

    return NextResponse.json({
        "message": "Welcome to our Api!",
        "version": "1.0"
        
    })
}
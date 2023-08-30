import { redirect } from "next/navigation";
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";


export async function GET(req, res){
    
   redirect('/about')

}
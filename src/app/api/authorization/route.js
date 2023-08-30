import { NextRequest } from "next/server";
import { NextResponse } from "next/server";



export async function POST(req, res) {

    return NextResponse.json({
        "token": "Djoerig48ijruitigjiuriuitruiIURIghgiurrjfgiorugjifh",
        "USERNAME": "shohan",
        "PASSWORD": "shohan123",
        "expirationTime": 1691575099012,
        
    }, {status: 200})
}
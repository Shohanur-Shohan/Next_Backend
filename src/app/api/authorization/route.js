import { NextRequest } from "next/server";
import { NextResponse } from "next/server";



export async function GET(req, res) {

    return NextResponse.json({
        "token": "Djoerig48ijruitigjiuriuitr",
        "USERNAME": "shohan",
        "PASSWORD": "shohan123",
        "expirationTime": 1691575099012,
        
    }, {status: 200})
}


'use client'
import { useState } from "react";


export default function Authorization(){

    const [Token, setToken] = useState("")


        const  addBearerToken = async () => {
            const res = await  fetch("http://localhost:3000/api/authorization")
            const json = await res.json()
            setToken(json.token)
            console.log(json.token)
       };

   



    return (
        <div className="mt-10 text-center">
            <button onClick={addBearerToken} className="w-[200px] btn btn-success mb-2">Click to Authorize</button>
            <p className="text-red-400">
                {
                    
                    Token === "Djoerig48ijruitigjiuriuitr" ? " Authorized" :" Not Authorized"
                }
            </p>

           
        </div>
    )
}
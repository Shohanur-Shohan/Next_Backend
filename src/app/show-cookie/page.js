'use client'
import Cookies from "js-cookie";
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { StrictMode } from "react";

export default function ShowCookie() {


  //  add cookies
  const SetCookie = () => {
    Cookies.set("theme", "dark", {
      expires: 7,
      secure: true,
      sameSite: "Strict",

    });
  };


  const GetCookie = () => {
    // alert(Cookies.get("theme"));
    const theme = Cookies.get("theme")
    alert("Theme "+ theme)

  };

  return (
    <div className="justify-around mt-10 text-center">

      <button onClick={SetCookie} className="mt-20 mr-1 btn btn-neutral">Set Cookie</button>
      <button onClick={GetCookie} className="mt-20 ml-1 btn btn-neutral">Get Cookie</button>
    </div>
  );
}



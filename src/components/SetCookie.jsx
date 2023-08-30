'use client'
import Cookies from "js-cookie";
import Link from "next/link";


export default function SetCookie() {


  //  add cookies
  const SetCookie = () => {
    Cookies.set("theme", "dark", {
      expires: 7,
      secure: true,
      sameSite: "Strict",

    });
  };

  return (
    <div className='h-screen text-center'>
      <Link href={'/show-cookie'}>
            <button onClick={SetCookie} className="mt-20 btn btn-neutral">Set Cookie</button>
        </Link>

    </div>
  )
}
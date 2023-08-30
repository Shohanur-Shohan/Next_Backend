'use client'
import Link from "next/link";


export default function SetCookie() {

  return (
    <div className='h-screen text-center'>
      <Link href={'/show-cookie'}>
            <button className="mt-20 btn btn-neutral">Cookie Page</button>
        </Link>

    </div>
  )
}
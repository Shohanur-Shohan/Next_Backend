
import  cookie  from 'js-cookie'

export default function GetCookie() {
  const cookieStore = cookie()
  const theme = cookieStore.get()
  return (
    <div>
        {theme}
    </div>
  )
}



// import { cookies } from 'next/headers'
 
// export default function Page() {
//   const cookieStore = cookies()
//   return cookieStore.getAll().map((cookie) => (
//     <div key={cookie.length}>
//       <p>Name: {cookie.token}</p>
//     </div>
//   ))
// }
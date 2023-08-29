import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

export  default  function  About(){
    return (
        <div>
            <h2>About us</h2>
            {
                process.env.KEY
            }
        </div>
    )
}
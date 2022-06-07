import Head from "next/head";
// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import { useEffect } from "react"

import "/styles/globals.css";
function MyApp({ Component, pageProps }) {
   useEffect(() => {
      import("bootstrap/dist/js/bootstrap");
    }, []);
return (
<>
<Head>
   <meta name="viewport" content="width=device-width, initial-scale=1" />
</Head>
<Component {...pageProps} />

</>
);
}
export default MyApp;
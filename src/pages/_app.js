import Head from "next/head";
import { Fragment } from "react";

import "../styles/tailwind.css";

function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        
        <title>Haven</title>

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
        />
        
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
        />

        <link
          rel="stylesheet"
          href="https://use.typekit.net/hkl8uis.css"
        />

        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.15.1/css/all.css"
        />

        

      </Head>
      <Component {...pageProps} />
    </Fragment>
  )
}

export default App;
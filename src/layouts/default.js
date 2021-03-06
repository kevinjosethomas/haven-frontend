import Head from "next/head";
import { Fragment } from "react";

import { Footer } from "../components/Footer";

export const Default = (props) => {
  return (
    <Fragment>
      <Head>
        <link
          rel="stylesheet"
          href="https://use.typekit.net/zzw7qmn.css"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;400;500;600;700;800;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        />
      </Head>
      <div className="flex flex-col items-center justify-start w-screen h-screen">
        <div className="flex flex-col items-center justify-center w-screen h-full bg-dark-100">
          {props.children}
        </div>
        <Footer></Footer>
      </div>
    </Fragment>
  )
}
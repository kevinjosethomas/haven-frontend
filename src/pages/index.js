import Head from "next/head";

import { Default } from "../layouts/default";

const Home = (props) => {
  return (
    <Default>
         <Head>
        <meta name="description" content="ReactJS and NextJS frontend template for my projects, maybe you could use it too!" />
        <meta name="author" content="TrustedMercury" />

        <meta name="title" content="React Next Template" />
        <meta property="og:title" content="React Next Template" />
        <meta property="og:description" content="ReactJS and NextJS frontend template for my projects, maybe you could use it too!" />
        <meta property="twitter:title" content="React Next Template" />
        <meta property="twitter:description" content="ReactJS and NextJS frontend template for my projects, maybe you could use it too!" />
      </Head>
    </Default>
  )
}

export default Home;
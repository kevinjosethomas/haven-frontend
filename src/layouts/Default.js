import { useState } from "react";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";

import { Banner } from "../components/global/Banner";
import { Navbar } from "../components/global/Navbar";

export const Layout = props => {

  const router = useRouter();
  const [bannerStatus, setBannerStatus] = useState(true);

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <AnimatePresence>
        { bannerStatus && (
        <Banner
          icon="twa twa-sparkles"
          label="Join Discord"
          href="https://discord.haven.bio"
          message="Haven is currently under development, join our Discord server to keep in touch and win some giveaways!"
          setBannerStatus={setBannerStatus}
        />
      )}
      </AnimatePresence>
      <Navbar home={router.pathname == "/"} />
      { props.children }
    </div>
  )

}

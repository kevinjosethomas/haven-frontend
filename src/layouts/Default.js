import { useRouter } from "next/router";

import { Banner } from "../components/global/Banner";
import { Navbar } from "../components/global/Navbar";

export const Layout = props => {

  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Banner
        icon="twa twa-sparkles"
        label="Join Discord"
        href="https://discord.haven.bio"
        message="Haven is currently under development, join our Discord server to keep in touch and win some giveaways!"
      />
      <Navbar home={router.pathname == "/"} />
      { props.children }
    </div>
  )

}

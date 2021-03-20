import { useRouter } from "next/router";

import { Navbar } from "../components/global/Navbar";

export const Layout = props => {

  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Navbar home={router.pathname == "/"} />
      { props.children }
    </div>
  )

}

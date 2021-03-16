import { useRouter } from "next/router";

import { Navbar } from "../components/global/Navbar";

export const Layout = props => {

  const router = useRouter();

  return (
    <div className="overflow-x-hidden">
      <Navbar home={router.pathname === "/" || props.hideBg} />
      { props.children }
    </div>
  )

}

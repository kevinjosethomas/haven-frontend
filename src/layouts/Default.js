import { useRouter } from "next/router";

import { Navbar } from "../components/Navbar";

export const Layout = props => {

  const router = useRouter();

  return (
    <div className="overflow-x-hidden">
      <Navbar home={router.pathname === "/"} />
      { props.children }
    </div>
  )

}

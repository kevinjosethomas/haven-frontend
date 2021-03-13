import { useRouter } from "next/router";

import { Navbar } from "../components/Navbar";

export const Layout = props => {

  const router = useRouter();

  return (
    <div>
      <Navbar home={router.pathname === "/"} />
      { props.children }
    </div>
  )

}

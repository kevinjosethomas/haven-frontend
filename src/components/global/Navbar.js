import Link from "next/link";
import { motion } from "framer-motion";

import { Logo } from "./Logo";
import { NavbarButtonHover } from "../../utility/animations/global";

export const Navbar = ({ props, home }) => {

  return (
    <nav className={`flex flex-row items-center justify-between px-24 py-4 ${home ? "" : "bg-blue-500"}`}>
      <div className="flex flex-row items-center justify-start">
        <Logo
          color="white"
          type="wordmark"
          width="w-40 lg:w-44"
          href="/"
        />
      </div>
      <div className="flex flex-row items-center justify-end space-x-4">
        <Button
          label="Login"
          width="w-24 lg:w-28"
          href="/login"
          bgColor="gray-300"
          hoverBgColor="gray-400"
        />
        <Button
          label="Sign Up"
          width="w-28 lg:w-36"
          href="/register"
          bgColor="blue-400"
          hoverBgColor="blue-500"
        />
      </div>
    </nav>
  );

}

export const Button = props => {

  return (
    <Link href={props.href}>
      <motion.div
        className={`flex flex-row justify-center items-center py-2 ${props.width} rounded
        bg-${props.bgColor} hover:bg-${props.hoverBgColor} transition duration-300 cursor-pointer`}
        whileHover="hover"
      >
        <span className="font-inter font-semibold text-lg lg:text-xl text-white">{props.label}</span>
        <motion.i
          className={`far fa-angle-right text-md lg:text-lg text-white pl-2`}
          initial="initial"
          variants={NavbarButtonHover}
        />
      </motion.div>
    </Link>
  )

}

import Link from "next/link";
import { motion } from "framer-motion";

import { NavbarButtonHover } from "../../utility/animations/global";


export const Navbar = ({props, home}) => {
  return (
    <nav className={`flex flex-row items-center justify-between px-24 py-4 ${home ? "" : "bg-blue-500"}`}>
      <div className="flex flex-row items-center justify-start">
        <Link href="/">
          <img
            alt="Haven Logo"
            src="/images/wordmark-white.svg"
            className="w-44"
          />
        </Link>
      </div>
      <div className="flex flex-row items-center justify-end">
        <Link href="/login">
          <motion.div
            className="flex flex-row justify-center items-center mr-2 px-5 py-2 w-28 rounded transition duration-300 bg-gray-300 hover:bg-gray-400 cursor-pointer"
            whileHover="hover"
          >
            <span className="font-inter font-semibold text-xl text-white">Login</span>
            <motion.i
              className="far fa-angle-right text-lg text-white pl-2"
              initial="initial"
              variants={NavbarButtonHover}
            />
          </motion.div>
        </Link>
        <Link href="/register">
          <motion.div
            className="flex flex-row justify-center items-center ml-2 px-5 py-2 w-36 rounded transition duration-300 bg-blue-400 hover:bg-blue-500 cursor-pointer"
            whileHover="hover"
          >
            <span className="font-inter font-semibold text-xl text-white">Sign Up</span>
            <motion.i
              className="far fa-angle-right text-lg text-white pl-2"
              initial="initial"
              variants={NavbarButtonHover}
            />
          </motion.div>
        </Link>
      </div>
    </nav>
  )
}

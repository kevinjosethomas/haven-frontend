import Image from "next/image";
import Link from "next/link";

import {Logo, Button} from "../components/Utility";


export const Navbar = ({props, home}) => {
  return (
    <nav className={`flex flex-row items-center justify-between ${home ? "" : "bg-blue-500"} mt-4`}>
      <div className="flex flex-row items-center justify-start z-10 ml-10">
        <Logo type="wordmark" color="white" width={219} href="/" />
      </div>
      <div className="flex flex-row items-center justify-end z-10 mr-10">
        <Button href="/log-in" type="home" color="light-200" textColor="white" textSize="lg" textType="semibold" extra="mr-3">
          <span>Log In</span>
        </Button>
        <Button href="/sign-up" type="home" color="blue-400" textColor="white" textSize="lg" textType="semibold" extra="mr-4">
          <span>Sign Up <i className="fas fa-chevron-right text-base" /></span>
        </Button>
      </div>
    </nav>
  )
}

/*
        
        <div className="flex flex-row justify-center bg-blue-400 rounded-hm z-10 hover:bg-blue-500 mr-4 px-5 py-1.5">
          <Link href="#">
            <a>
              <span className="font-inter font-semibold text-center select-none text-white text-lg">Sign Up</span>
              <i className="fas fa-angle-right text-lg text-white pl-2" />
            </a>
          </Link>
        </div>
*/
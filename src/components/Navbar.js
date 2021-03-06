import Image from "next/image";
import Link from "next/link";


export const Navbar = ({props, home}) => {

  return (
    <nav className={`flex flex-row items-center justify-between ${home ? "" : "bg-blue-500"} top-0`}>
      <div className="flex flex-row items-center justify-start z-10 ml-10">
        <Link href="/"><a>
          <Image
            alt="Haven Logo"
            src="/images/logo-wordmark-white.svg"
            width={219}
            height={70}
            layout="intrinsic"
          />
        </a></Link>
      </div>
      <div className="flex flex-row items-center justify-end z-10 mr-10">
        <div className="flex flex-row justify-center bg-light-200 rounded-hm z-10 hover:bg-light-300 mr-4 px-5 py-1.5">
          <Link href="#">
            <a>
              <span className="font-inter font-semibold text-center select-none text-white text-lg">Log In</span>
            </a>
          </Link>
        </div>
        <div className="flex flex-row justify-center bg-blue-400 rounded-hm z-10 hover:bg-blue-500 mr-4 px-5 py-1.5">
          <Link href="#">
            <a>
              <span className="font-inter font-semibold text-center select-none text-white text-lg">Sign Up</span>
              <i className="fas fa-angle-right text-lg text-white pl-2" />
            </a>
          </Link>
        </div>
      </div>
    </nav>
  )
}
import Image from "next/image";
import Link from "next/link";


export const Navbar = ({props, home}) => {

  return (
    <nav>
      {home ? (<></>) : (
          <>
            <div className="absolute bg-no-repeat bg-blue-500 w-full h-20 z-0 top-0"/>
          </>
        )}
      <div className=" flex flex-row items-center justify-between top-0">
        <div className="flex flex-row items-center justify-start z-10 ml-10">
          <Link href = "/"><a>
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
          <button className="flex justify-center px-5 py-1.5 bg-gray-300 z-10 rounded mr-4 hover:bg-gray-400 active:bg-gray-200 focus:outline-none">
            <span className="font-inter font-semibold text-center select-none text-white text-lg">Log In</span>
            
          </button>
          <button className="flex justify-center px-5 py-1.5 bg-blue-350 z-10 rounded mr-4 hover:bg-blue-450 active:bg-blue-300 focus:outline-none">
            
            <span className="font-inter font-semibold text-center select-none text-white text-lg">Sign Up</span>
            <i className="fas fa-angle-right text-lg text-white pl-2"/>
          </button>
        </div>
      </div>
    </nav>
  )
}

/**/
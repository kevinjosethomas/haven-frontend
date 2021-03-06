import Image from "next/image";

import { Navbar } from "../components/Navbar";

const Index = (props) => {

  return (
    <div>
      <Navbar home/>
      <div className="flex flex-row items-center justify-end mb-2">
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex flex-col items-start justify-center">
            <i className="fas fa-key text-10xl text-dark-200" />
            <span className="max-w-min font-acumin font-bold text-10xl text-dark-200 select-none">Express yourself.</span>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center min-w-max">
          <Image
            alt="Super Cool Image"
            src="/images/landing-illustration.svg"
            width={880}
            height={820}
            layout="intrinsic"
          />
        </div>
        <div className="bg-home absolute inset-0 bg-gradient-to-tr from-blue-500 to-blue-400">

        </div>
      </div>
    </div>
  )

}

export default Index;

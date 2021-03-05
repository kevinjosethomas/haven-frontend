import Image from "next/image";

import { Navbar } from "../components/Navbar";

const Index = (props) => {

  return (
    <div>
      <Navbar />
      <div className="flex flex-row items-center justify-end">
        <div className="flex flex-col items-center justify-center w-full">
          <span>Express yourself.</span>
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
        <div className="bg-home absolute inset-0 bg-blue-500">

        </div>
      </div>
    </div>
  )

}

export default Index;

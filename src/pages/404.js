import Link from "next/link";
import { motion } from "framer-motion";

import { Layout } from "../layouts/Default";
import { HomeButtonHover } from "../utility/animations/global";

const PreLaunch404 = (props) => {

    return (
        <Layout>
            <div className="flex flex-col hbg absolute w-full h-full bg-light-100 bg-opacity-70 overflow-hidden" />
            <div className="flex flex-row w-full h-full justify-end mt-10 over overflow-hidden">
                <div className="justify-start mt-32">
                    <div>
                        <h1 className="font-acumin font-semibold text-dark-100 text-left sm:text-2xl md:text-4xl lg:text-6xl xl:text-8xl 2xl:text-10xl">404</h1>
                        <div className="flex flex-col font-acumin font-semibold text-dark-100 text-left mt-10">
                            <span>meme text here</span>
                        </div>
                    </div>
                    <Link href="/">
                        <motion.div
                            className="flex flex-row justify-start items-center mt-10 px-5 py-2.5 w-44 rounded transition duration-300 bg-blue-400 hover:bg-blue-500 cursor-pointer"
                            whileHover="hover"
                        >
                            <motion.i
                            className="far fa-home text-lg text-white pr-2"
                            initial="initial"
                            variants={HomeButtonHover}
                            />
                            <span className="font-inter font-semibold text-xl text-white">Back home</span>
                        </motion.div>
                    </Link>
                </div>
                <div className="flex flex-row items-center justify-end -mt-40 ml-60">
                    <img
                        draggable="false"
                        alt="Close your eyes and think of the weirdest image you could think of. Now, try to imagine the image here"
                        src="/images/404.png"
                    />
                </div>
            </div>
        </Layout>
      );

  }
  
  export default PreLaunch404;
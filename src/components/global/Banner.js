import { motion } from "framer-motion";

import { BannerSlide } from "../../utility/animations/global";

export const Banner = props => {
  
  return (
    <motion.div
      className="flex flex-col md:flex-row items- justify-center md:justify-between px-10 md:px-24 xl:px-28 2xl:px-32 h-40 md:h-24 w-full overflow-hidden bg-blue-500"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={BannerSlide}
    >
      <div className="flex flex-row items-center justify-start mb-2 md:mb-0">
        <div className="flex flex-col items-center justify-center p-3 mr-2 bg-blue-600 rounded">
          <i className={`${props.icon} text-2xl`} />
        </div>
        <div className="flex flex-row items-center justify-start ml-2 md:max-w-xs lg:max-w-lg xl:max-w-6xl">
          <p className="font-inter font-medium text-xs md:text-sm lg:text-md 2xl:text-lg 3xl:text-xl text-gray-100">{ props.message }</p>
        </div>
      </div>
      <div className="flex flex-row items-center justify-end mt-2 md:mt-0 self-auto">
        <a
          className="flex flex-row items-center justify-center w-full mr-2 py-3 px-5 bg-gray-100 rounded transition transform duration-300 hover:scale-105"
          href={props.href}
          target="_blank"
        >
          <p className="font-inter font-semibold text-sm md:text-md 2xl:text-lg text-blue-500">{ props.label }</p>
        </a>
        <div
          className="flex flex-col items-center justify-center ml-2 py-2 px-4 transition duration-300 hover:bg-blue-600 rounded cursor-pointer"
          onClick={() => props.setBannerStatus(false)}
        >
          <i className="far fa-times text-2xl text-gray-100" />
        </div>
      </div>
    </motion.div>
  )

}

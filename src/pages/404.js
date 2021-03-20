import Link from "next/link";
import { motion } from "framer-motion";

import { Layout } from "../layouts/Other";

const _404 = props => {

  return (
    <Layout>
      <div className="flex flex-row items-center justify-center w-full h-full bg-light-200">
        <div className="flex flex-col items-start justify-center mr-20">
          <div className="flex flex-col items-start justify-center mb-5 max-w-2xl">
            <span className="font-acumin font-semibold text-11xl text-gray-700">404</span>
            <p className="mb-2 font-acumin font-bold text-6xl text-gray-700 ">Looks like you've lost da wae</p>
            <a
              className="my-2 font-inter font-medium text-2xl text-gray-600"
              href="https://youtu.be/THbY7EL8k5w"
              target="_blank"
            >
              Follow the yellow brick road, the yellow brick road...<br />
              You're off to see the Wizard, the Wonderful Wizard of Oz
            </a>
            <p className="mt-2 font-inter font-bold text-xl text-gray-700">
              The page you're looking for might've been moved or deleted <span className="line-through">or maybe we were just too lazy to make it</span>
            </p>
          </div>
          <Link href="/">
            <div className="flex flex-row justify-center items-center mt-5 py-5 w-full rounded bg-yellow-500 hover:bg-yellow-600
            transition duration-300 cursor-pointer">
              <i className="far fa-home text-2xl text-white pr-2" />
              <span className="font-inter font-semibold text-2xl text-white">Head back home</span>
            </div>
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center ml-20 space-y-8">
          <img
            className="w-96"
            alt="Close your eyes and think of the weirdest image you could think of. Now, try to imagine the image here"
            src="/images/404-spongebob.svg"
            draggable="false"
          />
          <p className="font-inter font-medium text-lg text-gray-600">
            Spongebob by {" "}
            <a
              className="font-semibold text-gray-700 underline"
              href="https://www.deviantart.com/rainbowyosh123"
              target="_blank"
            >rainbowyosh123</a>
          </p>
        </div>
      </div>
    </Layout>
  );

}
  
  export default _404;
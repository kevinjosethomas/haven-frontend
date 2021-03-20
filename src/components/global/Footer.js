import Link from "next/link";

import { Socials, Links } from "../../utility/data/footer";

export const Footer = props => {

  return (
    <div className="flex flex-col items-center justify-center px-4 md:px-0 md:space-y-6 xl:space-y-10 h-80 xl:h-footer bg-light-200">
      <div className="flex flex-row items-center justify-center my-6 md:my-0 order-2 md:order-none space-x-6 md:space-x-12">
        { Socials.map(item => (
          <Social
            key={item.icon}
            icon={item.icon}
            href={item.href}
          />
        )) }
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center order-1 md:order-none space-y-1 md:space-y-0 md:space-x-6">
        { Links.map(item => (
          <Label
            key={item.label}
            label={item.label}
            href={item.href}
          />
        )) }
      </div>
      <p
        className="order-3 md:order-none font-inter font-semibold text-xl lg:text-2xl xl:text-3xl text-gray-500 text-center"
      >
        developed by {" "}
        <a
          className="font-bold text-gray-600"
          href="https://codebyte.team"
          target="_blank"
        >teamcodebyte</a> and our {" "}
        <a
          className="font-bold text-gray-600"
          href="https://github.com/teamcodebyte"
          target="_blank"
        >opensource community</a>
      </p>
    </div>
  );

}

export const Social = props => {

  return (
    <a
      target="_blank"
      href={props.href}
    >
      <i className={`${props.icon} text-3xl lg:text-4xl xl:text-5xl text-gray-500 hover:text-gray-600 transition duration-300`} />
    </a>
  );

}

export const Label = props => {

  return (
    <Link
      href={props.href}
    >
      <a className="font-inter font-bold text-xl lg:text-2xl xl:text-3xl text-gray-500 hover:text-gray-600 transition duration-300">{props.label}</a>
    </Link>
  );

}


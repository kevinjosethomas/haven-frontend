import Link from "next/link";

import { Socials, Links } from "../../utility/data/footer";

export const Footer = props => {

  return (
    <div className="flex flex-col items-center justify-center space-y-10 h-footer bg-light-200">
      <div className="flex flex-row items-center justify-center space-x-12">
        { Socials.map(item => (
          <Social
            key={item.icon}
            icon={item.icon}
            href={item.href}
          />
        )) }
      </div>
      <div className="flex flex-row items-center justify-center space-x-6">
        { Links.map(item => (
          <Label
            key={item.label}
            label={item.label}
            href={item.href}
          />
        )) }
      </div>
      <p
        className="font-inter font-semibold text-3xl text-gray-500"
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
      <i className={`${props.icon} text-5xl text-gray-500 hover:text-gray-600 transition duration-300`} />
    </a>
  );

}

export const Label = props => {

  return (
    <Link
      href={props.href}
    >
      <a className="font-inter font-bold text-3xl text-gray-500 hover:text-gray-600 transition duration-300">{props.label}</a>
    </Link>
  );

}


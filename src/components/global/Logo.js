import React from "react";
import Link from "next/link";

export const Logo = (props) => {

  let image = (
    <img
      draggable="false"
      alt="Welp, our logo should be here"
      src={`/images/logos/${props.type}-${props.color}.svg`}
      className={`${props.width} ${props.href ? "cursor-pointer" : ""}`}
    />
  )

  if (props.href) {
    image = (
      <Link href={props.href}>
        {image}
      </Link>
    )
  }

  return image;
}

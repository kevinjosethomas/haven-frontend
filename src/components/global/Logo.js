import Image from "next/image";
import Link from "next/link";
import React from "react";

// ----- Logo ----- 
// Usage:
// <Logo type="mark | word | wordmark" color="white | black" width={num} [href="link"] />

export const Logo = (props) => {
  if(props == undefined) return (<span>Haven Logo here! - This component needs to be set up</span>);
  let type, color, width, height;
  if(props.type == "mark" || props.type == "word" || props.type == "wordmark") type = props.type; else type = "mark";
  if(props.color == "white" || props.color == "black") color = props.color; else color = "black";
  if(props.size != undefined) width = (props.width); else width = 150;
  if(type == "mark"){
    height = width
  } else if(type == "word"){
    height = (width * (182 / 678))
  } else if(type == "wordmark"){
    height = (width * (227 / 896))
  }
  let image = (
            <Image
              alt="Haven Logo"
              src={`/images/logos/${type}-${color}.svg`}
              width={width}
              height={height}
              layout="intrinsic"
              draggable="false"
            />
          )
  if(props.href != undefined) {
    image = (<Link href={props.href}><a draggable="false">{image}</a></Link>)
  }
  return image;
}

// ----- Buttons -----
// Usage:
// <Button href="link" type="home | ..." color="tailwind color" [hoverColor="tailwind color"] textColor="tailwind color" [hovertextColor="tailwind color"] textsize="<tailwind text size>" [font="font"] [texttype="<tailwind text type>"] [rounded="none | hs | hl" (Defualts to hm)] [px="num"] [py="num"] [extra="tailwind styles"]>
//  <span>text <i className="fas fa-angle-right" /></span>
// </Button
import { paddingSizes, textToRem } from "../../utility/data/button";

// ----- Buttons -----
// Usage:
// <Button href="link" type="home | ..." color="tailwind color" [hoverColor="tailwind color"] textColor="tailwind color" [hovertextColor="tailwind color"] textsize="<tailwind text size>" [font="font"] [texttype="<tailwind text type>"] [rounded="none | hs | hl" (Defualts to hm)] [px="num"] [py="num"] [extra="tailwind styles"]>
//  <span className="text-white text-2xl">text <i className="fas fa-angle-right" /></span>
// </Button

export const Button = (props) => {

  let link, type, color, hoverColor, textColor, hovertextColor, size, font, ttype, rounded, extra, px, py, textSize;

  if (props.textSize == undefined) textSize = "lg"; else textSize = props.textSize;

  let textSizeRem = textToRem[props.textSize]
  if (props.href == undefined) link = "/"; else link = props.href;
  if (props.type == undefined) type = "home"; else type = props.type;

  if (type = "home") {
    if(props.color == undefined) color = "blue-400"; else color = props.color;
    if(props.hoverColor == undefined) hoverColor = (color.substr(0, color.length - 3) + (Number(color.substr(color.length - 3, 1)) + 1) + color.substr(color.length - 2, 2)); else hoverColor = props.hoverColor;
    if(props.textColor == undefined) textColor = (color.substr(0, 5) + (Number(color.substr(5, 1)) - 1) + color.substr(6, 2)); else textColor = props.textColor;
    if(props.hovertextColor == undefined) hovertextColor = textColor; else hovertextColor = props.hovertextColor;
    if(props.textSize == undefined) size = "lg"; else size = props.textSize;
    if(props.font == undefined) font = "inter"; else font = props.font;
    if(props.textType == undefined) ttype = "normal"; else ttype = props.textType;
    if(props.rounded == undefined) rounded = "hm"; else rounded = props.rounded;
    if(props.extra == undefined) extra = ""; else extra = " " + props.extra;

    let padx = textSizeRem * 1, pady = textSizeRem / 3;
    px = 0, py = 0;
    if(props.px == undefined) {
      for(let psize in paddingSizes) {
        if(Math.abs(padx - paddingSizes[psize]) <= Math.abs(px - padx)){
          px = paddingSizes[psize];
        } else break;
      }
    } else px = props.px
    if(props.py == undefined) {
      for(let psize in paddingSizes) {
        if(Math.abs(pady - paddingSizes[psize]) <= Math.abs(py - pady)){
          py = paddingSizes[psize];
        } else break;
      }
    } else py = props.py
    px = Number(px) * 4; py = Number(py) * 4;

  } // else if (type = "etc") {

  // }

  return (
    <Link href={link}>
      <a draggable="false">
        <div className={`flex flex-row justify-center bg-${color} text-${textColor} hover:text-${hovertextColor} rounded-${rounded} z-10 hover:bg-${hoverColor} px-${px} py-${py} font-${font} font-${ttype} text-center select-none text-${size}` + extra}>
          {props.children}
        </div>
      </a>
    </Link>
  )
}

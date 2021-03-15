
var textToRem = {}; textToRem["xs"] = 0.75; textToRem["sm"] = 0.875; textToRem["base"] = 1; textToRem["lg"] = 1.125; textToRem["xl"] = 1.25; textToRem["2xl"] = 1.5; textToRem["3xl"] = 1.875; textToRem["4xl"] = 2.25; textToRem["5xl"] = 3; textToRem["6xl"] = 3.75; textToRem["7xl"] = 4.5; textToRem["8xl"] = 6; textToRem["9xl"] = 8; textToRem["10xl"] = 10;
var paddingSizes = [.125, .25, .375, .5, .625, .75, .875, 1, 1.25, 1.5, 1.75, 2, 2.25, 2.5, 2.75, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 20, 24];


export const Button = (props) => {
  if(props == undefined) return (<span>Button here! - This component needs to be set up</span>);
  let link, type, color, hoverColor, textColor, hovertextColor, size, font, ttype, rounded, extra, px, py, textSize;
  if(props.textSize == undefined) textSize = "lg"; else textSize = props.textSize;
  let textSizeRem = textToRem[props.textSize]
  if(props.href == undefined) link = "/"; else link = props.href;
  if(props.type == undefined) type = "home"; else type = props.type;
  if(type = "home") {
    if(props.color == undefined) color = "blue-400"; else color = props.color;
    let colorLength = color.length;
    if(props.hoverColor == undefined) hoverColor = (color.substr(0, colorLength - 3) + (Number(color.substr(colorLength - 3, 1)) + 1) + color.substr(colorLength - 2, 2)); else hoverColor = props.hoverColor;
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
  } else if(type = "etc") {

  }
  return(
    <Link href={link}>
      <a draggable="false">
        <div className={`flex flex-row justify-center bg-${color} text-${textColor} hover:text-${hovertextColor} rounded-${rounded} z-10 hover:bg-${hoverColor} px-${px} py-${py} font-${font} font-${ttype} text-center select-none text-${size}` + extra}>
          {props.children}
        </div>
      </a>
    </Link>
  )
}

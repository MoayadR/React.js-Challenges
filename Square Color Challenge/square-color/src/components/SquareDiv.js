import React from 'react'

const SquareDiv = ({colorState , hexValue}) => {

  const isBright = (color) =>{
    if(!color)
      return true;

    var r, g, b, hsp;
    color = +("0x" + color.slice(1).replace( 
    color.length < 5 && /./g, '$&$&'));

    r = (color >> 16);
    g = color >> (8 & 255);
    b = (color & 255);
    hsp = Math.sqrt(
      0.299 * (r * r) +
      0.587 * (g * g) +
      0.114 * (b * b)
      );

      if (hsp>127.5) {

        return true;
    } 
    else {

        return false;
    }
  }

  return (
    <div className='SquareDiv' style={{backgroundColor:colorState||'white' , color:isBright(hexValue)?"black":"white"}}>
        <p>{colorState || "Empty Value"}</p>
        <p>{hexValue}</p>
    </div>
  )
}

export default SquareDiv
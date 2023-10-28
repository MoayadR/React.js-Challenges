import React from 'react'

const SquareDiv = ({colorState}) => {
    
  return (
    <div className='SquareDiv' style={{backgroundColor:colorState||'white'}}>
        <p>{colorState || "Empty Value"}</p>
    </div>
  )
}

export default SquareDiv
import React from 'react'
import colorNames from 'colornames'

const ColorInput = ({colorState , setColorState , setHexValue}) => {
  return (
    <div className='ColorInputDiv'>
      <form onSubmit={(e) => e.preventDefault() }>
        <input type='text'
        required
        autoFocus
        placeholder='Add Color Name'
        value={colorState}
        onChange={(e) => {
          setColorState(e.target.value);
          setHexValue(colorNames(e.target.value));
        }}
        ></input>
      </form>
    </div>
  )
}

export default ColorInput
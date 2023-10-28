import React from 'react'

const ColorInput = ({colorState , setColorState}) => {
  return (
    <div className='ColorInputDiv'>
      <form onSubmit={(e) => e.preventDefault() }>
        <input type='text'
                value={colorState}
               onChange={(e) => setColorState(e.target.value)}
                ></input>
      </form>
    </div>
    
  )
}

export default ColorInput
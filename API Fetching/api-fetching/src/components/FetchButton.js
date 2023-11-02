import React from 'react'

const FetchButton = ({buttonText , onClickFunction}) => {
  return (
    <>
    <button onClick={onClickFunction} className='button-85'>{buttonText}</button>
    </>
  )
}

export default FetchButton
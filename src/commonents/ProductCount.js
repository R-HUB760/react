import React, { useState } from 'react'

const ProductCount = () => {

  const [vlaue, setVlaue] = useState(0)

  let CountValue = (e) => {
    setVlaue(e.target.value);
    console.log(vlaue);

  }

  return (

    <>
      <span>
        <input onChange={CountValue} type="number" className='float-end p-2 pro-num' placeholder='0' min='0' />
      </span>
    </>
  )
}

export default ProductCount
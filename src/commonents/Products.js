import React from 'react'

function Products(props) {

  const { pic, name, price, rating, des } = props;

  return (
    <>
      <div className='team rounded p-2 bg-dark'>
        <img src={pic} alt="Product Photo" />
        <h5 className='name'>{name}</h5>
        <h6 className='name text-warning'>Price: {price}</h6>
        <h6 className='title text-warning'>Rating: {rating}</h6>
        <p className='des'>{des}</p>
        <p><button>Add To Cart</button></p>
      </div>
    </>
  )
}

export default Products
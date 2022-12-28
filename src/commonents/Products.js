import React from 'react'
import { FaAmbulance, FaGlobeAmericas, FaSpeakap, FaStumbleuponCircle } from "react-icons/fa";
import ProductCount from './ProductCount';

function Products(props) {

  const { demo, name, price, rating, des } = props;

  return (
    <>
      <div className='team rounded p-2 bg-secondary'>
        <p>
          Products
          <FaGlobeAmericas className='icon-p' />
          <FaStumbleuponCircle className='icon-p' />
          <FaSpeakap className='icon-p' />
        </p>
        <p><img src={demo} alt="Product" /></p>
        <h5 className='name'>{name}</h5>
        <h6 className='name text-warning'>Price: {price}</h6>
        <h6 className='title text-warning'>Rating: {rating}</h6>
        <p className='des'>{des}</p>
        <p><button>
          <FaAmbulance className='icon' />
          Add To Cart
        </button>
        <ProductCount /></p>
      </div>
    </>
  )
}

export default Products

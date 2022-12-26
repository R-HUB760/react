import React from 'react'
import Data from './Data'
import Products from './Products';
import { v4 as uuidv4 } from 'uuid';

function TeamLists(prop) {

  return (
    <>
      {Data.map((item) => {
        const {img, name, price, rate, des } = item
        return (
          <div className='col-md-6 col-lg-4 rounded' key={uuidv4()}><Products demo={img} name={name} price={price} rating={rate} des={des} /></div>
        )
      })}
    </>
  )
}

export default TeamLists
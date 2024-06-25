import React from 'react';
import Navbar from './Nav';
import Maincategory from './Maincategory';
import Products from './Products';

const Collection = () => {
  return (
    <div>
        <Navbar/>
        <Maincategory/>
        <div className='bg-dark'>
            <Products/>
        </div>
    </div>
  )
}

export default Collection
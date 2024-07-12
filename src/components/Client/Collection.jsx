import React from 'react';
import Navbar from './Nav';
import Maincategory from './Maincategory';
import Products from './Products';
import Footer from './Footer';


const Collection = () => {
  return (
    <div>
        <Navbar/>
        <Maincategory/>
        <div className='bg-dark'>
            <Products/>
        </div>
        <Footer/>
    </div>
  )
}

export default Collection
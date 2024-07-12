import React from 'react'
import { Route, Routes  } from 'react-router-dom'
import Home from './Client/Home'
import Aboutus from './Client/Aboutus'
import Viewdetails from './Client/Viewdetails'
import DishesPage from './Client/DishesPage';
import Products from './Client/Products';
import Collection from './Client/Collection';
import Try from './Client/Try';
// import Dummy from './Client/ImageSlider';
import ImageSlider from './Client/ImageSlider'


function MainRouter() {
  return (
    <div>
    
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/aboutus" element={<Aboutus />} />
              <Route path="/view-details" element={<Viewdetails />} /> 
              <Route path="/dishes" element={<DishesPage />} />  
              <Route path="/Collections" element={<Collection/>} /> 
              <Route path="/try" element={<Try/>} /> 
              <Route path="/imageSlider" element={<ImageSlider/>} />                        
                       
                       
                      
                {/* <Route path="/dishes/:categoryId" component={DishesPage} /> */}
             
              {/* <Route path="/dishes/:subCategoryId" component={DishesPage} />     */}

      
 
            </Routes>
     
    </div>
  )
}

export default MainRouter
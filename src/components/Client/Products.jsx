import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from './Nav';
import Maincategory from './Maincategory';

function Products() {
    const backendUrl = process.env.REACT_APP_MACHINE_TEST_1_BACKEND_URL;
    const [dishes, setDishes] = useState([]);
    const [search, setSearch] = useState('');
    const [categories, setCategories] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);


    const navigate = useNavigate();

    const handleClick = (item) => {
        navigate('/view-details', { state: { item } });
    };

    useEffect(() => {
        const fetchDishes = async () => {
            try {
                const response = await axios.get(`${backendUrl}/admin/getdishes`, { params: { search } });
                const data = response.data;
                setDishes(data);
                console.log(data, "Fetched dishes");
            } catch (error) {
                console.error('Error fetching dishes:', error);
            }
        };

        const fetchCategories = async () => {
            try {
                const response = await axios.get(`${backendUrl}/admin/getcategories`);
                const data = response.data;
                setCategories(data);
            } catch (err) {
                console.error('Error fetching categories:', err);
            }
        };

        fetchCategories();
        fetchDishes();
    }, [search, backendUrl]);

    const redirectToWhatsApp = (order) => {
        const phoneNumber = '+971585023411';
        const imageUrl = `${process.env.REACT_APP_MACHINE_TEST_1_BACKEND_URL}/images/${order.image[currentImageIndex]}`;
        const message = `Hi, I'd like to order  ${order.dishes} for AED ${order.price}.`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
      };
    

    
    const handleImageError = (e) => {
        e.target.onerror = null; // Prevents infinite loop
        e.target.src = 'path/to/default-image.jpg'; // Ensure this path is correct
    };

    return (
        <div className='bg-dark'>
           
            <div className="container-fluid banner-2">
               
                <div className="row">
                    <div className="col-12"></div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <h1 style={{color:'white',display:'flex',justifyContent:'center',alignItems:'center',fontFamily:'slick' }}>Collections</h1>
                    {dishes.length === 0 ? (
                        <p style={{color: 'white'}}>No dishes found.</p>
                    ) : (
                        dishes.map((dish, index) => (
                            <div key={index} className="col-12 col-lg-3 mb-4">
                                <div className="card">
                                    <img
                                        className="card-img-top"
                                        src={`${process.env.REACT_APP_MACHINE_TEST_1_BACKEND_URL}/images/${dish.image[0]}`}
                                        alt={dish.dishes}
                                        onClick={() => handleClick(dish)}
                                        style={{ cursor: 'pointer', width: '100%', height: '200px', objectFit: 'cover' }}
                                        onError={handleImageError}
                                        onMouseOver={(e) => {
                                            if (dish.image.length > 1) {
                                                e.target.src = `${backendUrl}/images/${dish.image[1]}`;
                                            }
                                        }}
                                        onMouseOut={(e) => {
                                            e.target.src = `${backendUrl}/images/${dish.image[0]}`;
                                        }}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title" style={{ color: 'brown' }}>{dish.dishes}</h5>
                                        <p className="card-text" style={{ color: 'brown' }}><b>AED {dish.price}</b></p>
                                        <button className='btn btn-primary' style={{backgroundColor:'#a8741a', border:'none'}} onClick={() => redirectToWhatsApp(dish)}>Buy now</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

export default Products;





// orginal
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// function Products() {
//     const backendUrl = process.env.REACT_APP_MACHINE_TEST_1_BACKEND_URL;
//     const [dishes, setDishes] = useState([]);
//     const [search, setSearch] = useState('');
//     const [categories, setCategories] = useState([]);

//     const navigate = useNavigate();

//     const handleClick = (item) => {
//         navigate('/view-details', { state: { item } });
//     };

//     useEffect(() => {
//         const fetchDishes = async () => {
//             console.log(search, "search");
        
//             try {
//                 const response = await axios.get(`${backendUrl}/admin/getdishes/?search=${search}`);
//                 const data = response.data;
//                 setDishes(data);
//                 console.log(data, "Fetched dishes");
//             } catch (error) {
//                 console.log(error);
//             }
//         };

//         const fetchCategories = async () => {
//             try {
//                 const response = await axios.get(`${backendUrl}/admin/getcategories`);
//                 const data = response.data;
//                 setCategories(data);
//             } catch (err) {
//                 console.log(err);
//             }
//         };

//         fetchCategories();
//         fetchDishes();
//     }, [search, backendUrl]);

//     const redirectToWhatsApp = (order) => {
//         const phoneNumber = '+919778164782'; 
//         const message = `Hi, I'd like to order ${order.dishes} for ₹${order.price}`;
//         const encodedMessage = encodeURIComponent(message);
//         const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
//         window.open(whatsappUrl, '_blank');
//     };

//     return (
//         <div className='bg-dark'>
//             <div className="container-fluid banner-2">
//                 <div className="row">
//                     <div className="col-12"></div>
//                 </div>
//             </div>

//             <div className="container">
//                 <div className="row">
//                     <h1 style={{color:'white'}}>Collections</h1>
//                     {/* <div className="col-12 my-3" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//                         <h1 style={{ textAlign: 'center' }} className='montserrat-400'>Products</h1>
//                         <select className='montserrat-400' onChange={(e) => setSearch(e.target.value)}>
//                             <option value="">Select by categories</option>
//                             {categories.map((category, index) => (
//                                 <option key={index} value={category._id}>{category.categories}</option>
//                             ))}
//                         </select>
//                     </div> */}
//                     {dishes.map((dish, index) => (
//                         <div key={index} className="col-12 col-lg-3 mb-4">
//                             <div className="card">
//                                 <div 
//                                     className="card-img-top" 
//                                     style={{ height: '200px', overflow: 'hidden', position: 'relative' }}
//                                     onMouseOver={(e) => {
//                                         if (dish.image.length > 1) {
//                                             e.target.src = `${backendUrl}/images/${dish.image[1]}`;
//                                         }
//                                     }}
//                                     onMouseOut={(e) => {
//                                         e.target.src = `${backendUrl}/images/${dish.image[0]}`;
//                                     }}
//                                 >
//                                     <img
//                                         className="dishimg"
//                                         src={`${backendUrl}/images/${dish.image[0]}`}
//                                         onClick={() => handleClick(dish)}
//                                         style={{ cursor: 'pointer', width: '100%', height: 'auto' }}
//                                         alt={dish.dishes}
//                                         onError={(e) => { e.target.onerror = null; e.target.src = 'path/to/default-image.jpg'; }}
//                                     />
//                                 </div>
//                                 <div className="card-body">
//                                     <h5 className="card-title" style={{ color: 'brown' }}>{dish.dishes}</h5>
//                                     <p className="card-text" style={{ color: 'brown' }}><b>AED {dish.price}</b></p>
//                                     {/* <p className="card-text" style={{ color: 'brown' }}>{dish.description}</p> */}
//                                     <button className='btn btn-primary' style={{backgroundColor:'#a8741a',border:'none'}} onClick={() => redirectToWhatsApp(dish)}>Buy now</button>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Products;



// import React, { useEffect, useState } from 'react';
// // import Nav from './Nav';
// import axios from 'axios';
// // import Footer from './Footer';
// import { useNavigate } from 'react-router-dom';



// function Products() {
//     const backendUrl = process.env.REACT_APP_MACHINE_TEST_1_BACKEND_URL;
//     const [dishes, setDishes] = useState([]);
//     const [search, setSeacrh] = useState('')
//     const [getCategories, setGetCategories] = useState([]);

//     const navigate = useNavigate();
//     const handleClick = (item) => {
//       navigate('/view-details', { state: { item } });
//     };

 

//     useEffect(() => {
//         const fetchData = async () => {
//             console.log(search,"search")
        
//             try {
//                 const response = await axios.get(`${backendUrl}/admin/getdishes/?search=${search}`);
//                 const data = response.data;
//                 setDishes(data);
//                 console.log(data,"hellooo")
//             } catch (error) {
//                 console.log(error);
//             }
//         };
//         const fetch = async()=>{
//             try {
//                 const response = await axios.get(`${backendUrl}/admin/getcategories`);
//                 const data = response.data;
//                 setGetCategories(data);
               
//               } catch (err) {
//                 console.log(err);
//               }
//         }
//         fetch()
//         fetchData();
//     }, [search, backendUrl]);


//     const redirectToWhatsApp = (order) => {
//         const phoneNumber = '+919778164782'; 
//         const message = `Hi, I'd like to order ${order.dishes}  ₹ ${order.price}`;
//         const encodedMessage = encodeURIComponent(message);
//         const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
//         window.open(whatsappUrl, '_blank');
//     };

//   return (
//     <div className='bg-dark'>
//         <div className="container-fluid banner-2">
//             <div className="row">
//                 <div className="col-12">

//                 </div>
//             </div>
//         </div>

//         <div className="container">
//                 <div className="row">
//                     <div className="col-12 my-3" style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
//                     <h1 style={{textAlign:'center'}} className='montserrat-400'>Products</h1>
//                     <select className='montserrat-400' name=""  onChange={(e)=> setSeacrh(e.target.value)}>
//                         <option value="">select by categories</option>
//                         {getCategories.map((items, index)=>(
//                             <option  key={index} value={items._id}>{items.categories}</option>
//                         ))}
                        
//                     </select>
                    
//                     </div>
//                     {dishes.map((item, index) => (
//                         <div key={index} className="col-12 col-lg-3">
                            
//                                 <div style={{ height: '50%', width: '100%' }}>
//                                     <img className="dishimg" src={`${backendUrl}/images/${item.image}`} onClick={() => handleClick(item)}  style={{ cursor: 'pointer' }} alt="" />
//                                 </div>
//                                 <div>
//                                     <h6 style={{color:'brown'}} >{item.dishes}</h6>
//                                     <h5  style={{color:'brown'}}><b>AED {item.price}</b></h5>
//                                 </div>
//                                 {/* <div>
//                                     <h6>{item.description}</h6>

//                                 </div> */}
//                                 <button className='button' style={{textDecoration:'none',border:'none'}} onClick={() => redirectToWhatsApp(item)}>Buy now</button>{' '}
                            
//                         </div>
//                     ))}
//                 </div>
//         </div>
//         {/* <Footer/> */}
//     </div>
    
    
//   )
// }

// export default Products
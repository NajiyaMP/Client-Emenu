import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Card, CardBody, CardFooter, CardHeader} from 'react-bootstrap';
import Navbar from './Nav';
import Maincategory from './Maincategory'


const DishesPage = () => {
    const backendUrl = process.env.REACT_APP_MACHINE_TEST_1_BACKEND_URL;
    const [dishes, setDishes] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const categoryId = searchParams.get('category');
    const navigate = useNavigate();

    const handleClick = (item) => {
        navigate('/view-details', { state: { item } });
    };


    useEffect(() => {
        const fetchDishes = async () => {
            try {
                let url = `${backendUrl}/admin/getdishes`;
                if (categoryId) {
                    url += `?category=${categoryId}`;
                }
                const response = await axios.get(url);
                setDishes(response.data);
            } catch (error) {
                console.error('Error fetching dishes:', error);
            }
        };

        fetchDishes();
    }, [backendUrl, categoryId]);

    const redirectToWhatsApp = (order) => {
      const phoneNumber = '+971585023411';
      const imageUrl = `${process.env.REACT_APP_MACHINE_TEST_1_BACKEND_URL}/images/${order.image[currentImageIndex]}`;
      const message = `Hi, I'd like to order  ${order.dishes} for AED ${order.price}.`;
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
      window.open(whatsappUrl, '_blank');
    };
  

    return (
        <div>
          <Navbar/>
          <Maincategory/>
           <div className='container-fluid bg-dark'>
              {dishes.map((dish) => (
                <div key={dish._id} className="col-12 col-lg-3 mb-4 d-flex">
                  <Card>
                    <CardBody className="row g-0">
                      <CardHeader>
                        {dish.image && dish.image.length > 0 && (
                          <img
                            src={`${process.env.REACT_APP_MACHINE_TEST_1_BACKEND_URL}/images/${dish.image[0]}`}
                            alt={dish.dishes}
                            className="img-fluid rounded-start"
                          />
                        )}
                      </CardHeader>
                      <CardFooter>
                        <div className="card-body">
                          <h5 className="card-title" style={{ color: "black" }}>{dish.dishes}</h5>
                          {/* <p className="card-text" style={{ color: "black" }}>{dish.description}</p> */}
                          <p className="card-text" style={{ color: "black" }}>Price: AED {dish.price}</p>
                          <button className='btn btn-primary' style={{ backgroundColor: '#a8741a', border: 'none' }} onClick={() => redirectToWhatsApp(dish)}>Buy now</button>
                          <button className='btn btn-secondary' style={{ marginLeft: '10px' }} onClick={() => handleClick(dish)}>View Details</button>
                        </div>
                      </CardFooter>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </div>


          

            {/* <ul>
                {dishes.map(dish => (
                    <li key={dish._id}>
                        {dish.image && dish.image.length > 0 && (
                          <img src={`${process.env.REACT_APP_MACHINE_TEST_1_BACKEND_URL}/images/${dish.image[0]}`} alt={dish.dishes} />
                        )}

                        <h2 style={{color:"black"}}>{dish.dishes}</h2>
                        <p style={{color:"black"}}>{dish.description}</p>
                        <p style={{color:"black"}}>Price: ${dish.price}</p>
                    </li>
                ))}
            </ul> */}
        </div>
    );
};

export default DishesPage;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useLocation } from 'react-router-dom';

// const DishesPage = () => {
//     const backendUrl = process.env.REACT_APP_MACHINE_TEST_1_BACKEND_URL;
//     const [dishes, setDishes] = useState([]);
//     const location = useLocation();
//     const searchParams = new URLSearchParams(location.search);
//     const categoryId = searchParams.get('category');
//     console.log('the category id')

//     useEffect(() => {
      
//       console.log('this the response data')
//         const fetchDishes = async () => {
//             try {
//                 const response = await axios.get(`${backendUrl}/admin/getdishes?category=${categoryId}`);
//                 setDishes(response.data);
//                 console.log(response.data,'this the response data')
//             } catch (error) {
//                 console.error('Error fetching dishes:', error);
//             }
//         };

//         if (categoryId) {
//             fetchDishes();
//         }
//     }, [backendUrl, categoryId]);

//     return (
//         <div>
//             <h1>Dishes</h1>
//             <ul>
//                 {dishes.map(dish => (
//                   <li key={dish._id}>
//                       {dish.image && dish.image.length > 0 && (
//                         <img src={dish.image[0]} alt={dish.dishes} />
//                       )}
//                       <h2>{dish.dishes}</h2>
//                     <p>{dish.description}</p>
//                     <p>Price: ${dish.price}</p>
//                   </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default DishesPage;





// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';

// const Dishes = () => {
//   const [dishes, setDishes] = useState([]);
//   const location = useLocation();

//   const query = new URLSearchParams(location.search);
//   const categoryId = query.get('category');
//   const backendUrl = process.env.REACT_APP_MACHINE_TEST_1_BACKEND_URL;

//   useEffect(() => {
//     const fetchDishes = async () => {
//       if (categoryId) {
//         try {
//           const response = await axios.get(`${backendUrl}/getdishes`, {
//             params: { category: categoryId }
//           });
//           console.log('Fetched dishes:', response.data);
//           setDishes(response.data);
//         } catch (error) {
//           console.error('Error fetching dishes:', error);
//         }
//       }
//     };

//     fetchDishes();
//   }, [categoryId, backendUrl]);

//   if (dishes.length === 0) {
//     return <div>No dishes found for this category.</div>;
//   }

//   return (
//     <div>
//       <h1>Dishes</h1>
//       <ul>
//         {dishes.map(dish => (
//           <li key={dish._id}>
//             {dish.image && dish.image.length > 0 && (
//               <img src={dish.image[0]} alt={dish.dishes} />
//             )}
//             <h2>{dish.dishes}</h2>
//             <p>{dish.description}</p>
//             <p>Price: ${dish.price}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Dishes;




// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';

// const Dishes = () => {
//   const [dishes, setDishes] = useState([]);
//   const location = useLocation();

//   const query = new URLSearchParams(location.search);
//   const categoryId = query.get('categoryId');
//   const backendUrl = process.env.REACT_APP_MACHINE_TEST_1_BACKEND_URL;

//   useEffect(() => {
//     const fetchDishes = async () => {
//       if (categoryId) {
//         try {
//           const response = await axios.get(`${backendUrl}/api/dishes`, {
//             params: { category: categoryId }
//           });
//           console.log('Fetched dishes:', response.data);
//           setDishes(response.data);
//         } catch (error) {
//           console.error('Error fetching dishes:', error);
//         }
//       }
//     };

//     fetchDishes();
//   }, [categoryId, backendUrl]);

//   if (dishes.length === 0) {
//     return <div>No dishes found for this category.</div>;
//   }

//   return (
//     <div>
//       <h1>Dishes</h1>
//       <ul>
//         {dishes.map(dish => (
//           <li key={dish._id}>
//             {dish.image && dish.image.length > 0 && (
//               <img src={dish.image[0]} alt={dish.dishes} />
//             )}
//             <h2>{dish.dishes}</h2>
//             <p>{dish.description}</p>
//             <p>Price: ${dish.price}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Dishes;


// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';

// function Dishes() {
//     const backendUrl = process.env.REACT_APP_MACHINE_TEST_1_BACKEND_URL;
//     const [dishes, setDishes] = useState([]);
//     const [getCategories, setGetCategories] = useState([]);
//     const [search, setSearch] = useState('');

//     const location = useLocation();
//     const queryParams = new URLSearchParams(location.search);
//     const categoryId = queryParams.get('categoryId'); // Get category ID from query parameters

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get(`${backendUrl}/admin/getdishes`, {
//                     params: { categoryId } // Pass category ID as a query parameter
//                 });
//                 setDishes(response.data);
//             } catch (error) {
//                 console.log(error);
//             }
//         };

//         const fetchCategories = async () => {
//             try {
//                 const response = await axios.get(`${backendUrl}/admin/getcategories`);
//                 setGetCategories(response.data);
//             } catch (err) {
//                 console.log(err);
//             }
//         };

//         fetchCategories();
//         fetchData();
//     }, [categoryId, backendUrl]);

//     const redirectToWhatsApp = (order) => {
//         const phoneNumber = '+919778164782'; 
//         const message = `Hi, I'd like to order ${order.dishes} for ₹${order.price}`;
//         const encodedMessage = encodeURIComponent(message);
//         const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
//         window.open(whatsappUrl, '_blank');
//     };

//     return (
//         <div className="bg-dark">
//             <div className="container-fluid banner-2">
//                 <div className="row">
//                     <div className="col-12"></div>
//                 </div>
//             </div>
//             <div className="container">
//                 <div className="row">
//                     <div className="col-12 my-3" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//                         <h1 style={{ textAlign: 'center' }} className="montserrat-400">Products</h1>
//                         <select className="montserrat-400" name="" onChange={(e) => setSearch(e.target.value)}>
//                             <option value="">Select by categories</option>
//                             {getCategories.map((items, index) => (
//                                 <option key={index} value={items._id}>{items.categories}</option>
//                             ))}
//                         </select>
//                     </div>
//                     {dishes.map((item, index) => (
//                         <div key={index} className="col-12 col-lg-3">
//                             <div style={{ height: '50%', width: '100%' }}>
//                                 <img
//                                     className="dishimg"
//                                     src={`${backendUrl}/images/${item.image}`}
//                                     style={{ cursor: 'pointer' }}
//                                     alt={item.dishes}
//                                 />
//                             </div>
//                             <div>
//                                 <h6 style={{ color: 'brown' }}>{item.dishes}</h6>
//                                 <h5 style={{ color: 'brown' }}><b>AED {item.price}</b></h5>
//                             </div>
//                             <button
//                                 className="button"
//                                 style={{ textDecoration: 'none', border: 'none' }}
//                                 onClick={() => redirectToWhatsApp(item)}
//                             >
//                                 Buy now
//                             </button>{' '}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Dishes;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// const DishesPage = () => {
//   const { categoryId } = useParams();
//   const [dishes, setDishes] = useState([]);
//   const backendUrl = process.env.REACT_APP_MACHINE_TEST_1_BACKEND_URL;

//   useEffect(() => {
//     const fetchDishes = async () => {
//       try {
//         const response = await axios.get(`${backendUrl}/dishes?category=${categoryId}`);
//         setDishes(response.data);
//       } catch (error) {
//         console.error('Error fetching dishes:', error);
//       }
//     };

//     fetchDishes();
//   }, [categoryId, backendUrl]);

//   const handleClick = (item) => {
//     console.log('Dish clicked:', item);
//     // Handle dish click, e.g., show details or add to cart
//   };

//   const redirectToWhatsApp = (item) => {
//     // Redirect to WhatsApp with pre-filled message
//     const message = `I would like to buy ${item.dishes}`;
//     window.location.href = `https://wa.me/?text=${encodeURIComponent(message)}`;
//   };

//   return (
//     <div className="dishes-container">
//       {dishes.map((item) => (
//         <div key={item._id} className="dish-card">
//           <div style={{ height: '50%', width: '100%' }}>
//             <img
//               className="dishimg"
//               src={`${backendUrl}/images/${item.image}`}
//               onClick={() => handleClick(item)}
//               style={{ cursor: 'pointer' }}
//               alt={item.dishes}
//             />
//           </div>
//           <div>
//             <h6 style={{ color: 'brown' }}>{item.dishes}</h6>
//             <h5 style={{ color: 'brown' }}>
//               <b>AED {item.price}</b>
//             </h5>
//           </div>
//           <button
//             className="button"
//             style={{ textDecoration: 'none', border: 'none' }}
//             onClick={() => redirectToWhatsApp(item)}
//           >
//             Buy now
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default DishesPage;




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const DishesPage = () => {
//   const backendUrl = process.env.REACT_APP_MACHINE_TEST_1_BACKEND_URL;
//   const [categories, setCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [dishes, setDishes] = useState([]);

//   // Fetch categories on component mount
//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await axios.get(`${backendUrl}/admin/getcategories`);
//         setCategories(response.data);
//       } catch (error) {
//         console.error('Error fetching categories:', error);
//       }
//     };

//     fetchCategories();
//   }, [backendUrl]);

//   // Fetch dishes when selected category changes
//   useEffect(() => {
//     if (selectedCategory) {
//       const fetchDishes = async () => {
//         try {
//           const response = await axios.get(`${backendUrl}/admin/getdishes?search=${selectedCategory}`);
//           setDishes(response.data);
//         } catch (error) {
//           console.error('Error fetching dishes:', error);
//         }
//       };

//       fetchDishes();
//     }
//   }, [selectedCategory, backendUrl]);

//   // Handle category change
//   const handleCategoryChange = (event) => {
//     setSelectedCategory(event.target.value);
//   };

//   // Handle click on dish image
//   const handleClick = (dish) => {
//     console.log('Dish clicked:', dish);
//     // Implement your click handling logic here
//   };

//   // Handle "Buy now" button click
//   const redirectToWhatsApp = (dish) => {
//     const message = `I'm interested in buying ${dish.dishes} for AED ${dish.price}.`;
//     const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
//     window.open(whatsappUrl, '_blank');
//   };

//   return (
//     <div>
//       <div>
//         <select className='montserrat-400' onChange={handleCategoryChange}>
//           <option value="">Select by categories</option>
//           {categories.map((category) => (
//             <option key={category._id} value={category.categories}>
//               {category.categories}
//             </option>
//           ))}
//         </select>
//       </div>
      
//       <div className="dishes-container">
//         {dishes.map((dish, index) => (
//           <div key={index} className="col-12 col-lg-3">
//             <div style={{ height: '50%', width: '100%' }}>
//               <img 
//                 className="dishimg" 
//                 src={`${backendUrl}/images/${dish.image}`} 
//                 onClick={() => handleClick(dish)}  
//                 style={{ cursor: 'pointer' }} 
//                 alt={dish.dishes} 
//               />
//             </div>
//             <div>
//               <h6 style={{color:'brown'}}>{dish.dishes}</h6>
//               <h5 style={{color:'brown'}}><b>AED {dish.price}</b></h5>
//             </div>
//             <button 
//               className='button' 
//               style={{textDecoration:'none', border:'none'}} 
//               onClick={() => redirectToWhatsApp(dish)}
//             >
//               Buy now
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DishesPage;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// const DishesPage = () => {
//   const backendUrl = process.env.REACT_APP_MACHINE_TEST_1_BACKEND_URL;
//   const { subCategoryId } = useParams();
//   const [dishes, setDishes] = useState([]);

//   useEffect(() => {
//     // Fetch dishes for the selected subcategory
//     const fetchDishes = async () => {
//       try {
//         const response = await axios.get(`${backendUrl}/admin/getdishes?subCategoryId=${subCategoryId}`);
//         setDishes(response.data); // Assuming response.data is an array of dishes
//       } catch (error) {
//         console.error('Error fetching dishes:', error);
//       }
//     };

//     fetchDishes();
//   }, [backendUrl, subCategoryId]);

//   return (
//     <div>
//       <h1>Dishes for Subcategory ID: {subCategoryId}</h1>
//       <div className="dishes-container">
//         {dishes.map((dish) => (
//           <div key={dish._id} className="dish-item">
//             <h3>{dish.name}</h3>
//             <p>{dish.description}</p>
//             <p>Price: ${dish.price}</p>
//             <img src={`${backendUrl}/${dish.image}`} alt={dish.name} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DishesPage;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// const DishesPage = () => {
//   const backendUrl = process.env.REACT_APP_MACHINE_TEST_1_BACKEND_URL;
//   const { subCategoryId } = useParams();
//   const [dishes, setDishes] = useState([]);

//   useEffect(() => {
//     // Fetch dishes for the selected subcategory
//     const fetchDishes = async () => {
//       try {
//         const response = await axios.get(`${backendUrl}/admin/getdishes?subCategoryId=${subCategoryId}`);
//         setDishes(response.data); // Assuming response.data is an array of dishes
//       } catch (error) {
//         console.error('Error fetching dishes:', error);
//       }
//     };

//     fetchDishes();
//   }, [backendUrl, subCategoryId]);

//   return (
//     <div>
//       <h1>Dishes for Subcategory ID: {subCategoryId}</h1>
//       <ul>
//         {dishes.map((dish) => (
//           <li key={dish._id}>
//             {dish.name} - {dish.description}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default DishesPage;

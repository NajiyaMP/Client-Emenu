// Modified CategoriesMenu component
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CategoriesMenu = () => {
    const backendUrl = process.env.REACT_APP_MACHINE_TEST_1_BACKEND_URL;
    const [mainCategories, setMainCategories] = useState([]);
    const [subCategories, setSubCategories] = useState({});

    useEffect(() => {
        const fetchMainCategories = async () => {
            try {
                const response = await axios.get(`${backendUrl}/admin/getcategories`);
                const categoriesData = response.data;

                const categoriesMap = {};
                categoriesData.forEach(category => {
                    const mainCategoryId = category.maincategoriesData._id;
                    if (!categoriesMap[mainCategoryId]) {
                        categoriesMap[mainCategoryId] = {
                            mainCategory: category.maincategoriesData,
                            subcategories: []
                        };
                    }
                    categoriesMap[mainCategoryId].subcategories.push(category);
                });

                const mainCategoriesData = Object.values(categoriesMap).map(item => item.mainCategory);
                const subCategoriesData = {};
                Object.keys(categoriesMap).forEach(mainCategoryId => {
                    subCategoriesData[mainCategoryId] = categoriesMap[mainCategoryId].subcategories;
                });

                setMainCategories(mainCategoriesData);
                setSubCategories(subCategoriesData);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchMainCategories();
    }, [backendUrl]);

    return (
        <div className="main_menu" style={{ backgroundColor: '#2d2d2d' }}>
            <nav>
                <ul style={{ marginBottom: "0" }}>
                    {mainCategories.map(mainCat => (
                        <li key={mainCat._id} className="active">
                            <a href="#">{mainCat.maincategories} <i className="ion-chevron-down"></i></a>
                            <ul className="mega_menu">
                                {subCategories[mainCat._id] &&
                                    subCategories[mainCat._id].map(subCat => (
                                        <li key={subCat._id}>
                                            <Link to={`/dishes?category=${subCat._id}`}>{subCat.name}</Link>                                        </li>
                                    ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default CategoriesMenu;





// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const CategoriesMenu = () => {
//   const backendUrl = process.env.REACT_APP_MACHINE_TEST_1_BACKEND_URL;
//   const [mainCategories, setMainCategories] = useState([]);
//   const [subCategories, setSubCategories] = useState({});

//   useEffect(() => {
//     const fetchMainCategories = async () => {
//       try {
//         const response = await axios.get(`${backendUrl}/admin/getcategories`);
//         const categoriesData = response.data;

//         const categoriesMap = {};
//         categoriesData.forEach(category => {
//           const mainCategoryId = category.maincategoriesData._id;
//           if (!categoriesMap[mainCategoryId]) {
//             categoriesMap[mainCategoryId] = {
//               mainCategory: category.maincategoriesData,
//               subcategories: []
//             };
//           }
//           categoriesMap[mainCategoryId].subcategories.push(category);
//         });

//         const mainCategoriesData = Object.values(categoriesMap).map(item => item.mainCategory);
//         const subCategoriesData = {};
//         Object.keys(categoriesMap).forEach(mainCategoryId => {
//           subCategoriesData[mainCategoryId] = categoriesMap[mainCategoryId].subcategories;
//         });

//         setMainCategories(mainCategoriesData);
//         setSubCategories(subCategoriesData);
//       } catch (error) {
//         console.error('Error fetching categories:', error);
//       }
//     };

//     fetchMainCategories();
//   }, [backendUrl]);

//   return (
//     <div className="main_menu" style={{ backgroundColor: '#2d2d2d' }}>
//       <nav>
//         <ul style={{ marginBottom: "0" }}>
//           {mainCategories.map(mainCat => (
//             <li key={mainCat._id} className="active">
//               <a href="#">{mainCat.maincategories} <i className="ion-chevron-down"></i></a>
//               <ul className="mega_menu">
//                 {subCategories[mainCat._id] &&
//                   subCategories[mainCat._id].map(subCat => (
//                     <li key={subCat._id}>
//                       <Link to={`/dishes?category=${subCat._id}`}>{subCat.name}</Link>
//                     </li>
//                   ))}
//               </ul>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default CategoriesMenu;




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const CategoriesMenu = () => {
//   const backendUrl = process.env.REACT_APP_MACHINE_TEST_1_BACKEND_URL;
//   const [mainCategories, setMainCategories] = useState([]);
//   const [subCategories, setSubCategories] = useState({});

//   useEffect(() => {
//     const fetchMainCategories = async () => {
//       try {
//         const response = await axios.get(`${backendUrl}/admin/getcategories`);
//         const categoriesData = response.data;

//         const categoriesMap = {};
//         categoriesData.forEach(category => {
//           const mainCategoryId = category.maincategoriesData._id;
//           if (!categoriesMap[mainCategoryId]) {
//             categoriesMap[mainCategoryId] = {
//               mainCategory: category.maincategoriesData,
//               subcategories: []
//             };
//           }
//           categoriesMap[mainCategoryId].subcategories.push(category);
//         });

//         const mainCategoriesData = Object.values(categoriesMap).map(item => item.mainCategory);
//         const subCategoriesData = {};
//         Object.keys(categoriesMap).forEach(mainCategoryId => {
//           subCategoriesData[mainCategoryId] = categoriesMap[mainCategoryId].subcategories;
//         });

//         setMainCategories(mainCategoriesData);
//         setSubCategories(subCategoriesData);
//       } catch (error) {
//         console.error('Error fetching categories:', error);
//       }
//     };

//     fetchMainCategories();
//   }, [backendUrl]);

//   return (
//     <div className="main_menu" style={{ backgroundColor: '#2d2d2d' }}>
//       <nav>
//       <ul style={{ marginBottom: "0" }}>
//         {mainCategories.map(mainCat => (
//           <li key={mainCat._id} className="active">
//             <a href="#">{mainCat.maincategories} <i className="ion-chevron-down"></i></a>
//             <ul className="mega_menu">
//               {subCategories[mainCat._id] &&
//                 subCategories[mainCat._id].map(subCat => (
//                   <li key={subCat._id}>
//                     {/* Assuming subCat._id is the dish ID */}
//                     <Link to={`/dishes?category=${subCat._id}`}>{subCat.name}</Link>                  </li>
//                 ))}
//             </ul>
//           </li>
//         ))}
//       </ul>
//         {/* <ul style={{ marginBottom: "0" }}>
//           {mainCategories.map((mainCat) => (
//             <li key={mainCat._id} className="active">
//               <a href="#">{mainCat.maincategories} <i className="ion-chevron-down"></i></a>
//               <ul className="mega_menu">
//                 {subCategories[mainCat._id] &&
//                   subCategories[mainCat._id].map((subCat) => (
//                     <li key={subCat._id}>
//                     <Link to={`/dishes?categoryId=${subCat._id}`}>{subCat.name}</Link>
//                     </li>
//                   ))}
//               </ul>
//             </li>
//           ))}
//         </ul> */}
//       </nav>
//     </div>
//   );
// };

// export default CategoriesMenu;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const CategoriesMenu = () => {
//   const backendUrl = process.env.REACT_APP_MACHINE_TEST_1_BACKEND_URL;
//   const [mainCategories, setMainCategories] = useState([]);
//   const [subCategories, setSubCategories] = useState({});

//   useEffect(() => {
//     const fetchMainCategories = async () => {
//       try {
//         const response = await axios.get(`${backendUrl}/admin/getcategories`);
//         const categoriesData = response.data;

//         const categoriesMap = {};
//         categoriesData.forEach(category => {
//           const mainCategoryId = category.maincategoriesData._id;
//           if (!categoriesMap[mainCategoryId]) {
//             categoriesMap[mainCategoryId] = {
//               mainCategory: category.maincategoriesData,
//               subcategories: []
//             };
//           }
//           categoriesMap[mainCategoryId].subcategories.push(category);
//         });

//         const mainCategoriesData = Object.values(categoriesMap).map(item => item.mainCategory);
//         const subCategoriesData = {};
//         Object.keys(categoriesMap).forEach(mainCategoryId => {
//           subCategoriesData[mainCategoryId] = categoriesMap[mainCategoryId].subcategories;
//         });

//         setMainCategories(mainCategoriesData);
//         setSubCategories(subCategoriesData);
//       } catch (error) {
//         console.error('Error fetching categories:', error);
//       }
//     };

//     fetchMainCategories();
//   }, [backendUrl]);

//   return (
//     <div className="main_menu" style={{backgroundColor:'#2d2d2d'}}>
//       <nav>
//         <ul style={{marginBottom:"0"}}>
//           {mainCategories.map((mainCat) => (
//             <li key={mainCat._id} className="active">
//               <a href="#">{mainCat.maincategories} <i className="ion-chevron-down"></i></a>
//                 <ul className="mega_menu">
//                     {subCategories[mainCat._id] &&
//                         subCategories[mainCat._id].map((subCat) => (
//                         <li key={subCat._id}>
//                             <Link to={`/dishes?categoryId=${subCat._id}`}>{subCat.name}</Link>
//                         </li>
//                         ))}
//                 </ul>
              
//               {/* <ul className="mega_menu">
//                 {subCategories[mainCat._id] &&
//                   subCategories[mainCat._id].map((subCat) => (
//                     <li key={subCat._id}>
//                         <Link to={`/dishes`}>{subCat.name}</Link>

//                     </li>
//                   ))}
//               </ul> */}
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default CategoriesMenu;




// // ORGINAL
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// // import DishesPage from './DishesPage';

// const CategoriesMenu = () => {
//   const backendUrl = process.env.REACT_APP_MACHINE_TEST_1_BACKEND_URL;
//   const [mainCategories, setMainCategories] = useState([]);
//   const [subCategories, setSubCategories] = useState({});

//   useEffect(() => {
//     // Fetch main categories from backend
//     const fetchMainCategories = async () => {
//       try {
//         const response = await axios.get(`${backendUrl}/admin/getcategories`);
//         const categoriesData = response.data;

//         // Organize categories by main category
//         const categoriesMap = {};

//         categoriesData.forEach(category => {
//           const mainCategoryId = category.maincategoriesData._id;

//           if (!categoriesMap[mainCategoryId]) {
//             categoriesMap[mainCategoryId] = {
//               mainCategory: category.maincategoriesData,
//               subcategories: []
//             };
//           }

//           categoriesMap[mainCategoryId].subcategories.push(category);
//         });

//         // Extract main categories and subcategories from map
//         const mainCategoriesData = Object.values(categoriesMap).map(item => item.mainCategory);
//         const subCategoriesData = {};
//         Object.keys(categoriesMap).forEach(mainCategoryId => {
//           subCategoriesData[mainCategoryId] = categoriesMap[mainCategoryId].subcategories;
//         });

//         // Set state
//         setMainCategories(mainCategoriesData);
//         setSubCategories(subCategoriesData);
//       } catch (error) {
//         console.error('Error fetching categories:', error);
//       }
//     };

//     fetchMainCategories();
//   }, [backendUrl]);

//   return (
//     <div className="main_menu">
//       <nav>
//         <ul>
//           {mainCategories.map((mainCat) => (
//             <li key={mainCat._id} className="active">
//               <a href="#">{mainCat.maincategories} <i className="ion-chevron-down"></i></a>
//               <ul className="mega_menu">
//                 {subCategories[mainCat._id] &&
//                   subCategories[mainCat._id].map((subCat) => (
//                     <li key={subCat._id}>
//                         <Link to={`/dishes/${subCat._id}`}>{subCat.name}</Link>
//                     </li>
//                   ))}
//               </ul>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default CategoriesMenu;




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const CategoriesMenu = () => {
//   const backendUrl = process.env.REACT_APP_MACHINE_TEST_1_BACKEND_URL;
//   const [mainCategories, setMainCategories] = useState([]);
//   const [subCategories, setSubCategories] = useState({});
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [dishes, setDishes] = useState([]);

//   useEffect(() => {
//     // Fetch main categories from backend
//     const fetchMainCategories = async () => {
//       try {
//         const response = await axios.get(`${backendUrl}/admin/getcategories`);
//         const categoriesData = response.data;

//         // Organize categories by main category
//         const categoriesMap = {};

//         categoriesData.forEach(category => {
//           const mainCategoryId = category.maincategoriesData._id;

//           if (!categoriesMap[mainCategoryId]) {
//             categoriesMap[mainCategoryId] = {
//               mainCategory: category.maincategoriesData,
//               subcategories: []
//             };
//           }

//           categoriesMap[mainCategoryId].subcategories.push(category);
//         });

//         // Extract main categories and subcategories from map
//         const mainCategoriesData = Object.values(categoriesMap).map(item => item.mainCategory);
//         const subCategoriesData = {};
//         Object.keys(categoriesMap).forEach(mainCategoryId => {
//           subCategoriesData[mainCategoryId] = categoriesMap[mainCategoryId].subcategories;
//         });

//         // Set state
//         setMainCategories(mainCategoriesData);
//         setSubCategories(subCategoriesData);
//       } catch (error) {
//         console.error('Error fetching categories:', error);
//       }
//     };

//     fetchMainCategories();
//   }, [backendUrl]);

//   // Function to fetch dishes for a selected subcategory
//   const fetchDishes = async (subCategoryId) => {
//     try {
//       const response = await axios.get(`${backendUrl}/admin/getdishes?subCategoryId=${subCategoryId}`);
//       setDishes(response.data); // Assuming response.data is an array of dishes
//     } catch (error) {
//       console.error('Error fetching dishes:', error);
//     }
//   };

//   // Handle click on a subcategory
//   const handleClickCategory = (subCategoryId) => {
//     setSelectedCategory(subCategoryId);
//     fetchDishes(subCategoryId);
//   };

//   return (
//     <div className="main_menu">
//       <nav>
//         <ul>
//           {mainCategories.map((mainCat) => (
//             <li key={mainCat._id} className="active">
//               <a href="#">{mainCat.maincategories} <i className="ion-chevron-down"></i></a>
//               <ul className="mega_menu">
//                 {subCategories[mainCat._id] &&
//                   subCategories[mainCat._id].map((subCat) => (
//                     <li key={subCat._id}>
//                       <a href="#" onClick={() => handleClickCategory(subCat._id)}>{subCat.name}</a>
//                     </li>
//                   ))}
//               </ul>
//             </li>
//           ))}
//         </ul>
//       </nav>
//       <div className="dishes-list">
//         {selectedCategory && (
//           <div>
//             <h2>Dishes for {subCategories[selectedCategory].find(cat => cat._id === selectedCategory).name}</h2>
//             <ul>
//               {dishes.map((dish) => (
//                 <li key={dish._id}>
//                   {dish.name} - {dish.description}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CategoriesMenu;




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const CategoriesMenu = () => {
//   const backendUrl = process.env.REACT_APP_MACHINE_TEST_1_BACKEND_URL;
//   const [mainCategories, setMainCategories] = useState([]);
//   const [subCategories, setSubCategories] = useState({});

//   useEffect(() => {
//     // Fetch main categories from backend
//     const fetchMainCategories = async () => {
//       try {
//         const response = await axios.get(`${backendUrl}/admin/getcategories`);
//         const categoriesData = response.data;

//         // Organize categories by main category
//         const categoriesMap = {};

//         categoriesData.forEach(category => {
//           const mainCategoryId = category.maincategoriesData._id;

//           if (!categoriesMap[mainCategoryId]) {
//             categoriesMap[mainCategoryId] = {
//               mainCategory: category.maincategoriesData,
//               subcategories: []
//             };
//           }

//           categoriesMap[mainCategoryId].subcategories.push(category);
//         });

//         // Extract main categories and subcategories from map
//         const mainCategoriesData = Object.values(categoriesMap).map(item => item.mainCategory);
//         const subCategoriesData = {};
//         Object.keys(categoriesMap).forEach(mainCategoryId => {
//           subCategoriesData[mainCategoryId] = categoriesMap[mainCategoryId].subcategories;
//         });

//         // Set state
//         setMainCategories(mainCategoriesData);
//         setSubCategories(subCategoriesData);
//       } catch (error) {
//         console.error('Error fetching categories:', error);
//       }
//     };

//     fetchMainCategories();
//   }, [backendUrl]);

//   return (
//     <div className="main_menu">
//       <nav>
//         <ul>
//           {mainCategories.map((mainCat) => (
//             <li key={mainCat._id} className="active">
//               <a href="#">{mainCat.maincategories} <i className="ion-chevron-down"></i></a>
//               <ul className="mega_menu">
//                 {subCategories[mainCat._id] &&
//                   subCategories[mainCat._id].map((subCat) => (
//                     <li key={subCat._id}>
//                       <a href="#">{subCat.name}</a>
//                     </li>
//                   ))}
//               </ul>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default CategoriesMenu;




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const CategoriesMenu = () => {
//   const backendUrl = process.env.REACT_APP_MACHINE_TEST_1_BACKEND_URL;
//   const [mainCategories, setMainCategories] = useState([]);
//   const [subCategories, setSubCategories] = useState({});

//   useEffect(() => {
//     // Fetch main categories from backend
//     const fetchMainCategories = async () => {
//       try {
//         const mainResponse = await axios.get(`${backendUrl}/admin/getmaincategories`);
//         const mainCategoriesData = mainResponse.data;

//         // Fetch subcategories for each main category
//         const promises = mainCategoriesData.map(async (mainCat) => {
//           const subResponse = await axios.get(`${backendUrl}/admin/getcategories?mainCategoryId=${mainCat._id}`);
//           return { mainCategoryId: mainCat._id, subcategories: subResponse.data };
//         });

//         // Resolve all promises
//         const subcategoriesData = await Promise.all(promises);

//         // Organize subcategories by main category ID
//         const subCategoriesMap = {};
//         subcategoriesData.forEach((item) => {
//           subCategoriesMap[item.mainCategoryId] = item.subcategories;
//         });

//         // Set state
//         setMainCategories(mainCategoriesData);
//         setSubCategories(subCategoriesMap);
//       } catch (error) {
//         console.error('Error fetching categories:', error);
//       }
//     };

//     fetchMainCategories();
//   }, [backendUrl]);

//   return (
//     <div className="main_menu">
//       <nav>
//         <ul>
//           {mainCategories.map((mainCat) => (
//             <li key={mainCat._id} className="active">
//               <a href="#">{mainCat.maincategories} <i className="ion-chevron-down"></i></a>
//               <ul className="mega_menu">
//                 {subCategories[mainCat._id] &&
//                   subCategories[mainCat._id].map((subCat) => (
//                     <li key={subCat._id}>
//                       <a href="#">{subCat.name}</a>
//                     </li>
//                   ))}
//               </ul>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default CategoriesMenu;



























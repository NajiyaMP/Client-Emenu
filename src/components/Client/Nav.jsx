import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Navbar, Nav } from 'react-bootstrap';
import { useLocation,Link } from 'react-router-dom'; // Import useLocation for route detection
import logo from './images/logo/logo.png';

const CustomNavbar = () => {
  const location = useLocation();
  const [activeKey, setActiveKey] = useState('');
  const [settings, setSettings] = useState([]);
  const backendUrl = process.env.REACT_APP_MACHINE_TEST_1_BACKEND_URL;

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await axios.get(`${backendUrl}/admin/getsettings`);
        setSettings(response.data);
      } catch (error) {
        console.error('Error fetching settings:', error);
        // Handle error state or display a message
      }
    };

    fetchSettings();
  }, [backendUrl]);

  // Update activeKey based on the current URL path
  useEffect(() => {
    switch (location.pathname) {
      case '/':
        setActiveKey('home');
        break;
      case '/aboutus':
        setActiveKey('about');
        break;
      case '/collections':
        setActiveKey('collection');
        break;
      case '/new-arrival':
        setActiveKey('new-arrival');
        break;
      case '/contact':
      setActiveKey('contact');
      break;  
      default:
        setActiveKey('');
        break;
    }
  }, [location.pathname]);

  const handleSelect = (selectedKey) => {
    setActiveKey(selectedKey);
  };

  return (
    <Navbar expand="lg" className="custom-navbar d-flex justify-content-between">
        {/* {settings.map((setting) => (
        <Navbar.Brand key={setting._id} href="/" className="navbar-brand">
            <img
                className="logo-img"
                src={`${backendUrl}/images/${setting.image}`}
                alt="Company Logo"
            />
        </Navbar.Brand>
        ))}  */}
      <Navbar.Brand href="/" className="navbar-brand">
        <img src={logo} alt="Logo" className="logo-img" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar-links" activeKey={activeKey} onSelect={handleSelect} style={{paddingRight:'4rem'}}>
          <Link  to={'/'}  eventKey="home" className={`nav-link ${activeKey === 'home' ? 'active' : ''}`} style={{textDecoration:'none'}}> <li>Home</li></Link>
          <Link  to={'/aboutus'} eventKey="about" className={`nav-link ${activeKey === 'about' ? 'active' : ''}`}  style={{textDecoration:'none'}}> <li>About us</li></Link>
          <Link  to={'/collections'}   eventKey="collection" className={`nav-link ${activeKey === 'collection' ? 'active' : ''}`} style={{textDecoration:'none'}}> <li>Collections</li></Link>
          <Link  to={'/collections'}   eventKey="new-arrivals" className={`nav-link ${activeKey === 'new-arrivals' ? 'active' : ''}`} style={{textDecoration:'none'}}> <li>New-Arrivals</li></Link>
          <Link  to={'/'}   eventKey="contact" className={`nav-link ${activeKey === 'contact' ? 'active' : ''}`} style={{textDecoration:'none'}}> <li>Contact</li></Link>
       

        </Nav>
        <div className='ml-auto navbar-links'>
          <Link  to={'/'}   eventKey="cart" className={`nav-link ${activeKey === 'cart' ? 'active' : ''}`} style={{textDecoration:'none'}}>
           
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
              </svg>
            
          </Link>

        </div>

      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;





// import React from 'react';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import icon from './images/icon/icon_phone.png';
// import logo from './images/logo/bgg.png';
// // import navp from './images/nav-product/product.jpg';
// // import p2 from './images/nav-product/product2.jpg';
// import { Link } from 'react-router-dom';


// const Navbar = () => {
//     return (
//         <div className="home_black_version">
//             <header className="header_area header_black">
//                 {/* header top starts */}
//                 <div className="header_top">
//                     <div className="container">
//                       <div className="row align-items-center">
//                           {/* <div className="col-lg-6 col-md-6">
//                               <div className="social_icone">
//                                   <ul>
//                                       <li><a href="#"><i className="ion-social-facebook"></i></a></li>
//                                       <li><a href="#"><i className="ion-social-twitter"></i></a></li>
//                                       <li><a href="#"><i className="ion-social-instagram"></i></a></li>
//                                       <li><a href="#"><i className="ion-social-linkedin"></i></a></li>
//                                       <li><a href="#"><i className="ion-social-youtube"></i></a></li>
//                                   </ul>
//                               </div>
//                           </div> */}
//                           {/* <div className="col-lg-6 col-md-6">
//                               <div className="top_right text-right">
//                                   <ul>
//                                       <li className="language">
//                                           <a href="#">English <i className="ion-chevron-down"></i></a>
//                                           <ul className="dropdown_language">
//                                               <li><a href="#">French</a></li>
//                                               <li><a href="#">Germany</a></li>
//                                               <li><a href="#">Hindi</a></li>
//                                           </ul>
//                                       </li>
//                                       <li className="currency">
//                                           <a href="#">INR <i className="ion-chevron-down"></i></a>
//                                           <ul className="dropdown_currency">
//                                               <li><a href="#">USD - Dollar</a></li>
//                                               <li><a href="#">EUR - Euro</a></li>
//                                               <li><a href="#">GBP - British Pound</a></li>
//                                           </ul>
//                                       </li>
//                                       <li className="top_links">
//                                           <a href="#">My Account <i className="ion-chevron-down"></i></a>
//                                           <ul className="dropdown_links">
//                                               <li><a href="#">Checkout</a></li>
//                                               <li><a href="#">My Account</a></li>
//                                               <li><a href="#">Shopping Cart</a></li>
//                                               <li><a href="#">Wishlist</a></li>
//                                           </ul>
//                                       </li>
//                                   </ul>
//                               </div>
//                           </div> */}
//                       </div>
//                     </div>
//                 </div>
//                 {/* header top ends */}

//                 {/* header middle starts */}
//                 <div className="header_middel">
//                     <div className="container">
//                       <div class="row align-items-center">
//                         <div className="col-lg-5">
//                                 <div className="home_contact">
//                                     <div className="contact_icone">
//                                         <img src={icon} alt=""/>

//                                     </div>
//                                     <div className="contact_box">
//                                         <p>Inquiry:</p>
//                                         <h6 style={{color:'#cba73b'}}>
//                                             <a href="mailto:Ajmal@naherit.com" style={{color: 'inherit', textDecoration: 'none'}}>email:Ajmal@naherit.com</a>
//                                         </h6>
//                                     </div>
//                                 </div>
//                         </div>
                        

//                         <div className="col-lg-2 col-md-3 col-4">
//                             <div className="logo">
//                                 <a href="/"><img src={logo} alt=""/></a>
//                             </div>
//                         </div>

                        

//                         {/* <div className="col-lg-5 col-md-7 col-6">
//                             <div className="middel_right">
//                                 <div className="search_btn">
//                                     <a href="#"><i className="ion-ios-search-strong"></i></a>
//                                     <div className="dropdown_search">
//                                         <form action="#">
//                                             <input type="text" placeholder="Search Product ...."/>
//                                             <button type="submit"><i className="ion-ios-search-strong"></i></button>
//                                         </form>
//                                     </div>
//                                 </div>
//                                 <div className="wishlist_btn">
//                                     <a href="#"><i className="ion-heart"></i></a>
//                                 </div>
//                                 <div className="cart_link">
//                                     <a href="#"><i className="ion-android-cart"></i><span className="cart_text_quantity">Rs.
//                                             67,598</span><i className="ion-chevron-down"></i></a>
//                                     <span className="cart_quantity">2</span>

//                                     <div className="mini_cart">
//                                         <div className="cart_close">
//                                             <div className="cart_text">
//                                                 <h3>cart</h3>
//                                             </div>
//                                             <div className="mini_cart_close">
//                                                 <a href="javascript:void(0)"><i className="ion-android-close"></i></a>
//                                             </div>
//                                         </div>
//                                         <div className="cart_item">
//                                             <div className="cart_img">
//                                                 <a href="#"><img src={navp} alt=""/></a>
//                                             </div>
//                                             <div classNameName="cart_info">
//                                                 <a href="#">Earings</a>
//                                                 <span className="quantity">Qty : 1</span>
//                                                 <span className="price_cart">Rs. 54,599</span>
//                                             </div>
//                                             <div className="cart_remove">
//                                                 <a href="#"><i className="ion-android-close"></i></a>
//                                             </div>
//                                         </div>
//                                         <div className="cart_item">
//                                             <div className="cart_img">
//                                                 <a href="#"><img src={p2} alt=""/></a>
//                                             </div>
//                                             <div className="cart_info">
//                                                 <a href="#">Bracelet</a>
//                                                 <span className="quantity">Qty : 1</span>
//                                                 <span className="price_cart">Rs. 12,999</span>
//                                             </div>
//                                             <div className="cart_remove">
//                                                 <a href="#"><i className="ion-android-close"></i></a>
//                                             </div>
//                                         </div>
//                                         <div className="cart_total">
//                                             <span>Subtotal : </span>
//                                             <span>Rs. 67,598</span>
//                                         </div>
//                                         <div className="mini_cart_footer">
//                                             <div className="cart_button view_cart">
//                                                 <a href="#">View Cart</a>
//                                             </div>
//                                             <div className="cart_button checkout">
//                                                 <a href="#" className="active">Checkout</a>
//                                             </div>
//                                         </div>
//                                     </div>
//           </div>
//       </div>
//                         </div> */}
//                       </div>
//                     </div>
//                 </div>
//                 {/* header middle ends */}

//                 {/* header bottom starts */}
//                 <div className="header_bottom sticky-header">
//                     <div className="container">
//                     <div className="row align-items-center">
//                         <div className="col-12">
//                             <div className="main_menu_inner">
//                                 <div className="logo_sticky">
//                                     <Link  to={'/'}> <img src={logo} alt="logo"/></Link>
                                    
//                                 </div>
//                                 <div className="main_menu">
//                                     <nav>
//                                         <ul>
//                                             {/* <li className="active">
//                                                 <Link href="/">Home <i className="ion-chevron-down"></i></Link>
//                                                 <ul className="sub_menu">
//                                                     <li><a href="#">Banner</a></li>
//                                                     <li><a href="#">Featured</a></li>
//                                                     <li><a href="#">Collection</a></li>
//                                                     <li><a href="#">Best Selling</a></li>
//                                                     <li><a href="#">News</a></li>
//                                                     <li><a href="#">Blog</a></li>
//                                                 </ul> 
//                                             </li>  */}
//                                             <li className="active">
//                                                 <Link  to={'/'}  style={{textDecoration:'none'}}> <li><b>Home</b></li></Link>

//                                             </li>
//                                             <li className="active">
//                                                 <Link  to={'/aboutus'} style={{textDecoration:'none'}}> <li  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><b>About us</b></li></Link>

//                                             </li>
//                                             <li className="active">
//                                                 <Link  to={'/collections'} style={{textDecoration:'none'}}> <li  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><b>Collections</b></li></Link>

//                                             </li>
                                           

                                            
//                                             {/* <li><a href="/products"></a>Collecion</li> */}

//                                             {/* <li>
//                                                 <a href="#">Category <i className="ion-chevron-down"></i></a>
//                                                 <ul className="mega_menu">
//                                                     <li>
//                                                         <a href="#">Women</a>
//                                                         <ul>
//                                                             <li><a href="#">Earring</a></li>
//                                                             <li><a href="#">Pendant</a></li>
//                                                             <li><a href="#">Rings</a></li>
//                                                             <li><a href="#">Chain</a></li>
//                                                             <li><a href="#">Bangles</a></li>
//                                                         </ul>
//                                                     </li>
//                                                     <li>
//                                                         <a href="#">Men</a>
//                                                         <ul>
//                                                             <li><a href="#">Ring</a></li>
//                                                             <li><a href="#">Pendant</a></li>
//                                                             <li><a href="#">Bracelet</a></li>
//                                                             <li><a href="#">Chain</a></li>
//                                                             <li><a href="#">Gemstone</a></li>
//                                                         </ul>
//                                                     </li>
//                                                     <li>
//                                                         <a href="#">Other</a>
//                                                         <ul>
//                                                             <li><a href="#">Platinium</a></li>
//                                                             <li><a href="#">Silver</a></li>
//                                                             <li><a href="#">Coins</a></li>
//                                                             <li><a href="#">Gift Card</a></li>
//                                                         </ul>
//                                                     </li>

//                                                 </ul>
//                                             </li>
//                                             <li>
//                                                 <a href="#">Uncut Diamonds <i className="ion-chevron-down"></i></a>
//                                                 <ul className="sub_menu pages">
//                                                     <li><a href="#">Earrings</a></li>
//                                                     <li><a href="#">Pendant</a></li>
//                                                     <li><a href="#">Ring</a></li>
//                                                     <li><a href="#">Bracelet</a></li>
//                                                     <li><a href="#">Necklace Set</a></li>
//                                                 </ul>
//                                             </li>
                                            
//                                             <li>
//                                                 <a href="#">Special Collection <i className="ion-chevron-down"></i></a>
//                                                 <ul className="sub_menu pages">
//                                                     <li><a href="#">Gemstone</a></li>
//                                                     <li><a href="#">Gold</a></li>
//                                                     <li><a href="#">Rose Gold</a></li>
//                                                     <li><a href="#">Silver</a></li>
//                                                 </ul>
//                                             </li> */}
//                                         </ul>
//                                     </nav>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     </div>
//                 </div>


                
//                 {/* header bottom ends */}
//             </header>
//         </div>
//     );
// }

// export default Navbar;

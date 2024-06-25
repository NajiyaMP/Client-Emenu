import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';
import Maincategory from './Maincategory';
import Navbar from './Nav';

const ViewDetails = () => {
  const location = useLocation();
  const { item } = location.state;

  // State to track the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to handle mouse over event
  const handleMouseOver = () => {
    if (item.image.length > 1) {
      // Cycle through the images
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % item.image.length);
    }
  };

  // Function to handle mouse out event
  const handleMouseOut = () => {
    // Reset to the first image
    setCurrentImageIndex(0);
  };

  // Function to handle WhatsApp redirection
  const redirectToWhatsApp = (order) => {
    const phoneNumber = '+971585023411';
    const imageUrl = `${process.env.REACT_APP_MACHINE_TEST_1_BACKEND_URL}/images/${order.image[currentImageIndex]}`;
    const message = `Hi, I'd like to order  ${order.dishes} for AED ${order.price}.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className='container-dark'>
      <Navbar/>
      <Maincategory/>
      <div className="container mt-5">
        <Row>
          <Col md={6}  className="d-flex align-items-center justify-content-center">
            <img
              src={`${process.env.REACT_APP_MACHINE_TEST_1_BACKEND_URL}/images/${item.image[currentImageIndex]}`}
              alt={item.dishes}
              className="item-image"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              style={{ width: '60%', height: 'auto', cursor: 'pointer', transition: 'all 0.3s ease-in-out' }}
            />
          </Col>
          <Col md={6} className="d-flex align-items-center justify-content-center">
            <div className="details text-center">
              <h6>{item.Itemnumber}</h6>
              <h2><b>{item.dishes}</b></h2>
              <h6>{item.description}</h6>
              <h4>Price: AED {item.price}</h4>
              <h6>Price Inclusive of all taxes</h6>
              <h6 className="weight">Weight: {item.weight}gm</h6>
              <h6>Purity: {item.purity}</h6>
              <Button
                onClick={() => redirectToWhatsApp(item)}
                className="btn btn-primary"
              >
                Buy now
              </Button>
              <hr className="divider" />
              <div className="features">
                <div className="feature-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-gem" viewBox="0 0 16 16">
                    <path d="M3.1.7a.5.5 0 0 1 .4-.2h9a.5.5 0 0 1 .4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 0 1-.8 0L.1 5.3a.5.5 0 0 1 0-.6zm11.386 3.785-1.806-2.41-.776 2.413zm-3.633.004.961-2.989H4.186l.963 2.995zM5.47 5.495 8 13.366l2.532-7.876zm-1.371-.999-.78-2.422-1.818 2.425zM1.499 5.5l5.113 6.817-2.192-6.82zm7.889 6.817 5.123-6.83-2.928.002z"/>
                  </svg>
                  <h6>Purity guaranteed</h6>
                </div>
                <div className="feature-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 1 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5m14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5"/>
                  </svg>
                  <h6>Exchange across all stores</h6>
                </div>
              </div>
              <hr className="divider" />
              <h5>Still Confused What to Buy?</h5>
              <h6>Get on live chats with our design experts on WhatsApp, or visit your nearest store for a closer look and more details about the product.</h6>
              <Button
                onClick={() => redirectToWhatsApp(item)}
                className="btn btn-secondary"
              >
                Talk to an Expert
              </Button>
            </div>
          </Col>
        </Row>
        <div className="product-details">
          <h2>Product Details</h2>
          <h6>The radiance of stars forms the inspiration for this enchanting bracelet. Exquisite and stunning, this is sure to be your go-to jewellery!</h6>
          <h4>Specification</h4>
          <h6>Brand: {item.details}</h6>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;


// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import { Row, Col, Button } from 'react-bootstrap';
// import Nav from './Nav';
// import { Link } from 'react-router-dom';

// const ViewDetails = () => {
//   const location = useLocation();
//   const { item } = location.state;

//   const redirectToWhatsApp = (order) => {
//     const phoneNumber = '+971 58 502 3411'; 
//     // Construct the full URL for the image
//     const imageUrl = `${process.env.REACT_APP_MACHINE_TEST_1_BACKEND_URL}/images/${order.image}`;
//     const message = `Hi, I'd like to order  ${imageUrl}  ${order.dishes} for ₹${order.price}. `;
//     const encodedMessage = encodeURIComponent(message);
//     const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
//     window.open(whatsappUrl, '_blank');
//   };


//   // const redirectToWhatsApp = (order) => {
//   //   const phoneNumber = '+919778164782'; 
//   //   const message = `Hi, I'd like to order ${order.image} ${order.dishes} for ₹${order.price}`;
//   //   const encodedMessage = encodeURIComponent(message);
//   //   const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
//   //   window.open(whatsappUrl, '_blank');
//   // };

//   return (
//     <div>
//       {/* <Nav/> */}
//       <div className="container mt-5">
//         <Row>
//           <Col md={6}>
//             <img 
//               src={`${process.env.REACT_APP_MACHINE_TEST_1_BACKEND_URL}/images/${item.image}`} 
//               alt={item.dishes} 
//               className="item-image" 
//             />
//           </Col>
//           <Col md={6} className="d-flex align-items-center justify-content-center">
//             <div className='details text-center'>
//               <h6>{item.Itemnumber}</h6>
//               <h2><b>{item.dishes}</b></h2>
//               <h6>{item.description}</h6>
//               <h4>Price: AED {item.price}</h4>
//               <h6>Price Inclusive of all taxes</h6>
//               <h6 className="weight">Weight: {item.weight}gm</h6>
//               <h6>Purity: {item.purity}</h6>
//               <Button 
//                 onClick={() => redirectToWhatsApp(item)} 
//                 className="btn-buy"
//               >
//                 Buy now
//               </Button>
//               <hr className="divider" />
//               <div className="features">
//                 <div className="feature-item">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-gem" viewBox="0 0 16 16">
//                     <path d="M3.1.7a.5.5 0 0 1 .4-.2h9a.5.5 0 0 1 .4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 0 1-.8 0L.1 5.3a.5.5 0 0 1 0-.6zm11.386 3.785-1.806-2.41-.776 2.413zm-3.633.004.961-2.989H4.186l.963 2.995zM5.47 5.495 8 13.366l2.532-7.876zm-1.371-.999-.78-2.422-1.818 2.425zM1.499 5.5l5.113 6.817-2.192-6.82zm7.889 6.817 5.123-6.83-2.928.002z"/>
//                   </svg>
//                   <h6>Purity guaranteed</h6>
//                 </div>
//                 <div className="feature-item">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-right" viewBox="0 0 16 16">
//                     <path fillRule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 1 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5m14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5"/>
//                   </svg>
//                   <h6>Exchange across all stores</h6>
//                 </div>
//               </div>
//               <hr className="divider" />
//               <h5>Still Confused What to Buy?</h5>
//               <h6>Get on live chats with our design experts on WhatsApp, or visit your nearest store for a closer look and more details about the product.</h6>
//               <Button 
//                 onClick={() => redirectToWhatsApp(item)} 
//                 className="btn-talk-expert"
//               >
//                 Talk to an Expert
//               </Button>
//             </div>
//           </Col>
//         </Row>
//         <div className="product-details">
//           <h2>Product Details</h2>
//           <h6>The radiance of stars forms the inspiration for this enchanting bracelet. Exquisite and stunning, this is sure to be your go-to jewellery!</h6>
//           <h4>Specification</h4>
//           <h6>Brand: {item.details}</h6>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ViewDetails;














// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import { Button,Row,Col } from 'react-bootstrap';
// import Nav from './nav';
// import { Link } from 'react-router-dom';


// const ViewDetails = () => {
//   const location = useLocation();
//   const { item } = location.state;

//   const redirectToWhatsApp = (order) => {
//     const phoneNumber = '+919778164782'; 
//     const message = `Hi, I'd like to order ${order.dishes} for ₹${order.price}`;
//     const encodedMessage = encodeURIComponent(message);
//     const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
//     window.open(whatsappUrl, '_blank');
//   };

//   return (
//     <div >
//       <Nav/>
//       <div  className="container mt-5">

//         <Row>
//           <Col md={6}>
//             <img src={`${process.env.REACT_APP_MACHINE_TEST_1_BACKEND_URL}/images/${item.image}`} alt={item.dishes} style={{ width: '56%', height: 'auto',border:"1px solid #dacece" }} />

//           </Col>
//           <Col md={6} className="container-fluid d-flex align-items-center justify-content-center">
//             <div className='dets text-center' >
//               <h6>{item.Itemnumber}</h6>
//               <h2><b>{item.dishes}</b></h2>
//               <h6>{item.description}</h6>
//               <h4>Price: ₹{item.price}</h4>
//               <h6>Price Inclusive of all taxes</h6>
//               <h6 style={{border:'1px solid grey',padding:'4px'}}>Weight:{item.weight}gm</h6>
//               <h6>purity:{item.purity}</h6>
//               <div>
//                 <button onClick={() => redirectToWhatsApp(item)} style={{ backgroundColor: "green", color: "white",border: "none",borderRadius: "3px",padding: "5px"}}>Buy now</button>
//               </div>
//               <div style={{borderBottom:'2px solid violet'}}> </div>

//               <div style={{padding:'10px'}}>
//                 <div style={{display:'flex',gap:'1rem'}}>
//                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gem" viewBox="0 0 16 16">
//                     <path d="M3.1.7a.5.5 0 0 1 .4-.2h9a.5.5 0 0 1 .4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 0 1-.8 0L.1 5.3a.5.5 0 0 1 0-.6zm11.386 3.785-1.806-2.41-.776 2.413zm-3.633.004.961-2.989H4.186l.963 2.995zM5.47 5.495 8 13.366l2.532-7.876zm-1.371-.999-.78-2.422-1.818 2.425zM1.499 5.5l5.113 6.817-2.192-6.82zm7.889 6.817 5.123-6.83-2.928.002z"/>
//                   </svg>
//                   <h6>Purity guaranteed</h6>
//                 </div>
//                 <div style={{display:'flex',gap:'1rem'}}>
//                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-right" viewBox="0 0 16 16">
//                   <path fill-rule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5m14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5"/>
//                   </svg>
//                   <h6>Exchange across allover the stores</h6>
//                 </div>
//               </div>
//               <div style={{borderBottom:'2px solid violet'}}> </div>
              
//               <h5>Still Confused What to Buy?</h5>
//               <h6>Get on live chats  with our design experts in whatsapp, or visit your nearest  store of us to get an closer look and know more about the product.</h6>
//               <button onClick={() => redirectToWhatsApp(item)} style={{    backgroundColor: "#550055", color: "white",border: "none",borderRadius: "3px",padding: "5px"}}>Talk to an Expert</button>

//             </div>
//           </Col>
//         </Row>
//         <div>
//           <h2>Product Details</h2>
//           <h6>The radiance of stars form the inspiration for this enchanting bracelet. Exquisite and stunning, this is sure to be your go to jewellery!</h6>
//           <h4>Specification</h4>
//           <h6>Brand:{item.details}</h6>
//         </div>
//       </div>
     
      
//     </div>
//   );
// };

// export default ViewDetails;


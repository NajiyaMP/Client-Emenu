import React from 'react'
import Logs from './images/logo/bgg.png'

import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div>
        <div className="container-fluid foots" style={{backgroundColor:'#2d2d2d'}}>
            <div className="container">
                <div className="row p-4">
                    <div className="col-12 col-lg-4 py-3">
                        <img className='footer-logo' src={Logs} alt="" />
                        <div className='mt-5'>
                            <h6 style={{color:'#cba73b'}}>Gold souq</h6>
                            <h6 style={{color:'#cba73b'}}>All over Dubai</h6>
                            <h6 style={{color:'#cba73b'}}>
                                <a href="tel:+919605618836" style={{color: 'inherit', textDecoration: 'none'}}>contact:+971 58 502 3411</a>
                            </h6>
                            <h6 style={{color:'#cba73b'}}>
                                <a href="mailto:Ajmal@naherit.com" style={{color: 'inherit', textDecoration: 'none'}}>email:Ajmal@naherit.com</a>
                            </h6>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.016704595287!2d55.29813610000001!3d25.270023499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43438edb60cd%3A0xbc047ee4e16b356d!2sDubai%20Gold%20Souk!5e0!3m2!1sen!2sin!4v1718081092743!5m2!1sen!2sin" width={"80%"} height={'80%'} style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="col-12 col-lg-4 text-light montserrat-400 " style={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
                       <div>
                       <h4 style={{color:'black'}}>GO TO</h4>
                        <ul style={{listStyle:'none'}}>
                           <Link style={{textDecoration:'none'}} to={'/'}> <li style={{color:'#cba73b'}} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><b>Home</b></li></Link>
                           <Link style={{textDecoration:'none'}} to={'/aboutus'}> <li style={{color:'#cba73b'}} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><b>About us</b></li></Link>
                           <Link style={{textDecoration:'none'}} to={'/products'}> <li style={{color:'#cba73b'}} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><b>Products</b></li></Link>
                            
                        </ul>
                       </div>
                        
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
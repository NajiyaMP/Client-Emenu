import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Navbar from './Nav';
import Products from './Products';
import Footer from './Footer';
import Gift from './Gift';
import banner1 from './images/banner/bg-1.jpg';
import banner2 from './images/banner/bg-2.jpg';
import banner3 from './images/banner/bg-3.jpg';
import Maincategory from './Maincategory';
import { Link } from 'react-router-dom';





const Home = () => {
    // Slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
    };

    return (
        <div>
            <Navbar/>
            <Maincategory/>
            <div className="slider_area slider_black">
                <Slider {...settings}>
                    <div className="single_slider">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-12">
                                    <div className="slider_content">
                                        <p>exclusive offer -20% off this week</p>
                                        <h1>Necklaces</h1>
                                        <span>22 Carat gold necklace for wedding</span>
                                        <p className="slider_price">starting at <span>AED. 75,999</span></p>
                                            <Link  to={'/collections'} className="button"><b>Shop Now</b></Link>

                                        {/* <a href="/products" className="button"></a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="single_slider2" >
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-12">
                                    <div className="slider_content">
                                        <p>exclusive offer -40% off this week</p>
                                        <h1>Earings and Pendant</h1>
                                        <span>Complete bridal set with white pearls</span>
                                        <p className="slider_price">starting at <span>AED. 89,499</span></p>
                                        <Link  to={'/collections'} className="button"><b>Shop Now</b></Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="single_slider3" >
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-12">
                                    <div className="slider_content">
                                        <p>exclusive offer -10% off this week</p>
                                        <h1>Wedding Rings</h1>
                                        <span>Ashirwaad Special wedding rings for couples.</span>
                                        <p className="slider_price">starting at <span>AED. 14,999</span></p>
                                        <Link  to={'/collections'} className='button'> <b>Shop Now</b></Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
            <section className="banner_section banner_black">
                <div className="container" style={{padding:'37px'}}>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single_banner">
                                <div className="banner_thumb">
                                    <a href="#"><img src={banner1} alt="banner1"/></a>
                                    <div className="banner_content">
                                        <p>New Design</p>
                                        <h2>Small design Rings</h2>
                                        <span>Sale 20% </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single_banner">
                                <div className="banner_thumb">
                                    <a href="#"><img src={banner2}  alt="banner2"/></a>
                                    <div className="banner_content">
                                        <p>Bestselling Rings</p>
                                        <h2>White gold rings</h2>
                                        <span>Sale 10% </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single_banner">
                                <div className="banner_thumb">
                                    <a href="#"><img src={banner3} alt="banner3"/></a>
                                    <div className="banner_content">
                                        <p>Featured Rings</p>
                                        <h2>Platinium Rings</h2>
                                        <span>Sale 30% </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div>
                <Products/>
            </div>
            <div>
                <Gift/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
}

export default Home;

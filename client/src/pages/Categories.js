import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/cart';
import {FaArrowRight} from 'react-icons/fa'
import {FaArrowLeft} from 'react-icons/fa'
import useCategory from '../hooks/useCategory';



const Categories = () => {
    const categories = useCategory();
    const navigate =useNavigate();
  
    
    // Check if categories exist and have at least two items
    if (!categories || categories.length < 2) {
      return null; // Render nothing if there are not enough categories
    }

      
  
  
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <div
      className={className}
      onClick={onClick}
      style={{
        color: "grey", // Grey color for the arrow
        fontSize: "24px", // Adjust the font size as needed
      }}
    >
      <FaArrowRight /> {/* Right arrow icon */}
    </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      
  <div
        className={className}
        onClick={onClick}
        style={{
          color: "grey", // Grey color for the arrow
          fontSize: "24px",// Adjust the font size as needed
        }}
      >
        <FaArrowLeft /> {/* Left arrow icon */}
      </div>
    );
  }
  
    const settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              autoplay: true,
              afterChange: function(index) {
                console.log(
                  `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
                );
              },
            }
          },
          {
            breakpoint: 635,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              autoplay: true,
              afterChange: function(index) {
                console.log(
                  `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
                );
              },
            }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            autoplay: true,            
          }
        },
      ],
    };
  
    return (<>
<h3 className='mb-2 mt-5 text-center'>OUR PREMIUM COLLECTIONS</h3>
      <div className="product-slider cat" style={{marginRight:"30px", marginLeft:"30px"}}>
        <Slider {...settings}>
                     
                      <div className='product-card col-lg-5 col-md-4 '  onClick={()=> 
                          navigate(`/category/sapphire-plain-cotton`)}>
                      <img src='/saphirecotton-imgs/saph(1).jpeg' alt='Category 1' />
                      <p>{categories[0].name}</p>
                      </div>
                      <div className='product-card col-lg-5 col-md-4 '  onClick={()=> 
                          navigate(`/category/sapphire-metching-cotton`)}>
                      <img src='/saphirematching-imgs/saphmatch(14)copy.jpeg' alt='Category 2' />
                      <p>{categories[1].name}</p>
                      </div>
                      <div className='product-card col-lg-5 col-md-4 '  onClick={()=> 
                          navigate(`/category/dynasty-plain-cotton`)}>
                      <img src='/images/dynastycollec.jpg' alt='Category 2' />
                      <p>{categories[2].name}</p>
                      </div>
                      <div className='product-card col-lg-5 col-md-4 '  onClick={()=> 
                          navigate(`/category/pasha-plain-cotton`)}>
                      <img src='/images/pashacollec.jpg' alt='Category 3' />
                      <p>{categories[3].name}</p>
                      </div>
                      <div className='product-card col-lg-5 col-md-4 '  onClick={()=> 
                          navigate(`/category/korean-boski`)}>
                      <img src='/images/koreancollec.jpg' alt='Category 3' />
                      <p>{categories[4].name}</p>
                      </div>
                      <div className='product-card col-lg-5 col-md-4 '  onClick={()=> 
                          navigate(`/category/grace-dark-washandware`)}>
                      <img src='/images/cracecollec.jpg' alt='Category 3' />
                      <p>{categories[5].name}</p>
                      </div>
                      <div className='product-card col-lg-5 col-md-4 '  onClick={()=> 
                          navigate(`/category/kamalia-khaddar-winter-collection`)}>
                      <img src='/images/kamaliyacollec.jpg' alt='Category 3' />
                      <p>{categories[6].name}</p>
                      </div>
                      <div className='product-card col-lg-5 col-md-4 '  onClick={()=> 
                          navigate(`/category/sapphire-lite-washandware`)}>
                      <img src='/images/saphwashcollec.jpg' alt='Category 3' />
                      <p>{categories[7].name}</p>
                      </div>
                      <div className='product-card col-lg-5 col-md-4 '  onClick={()=> 
                          navigate(`/category/slub-desighn-washandware`)}>
                      <img src='/images/slubcollec.jpg' alt='Category 3' />
                      <p>{categories[8].name}</p>
                      </div>
                      <div className='product-card col-lg-5 col-md-4 '  onClick={()=> 
                          navigate(`/category/gulahmed-latha-cotton`)}>
                      <img src='/images/gulcollec.jpg' alt='Category 3' />
                      <p>{categories[9].name}</p>
                      </div>
                      <div className='product-card col-lg-5 col-md-4 '  onClick={()=> 
                          navigate(`/category/legacy-washandware-wool`)}>
                      <img src='/images/legacycollec.jpg' alt='Category 3' />
                      <p>{categories[10].name}</p>
                      </div>
                      <div className='product-card col-lg-5 col-md-4 '  onClick={()=> 
                          navigate(`/category/banu-pure-wool`)}>
                      <img src='/banuwool-imgs/banu(3).jpeg' alt='Category 3' />
                      <p>{categories[11].name}</p>
                      </div>
                      <div className='product-card col-lg-5 col-md-4 '  onClick={()=> 
                          navigate(`/category/sparkle-wool-collection`)}>
                      <img src='/images/sparklecollec.jpg' alt='Category 2' />
                      <p>{categories[12].name}</p>
                      </div>
                      <div className='product-card col-lg-5 col-md-4 '  onClick={()=> 
                          navigate(`/category/paper-cotton-by-gulahmed`)}>
                      <img src='/images/gullpaperctncollec.jpg' alt='Category 2' />
                      <p>{categories[13].name}</p>
                      </div>
                      
                      
                  
                  
                 
              
        </Slider>
      </div>
      </>
    );
  };
  
  export default Categories;

import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/cart';
import {FaArrowRight} from 'react-icons/fa'
import {FaArrowLeft} from 'react-icons/fa'




const HomePageProduct = () => {
    const navigate =useNavigate();
  const [products, setProducts] =useState([]);

  //get all products
const getAllProducts =async()=>{
  try {
      const {data}=await axios.get("/api/v1/product/get-product");
      setProducts(data.products)
  } catch (error) {
      console.log(error);
  }

}

useEffect(()=>{
  getAllProducts();
},[])


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
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
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
        breakpoint: 480,
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
    ],
  };

  return (<>
    <h2 className='text-center m-3 mt-5'>Shop by Product</h2>
    <div className="product-slider" style={{margin:"0 30px"}}>
      <Slider {...settings}>
       {products?.map((p)=>(
                   
                    <div className='product-card' style={{border:"none",width:"300px", height:"300px"}} key={p._id}>
                        <img 
                        src={`/api/v1/product/product-photo/${p._id}`}
                        className='card-img-top'
                        style={{width:"100%", height:"300px"}}
                        alt={p.name}
                        onClick={()=> 
                          navigate(`/product/${p.slug}`)} />

                        <div className='card-body'>
                            <p className='card-title mt-1' style={{fontWeight:"bold"}}>{p.name}</p>
                            <p style={{fontSize:"15px"}}><span>Rs. </span>{p.price}</p>
                            
                        </div>
                    </div>
                
                
               
            ))}
      </Slider>
    </div>
    </>
  );
};

export default HomePageProduct;
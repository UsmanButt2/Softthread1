import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/cart';
import {FaArrowRight} from 'react-icons/fa'
import {FaArrowLeft} from 'react-icons/fa'


const HomePageSaleProduct = () => {
    const navigate =useNavigate();
  const [saleproducts, setsaleProducts] =useState([]);

  //get all products
const getAllSaleProducts =async()=>{
  try {
      const {data}=await axios.get("/api/v1/saleproduct/get-saleproducts");
      setsaleProducts(data.saleproducts)
  } catch (error) {
      console.log(error);
  }

}

useEffect(()=>{
  getAllSaleProducts();
},[])


function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
    className={className}
    onClick={onClick}
    style={{
      color: "grey",
      fontSize: "24px", 
    }}
  >
    <FaArrowRight /> 
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
        color: "grey", 
        fontSize: "24px",
      }}
    >
      <FaArrowLeft /> 
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
    <h2 className='text-center m-3 mt-5'>Sale</h2>
    <div className="product-slider" style={{marginRight:"30px", marginLeft:"30px"}}>
      <Slider {...settings}>
       {saleproducts?.map((p)=>(
                   
                    <div className='product-card' style={{border:"none", width:"380px", height:"380px"}} key={p._id}>
                        <img 
                        src={`/api/v1/saleproduct/product-photo/${p._id}`}
                        className='card-img-top'
                        style={{width:"100%", height:"300px"}}
                        alt={p.name}
                        onClick={()=> 
                          navigate(`/saleproduct/${p.slug}`)} />

                        <div className='card-body'>
                            <p className='card-title mt-1' style={{fontWeight:"bold"}}>{p.name}</p>
                            <span className='card-title sale_p'>
                                <p style={{textDecoration:"line-through", paddingRight:"20px"}}>
                                    Rs.{p.saleprice}
                                    </p> 
                                    <p className='card-title'>
                                        Rs.{p.price}
                                        </p>
                                        </span>
                            
                        </div>
                    </div>
                
                
               
            ))}
      </Slider>
    </div>
    </>
  );
};

export default HomePageSaleProduct;
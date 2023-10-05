import React,{useState, useEffect} from 'react'
import Layouts from '../components/Layout/Layouts'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/cart';
import {toast} from 'react-hot-toast'


const CategoryPage = () => {
    const [products, setProducts]=useState([]);
    const [category, setCategory]=useState([]);
    const [cart, setCart] =useCart()
    const params = useParams()
    const navigate =useNavigate();

    useEffect(()=>{
        if (params?.slug) getProductByCat()
    },[params?.slug])
   
    const getProductByCat =async()=>{
        try {
            const {data}=await axios.get(`/api/v1/product/product-category/${params.slug}`)
            setProducts(data?.products)
            setCategory(data?.category)
        } catch (error) {
            console.log(error)
        }
    }
  return (
  <Layouts title={category?.name}>
     <h3 className='text-center m-5'>{category?.name}</h3>
     <div className='row m-3 roli justify-content-center'>
               
                {products?.map((p)=>(
                   
                   <div className='product-card col-lg-3 col-md-4 col-sm-6' style={{border:"none", padding:"0 25px"}} key={p._id}>
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
     </div>
  </Layouts>
   
  )
}

export default CategoryPage
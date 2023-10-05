import React,{useState, useEffect} from 'react'
import Layouts from '../components/Layout/Layouts'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/cart';
import {toast} from 'react-hot-toast'


const SaleCategoryPage = () => {
    const [Saleproducts, setSaleProducts]=useState([]);
    const [category, setCategory]=useState([]);
    const [cart, setCart] =useCart()
    const params = useParams()
    const navigate =useNavigate();

    useEffect(()=>{
        if (params?.slug) getProductByCat()
    },[params?.slug])
   
    const getProductByCat =async()=>{
        try {
            const {data}=await axios.get(`/api/v1/saleproduct/saleproduct-category/${params.slug}`)
            setSaleProducts(data?.Saleproducts)
            setCategory(data?.category)
        } catch (error) {
            console.log(error)
        }
    }
  return (
  <Layouts>
     <h3 className='text-center m-5'>{category?.name}</h3>
     <div className='row m-2 justify-content-center'>
     <div className='col-md-10 col-sm-12 '>
                <div className='row roli justify-content-center'>
                {Saleproducts?.map((p)=>(
                   
                    <div className='card m-3 col-md-3' 
                     key={p._id}>
                        <img 
                        src={`/api/v1/saleproduct/product-photo/${p._id}`}
                        className='card-img-top'
                        alt={p.name} />

                        <div className='card-body'>
                            <h5 className='card-title'>{p.name}</h5>
                            <p className='card-text'>{p.description}</p>
                            <button 
                            className=
                            'btn mb-1 mt-2 col-md-12 col-sm-12 rolibtn' 
                            onClick={()=> 
                            navigate(`/saleproduct/${p.slug}`)}>
                                DETAILS
                                </button>
                            <button 
                            className='btn mt-1 col-md-12 col-sm-12 rolibtn' 
                            onClick={() =>{setCart([...cart,p]);
                                localStorage.setItem('cart', JSON.stringify([...cart, p]))
                            toast.success("Item Added Successfully");
                }}>
                                ADD TO CART
                                </button>
                        </div>
                    </div>
                
                
               
            ))}
            </div>
            
            </div>
     </div>
  </Layouts>
   
  )
}

export default SaleCategoryPage
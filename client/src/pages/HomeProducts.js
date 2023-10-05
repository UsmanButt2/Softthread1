import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Checkbox} from 'antd'


const HomeProducts = () => {
    const [products, setProducts] =useState([]);
const [categories, setCategories]=useState([]);
const [checked, setChecked] =useState([])


//get all categories
const getAllCategories= async()=>{
    try {
      const {data} = await axios.get('/api/v1/category/get-category')
      if (data.success) {
        setCategories(data.category);
      }
    } catch (error) {
      console.log(error)
    }
    }
    
    useEffect(()=>{
      getAllCategories();
    }, []);
    

//get all products
const getAllProducts =async()=>{
    try {
        const {data}=await axios.get("/api/v1/product/get-product");
        setProducts(data.products)
    } catch (error) {
        console.log(error);
    }

}

//filter product category wise
const handlefilter=(value,id)=>{
    let all=[...checked]
    if (value) {
        all.push(id)
    } else {
        all= all.filter(c=> c!==id)
    }
    setChecked(all)
}


    useEffect(()=>{
        getAllProducts();
    },[])
  return (
  <>
{/* <div className='col-md-3'>
    <h3>Filter By Category</h3>  
    <div className='d-flex flex-column'>
    {categories.map((c)=>(
        <Checkbox key={c._id} onChange={(e)=>handlefilter(e.target.checked, c._id)}>
            {c.name}
        </Checkbox>
    ))} 
    </div> 
</div> */}
  
{/* <div className='col-md-12'>
                <h1 className='text-center'>All Product List</h1>
                <div className='row justify-content-center roli'>
                {products?.map((p)=>(
                   
                    <div className='card col-md-4 m-2' style={{width:"20rem"}} key={p._id}>
                        <img 
                        src={`/api/v1/product/product-photo/${p._id}`}
                        className='card-img-top'
                        alt={p.name} />

                        <div className='card-body'>
                            <h5 className='card-title'>{p.name}</h5>
                            <p className='card-text'>{p.description.substring(0, 15)}</p>
                            <button className='btn mb-2 mt-2 col-md-12 col-sm-12 rolibtn'>DETAILS</button>
                            <button className='btn mt-2 col-md-12 col-sm-12 rolibtn'>ADD TO CART</button>
                        </div>
                    </div>
                
                
               
            ))}
            </div>
            
            </div> */}
    
        </>
  )
}

export default HomeProducts

{/* <button className='btn mb-2 mt-2 col-md-12 col-sm-12'>DETAILS</button>
                            <button className='btn mt-2 col-md-12 col-sm-12'>ADD TO CART</button> */}
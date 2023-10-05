import React from 'react'
import Layouts from './../components/Layout/Layouts'
import { useSearch } from '../context/search'
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const [values, setValues]= useSearch();
    const navigate= useNavigate()
  return (
    <Layouts>
        <div className='containet'>
            <div className='text-center'>
                <h1>Search Results</h1>
                <h6 className='p-4'>{values?.results.length < 1 ?
                 'No Products Found' 
                 : `Found ${values?.results.length}`}
                 </h6>

                 <div className='row m-1 roli justify-content-center'>
                {values?.results.map((p)=>(
                   
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
            </div>
        </div>
    </Layouts>
  )
}

export default Search
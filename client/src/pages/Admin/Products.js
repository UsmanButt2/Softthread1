import React, {useState, useEffect} from 'react'
import AdminMenu from '../../components/Layout/AdminMenu'
import Layouts from '../../components/Layout/Layouts'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { Link } from 'react-router-dom'

const Products = () => {
    const [products, setProducts] =useState([])

    console.log(products)

    //get all products
    const getAllProducts = async()=>{
        try {
          const {data} = await axios.get('/api/v1/product/get-product');
          setProducts(data.products);
        } catch (error) {
            console.log(error)
            toast.error('something went wrong')
        }
    }
    useEffect(()=>{
        getAllProducts();
    },[])

    
  return (
   <Layouts>
        <div className='row m-3 justify-content-center'>
                <AdminMenu />
            
            <div className='col-md-9'>
                <h1 className='text-center'>All Product List</h1>
                <p className='text-center mb-5'>{products.length} Products are in store</p>
                <div className='row'>
                {products?.map((p)=>(
                    <div className='col-md-4' key={p._id}>
                <Link to={`/dashboard/admin/products/${p.slug}`}
                className='product-link'>
                    <div className='card m-2' style={{width:"18rem"}} key={p._id}>
                        <img 
                        src={`/api/v1/product/product-photo/${p._id}`}
                        className='card-img-top'
                        alt={p.name} />

                        <div className='card-body'>
                            <h5 className='card-title'>{p.name}</h5>
                            <p className='card-text'>{p.descpt1}</p>
                            <p className='card-text'>{p.descpt2}</p>
                            <p className='card-text'>{p.descpt3}</p>
                            <p className='card-text'>{p.descpt4}</p>
                            <p className='card-text'>{p.descpt5}</p>
                            <p className='card-text'>{p.descpt6}</p>
                            <p className='card-text'>{p.descpt7}</p>
                            <p className='card-text'>{p.descpt8}</p>
                            <p className='card-text'>{p.descpt9}</p>
                            <p className='card-text'>{p.descpt10}</p>
                            <p className='card-text'>{p.descpt11}</p>
                            <p className='card-text'>{p.descpt12}</p>
                        </div>
                    </div>
                
                </Link>
                </div>
            ))}
            </div>
            
            </div>

        </div>
    </Layouts>
  )
}

export default Products
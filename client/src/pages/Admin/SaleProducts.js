import React, {useState, useEffect} from 'react'
import AdminMenu from '../../components/Layout/AdminMenu'
import Layouts from '../../components/Layout/Layouts'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { Link } from 'react-router-dom'

const Products = () => {
    const [saleproducts, setSaleProducts] =useState([])

    console.log(saleproducts)

    //get all products
    const getAllSaleProducts = async()=>{
        try {
          const {data} = await axios.get('/api/v1/saleproduct/get-saleproducts');
          setSaleProducts(data.saleproducts);
        } catch (error) {
            console.log(error)
            toast.error('something went wrong')
        }
    }
    useEffect(()=>{
        getAllSaleProducts();
    },[])
  return (
   <Layouts>
        <div className='row justify-content-center m-2'>
                <AdminMenu />
            
            <div className='col-md-9'>
                <h1 className='text-center'>Sale Product List</h1>
                <p className='text-center mb-5'>{saleproducts.length} Sale Products are in store</p>
                <div className='row'>
                {saleproducts?.map((p)=>(
                    <div className='col-md-4' key={p._id}>
                <Link to={`/dashboard/admin/saleproduct/${p.slug}`}
                className='product-link'>
                    <div className='card m-2' style={{width:"18rem"}} key={p._id}>
                        <img 
                        src={`/api/v1/saleproduct/product-photo/${p._id}`}
                        className='card-img-top'
                        alt={p.name} />

                        <div className='card-body'>
                            <h5 className='card-title'>{p.name}</h5>
                            <span className='card-title sale_p'>
                                <p style={{textDecoration:"line-through", paddingRight:"20px"}}>
                                    Rs.{p.saleprice}
                                    </p> 
                                    <p className='card-title'>
                                        Rs.{p.price}
                                        </p>
                                        </span>
                            
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
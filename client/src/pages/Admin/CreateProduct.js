import React, {useEffect, useState} from 'react'
import Layouts from '../../components/Layout/Layouts'
import AdminMenu from '../../components/Layout/AdminMenu'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import {Select} from 'antd'
import { useNavigate } from 'react-router-dom'

const {Option} = Select

const CreateProduct = () => {
  const [categories, setCategories] = useState([])
  const [category, setCategory] =useState("")
  const [name, setName,] = useState("")
  const [descpt1, setDescpt1,] = useState("")
  const [descpt2, setDescpt2,] = useState("")
  const [descpt3, setDescpt3,] = useState("")
  const [descpt4, setDescpt4,] = useState("")
  const [descpt5, setDescpt5,] = useState("")
  const [descpt6, setDescpt6,] = useState("")
  const [descpt7, setDescpt7,] = useState("")
  const [descpt8, setDescpt8,] = useState("")
  const [descpt9, setDescpt9,] = useState("")
  const [descpt10, setDescpt10,] = useState("")
  const [descpt11, setDescpt11,] = useState("")
  const [descpt12, setDescpt12,] = useState("")
  const [price, setPrice,] = useState("")
  const [shipping, setShipping,] = useState("")
  const [photo, setPhoto,] = useState("")
  const naviagte= useNavigate()


  //get all categories
const getAllCategories= async()=>{
  try {
    const {data} = await axios.get('/api/v1/category/get-category')
    if (data?.success) {
      setCategories(data?.category);
    }
  } catch (error) {
    console.log(error)
    toast.error('Something went wrong in getting Categories')
  }
  }

  useEffect(()=>{
    getAllCategories();
  }, []);
  

  //create product
  const handleCreate=async(e)=>{
e.preventDefault()
try {
  const productData= new FormData()
  productData.append("name", name)
  productData.append("descpt1", descpt1)
  productData.append("descpt2", descpt2)
  productData.append("descpt3", descpt3)
  productData.append("descpt4", descpt4)
  productData.append("descpt5", descpt5)
  productData.append("descpt6", descpt6)
  productData.append("descpt7", descpt7)
  productData.append("descpt8", descpt8)
  productData.append("descpt9", descpt9)
  productData.append("descpt10", descpt10)
  productData.append("descpt11", descpt11)
  productData.append("descpt12", descpt12)
  productData.append("price", price)
  productData.append("category", category)
  productData.append("photo", photo)
  const {data} = axios.post('/api/v1/product/create-product', productData)
  if (data?.success) {
    toast.error(data?.message)
  }else{   
    toast.success('product created successfully')
    naviagte('/dashboard/admin/products')
  }
} catch (error) {
  console.log(error)
  toast.error('something went wrong')
}
  }
  return (
    <Layouts title={'Dashboard - CreateProduct'}>
         <div class="container-fluid ">
        <div className='row justify-content-center'>
            
                <AdminMenu/>
          
            <div className='col-md-10'>
                <h1>Create Product</h1>
                <div className='m-1 w-75'>
                  <Select bordered={false}
                  placeholder="Select a Category"
                  size='Large'
                  showSearch
                  className='form-select mb-3' 
                  onChange={(value) =>{setCategory(value)}}>
                    {categories?.map(c =>(
                      <Option key={c._id} 
                      value={c._id}>
                        {c.name}
                        </Option>
                    ))}
                  </Select>

<div className='mb-3'>
  <label 
  className='btn btn-outline-secondary col-md-12'>
    {photo ? photo.name : "Upload photo"}
    <input type='file'
    name='photo'
    accept='image/*'
    onChange={(e)=>setPhoto(e.target.files[0])}
    hidden />

  </label>
</div>
<div className='mb-3'>
  {photo && (
    <div className='text-center'>
      <img src={URL.createObjectURL(photo)}
      alt='product_photo'
      height={'200px'}
      className='img img-responsive' 
      />
    </div>
  )}
</div>
<div className='mb-3'>
  <input 
  type='text'
  value={name}
  placeholder='write a name'
  className='form-control'
  onChange={(e)=>setName(e.target.value)} />
</div>

<div className='mb-3'>
  <textarea
  type='text'
  value={descpt1}
  placeholder='write a descrition'
  className='form-control'
  onChange={(e)=>setDescpt1(e.target.value)} />
</div>
<div className='mb-3'>
  <textarea
  type='text'
  value={descpt2}
  placeholder='write a descrition'
  className='form-control'
  onChange={(e)=>setDescpt2(e.target.value)} />
</div>
<div className='mb-3'>
  <textarea
  type='text'
  value={descpt3}
  placeholder='write a descrition'
  className='form-control'
  onChange={(e)=>setDescpt3(e.target.value)} />
</div>
<div className='mb-3'>
  <textarea
  type='text'
  value={descpt4}
  placeholder='write a descrition'
  className='form-control'
  onChange={(e)=>setDescpt4(e.target.value)} />
</div>
<div className='mb-3'>
  <textarea
  type='text'
  value={descpt5}
  placeholder='write a descrition'
  className='form-control'
  onChange={(e)=>setDescpt5(e.target.value)} />
</div>
<div className='mb-3'>
  <textarea
  type='text'
  value={descpt6}
  placeholder='write a descrition'
  className='form-control'
  onChange={(e)=>setDescpt6(e.target.value)} />
</div>
<div className='mb-3'>
  <textarea
  type='text'
  value={descpt7}
  placeholder='write a descrition'
  className='form-control'
  onChange={(e)=>setDescpt7(e.target.value)} />
</div>
<div className='mb-3'>
  <textarea
  type='text'
  value={descpt8}
  placeholder='write a descrition'
  className='form-control'
  onChange={(e)=>setDescpt8(e.target.value)} />
</div>
<div className='mb-3'>
  <textarea
  type='text'
  value={descpt9}
  placeholder='write a descrition'
  className='form-control'
  onChange={(e)=>setDescpt9(e.target.value)} />
</div>
<div className='mb-3'>
  <textarea
  type='text'
  value={descpt10}
  placeholder='write a descrition'
  className='form-control'
  onChange={(e)=>setDescpt10(e.target.value)} />
</div>
<div className='mb-3'>
  <textarea
  type='text'
  value={descpt11}
  placeholder='write a descrition'
  className='form-control'
  onChange={(e)=>setDescpt11(e.target.value)} />
</div>
<div className='mb-3'>
  <textarea
  type='text'
  value={descpt12}
  placeholder='write a descrition'
  className='form-control'
  onChange={(e)=>setDescpt12(e.target.value)} />
</div>


<div className='mb-3'>
  <input 
  type='number'
  value={price}
  placeholder='write a price'
  className='form-control'
  onChange={(e)=>setPrice(e.target.value)} />
</div>


<div className='mb-3'>
<Select bordered={false}
                  placeholder="Select shipping"
                  size='Large'
                  showSearch
                  className='form-select mb-3' 
                  onChange={(value) =>{
                    setShipping(value);
                    }}
                    >
                    <Option value='0'>No</Option>
                    <Option value='1'>Yes</Option>
                  </Select>
</div>
<div className='mb-3'>
  <button className='btn' onClick={handleCreate}>CREATE PRODUCT</button>
</div>

                </div>
            </div>
        </div>
        </div>
    </Layouts>
  )
}

export default CreateProduct
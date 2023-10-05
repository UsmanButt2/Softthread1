import React from 'react'
import {BsCartCheck} from 'react-icons/bs'
import { useAuth } from '../context/auth'
import { useNavigate } from 'react-router-dom'
import Layouts from './Layout/Layouts'


const OrderComp = () => {    
  const [auth, setAuth] =useAuth()
  const navigate = useNavigate()
  return (
  <Layouts title={'SoftThreads-textiles-Congratulations'}>
     <div className='row m-4 justify-content-center align-items-center'>
    <div className='col-md-5 text-center justify-content-center align-items-center'>
    <div className='card justify-content-center align-items-center p-4 pb-5 mt-5'>
    <h1 style={{fontSize:"100px"}} className='text-center'><BsCartCheck/></h1>
    <h5>Hey {auth?.user?.name},</h5>
    <h1>Your Order is Confirmed!</h1>
    <p>We'll send you a shipping confirmation email
         as soon as your order ships.</p>
         <button 
         style={{background:"grey",
         padding:"5px", 
         color:"white", 
         borderRadius:"3px", 
         width:"150px", 
         border:"none"}} onClick={()=> 
            navigate('/')}>Back to Shop</button>
         <button 
         style={{background:"grey",
         padding:"5px", 
         margin:"10px 0",
         color:"white", 
         borderRadius:"3px", 
         width:"150px", 
         border:"none"}} onClick={()=> 
            navigate('/dashboard/user/myorder')}>See My Order</button>
    </div>
    
    </div>
    
   </div>
  </Layouts>
  )
}

export default OrderComp
import React, { useState } from 'react'
import styles from '../Auth/LoginC.module.css'
import { Link, useLocation } from 'react-router-dom'
import Layouts from '../../components/Layout/Layouts'
import toast from 'react-hot-toast'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { useAuth } from '../../context/auth'

const Login = () => {
    const [email, setEmail] =useState("");
    const [password, setPassword] =useState("");
    const [auth, setAuth] =useAuth();
    const location =useLocation()
    const navigate = useNavigate()

    //handleSubmit
const handleSubmit =async (e)=>{
    e.preventDefault();
    try {
        const res= await axios.post('/api/v1/auth/login', {
            email,
            password,
            });
        if(res.data.success){
            toast.success(res.data.message);
            setAuth({
                ...auth,
                user: res.data.user,
                token: res.data.token,
            })
            localStorage.setItem('auth',JSON.stringify(res.data))
            navigate(location.state || '/')
        }else{
            toast.error(res.data.message)
        }


    } catch (error) {
        console.log(error)
        toast.error('Something went wrong')
    }
}
    
  return (
    <Layouts>
        <div className={styles.mainf}>
        <section className={styles.container}>
    <div className={styles.contact_form}>      
      <form onSubmit={handleSubmit}>
      <h2 className='text-center pb-3'>Login</h2>
      
      <div className={styles.form_control}>          
        <label htmlFor='email'> Email</label>
        <input type="email" name='email'
        value={email}
        onChange={(e)=> setEmail(e.target.value)} 
         required />
      </div>
      <div className={styles.form_control}>          
        <label htmlFor='password'> Password</label>
        <input type="password" name='password'
        value={password}
        onChange={(e)=> setPassword(e.target.value)} 
         required />
      </div>

      <p style={{textDecoration:'underline', cursor:'pointer'}} className='text-end mt-2' onClick={() =>{ navigate('/forgot-password')}}>Forgot Password</p>
      
      
      <div className='text-center mt-3'>
    <button className='btn'>Login</button>
</div>
<p className='text-end mt-2'>
    Not have an account?<Link to='/register' className='ms-2'>Register Now</Link>
</p>
      
      </form>
      
        
    </div>
   
</section>
</div>
    </Layouts>
  )
}

export default Login
import React, { useState } from 'react'
import styles from '../Auth/LoginC.module.css'
import { Link } from 'react-router-dom'
import Layouts from '../../components/Layout/Layouts'
import toast from 'react-hot-toast'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Register = () => {
    const [name, setName] =useState("");
    const [email, setEmail] =useState("");
    const [password, setPassword] =useState("");
    const [phone, setPhone] =useState("");
    const [address, setAddress] =useState("");
    const [answer, setAnswer] =useState("");
    const navigate = useNavigate()

    //handleSubmit
const handleSubmit =async (e)=>{
    e.preventDefault();
    try {
        const res= await axios.post('/api/v1/auth/register', {
            name,
            email,
            password,
            phone,
            address,
          answer});
        if(res.data.success){
            toast.success(res.data.message)
            navigate('/login')
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
      <h2 className='text-center pb-3'>Register Now</h2>
      <div className={styles.form_control}>          
        <label htmlFor='name'> Name</label>
        <input type="text"
         name='name'
         value={name}
         onChange={(e)=> setName(e.target.value)} 
         required />
      </div>
      <div className={styles.form_control}>          
        <label htmlFor='email'> Email</label>
        <input type="email" name='email'
        value={email}
        onChange={(e)=> setEmail(e.target.value)} 
         required />
      </div>
      <div className={styles.form_control}>          
        <label htmlFor='phone'> Phone.</label>
        <input type="number" name='phone'
        value={phone}
        onChange={(e)=> setPhone(e.target.value)} 
         required />
      </div>
      <div className={styles.form_control}>          
        <label htmlFor='address'> Address</label>
        <input type="text" name='address'
        value={address}
        onChange={(e)=> setAddress(e.target.value)} 
         required />
      </div>
      <div className={styles.form_control}>          
        <label htmlFor='password'> Password</label>
        <input type="password" name='password'
        value={password}
        onChange={(e)=> setPassword(e.target.value)} 
         required />
      </div>
      <div className={styles.form_control}>          
        <label htmlFor='question'> Security Question</label>
        <input type="text" name='question'
        value={answer}
        onChange={(e)=> setAnswer(e.target.value)} 
        placeholder='What is your best friend name'
         required />
      </div>
      
      
      <div className='text-center mt-3'>
    <button className='btn'>Register</button>
</div>
<p className='text-end mt-2'>
    Already have an account?<Link to='/auth/login' className='ms-2' href=''>Login In</Link>
</p>
      
      </form>
      
        
    </div>
   
</section>
</div>
    </Layouts>
  )
}

export default Register
import React, { useState } from 'react'
import styles from '../Auth/LoginC.module.css'
import Layouts from '../../components/Layout/Layouts'
import toast from 'react-hot-toast'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


const ForgotPassword = () => {
    const [email, setEmail] =useState("");
    const [newPassword, setNewPassword] =useState("");
    const [answer, setAnswer] =useState("");
    const navigate = useNavigate()

    //handleSubmit
const handleSubmit =async (e)=>{
    e.preventDefault();
    try {
        const res= await axios.post('/api/v1/auth/forgot-password', {
            email,
            newPassword,
            answer
            });
        if(res.data.success){
            toast.success(res.data.message);
           
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
   <Layouts title={'Forgot Password - SoftThreads'}>
    <div className={styles.mainf}>
        <section className={styles.container}>
    <div className={styles.contact_form}>      
      <form onSubmit={handleSubmit}>
      <h2 className='text-center pb-3'>RESET PASSWORD</h2>
      
      <div className={styles.form_control}>          
        <label htmlFor='email'> Email</label>
        <input type="email" name='email'
        value={email}
        onChange={(e)=> setEmail(e.target.value)} 
         required />
      </div>
      <div className={styles.form_control}>          
        <label htmlFor='answer'> Secret Anser</label>
        <input type="text" name='answer'
        value={answer}
        placeholder='What is your best friend name'
        onChange={(e)=> setAnswer(e.target.value)} 
         required />
      </div>
      <div className={styles.form_control}>          
        <label htmlFor='newpassword'>New Password</label>
        <input type="password" name='newpassword'
        value={newPassword}
        onChange={(e)=> setNewPassword(e.target.value)} 
         required />
      </div>
      
      
      <div className='text-center mt-3'>
    <button className='btn'>Reset</button>
</div>
      
      </form>
      
        
    </div>
   
</section>
</div>
   </Layouts>
  )
}

export default ForgotPassword
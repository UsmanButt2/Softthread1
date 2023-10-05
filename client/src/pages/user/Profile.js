import React, { useState, useEffect } from 'react'
import UserMenu from '../../components/Layout/UserMenu'
import Layouts from '../../components/Layout/Layouts'
import { useAuth } from '../../context/auth'
import styles from '../user/LoginC.module.css'
import axios from 'axios'
import toast from 'react-hot-toast'
const Profile = () => {

    const [auth, setAuth] =useAuth("");
    const [name, setName] =useState("");
    const [email, setEmail] =useState("");
    const [password, setPassword] =useState("");
    const [phone, setPhone] =useState("");
    const [address, setAddress] =useState("");

    //get user Data
    useEffect(()=>{
        const { name, email, phone, address}= auth?.user;
        setName(name);
        setPhone(phone);
        setEmail(email);
        setAddress(address);
    }, [auth?.user])

     //handleSubmit
const handleSubmit =async (e)=>{
    e.preventDefault();
    try {
        const {data}= await axios.put('/api/v1/auth/profile', {
            name,
            email,
            phone,
            address,
            password,
          });
          if (data?.error) {
            toast.error(data?.error);
          }
          else{
            setAuth({ ...auth, user:data?.updatedUser});
            let ls = localStorage.getItem("auth");
            ls=JSON.parse(ls);
            ls.user= data.updatedUser;
            localStorage.setItem("auth", JSON.stringify(ls));
            toast.success("Profile updated successfully")
          }


    } catch (error) {
        console.log(error)
        toast.error('Something went wrong')
    }
}



  return (
    <Layouts title={'My Profile'}>
    <div className='container.fluid p-3 m-3'>
        <div className='row'>
            <div className='col-md-4'>
                <UserMenu />
            </div>
            <div className='col-md-8'>
            <div className={styles.mainf}>
        <section className={styles.container}>
    <div className={styles.contact_form}>      
      <form onSubmit={handleSubmit} >
      <h2 className='text-center pb-3'>USER PROFILE</h2>
      <div className={styles.form_control}>          
        <label htmlFor='name'> Name</label>
        <input type="text"
         name='name'
         value={name}
         onChange={(e)=> setName(e.target.value)} 
          />
      </div>
      <div className={styles.form_control}>          
        <label htmlFor='email'> Email</label>
        <input type="email" name='email'
        value={email}
        onChange={(e)=> setEmail(e.target.value)} 
         
         disabled />
      </div>
      <div className={styles.form_control}>          
        <label htmlFor='phone'> Phone.</label>
        <input type="number" name='phone'
        value={phone}
        onChange={(e)=> setPhone(e.target.value)} 
          />
      </div>
      <div className={styles.form_control}>          
        <label htmlFor='password'> Password</label>
        <input type="password" name='password'
        value={password}
        onChange={(e)=> setPassword(e.target.value)} 
          />
      </div>
      <div className={styles.form_control}>          
        <label htmlFor='address'> Address</label>
        <input type="text" name='address'
        value={address}
        onChange={(e)=> setAddress(e.target.value)} 
          />
      </div>     
      
      
      <div className='text-center mt-3'>
    <button className='btn'>Update</button>
</div>

      
      </form>
      
        
    </div>
   
</section>
</div>
            </div>
        </div>
    </div>

   </Layouts>
  )
  
}

export default Profile
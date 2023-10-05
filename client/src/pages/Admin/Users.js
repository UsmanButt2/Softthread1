import React, { useEffect, useState } from 'react'
import Layouts from '../../components/Layout/Layouts'
import AdminMenu from '../../components/Layout/AdminMenu'
import axios from 'axios';
import toast from 'react-hot-toast';

const Users = () => {
  const [users, setUsers] = useState([]);
console.log(users)

const getAllUsers = async()=>{
  try {
    const {data} = await axios.get('/api/v1/auth/allusers');
    setUsers(data.users);
  } catch (error) {
      console.log(error)
      toast.error('something went wrong')
  }
}
useEffect(()=>{
  getAllUsers();
},[])


  return (
    <Layouts title={'Dashboard - All - Users'}>
         <div class="container-fluid">
        <div className='row justify-content-center'>
                <AdminMenu/>
            
                <div className='col-md-10'>
                <h1 className='text-center'>All Users List</h1>
                <p className='text-center mb-5'>{users.length} Users are Registered</p>
               {/*  <div className='row'>
                {users?.map((p)=>(
                    <div className='col-md-4' key={p._id}>
                <td>{p.name}</td>
                </div>
            ))}
            </div> */}



<div className='w-75'>
                <table className="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">gmail</th>
    </tr>
  </thead>
  <tbody>
  {users?.map((u)=>(
    <>
    <tr>     
      <td key={users._id}>
      {u.name}
      </td>
      <td>
       {u.email}
      </td>
    </tr>
    </>
    ))}
    
  </tbody>
</table>

                </div>



    </div>
        </div>
        </div>
    </Layouts>
  )
}

export default Users
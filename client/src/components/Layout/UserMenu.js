import React from 'react'
import { NavLink } from 'react-router-dom'

const UserMenu = () => {
  return (
    <>
    <div className='card w-30 p-3' style={{height:'30vh'}}>
   <div className='text-center'>
   <div className="list-group m-3" style={{fontSize:'20px'}}  >
  <h3>Dashboard</h3>
  <NavLink to="/dashboard/user/profile" 
  className="list-group-item list-group-item-action dash" >
    My Profile
    </NavLink>

  <NavLink to="/dashboard/user/myorder" 
  className="list-group-item list-group-item-action dash" >
    My Orders
    </NavLink>
  
</div>
   </div>
   </div>


</>
  )
}

export default UserMenu
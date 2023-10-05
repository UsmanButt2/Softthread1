import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminMenu = () => {
  return (
    <>
   <div className='text-center'>
   <div className="list-group">
  <h2>Admin Panel</h2>
  
  <div className="container m-3 aminclr">
      <div className="row">
        <div className="col-md-3">
  
  <NavLink 
  to="/dashboard/admin/create-category" 
  className="list-group-item list-group-item-action">
    <h3>Create Category</h3>
    </NavLink>
    </div>
    
    <div className="col-md-3">
    <NavLink 
  to="/dashboard/admin/create-product" 
  className="list-group-item list-group-item-action">
    <h3>Create Product</h3>
    </NavLink>
    </div>
    
    <div className="col-md-3">
  <NavLink 
  to="/dashboard/admin/products" 
  className="list-group-item list-group-item-action">
    <h3>Products</h3>
    </NavLink>
    </div>

    <div className="col-md-3">
  <NavLink 
  to="/dashboard/admin/allusers" 
  className="list-group-item list-group-item-action">
    <h3>Users</h3>
    </NavLink>
    </div>

    <div className="col-md-3">
  <NavLink 
  to="/dashboard/admin/adminorders" 
  className="list-group-item list-group-item-action">
    <h3>Orders</h3>
    </NavLink>
    </div>
    
    <div className="col-md-4">
  <NavLink 
  to="/dashboard/admin/create-saleproduct" 
  className="list-group-item list-group-item-action">
    <h3>Create Sale Products</h3>
    </NavLink>
    </div>
    <div className="col-md-4">
  <NavLink 
  to="/dashboard/admin/saleproduct" 
  className="list-group-item list-group-item-action">
    <h3>Sale Products</h3>
    </NavLink>
    </div>
    </div>
    </div>
</div>
   </div>


</>
  )
}

export default AdminMenu
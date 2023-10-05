import React from 'react'
import Layouts from '../../components/Layout/Layouts'
import AdminMenu from '../../components/Layout/AdminMenu'
import { useAuth } from '../../context/auth'

const AdminDashboard = () => {
  const [auth] =useAuth();
  return (
    <Layouts>
.<div class="container-fluid ">
  <div className='row justify-content-center'>
      <AdminMenu />
    
<div className='col-md-9'>
  
</div>
  </div>
</div>
    </Layouts>
  )
}

export default AdminDashboard
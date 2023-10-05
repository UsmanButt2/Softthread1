import React from 'react'
import Layouts from '../../components/Layout/Layouts'
import { useAuth } from '../../context/auth'
import UserMenu from '../../components/Layout/UserMenu';

const Dashboard = () => {
  const [auth] =useAuth();
  return (
    <Layouts title={'Dashboard- SoftThreads'}>
        <div className='container-fluid '>
        <div className='row m-3'>
            <div className='col-md-4'>
                <UserMenu />
            </div>
            <div className='col-md-7 col-sm-12'>
                <div className='card w-78 p-3 mt-3'>
                  <h3>Name: {auth?.user?.name}</h3>
                  <h3>Emails: {auth?.user?.email}</h3>
                  <h3>Address: {auth?.user?.address}</h3>
                </div>
            </div>
        </div>
    </div>
    </Layouts>
  )
}

export default Dashboard
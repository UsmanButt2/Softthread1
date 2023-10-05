import React from 'react'
import Layouts from '../components/Layout/Layouts'
import { Link } from 'react-router-dom'
import {FaRegSadCry} from 'react-icons/fa'

const PagenotFound = () => {
  return (
    <Layouts title={'Go back. Page not found'}>
        <div className='pnf'>
          <h1 className='pnf-title'>ERROR 404</h1>
          <h1 className='pnf-title'><FaRegSadCry/></h1>
          <h2 className='pnf-heading'>Oops! There Is Nothing Here.</h2>
          <Link to='/' className='pnf-btn'>
            Go Back
          </Link>
          </div>
    </Layouts>
  )
}

export default PagenotFound
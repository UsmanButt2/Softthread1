import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import { useAuth } from '../../context/auth';
import useCategory from '../../hooks/useCategory';
import toast from 'react-hot-toast'
import SearchInput from '../forms/SearchInput';
import { useCart } from '../../context/cart';
import {Badge} from 'antd'

const Headers = () => {
const [auth,setAuth]= useAuth();
const [cart, setCart] =useCart()
const categories = useCategory();


const handleLogout= () =>{
  setAuth({
    ...auth,
    user:null,
    token:''
  })
  setCart([]);
  localStorage.removeItem('auth');
  toast.success('Logout Successfully')
}


    return (
       <>
       <nav className="navbar navbar-expand-lg bg-white sticky-top m-0">
  <div className="container-fluid mb-2" >
  <Link to='/' className="navbar-brand" ><img src='/images/logo.png' alt='logo'/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      
      <ul className="navbar-nav m-auto mb-2 mt-4 mb-lg-0">
        <SearchInput/>
        <li className="nav-item ">
          <NavLink to='/' className="nav-link " aria-current="page" >
            Home</NavLink>
        </li>

<section id='collections'>
<li className="nav-item dropdown">
  <Link className="nav-link dropdown-toggle"to={"/"} data-bs-toggle="dropdown">
    Collections
  </Link>

  <ul className="dropdown-menu ">
  
    {categories?.map((c, index) => (
      <li key={index}>
        <Link to={`/category/${c.slug}`} 
        className="dropdown-item">
          {c.name}
        </Link>
      </li>
    ))}
  </ul>
</li>
</section>
        

        <li className="nav-item">
          <NavLink to='/contact' className="nav-link " aria-current="page" >
            Contact</NavLink>
        </li>    
             </ul>



      {!auth.user ? (
        <>
          <li className="nav-item mb-2 mt-4">
          <NavLink to='/register' className="nav-link" >
            Register</NavLink>
        </li>
        <li className="nav-item mb-2 mt-4">
          <NavLink to='/login' className="nav-link" >
            Login</NavLink>
        </li>
          </>) : (
          <>
<li className="nav-item dropdown mt-3" style={{listStyle:"none"}}>
  <NavLink className="nav-link dropdown-toggle"     
  data-bs-toggle="dropdown" 
  >
    {auth?.user?.name}
  </NavLink>
  <ul className="dropdown-menu" 
  style={{marginTop:"15px"}}>
    <li><NavLink 
    to={`/dashboard/${auth?.user?.role === 1 ? 'admin' : 'user'}`} 
    className="dropdown-item "
    >Dashboard</NavLink>
    </li>
    <li>
    <NavLink onClick={handleLogout}
          to='/login' 
          className="dropdown-item mb-2 " >
            Logout</NavLink>
    </li>
  </ul>
</li>
          </>)
        }
        <li className="nav-item mt-3" style={{listStyle:"none"}}>
          <Badge count={cart?.length} showZero>
             <NavLink to='/cart' className="nav-link mt-2" style={{fontSize:"18px"}} >
            Cart  </NavLink>
          </Badge>
         
        </li>
    </div>
  </div>
</nav>

       </>
      );
}

export default Headers
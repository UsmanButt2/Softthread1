import React from 'react';
import Layouts from '../components/Layout/Layouts';
import { useAuth } from '../context/auth';
import { useCart } from '../context/cart';
import { useNavigate } from 'react-router-dom';
import {FaTimes} from 'react-icons/fa'
import { TbGardenCartOff} from 'react-icons/tb'

const CheckOut = () => {
  const [auth, setAuth] = useAuth();
  const [cart, setCart] = useCart();
  const navigate = useNavigate();
 
  
 

  
  const incrementQuantity = (pid) => {
    const updatedCart = cart.map((item) => {
      if (item._id === pid) {
        // Increment 
        item.quantity += 1;
        item.total = item.price * item.quantity; 
      }
      return item;
    });

    setCart(updatedCart);
    updateLocalStorage(updatedCart);
  };

  
  const decrementQuantity = (pid) => {
    const updatedCart = cart.map((item) => {
      if (item._id === pid) {
        if (item.quantity > 1) {
          // Decrement
          item.quantity -= 1;
          item.total = item.price * item.quantity; 
        }
      }
      return item;
    });

    setCart(updatedCart);
    updateLocalStorage(updatedCart);
  };

 // remove a cart item
  const removeCartItem = (pid) => {
    const updatedCart = cart.filter((item) => item._id !== pid);
    setCart(updatedCart);
    updateLocalStorage(updatedCart);
  };

 
  const updateLocalStorage = (updatedCart) => {
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const grandTotal = () => {
    try {
      let gtotal = 0.0; 
      cart?.map((p) => {
        gtotal = gtotal + p.total;
      });
  
      return gtotal.toLocaleString("en-PK", {
        style: "currency",
        currency: "PKR", 
      });
    } catch (error) {
      console.log(error);
      return "Error"; 
    }
  }

  const grandtotal = grandTotal();



  return (
    <Layouts title={'SoftThreads-textile'}>
      <div className='container'>
        <div className='row mt-3'>
          <div className='col-md-12'>
           {/*  <h1 className='text-center bg-light p-2 mb-1'>{`Hello ${auth?.token && auth?.user?.name}`}</h1> */}
            <h4 className='text-center mt-3'>
              {cart?.length
                ? `You have ${cart.length} items in your cart ${auth?.token ? '' : ' Please Login to Checkout'}`
                : <div className='justify-content-center align-items-center'>
                  <h1 className='cartemp'><TbGardenCartOff/></h1>
                <h1 className='p-0'> Your Cart is Empty</h1> 
                <button 
         style={{background:"grey",
         padding:"5px", 
         color:"white", 
         borderRadius:"3px", 
         width:"170px", 
         border:"none",
        marginTop:'5%'}} onClick={()=> 
            navigate('/')}>Back to Shop</button>
                </div>}
            </h4>
          </div>
        </div>

        {cart.length > 0 && (
          <div className='row'>
            <div className='col-md-12'>
              <div className='table-responsive '>
              <table className='table '>
        <thead>
          <tr>
            <th className='col-md-4 col-sm-4'>Product</th>
            <th className='col-md-1'>Price</th>
            <th className='col-md-2'>Quantity</th>
            <th className='col-md-2'>Total</th>
            <th className='col-md-1'></th>
          </tr>
        </thead>
        <tbody>
          {cart?.map((p) => (
            <tr key={p._id}>
              <td>
                <div className="product-info">
                <img
                              src={p.isOnSale ? `/api/v1/saleproduct/product-photo/${p._id}` : `/api/v1/product/product-photo/${p._id}`}
                              alt={p.name}
                              className='cart-product-image'
                            />
                  <span>{p.name}</span>
                </div>
              </td>
              <td>Rs. {p.price}</td>
              <td>
                <div className="quantity-controls"  
                style= {{border:"1px solid grey", width:"100px", justifyContent:"space-between", display:"flex", alignItems:"center"}}>
                  <button
                  style={{height:"30px", width:"30px", fontSize:'20px',border:"none", background:"grey", color:"white"}}
                    onClick={() => decrementQuantity(p._id)}
                    className='btn d-flex align-items-center justify-content-center'
                  >
                    -
                  </button>
                  <span>{p.quantity}</span>
                  <button
                  style={{height:"30px", width:"30px", fontSize:'20px',border:"none", background:"grey", color:"white"}}
                    onClick={() => incrementQuantity(p._id)}
                    className='btn d-flex align-items-center justify-content-center'
                  >
                    +
                  </button>
                </div>
              </td>
              <td>Rs. {p.total}</td>
              <td>
                <button
                  className='btn btn-sm justify-content-center'
                  style={{color:"red", border:"none", }}
                  onClick={() => removeCartItem(p._id)}
                >
                  <FaTimes/>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        
      </table>
              </div>
            </div>
            <div className='col-md-5 mt-5 text-center'>
              {/* <h4 className='mb-1'>Cart Summary</h4 >
              <p>Total | Checkout | Payment</p>

            
              <hr /> */}
              <h4>Subtotal</h4> <span style={{textAlign:'right'}}> {grandtotal}</span> 

              <div className='mt-4'>
              {auth?.token ? (
  <button className='btn mt-1 mb-1 col-md-12 col-sm-12 rolibtn' style={{width:"75%"}} onClick={() => navigate('/shipping')}>CHECKOUT</button>
) : (
  <button className='btn mt-1 col-md-12 col-sm-12 rolibtn' style={{width:"75%"}} onClick={() => navigate('/login', { state: '/cart' })}>Please Login To Checkout</button>
)}
              <button className='btn mt-1 col-md-12 col-sm-12 rolibtn' onClick={() => navigate('/')} style={{width:"75%"}}>CONTINUE SHOPPING</button>
            </div>
            
            </div>
            
          </div>
        )}
      </div>

      <div className='table-responsive'> 






      </div>
    </Layouts>
  );
};

export default CheckOut;
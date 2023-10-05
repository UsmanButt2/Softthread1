import React, { useEffect, useState } from 'react'
import Layouts from '../components/Layout/Layouts'
import styles from '../pages/Auth/LoginC.module.css'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/cart';
import { useAuth } from '../context/auth'
import OrderSummary from '../components/OrderSummary'

const ShippingForm = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [shippingEmail, setShippingEmail] = useState('');
  const [shippingStreet, setShipingStreet] = useState('');
  const [shippingcity, setshippingcity] = useState('');
  const [shippingcountry, setshippingcountry] = useState('');
  const [shippingphone, setshippingPhone] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [billingAddress, setbillingAddress] = useState('same'); // Default to 'Same as Shipping Address'
  const [billingEmail, setBillingEmail] = useState('');
  const [billingStreet, setBillingStreet] = useState('');
  const [billingCity, setBillingCity] = useState('');
  const [billingCountry, setBillingCountry] = useState('');
  const [billingPhone, setBillingPhone] = useState('');
  const [cart, setCart] = useCart(); // Update cart state to manage cart items
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  const handlePaymentMethodChange = (e) => {
    const newPaymentMethod = e.target.value;

    // Check if the new payment method is 'cash' or 'online'
    if (newPaymentMethod === 'cash') {
      // If it's 'cash', allow 'Different Billing Address' option
      setPaymentMethod(newPaymentMethod);
    } else {
      // If it's something other than 'cash', reset to 'Same as Shipping Address'
      setPaymentMethod(newPaymentMethod);
      setbillingAddress('same');
    }
  };

  const handleBillingOptionChange = (e) => {
    setbillingAddress(e.target.value);
  };

  const clearCart = () => {
    // Clear the cart by setting it to an empty array
    setCart([]);
    localStorage.removeItem('cart');
  };

  const completeOrder = async () => {
    try {
      const res = await axios.post('/api/v1/order/shipping', {
        paymentMethod,
        shippingEmail,
        shippingphone,
        shippingcountry,
        shippingcity,
        shippingStreet,
        cart,
        billingAddress,
        billingEmail,
        billingStreet,
        billingCity,
        billingCountry,
        billingPhone,
      });

      if (res.data.success) {
        toast.success(res.data.message);
        // Clear the cart after a successful order placement
        clearCart();
        if (paymentMethod === 'cash') {
          navigate('/order_completed');
        } else if (paymentMethod === 'online') {
          navigate('/online_payment');
        }
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong');
    }
  };

  useEffect(() => {
    let total = 0;
    cart.forEach((item) => {
      total += item.total;
    });
    setTotalAmount(total);
  }, [cart]);

  const calculateShippingFee = () => {
    // Check if the total order amount is less than 5000
    if (totalAmount < 5000) {
      return 200; // Add a fixed shipping fee of 200
    }
    return 0; // No shipping fee for orders of 5000 or more
  };

  const shippingFee = calculateShippingFee();


  const handleSubmitOrder = (e) => {
    e.preventDefault();

    // Check if a payment method is selected
    if (!paymentMethod) {
      toast.error('Please select a payment method before proceeding.');
      return;
    }

    completeOrder();
  };
  return (
    <Layouts title={'SoftThreads-textiles-Shipping'}>
      <div className='row m-4 justify-content-center ' style={{display:"flex", justifyContent:"space-between"}}>
      <div  className='col-md-7 col-sm -6 '>
    <div className={styles.contact_form}>  
    <form className='col-md-8' onSubmit={handleSubmitOrder}>
            <h3 className='text-center pb-0 pt-3'>Shipping Payment Details</h3>
            <div className={styles.form_control}>          
        <label htmlFor='email'> Email</label>
        <input type="email" name='email'
        value={shippingEmail}
        onChange={(e)=> setShippingEmail(e.target.value)} 
         required />
      </div>
      <div className={styles.form_control}>          
        <label htmlFor='phone'> Phone.</label>
        <input type="number" name='phone'
        value={shippingphone}
        onChange={(e)=> setshippingPhone(e.target.value)} 
         required />
      </div>
      <div className={styles.form_control}>          
        <label htmlFor='street'> Street</label>
        <input type="text" name='street'
        value={shippingStreet}
        onChange={(e)=> setShipingStreet(e.target.value)} 
         required />
      </div>
      <div className={styles.form_control}>          
        <label htmlFor='city'> City</label>
        <input type="text" name='city'
        value={shippingcity}
        onChange={(e)=> setshippingcity(e.target.value)} 
         required />
      </div>
      <div className={styles.form_control}>          
        <label htmlFor='country'> Country</label>
        <input type="text" name='country'
        value={shippingcountry}
        onChange={(e)=> setshippingcountry(e.target.value)} 
        //placeholder='What is your best friend name'
         required />
      </div>
      
            <div >
              <label htmlFor='paymentMethod'>Payment Method</label>
              <div>
              <select
              className='payselct'
                id='paymentMethod'
                name='paymentMethod'
                value={paymentMethod}
                onChange={handlePaymentMethodChange}
                required
                style={{padding:"5px"}}
              >
                <option value=''>Select Payment Method</option>
                <option value='cash'>Cash on Delivery</option>
                <option value='online'>Online Payment</option>
              </select>
              </div>
              
            </div>
            {paymentMethod === 'cash' && (
              <div >
                <label>Address for Billing:</label>
                <div>
                  <input
                    type='radio'
                    id='same'
                    name='billingAddress'
                    value='same'
                    checked={billingAddress === 'same'}
                    onChange={handleBillingOptionChange}
                  />
                  <label htmlFor='same'>Same as Shipping Address</label>
                </div>
                <div>
                  <input
                    type='radio'
                    id='different'
                    name='billingAddress'
                    value='different'
                    checked={billingAddress === 'different'}
                    onChange={handleBillingOptionChange}
                  />
                  <label htmlFor='different'>Different Billing Address</label>
                </div>
              </div>
            )}
            {billingAddress === 'different' && (
              <>
               <div className={styles.form_control}>          
               <label htmlFor='email'> Email</label>
               <input type="email" name='email'
               value={billingEmail}
               onChange={(e)=> setBillingEmail(e.target.value)} 
                required />
             </div>
             <div className={styles.form_control}>          
               <label htmlFor='phone'> Phone.</label>
               <input type="number" name='phone'
               value={billingPhone}
               onChange={(e)=> setBillingPhone(e.target.value)} 
                required />
             </div>
             <div className={styles.form_control}>          
               <label htmlFor='street'> Street</label>
               <input type="text" name='street'
               value={billingStreet}
               onChange={(e)=> setBillingStreet(e.target.value)} 
                required />
             </div>
             <div className={styles.form_control}>          
               <label htmlFor='city'> City</label>
               <input type="text" name='city'
               value={billingCity}
               onChange={(e)=> setBillingCity(e.target.value)} 
                required />
             </div>
             <div className={styles.form_control}>          
               <label htmlFor='country'> Country</label>
               <input type="text" name='country'
               value={billingCountry}
               onChange={(e)=> setBillingCountry(e.target.value)} 
               //placeholder='What is your best friend name'
                required />
             </div>
             </>
            )}
            <div>
        <h5 className='pt-3'>Shipping Fee</h5>
        <p>{shippingFee === 0 ? 'Free Shipping' : `Rs. ${shippingFee}`}</p>
      </div>
      <div >
        <h5>Total Order Amount</h5>
        <p>Rs. {totalAmount}</p>
      </div>
            <div className='text-center mt-3'>
            <button className='btn mt-1 col-md-12 col-sm-12 rolibtn' onClick={() => navigate('/')} style={{width:"55%", margin:"0 10px"}}>CONTINUE SHOPPING</button>
              <button className='btn mt-1 col-md-12 col-sm-12 rolibtn' style={{width:"40%"}} type='submit'>
                Checkout
              </button>
            </div>
          </form>      
        
    </div>
   
</div>

<div className='col-md-4 col-sm-10 '>
<OrderSummary cart={cart} shippingFee={shippingFee} totalAmount={totalAmount} />
</div>
      </div>
     
    </Layouts>
    
    
  )
}

export default ShippingForm
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layouts from '../../components/Layout/Layouts'

const Orders = () => {
  const [userOrders, setUserOrders] = useState([]);

  useEffect(() => {
    fetchUserOrders();
  }, []);

  const fetchUserOrders = async () => {
    try {
      const response = await axios.get('/api/v1/order/myorder');
      setUserOrders(response.data.orders);
    } catch (error) {
      console.error('Error fetching user orders:', error);
    }
  };

  const calculateTotalPrice = (cart) => {
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const shippingFee = subtotal < 5000 ? 200 : 0;
  return subtotal + shippingFee;
};

  return (
    <Layouts>
    <div className="orders-container">
      <h1 className='text-center p-3'>My Orders</h1>
      {userOrders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div className="order-cards">
          {userOrders.map((order) => (
            <div className="order-card" key={order._id}>
              <h3>Order ID: {order._id}</h3>
              <p>Order Date: {new Date(order.orderDate).toLocaleDateString()}</p>
              <p>Status: {order.isDelivered ? 'Delivered' : 'In Process'}</p>
              <p>Total Price: Rs.{calculateTotalPrice(order.cart)}</p>
              <h3>Ordered Products:</h3>
              <ul>
                {order.cart.map((item) => (
                   <div className="col-md-5 col-sm-5" style={{marginRight:"10px"}}>
                   <span >Product: {item.name}</span>
                   <br />
                   <span>Quantity: {item.quantity}</span>
                   
                 </div>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
    </Layouts>
  );
};

export default Orders;




import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layouts from '../../components/Layout/Layouts';
import AdminMenu from '../../components/Layout/AdminMenu';
import toast from 'react-hot-toast';
import { useCart } from '../../context/cart';

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState('In Progress');
  const [cart] = useCart();

  const getAllOrders = async () => {
    try {
      const { data } = await axios.get('/api/v1/order/adminorders');
      setOrders(data.orders);
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong');
    }
  };

  const handleStatusChange = async (orderId, newStatus) => {
    try {
      const response = await axios.put(`/api/v1/order/${orderId}/status`, {
        status: newStatus,
      });
      if (response.data.success) {
        toast.success(`Order status updated to ${newStatus}`);
        // Update the local state to reflect the new status
        setOrders((prevOrders) =>
          prevOrders.map((order) =>
            order._id === orderId ? { ...order, isDelivered: newStatus === 'Delivered' } : order
          )
        );
      } else {
        toast.error('Failed to update order status');
      }
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong');
    }
  };

  const calculateTotalOrderPrice = (cart) => {
    const orderTotal = cart.reduce((total, product) => total + product.quantity * product.price, 0);
    const shippingFee = orderTotal < 5000 ? 200 : 0; // Apply $200 shipping fee if order total is less than $5000
    return orderTotal + shippingFee;
  };

  useEffect(() => {
    getAllOrders();
  }, []);

  const deleteOrder = async (orderId) => {
    try {
      await axios.delete(`/api/v1/order/${orderId}`);
      // After successful deletion, update the orders list
      getAllOrders();
      toast.success('Order deleted successfully');
    } catch (error) {
      console.log(error);
      toast.error('Error deleting order');
    }
  };

  return (
    <Layouts>
      <div className="container-fluid">
        <div className="row justify-content-center m-2">
          <AdminMenu />

          <div className="col-md-10 col-sm-6 justify-content-center">
            <h1 className='text-center'>All Orders</h1>
            <p className='text-center' style={{ paddingBottom:'30px'}}>We have {orders.length} orders</p>
            {orders.map((order) => (
              <div key={order._id}>
                <h5>Order ID: {order._id}</h5>
                <p>User Name: {order.userName}</p>
                <p>Email: {order.userEmail}</p>
                <p>
                  Shipping Address: {order.shippingStreet}, {order.shippingcity}, {order.shippingcountry}
                </p>
                <h3>Order Details:</h3>
                {order.cart.map((product, index) => (
                  <div key={index}>
                    <h4>Product Name: {product.name}</h4>
                    <h5>Product Id: {product._id}</h5>
                    <p>Quantity: {product.quantity}</p>
                    <p>Price: ${product.price}</p>
                  </div>
                ))}
                <h4>Total Order Price: ${calculateTotalOrderPrice(order.cart)}</h4>
                <p>Status: {order.isDelivered ? 'Delivered' : 'In Progress'}</p>
                 <p>Order Date: {new Date(order.orderDate).toLocaleString()}</p>
    {order.isDelivered && (
      <p>Delivered Date: {new Date(order.deliveredDate).toLocaleString()}</p>
    )}
                <select
                className='statuselect'
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                >
                  <option value="In Progress">In Progress</option>
                  <option value="Delivered">Delivered</option>
                </select>
                <div >
                <button style={{background:'#161212', color:'white', border:'1px solid grey', padding:"5px", borderRadius:"4px"}} onClick={() => handleStatusChange(order._id, selectedStatus)}>Update Status</button>
                </div>
                <button style={{background:'red', color:'white', border:'none', padding:"5px", borderRadius:"4px", marginTop:'10px'}} onClick={() => deleteOrder(order._id)}>
                  Delete Order
                </button>
                <hr />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layouts>
  );
};

export default AdminOrders;
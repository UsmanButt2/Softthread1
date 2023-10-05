import React from 'react';

const OrderSummary = ({ cart, shippingFee }) => {
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.total, 0);
  };

  const totalAmount = calculateTotalPrice() + shippingFee;

  return (
    <div className="order-summary">
      <h3 className='text-center pb-3'>Order Summary</h3>
      <ul>
        {cart.map((item) => (
          <div className='row mb-4' key={item._id}>
            <div className="col-md-4 col-sm-5">
              <img
                src={`/api/v1/product/product-photo/${item._id}`}
                alt={item.name}
                style={{ maxWidth: '100px', maxHeight: '100px' }}
              />
            </div>
            <div className="col-md-5 col-sm-5" style={{marginRight:"10px"}}>
              <span style={{ fontWeight: '600' }}>Product: {item.name}</span>
              <br />
              <span>Quantity: {item.quantity}</span>
              <br />
              Subtotal: Rs.{item.total}
            </div>
          </div>
        ))}
      </ul>
      <hr/>
      <span style={{textAlign:"end", lineHeight:"10px"}}>
      {shippingFee > 0 && <p>Shipping Fee: Rs. {shippingFee}</p>}
      <p>Total Price: Rs.{totalAmount}</p>
      </span>
      
    </div>
  );
};

export default OrderSummary;
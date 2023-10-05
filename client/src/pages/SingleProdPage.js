import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams, Redirect  } from 'react-router-dom';
import Layouts from '../components/Layout/Layouts';
import { useCart } from '../context/cart';
import toast from 'react-hot-toast';

const SingleProdPage = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useCart();
  const navigate=useNavigate();


  useEffect(() => {
    if (params?.slug) {
      getProduct();
    }
  }, [params?.slug]);
  

  // Get product
  const getProduct = async () => {
    try {
      const { data } = await axios.get(`/api/v1/product/get-product/${params.slug}`);
      setProduct(data?.product);
      setCategory(data?.product?.category); // Assuming the API returns the category
    } catch (error) {
      console.log(error);
    }
  };

  // Function to decrement quantity
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Function to increment quantity
  const incrementQuantity = () => {
    // You can add additional logic here to handle quantity limits, if needed
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    // Calculate the total price for this product
    const totalPrice = product.price * quantity;

    // Create a cart item with unique identifier (you can use _id)
    const cartItem = {
      _id: product._id, // Use a unique identifier, e.g., product _id
      name: product.name,
      price: product.price,
      quantity: quantity,
      total: totalPrice, // Total price for this item
    };
    setCart([...cart, cartItem]);

    // Update local storage
    localStorage.setItem('cart', JSON.stringify([...cart, cartItem]));

    toast.success('Item Added Successfully');
  }


  // Function to handle the "Buy It Now" button click
  const handleBuyNow = () => {
    // Create a cart item for the current product
    const totalPrice = product.price * quantity;
    const cartItem = {
      _id: product._id,
      name: product.name,
      price: product.price,
      quantity: quantity,
      total: totalPrice,
    };
  
    // Add the new item to the existing cart items
    setCart([...cart, cartItem]);
  
    // Update local storage with the updated cart
    localStorage.setItem('cart', JSON.stringify([...cart, cartItem]));
  
    // Redirect to the shipping information page
    navigate('/shipping'); // Replace '/shipping' with the actual shipping information route
  }
  return (
    <Layouts title={product.name}>
      <div className="bredcrumbWrap m-5" style={{ fontSize: '18px' }}>
        
      </div>
      <div className='row m-5 justify-content-center'>
        <div className='col-md-4'>
          <img
            src={`/api/v1/product/product-photo/${product._id}`}
            className='card-img-top'
            alt={product.name}
          />
        </div>
        <div className='col-md-6 m-4'>
          <h4>{category.name} | <span>{product.name}</span> </h4>
          <h4 className='mt-4'>Rs.{product.price}</h4>
          <h4 className='mt-4'>{product.qu}</h4>
          <p className='mt-5'>Shipping calculated at checkout</p>
          
          {/* Quantity controls */}
          <div className="quantity-controls" 
          style=
          {{border:"1px solid grey", width:"150px", justifyContent:"space-between", display:"flex", alignItems:"center"}}>
            <button 
            style={{height:"50px", width:"50px", fontSize:'25px',border:"none", background:"grey", color:"white"}} 
            onClick={decrementQuantity}>
              -
              </button>
            <span>{quantity}</span>
            <button 
            style={{height:"50px", width:"50px", fontSize:'25px',border:"none", background:"grey", color:"white"}} 
            onClick={incrementQuantity}>
              +
              </button>
          </div>
          
          <button style={{width:"75%"}}
        className='btn mb-2 mt-2 col-md-8 col-sm-12'
        onClick={handleAddToCart}
      >
        ADD TO CART
      </button>
      <button style={{width:"75%"}} className='btn mt-2 col-md-8 col-sm-12' onClick={handleBuyNow}>
        BUY IT NOW
      </button>
          <p className='pt-3'>Collections: {category.name}, {product.name}</p>
          <h5 className='pt-4' ><a className='whatsaplink' style={{color:"black"}} href={`https://wa.me/923081333305`}>Feel free to order on WhatsApp.</a></h5>
          <p >Note: Due to various types of lighting and flash used while photo shoots, or maybe due to the difference in electronic digital device capturing effects and screen resolutions, the design color shade of the product may slightly vary. The brightest shade seen is the closest color to the product.</p>
        </div>
        
      </div>
      <div className='descriptionpara'>
        <h4>Descriptions</h4>
      <p>{product.descpt1}</p>
      <p>{product.descpt2}</p>
      <p>{product.descpt3}</p>
      <p>{product.descpt4}</p>
      <p>{product.descpt5}</p>
      <p>{product.descpt6}</p>
      <p>{product.descpt7}</p>
      <p>{product.descpt8}</p>
      <p>{product.descpt9}</p>
      <p>{product.descpt10}</p>
      <p>{product.descpt11}</p>
      <p>{product.descpt12}</p>
      </div>
     
    </Layouts>
  );
};

export default SingleProdPage;
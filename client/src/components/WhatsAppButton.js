import React from 'react';
import { Link } from 'react-router-dom';

const WhatsAppButton = () => {

  return (
    <Link className='watsaplink' to={`https://wa.me/923081333305`} target="_blank">
  
      <img className='watsap m-3' src="/images/watsap.jpeg" alt="WhatsApp" />
    
</Link>
    
  );
};

export default WhatsAppButton;
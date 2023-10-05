import React, { useEffect, useState } from 'react';

const GlobalNotification = ({ messages }) => {
  const [visible, setVisible] = useState(false);
  const [currentMessage, setCurrentMessage] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      if (messages.length > 0) {
        const randomIndex = Math.floor(Math.random() * messages.length);
        setCurrentMessage(`Someone bought ${messages[randomIndex]} 5 minutes ago`);
        setVisible(true);

        setTimeout(() => {
          setVisible(false);
        }, 10000);
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [messages]);const notificationStyle = {
    position: 'fixed',
    width:'270px', 
    bottom: '15px', 
    left: '15px', 
    zIndex: 999, 
    background: '#ffffff', 
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '10px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', 
    display: visible ? 'block' : 'none', 
  };

  return (
    <div style={notificationStyle}>
      {currentMessage}
    </div>
  );

};

export default GlobalNotification;
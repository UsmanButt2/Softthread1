import React from 'react';
import { Link } from 'react-router-dom';
import FootInputComment from '../FootInputComment';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="py-2 text-center footer">
        <div className='footer_col'>
          <div className='row mt-3 mb-3 w-100' style={{ display: 'flex', justifyContent: 'center' }}>
            <div className=' col-md-4 col-sm-7 mt-4'>

              <div className="contact-address" style={{ textAlign: 'left' }}>
                <h5 style={{ color: '#121212' }}>INFORMATION</h5>
                <p className='mt-3 mb-1' style={{ color: '#121212', fontSize: '15px' }}>
                  <span style={{ fontSize: '14px', color: '#121212' }}>ADDRESS :</span><span>&nbsp;</span>Mehtab market new Anarkali
                </p>
                <p className="phone mb-1" style={{ fontSize: '15px' }}>
                  <span style={{ fontSize: '14px', color: '#121212' }}>PHONE :</span><a style={{ color: '#121212' }} href="tel:+923081333305">+92 308 133 3305</a>
                </p>
                <p className="email mt-" style={{ fontSize: '17px' }}>
                  <span style={{ fontSize: '14px', color: '#121212' }}>EMAIL :<span>&nbsp;</span></span><a style={{ color: '#121212' }} href="mailto:SoftThreadTextile@gmail.com">SoftThreadTextile@gmail.com</a>
                </p>
               
              </div>
            </div>
            <div className=' col-md-3 col-sm-7 mt-4'>
              <div className="contact-address" style={{ textAlign: 'left' }}>
                <h5 style={{ color: "#121212" }}>CUSTOMER SERVICES</h5>
                <div className='mt-3'>
                  <p className='mb-1'><Link style={{ fontSize: '15px', color: "#121212" }} to='/'>Home</Link></p>
                  <p className='mb-1'><Link style={{ fontSize: '15px', color: "#121212" }} to='/contact'>About</Link></p>
                  <p><Link style={{ fontSize: '15px', color: '#121212' }} to='/contact'>Contact</Link></p>
                </div>
              </div>
            </div>

            <div className='col-md-3 col-sm-7 mt-4'>            
              <FootInputComment />
              <div className='mt-4'>
              <a className='whatsaplink' href={`https://wa.me/923081333305`} target="_blank" rel="noopener noreferrer">
                  <img className='whatsap m-3' src="/images/watsap.jpeg" alt="WhatsApp" />
                </a>
                <a className='instalink' href={`https://instagram.com/softthreadtextile?igshid=YTQwZjQ0NmI0OA==`} target="_blank" rel="noopener noreferrer">
                  <img className='insta m-3' src="/images/Instagram.png" alt="insta" />
                </a>
                <a className='facebookink' href={`https://www.facebook.com/profile.php?id=61550642046472&mibextid=ZbWKwL`} target="_blank" rel="noopener noreferrer">
                  <img className='facebook m-3' src="/images/facebook.png" alt="facebook" />
                </a>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <p className='text-center p-2' style={{ fontSize: '15px' }}>
        SoftThread &copy; {currentYear} | All Rights Reserved
      </p>
    </>
  );
};

export default Footer;
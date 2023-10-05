import React from 'react'
import {IoIosCheckmarkCircleOutline} from 'react-icons/io'
import { useAuth } from '../context/auth'
import Layouts from './Layout/Layouts'


const PaymentPage = () => {
  const [auth, setAuth] =useAuth()
  return (
  <Layouts title={'SoftThreads-textiles-Congratulations'}>
      <div>
      <div className='row m-2 mt-4 justify-content-center'>
        <div className='col-md-6 col-sm-8'>
          <div className='card p-4 pt-5 mb-4' >
            <h3 className='pb-4'>
              <IoIosCheckmarkCircleOutline/>
              Conratulations, Your Order is Confirmed
              </h3>
          <p>Dear {auth?.user?.name},</p>
          <p>We are pleased to inform you that your order has been successfully
             confirmed! Thank you for choosing to shop with us.
              To streamline the payment process for your order,
               we have provided our bank account details below:</p>
               <hr/>
                <p>Bank Name: Meezan Bank</p>
                <p>Account Holder: Muhammad Usman Qaiser Butt</p>
                <p>Account Number: 02070105941803</p>
               <hr/>
                <p>Bank Name: Bank Islamic </p>
                <p>Account Holder: Muhammad Usman Qaiser Butt</p>
                <p>Account Number: 203900120500001</p>
               <hr/>
                <p>JazzCash Account</p>
                <p>Account Holder: Muhammad Usman Qaiser Butt</p>
                <p>Mobile Number: 03204503381</p>
                <hr/>
                <p>Please ensure that you transfer the exact amount
                   mentioned in your order summary to the above-mentioned 
                   bank account. It is crucial that you use your order number
                   as the reference when making the payment to help us 
                   identify your transaction accurately.</p>
                <p>Once the payment is completed, 
                  kindly take a screenshot of the transaction confirmation 
                  and email it to <a style={{color:'#121212'}} href="SoftThreadTextile@gmail.com">
                        SoftThreadTextile@gmail.com
                        </a>.  As soon as we receive 
                  the screenshot and verify the payment, 
                  we will promptly dispatch your order for delivery. 
                  Please note that it may take a short while for us to 
                  confirm the payment.</p>
                  <p>Thank you for choosing our online payment option and 
                    for your trust in our services. We look forward to 
                    delivering your order and ensuring your shopping 
                    experience with us is seamless.</p>
                  <p>Warm Regards,</p>
                  <p>Soft Thread Textiles</p>
                  <p>
                    <span style={{fontSize:'14px', color:"#121212"}}>
                      PHONE :
                      </span>
                      <a style={{color:'#121212'}} href="tel:+923018641774">
                        +92 308 133 3305
                        </a>
                        </p>
                  <p>
                    <span style={{fontSize:'14px', color:"#121212"}}>
                      EMAIL :
                      <span>&nbsp;</span>
                      </span>
                      <a style={{color:'#121212'}} href="SoftThreadTextile@gmail.com">
                        SoftThreadTextile@gmail.com
                        </a>
                        </p>
          </div>
        </div>
      </div>


    </div>
  </Layouts>
  )
}

export default PaymentPage
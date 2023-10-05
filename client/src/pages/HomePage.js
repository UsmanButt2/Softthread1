import React from 'react'
import Layouts from '../components/Layout/Layouts'
import Carousals from './Carousals'
import HomeProducts from './HomeProducts'
import HomePageProduct from './HomePageProduct'
import Categories from './Categories'
import HomeSaleProducts from './HomeSaleProducts'
import HomePageSaleProduct from './HomePageSaleProduct'
import ReviewList from '../components/ReviewList'

const HomePage = () => {
    const marqueeStyle = {
      fontSize: '13px',
      color: 'grey',
      marginTop: '5px',
    };
  

  return (  <>
  <h2 className="headline mt-2">
 <marquee behavior="scroll" direction="left" style={{fontSize:"18px"}}>
 FREE SHIPPING ON ORDERS ABOVE RS.5000 WITHIN PAKISTAN.
    </marquee>
    </h2>
    <Layouts title={'SoftThreads textile'}>        
        <Carousals/>   
        <Categories/>     
        <HomePageProduct />
        <HomePageSaleProduct/>
        <HomeProducts/>
        <HomeSaleProducts/> 
        <ReviewList />
          
    </Layouts>
    </>
    
  )
}

export default HomePage
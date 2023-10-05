import React from 'react'

const Carousals = () => {
  return (
    
       
    
    <>
    <div id="carouselExampleAutoplaying" className="carousel slide mt-2" data-bs-ride="carousel">
  <div className="carousel-inner">
  <div className="carousel-item active">
      <img src='/images/carousal2.jpeg' className="d-block w-100" alt="3" />
    </div> 

    <div className="carousel-item ">
    <img src='/images/menslider2.jpg' alt='contact' className="d-block w-100"  />
    </div>    
    
    <div className="carousel-item">
      <img src='/images/carousal3.jpeg' className="d-block w-100" alt="3" />
    </div> 

    

  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
   
  
    </>
    
    
    
    
    
      )
  
}

export default Carousals
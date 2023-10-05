import React from 'react';
import Slider from 'react-slick';

const reviews = [
  
  {
    name: 'Muhammad fakhir',
    rating: 5,
    review: 'I am so happy with my shopping from SoftThreads! the quality and color is fantastic. I changed my mind about color and their whatsapp support team went above and beyond to resolve it quickly and efficiently and changed the color of my choice. The quality of the clothes is top-notch.',
  },
  {
    name: 'Nazir Ahmad',
    rating: 4.5,
    review: 'affordable clothing. I found some unique pieces. The ordering process was smooth, and arrived in excellent condition. The quality of the clothing is Good. In short, great experience.',
  },
  {
    name: 'Akbar Khan',
    rating: 5,
    review: 'recommeded. also good for bulk shopping . five star quality, shipping service everything good.',
  },
  {
    name: 'Sarfaraz Ahmad',
    rating: 4,
    review: 'I recently ordered from this clothing site, and I must say I m quite pleased with my experience. Good Packing and on time delivery . Trust Worthy. Recommended!',
  },
  {
    name: 'Shazia Tariq',
    rating: 4.5,
    review: 'Greattt Experience. Thanks. God bless you ',
  
  },
  {
    name: 'Latif Iqbal',
    rating: 4.5,
    review: 'i bought 3 dresses of different colors to gift someone and i found the cloth and color of good quality. recommended!',
  
  },
  {
    name: 'Shaheena Safdar',
    rating: 4.5,
    review: 'This site offers a great selection of variety and affordable clothing. The quality of the clothing is impressive. Highly Recommeded from me.',
  }
];


const ReviewList = () =>   {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    dots: true,
  };

  return (
    <> 
    
    <div className='text-center m-5'>
         <h2 className=' mt-4 mb-5'>
    Rating and Reviews
        </h2>
    <div className='reviewmain'>

    <div className="review-list">
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <div className="profile-picture">
              {/* Add your profile picture here */}
            </div>
            <div className="profile-info">
              <h3>{review.name}</h3>
              <div className="star-rating">
                {Array.from({ length: review.rating }, (_, i) => (
                  <span key={i} role="img" aria-label="star">
                    ⭐
                  </span>
                ))}
              </div>
            </div>
            <p className="review-text">{review.review}</p>
          </div>
        ))}
      </Slider>
    </div>
    </div>
    </div>
    </>
  );

};

export default ReviewList;
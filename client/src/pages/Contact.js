import React from 'react'
import Layouts from '../components/Layout/Layouts'


const Contact = () => {
  return (
    <Layouts title={'Contact Us'}>
  <div className="bredcrumbWrap" style={{margin:'10px', fontSize:'18px'}}>
  <nav className="page-width breadcrumbs mt-5" role="navigation" aria-label="breadcrumbs">
    <a href="/" title="Back to the home page" style={{color:'gray', textDecoration:'none'}}>Home</a>     
    <span aria-hidden="true" className="symbol" style={{padding:'0 5px'}}>|</span>
    <span className="title-bold">Contact</span>
  </nav>
</div>

<div className='row_contactus'>

<div className='colomimg'>
<img src='/images/contactside.jpg' alt='contact' />
</div>
<div className='colomabout'>
<h3 className='mb-4'>About</h3>
<p>Welcome to Soft Thread, where elegance meets craftsmanship.
 Since 1971, we've woven stories of style with dedication. 
From Anarkalli's heart as Al-Fateh Fabrics, we offer quality and forward designs.
With five decades of commitment, each fabric reflects our excellence.
Soft Thread emerges from this legacy, merging tradition and innovation.
Transitioning from Al-Fateh Fabrics, our devotion remains unwavering.
Join us on a journey redefining fashion, where quality, professionalism, and timeless style converge.
Welcome to Soft Thread, where legacy continues and elegance is woven into every thread.
</p>
<h4 className='mt-5 mb-4' style={{fontSize:'30px'}}>Contact Info</h4>
<ul className="contact-address">
  <li>
    <strong>ADDRESS :</strong><span>&nbsp;</span>Mehtab market new Anarkali</li>
  <li className="phone">
    <strong>PHONE :<span>&nbsp;</span></strong><a href="tel:+923018641774">+92 308 133 3305</a>
  </li>
  <li className="email">
    <strong>EMAIL :<span>&nbsp;</span></strong><a href="SoftThreadTextile@gmail.com">SoftThreadTextile@gmail.com</a>
  </li>
</ul>


</div>
<div>

</div>
</div>




    </Layouts>
  )
}

export default Contact
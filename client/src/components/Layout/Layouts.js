import React from 'react'
import Headers from './Headers'
import Footer from './Footer'
import {Helmet} from 'react-helmet'
import WhatsAppButton from '../WhatsAppButton'


const Layouts = ({children,title,description,keywords,author}) => {
  return (
    <div>
      <Helmet>
                <meta charSet="utf-8" />
                
  <meta name="description" content={description} />
  <meta name="keywords" content={keywords} />
  <meta name="author" content={author} />


                <title>{title}</title>
                
            </Helmet>
      <Headers/>
      <main style={{ minHeight: '80vh'}}>
        
      {children}
      </main>
      <WhatsAppButton/>
       <Footer/>
    </div>
  )
}


export default Layouts
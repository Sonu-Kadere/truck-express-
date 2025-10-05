import React from 'react'
import Home from './Home.jsx';
import Services from './Our-Services.jsx';
import WhyChooseUs from './whychoose.jsx';
import About from './about.jsx';
import Footer from './Footer.jsx';
import Booking  from './Booking.jsx';
import How from './who-we-work.jsx'


export default function homepage() {
  return (
    <div>  
       
        <Home/>
        <Services/>
        <Booking/>
        <WhyChooseUs/>
        <About/>
        <How/>
        <Footer/>


      
    </div>
  )
}

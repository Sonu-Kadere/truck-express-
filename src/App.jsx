import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './componets/header';
import Home from './componets/homepage.jsx';
import Services from './componets/Our-Services';
import WhyChooseUs from './componets/whychoose';
import About from './componets/about';
import Contact from './componets/contact.jsx';
import Footer from './componets/Footer';
import Booking  from './componets/Booking.jsx';
import How from './componets/who-we-work.jsx'
import Login from './componets/login.jsx'

export default function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/about' element={<About />} />
        <Route path='/why-choose-us' element={<WhyChooseUs />} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/my-bookings' element={<Booking/>} />
        <Route path='/how-we-work' element={<How/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

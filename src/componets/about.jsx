import React from 'react';

// Import statements for images (these would be your actual image imports)
const YellowTruck = 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
const GreenTruck = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80';
const WhatWeDoTruck = 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80';
const BlueTruck = 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80';

const About = () => {
  return (
    <>
   
    

      <div className="bg-white">

        {/* About Us Section */}
        <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 text-center lg:text-left">
                  About Us
                </h2>
                <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed">
                  <p>
                    TRUCKEXPRESS is a pioneer logistics aggregator based startup in central India.
                    Through our robust network and user-friendly online booking system, we ensure
                    safe and timely door-to-door delivery.
                  </p>
                  <p>
                    We are a reestablishment of NEW ORIENT TRANSPORT (1971–2000) by
                    MR. ASHOK KUMAR HURIA and sister company of ORIENT TRANSPORT ORGANISATION,
                    founded in 2016 by MR. SANJAY HURIA.
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <img
                  src={YellowTruck}
                  alt="Yellow Truck"
                  className="w-full h-64 sm:h-72 lg:h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section id="mission" className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              <div className="order-1">
                <img
                  src={GreenTruck}
                  alt="Green Truck"
                  className="w-full h-64 sm:h-72 lg:h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="order-2">
                <div className="mb-8 sm:mb-12 text-center lg:text-left">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    Build the first-of-its-kind robust and value-driven network of transportation
                    by leveraging new age technology to create symbiotic relationship among our
                    customers, partner companies and drivers.
                  </p>
                </div>
                <div className="text-center lg:text-left">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    To emerge as an industry thought leader in the trucking industry, by
                    streamlining and transforming the whole logistics ecosystem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 text-center lg:text-left">
                  What We Do
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 font-medium text-center lg:text-left">
                  India has one of the largest road networks in the world, aggregating
                  to about 33 lakh kilometers at present.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 sm:p-6 mb-6 sm:mb-8">
                  <p className="text-sm sm:text-base text-gray-700 italic leading-relaxed">
                    "Supply chains are everywhere. From the biggest company in the world
                    to running your household. We all have supply chain experience even
                    if we don't know it." — EverythingSupplyChain.com
                  </p>
                </div>

                <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed">
                  <p>
                    Transport and logistics industry is one of the largest industries globally,
                    comprising 6 sectors: <strong>ROAD, MARITIME, STORAGE, AIR, RAIL, WAREHOUSE</strong>.
                  </p>
                  <p>
                    <strong>TRUCKEXPRESS specializes in ROAD and WAREHOUSING</strong> solutions.
                    We address the unorganized structure of India's logistics industry,
                    reducing delays and optimizing supply chains.
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <img
                  src={WhatWeDoTruck}
                  alt="What We Do Truck"
                  className="w-full h-64 sm:h-72 lg:h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              <div className="order-1">
                <img
                  src={BlueTruck}
                  alt="Blue Truck"
                  className="w-full h-64 sm:h-72 lg:h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="order-2">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 text-center lg:text-left leading-tight">
                  <span className="text-blue-600">TRUCKEXPRESS</span> bridges the gap with
                  comprehensive logistics services
                </h2>

                <div className="grid grid-cols-1 gap-3 sm:gap-4">
                  {[
                    'Reliability & Trust',
                    'Customizable Logistics Services',
                    'Real-time Truck Tracking',
                    'Transparent Pricing Model',
                    'Hassle-free Goods Delivery',
                    'Online Truck Booking System',
                    'Trained Drivers from Authorized Centers'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 sm:space-x-4 py-1 sm:py-2">
                      <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-blue-600 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-base sm:text-lg text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section id="leadership" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
                Our Leadership
              </h2>
              <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed">
                <p>
                  At TruckExpress, we believe in the huge potential of logistics industry.
                  We are led by a team of driven professionals with technology
                  and logistics expertise, having cumulative experience of over 100 years.
                </p>
                <p>
                  With thorough knowledge, proven track record and extensive industry
                  experience, we deliver on-time and hassle-free goods delivery.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="mb-6">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-blue-100 rounded-full mx-auto flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 10a4 4 0 100-8 4 4 0 000 8zM2 18a8 8 0 0116 0H2z" />
                    </svg>
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
                    Board of Directors
                  </div>
                </div>
                <h4 className="font-bold text-gray-900 text-lg sm:text-xl">MR. SANJAY HURIA</h4>
              </div>

              <div className="text-center">
                <div className="mb-6">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-blue-100 rounded-full mx-auto flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 10a4 4 0 100-8 4 4 0 000 8zM2 18a8 8 0 0116 0H2z" />
                    </svg>
                  </div>
                </div>
                <h4 className="font-bold text-gray-900 text-lg sm:text-xl">MR. SHREY HURIA</h4>
              </div>

              <div className="text-center sm:col-span-2 lg:col-span-1">
                <div className="mb-6">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-blue-100 rounded-full mx-auto flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
                    CIO/CTO
                  </div>
                </div>
                <h4 className="font-bold text-gray-900 text-lg sm:text-xl">Mr. Sameer Madan</h4>
                <p className="text-gray-600 mt-3 text-xs sm:text-sm leading-relaxed max-w-xs mx-auto">
                  Chairman and MD IPS P.V. Limited<br />
                  BPO services across Delhi, Chennai, Hyderabad, Bangalore
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default About;

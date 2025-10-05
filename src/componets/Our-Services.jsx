import React from 'react';
import { Truck, DollarSign, Clock, Zap } from 'lucide-react';

let services = [
  {
    title: 'Customized Booking',
    description: 'Tailored logistics solutions that adapt to your specific requirements. Choose your product type, schedule, and delivery preferences with complete flexibility.',
    icon: Truck,
    color: 'bg-blue-500',
    lightColor: 'bg-blue-50',
  },
  {
    title: 'Cost Effective Services',
    description: 'Competitive pricing with transparent costs. Save time and money with our optimized routes and efficient logistics management.',
    icon: DollarSign,
    color: 'bg-green-500',
    lightColor: 'bg-green-50',
  },
  {
    title: 'Instant Quotation',
    description: 'Get real-time pricing instantly. Our smart system calculates accurate quotes based on distance, load type, and current market rates.',
    icon: Zap,
    color: 'bg-orange-500',
    lightColor: 'bg-orange-50',
  },
  {
    title: 'Express Delivery',
    description: 'Fast and reliable delivery with optimized routes. Our experienced drivers ensure your goods reach their destination on time, every time.',
    icon: Clock,
    color: 'bg-purple-500',
    lightColor: 'bg-purple-50',
  },
];

const CoreServices = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-3 sm:mb-4 leading-tight">
            Our Core Services
          </h2>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl lg:max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
            TruckExpress delivers excellence through dedication and passion. Our trained professionals 
            and optimized processes ensure reliable, efficient logistics solutions tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <div
                key={index}
                className="group bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2 p-6 sm:p-8 border border-gray-100 h-full flex flex-col"
              >
                {/* Icon Container */}
                <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 ${service.lightColor} rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                  <IconComponent className={`w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-gray-700`} />
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 group-hover:text-orange-600 transition-colors duration-300 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-sm xl:text-base">
                    {service.description}
                  </p>
                </div>

                {/* Hover Effect Line */}
                <div className="w-0 h-1 bg-gradient-to-r from-orange-400 to-orange-600 group-hover:w-full transition-all duration-500 mt-4 sm:mt-6"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section - Optional */}
        <div className="text-center mt-12 sm:mt-16 lg:mt-20">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 lg:p-12 border border-gray-100">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 mb-6 sm:mb-8 text-base sm:text-lg max-w-2xl mx-auto">
              Experience the difference with TruckExpress. Contact us today for a personalized quote and discover how we can streamline your logistics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Get Instant Quote
              </button>
              <button className="w-full sm:w-auto border-2 border-gray-300 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:border-orange-500 hover:text-orange-600 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreServices;
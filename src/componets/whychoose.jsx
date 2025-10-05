import React, { useState, useEffect } from 'react';
import { User, Truck, DollarSign, Headphones, Search, ChevronRight, Package } from 'lucide-react';

// Freight Tracking Component
const FreightTracking = () => {
  const [orderNumber, setOrderNumber] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = () => {
    if (orderNumber.trim()) {
      console.log('Tracking order:', orderNumber);
      // Handle tracking logic here
    }
  };

  return (
    <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
      />
      
      {/* Dark Overlay with Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-orange-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-blue-400 rounded-full animate-pulse opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-orange-300 rounded-full animate-pulse opacity-50" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-blue-300 rounded-full animate-pulse opacity-30" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Header Section */}
        <div className={`mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <Package className="text-orange-400 w-8 h-8 animate-bounce" />
            <p className="text-sm text-gray-300 font-medium uppercase tracking-widest">
              GET UPDATES
            </p>
            <Truck className="text-blue-400 w-8 h-8 animate-bounce" style={{ animationDelay: '0.5s' }} />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="block text-white">Tracking Your</span>
            <span className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent animate-pulse">
              Freight
            </span>
          </h1>
        </div>

        {/* Tracking Form */}
        <div className={`transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
            {/* Input Container */}
            <div className="relative flex-1 w-full sm:w-auto">
              <input
                type="text"
                value={orderNumber}
                onChange={(e) => setOrderNumber(e.target.value)}
                onFocus={() => setIsInputFocused(true)}
                onBlur={() => setIsInputFocused(false)}
                placeholder="Enter order number"
                className={`w-full px-6 py-4 bg-white/10 backdrop-blur-sm border-2 rounded-full text-white placeholder-gray-300 focus:outline-none transition-all duration-300 ${
                  isInputFocused 
                    ? 'border-orange-400 bg-white/20 shadow-lg shadow-orange-400/20 scale-105' 
                    : 'border-gray-400/30 hover:border-gray-300/50'
                }`}
              />
              
              {/* Input Icon */}
              <Search className={`absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-all duration-300 ${
                isInputFocused ? 'text-orange-400' : 'text-gray-400'
              }`} />
              
              {/* Input Glow Effect */}
              <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-orange-400/20 to-blue-400/20 blur-xl transition-all duration-300 ${
                isInputFocused ? 'opacity-100 scale-110' : 'opacity-0 scale-100'
              }`}></div>
            </div>

            {/* Submit Button */}
            <button
              type="button"
              onClick={handleSubmit}
              className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30 focus:outline-none focus:ring-4 focus:ring-orange-400/50"
            >
              <span className="flex items-center gap-2">
                CHECK NOW
                <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              
              {/* Button Shine Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-700"></div>
            </button>
          </div>

          {/* Additional Info */}
          <div className={`mt-8 transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <p className="text-gray-300 text-sm">
              Enter your order number to get real-time updates on your freight delivery
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Why Choose Us Component
const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  const features = [
    {
      title: 'COMPETITIVE PRICING',
      icon: <DollarSign className="text-2xl" />,
      desc: 'The idea for TRUCKEXPRESS is to serve the market with best technology and product available at our disposal, rather than earning, we work on competitive pricing modal.',
    },
    {
      title: 'TRAINED DRIVERS',
      icon: <User className="text-2xl" />,
      desc: 'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis. Vivamus ac ultrices diam, vitae accumsan tellus.',
    },
    {
      title: 'GUARANTEED PICK UP',
      icon: <Truck className="text-2xl" />,
      desc: 'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis. Vivamus ac ultrices diam, vitae accumsan tellus.',
    },
    {
      title: 'REAL TIME TRUCK TRACKING',
      icon: <Headphones className="text-2xl" />,
      desc: 'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis. Vivamus ac ultrices diam, vitae accumsan tellus.',
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Header Section with Staggered Animation */}
      <div className="text-center mb-12 relative z-10">
        <p className={`text-sm text-gray-600 font-medium uppercase tracking-wide mb-2 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          OUR GOODNESS
        </p>
        <h2 className={`text-3xl lg:text-4xl font-bold text-gray-800 mb-4 transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          WHY CHOOSE US
        </h2>
        <div className={`w-16 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto transition-all duration-700 delay-400 ${
          isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
        }`}></div>
      </div>
      
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-6xl mx-auto relative z-10">
        {/* Business Man Image with Floating Animation */}
        <div className={`w-full lg:w-1/2 flex justify-center transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
        }`}>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-500 hover:scale-105 relative overflow-hidden group">
            {/* Animated shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-1000"></div>
            
            <img
              src="https://truckexpress.in/Corporate/index/images/business-man.png"
              alt="Business Man"
              className="max-w-sm w-full h-auto animate-float"
            />
          </div>
        </div>
        
        {/* Features Grid with Staggered Animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full lg:w-1/2">
          {features.map((item, index) => (
            <div 
              key={index} 
              className={`flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200 cursor-pointer transition-all duration-500 hover:shadow-xl hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } ${hoveredCard === index ? 'shadow-2xl -translate-y-2 scale-105' : 'shadow-md'}`}
              style={{ 
                transitionDelay: `${800 + index * 150}ms`,
                background: hoveredCard === index ? 'linear-gradient(135deg, #fff 0%, #f8fafc 100%)' : 'white'
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Animated Icon Container */}
              <div className={`rounded-xl p-3 flex-shrink-0 transition-all duration-300 ${
                hoveredCard === index 
                  ? 'bg-gradient-to-br from-orange-400 to-orange-600 text-white scale-110 rotate-3' 
                  : 'bg-orange-50 text-orange-500'
              }`}>
                <div className={`transition-transform duration-300 ${
                  hoveredCard === index ? 'animate-bounce' : ''
                }`}>
                  {item.icon}
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className={`font-semibold text-sm mb-2 leading-tight transition-all duration-300 ${
                  hoveredCard === index ? 'text-orange-600 transform translate-x-1' : 'text-gray-800'
                }`}>
                  {item.title}
                </h3>
                <p className={`text-sm leading-relaxed transition-all duration-300 ${
                  hoveredCard === index ? 'text-gray-700' : 'text-gray-600'
                }`}>
                  {item.desc}
                </p>
              </div>
              
              {/* Hover Border Animation */}
              <div className={`absolute inset-0 rounded-xl border-2 border-orange-400 opacity-0 transition-all duration-300 ${
                hoveredCard === index ? 'opacity-100 scale-100' : 'scale-95'
              }`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Main Combined Component
const CombinedFreightComponents = () => {
  return (
    <div>
      <FreightTracking />
      <WhyChooseUs />
      
      {/* Custom CSS for floating animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default CombinedFreightComponents;
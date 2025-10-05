import React, { useState } from 'react';
import Services from './Our-Services';
import { ArrowRight, Phone, Shield } from 'lucide-react';
import vehicleImg from '../asset/vehicle-move.jpg';

const Home = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  const handleSendOtp = () => {
    if (phoneNumber.length >= 10) {
      setOtpSent(true);
    }
  };

  const handleVerifyOtp = () => {
    if (otp.length >= 4) {
      // Handle OTP verification
      console.log('OTP verified');
    }
  };

  return (
    <>
      <div className="min-h-screen relative overflow-hidden">
        {/* Background with overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${vehicleImg})`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-blue-900/70 to-gray-900/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-screen flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-12 py-8 lg:py-0">
          
          {/* Left Content */}
          <div className="flex-1 max-w-2xl text-white text-center lg:text-left mb-8 lg:mb-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 lg:mb-6">
              Fast & Reliable
              <span className="block text-orange-400 mt-2">Truck Booking</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-200 mb-6 lg:mb-8 leading-relaxed px-4 sm:px-0">
              Connect with verified truck drivers across the country. 
              Safe, efficient, and affordable transportation for all your logistics needs.
            </p>
            
            {/* Features */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 text-sm justify-center lg:justify-start">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <Shield className="w-5 h-5 text-green-400" />
                <span>Verified Drivers</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <ArrowRight className="w-5 h-5 text-orange-400" />
                <span>Quick Booking</span>
              </div>
            </div>
          </div>

          {/* Right Form Section */}
          <div className="w-full max-w-md lg:ml-8">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 sm:p-8">
              <div className="text-center mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Book Your Truck</h2>
                <p className="text-gray-600 text-sm">
                  Get instant quotes and book verified trucks
                </p>
              </div>

              <div className="space-y-4">
                {/* Phone Number Input */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 block">
                    Phone Number
                  </label>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="Enter your phone number"
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-base"
                      maxLength="10"
                    />
                    <button
                      onClick={handleSendOtp}
                      disabled={phoneNumber.length < 10}
                      className="px-4 sm:px-6 py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors whitespace-nowrap text-sm sm:text-base"
                    >
                      {otpSent ? 'Resend' : 'Send OTP'}
                    </button>
                  </div>
                </div>

                {/* OTP Input */}
                {otpSent && (
                  <div className="space-y-2 animate-in slide-in-from-top duration-300">
                    <label className="text-sm font-medium text-gray-700 block">
                      Verification Code
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        placeholder="Enter 6-digit OTP"
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-base"
                        maxLength="6"
                      />
                      <button
                        onClick={handleVerifyOtp}
                        disabled={otp.length < 4}
                        className="w-12 h-12 bg-orange-500 text-white rounded-lg hover:bg-orange-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center justify-center flex-shrink-0"
                      >
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                    <p className="text-xs text-gray-500">
                      OTP sent to +91 {phoneNumber}
                    </p>
                  </div>
                )}

                {/* Terms */}
                <p className="text-xs text-gray-500 text-center mt-6 leading-relaxed">
                  By continuing, you agree to our{' '}
                  <span className="text-orange-500 cursor-pointer hover:underline">
                    Terms of Service
                  </span>{' '}
                  and{' '}
                  <span className="text-orange-500 cursor-pointer hover:underline">
                    Privacy Policy
                  </span>
                </p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-4 sm:mt-6 text-center text-white">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3">
                <div className="text-lg sm:text-xl font-bold">500+</div>
                <div className="text-xs text-gray-300">Verified Trucks</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3">
                <div className="text-lg sm:text-xl font-bold">24/7</div>
                <div className="text-xs text-gray-300">Support</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3">
                <div className="text-lg sm:text-xl font-bold">100%</div>
                <div className="text-xs text-gray-300">Secure</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Services Section */}
      <Services />
    </>
  );
};

export default Home;
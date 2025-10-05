import React from 'react';
import { Mail, Phone } from 'lucide-react';
import logo from '../asset/truck2.png'; // Correct path to image

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 pt-10 border-t">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 pb-10">
        
        {/* Company Info */}
        <div>
          <img src={logo} alt="Truck Express Logo" className="h-20 mb-4" />
          <p className="text-sm leading-relaxed">
            TRUCKEXPRESS is a pioneer logistics aggregator-based startup in central INDIA. 
            Through our robust network and user-friendly online booking system, 
            we ensure timely and safe door-to-door delivery of our customers' goods.
            With thorough market research, we’ve built an exclusive transportation network 
            that helps us fulfill our goals.
          </p>
        </div>

        {/* Sister Concerns */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-blue-900">SISTER CONCERNS</h3>
          <ul className="space-y-1 text-orange-600 font-medium">
            <li>ORIENT TRANSPORT ORGANISATION</li>
            <li>NEW ORIENT TRANSPORT</li>
            <li>RUBY LOGISTICS</li>
            <li>HELLO LOGISTICS</li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-blue-900">POLICY</h3>
          <ul className="space-y-1 text-gray-600">
            <li><a href="#">Terms Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Refund Cancellation Policy</a></li>
            <li><a href="#">Shipping Policy</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-blue-900">Call</h3>
          <div className="flex items-center gap-2 text-gray-700 mb-2">
            <Phone className="text-red-600 w-5 h-5" />
            <span>+91 0731-2549369</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <Mail className="text-red-600 w-5 h-5" />
            <span>info.truckexpress@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="bg-cyan-600 text-white text-center py-4 text-sm">
        Copyright © 2021 Truck Express, All Rights Reserved
      </div>
    </footer>
  );
}

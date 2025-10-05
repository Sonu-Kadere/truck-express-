import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactUs = () => {
  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600 text-lg">
            Get in touch with us for all your transportation needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Phone Section */}
          <div className="bg-white rounded-lg shadow-sm p-6 text-center hover:shadow-md transition-shadow">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
              <Phone className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Phone</h3>
            <div className="space-y-1">
              <p className="text-gray-600">+91 0731-2549369</p>
              <p className="text-gray-600">+91 0731-4080125</p>
            </div>
          </div>

          {/* Email Section */}
          <div className="bg-white rounded-lg shadow-sm p-6 text-center hover:shadow-md transition-shadow">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
              <Mail className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Email</h3>
            <p className="text-gray-600 break-words">info.truckexpress@gmail.com</p>
          </div>

          {/* Address Section */}
          <div className="bg-white rounded-lg shadow-sm p-6 text-center hover:shadow-md transition-shadow">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-4">
              <MapPin className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Address</h3>
            <p className="text-gray-600 leading-relaxed">
              UG-8, ROYAL GOLD,<br />
              4-A, Y.N. Road,<br />
              INDORE: 452 001
            </p>
          </div>
        </div>

        {/* Optional: Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Ready to get started?</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
            Get Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
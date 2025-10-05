import React from "react";
import GreenTruck from "../asset/business-about.png";
import YellowTruck from "../asset/truck2.png";
import { FaCheckCircle } from "react-icons/fa";

export default function TruckBookingInfo() {
  return (
    <div className="bg-gray-50 min-h-screen">
       <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center order-2 lg:order-1">
              <img 
                src={YellowTruck} 
                alt="Yellow Truck" 
                className="w-full max-w-lg h-auto object-contain rounded-lg shadow-lg"
              />
            </div>

            <div className="space-y-8 order-1 lg:order-2">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                  Book Your <span className="text-orange-500">Truck</span> Easily
                </h2>
                <p className="text-gray-600 text-lg">
                  With TRUCKEXPRESS, book your truck in three simple steps
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">Simple Booking Process</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                    <div className="flex-shrink-0">
                      <FaCheckCircle className="text-orange-500 text-xl mt-1" />
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      <span className="font-semibold">Step 1:</span> Enter pickup and drop city names
                    </p>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                    <div className="flex-shrink-0">
                      <FaCheckCircle className="text-orange-500 text-xl mt-1" />
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      <span className="font-semibold">Step 2:</span> Provide truck details - type of goods, 
                      truck specifications, and weight requirements
                    </p>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                    <div className="flex-shrink-0">
                      <FaCheckCircle className="text-orange-500 text-xl mt-1" />
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      <span className="font-semibold">Step 3:</span> Enter company information 
                      (optional for registered users) - company name, email, and phone number
                    </p>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <div className="flex-shrink-0">
                      <FaCheckCircle className="text-orange-500 text-xl mt-1" />
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      <span className="font-semibold">Final Step:</span> Confirm pickup and drop addresses, 
                      select payment mode, and click BOOK. Your truck will be assigned instantly!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section 1 - Booking Management */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                  You're Good To <span className="text-orange-500">GO</span> Now!
                </h2>
                <p className="text-gray-600 text-lg">
                  If you have any further queries, do get in touch with us.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="font-bold text-xl text-blue-900 mb-3">MY BOOKINGS</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Manage your booking and track your truck by entering your mobile number and OTP. 
                    Check history and status in your bookings dashboard.
                  </p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="font-bold text-xl text-green-900 mb-3">REGULAR UPDATES</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Subscribe to our EMAIL and SMS tracking for regular updates on your fleet journey. 
                    Stay informed without constant monitoring.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <img 
                src={GreenTruck} 
                alt="Green Truck" 
                className="w-full max-w-lg h-auto object-contain rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Booking Process */}
     
    </div>
  );
}
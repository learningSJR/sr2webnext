"use client";
import React from "react";
import { Truck, ShieldCheck, Tag, Headphones } from "lucide-react";
const Features = () => {
  return (
    <>
      <section className="bg-white py-10 drop-shadow-xs">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {/* Feature 1 */}
          <div className="flex flex-col items-center space-y-2 border-b md:border-b-0 md:border-r border-gray-200 pb-6 md:pb-0">
            <Truck className="text-green-600" size={32} />
            <h3 className="font-semibold text-gray-800">Fast Delivery</h3>
            <p className="text-sm text-gray-600">For all orders over $120</p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center space-y-2 border-b md:border-b-0 md:border-r border-gray-200 pb-6 md:pb-0">
            <ShieldCheck className="text-green-600" size={36} />
            <h3 className="font-semibold text-gray-800">Safe Payments</h3>
            <p className="text-sm text-gray-600">100% secure payment</p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center space-y-2 border-b md:border-b-0 md:border-r border-gray-200 pb-6 md:pb-0">
            <Tag className="text-green-600" size={36} />
            <h3 className="font-semibold text-gray-800">Discount Coupons</h3>
            <p className="text-sm text-gray-600">Enjoy Huge Promotions</p>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col items-center space-y-2">
            <Headphones className="text-green-600" size={36} />
            <h3 className="font-semibold text-gray-800">Quality Support</h3>
            <p className="text-sm text-gray-600">Dedicated 24/7 support</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;

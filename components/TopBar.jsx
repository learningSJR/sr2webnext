import React from "react";
import { Phone, User, Heart, ShoppingCart } from "lucide-react";

const TopBar = () => {
  return (
    <>
      <div className="bg-gray-100 border-b border-gray-200 text-sm w-full">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between py-2">
          {/* Left - Phone */}
          <div className="flex items-center space-x-2 text-gray-700">
            <Phone size={16} className="text-green-600" />
            <span>Call: (+91)-44 - 42658359</span>
          </div>

          {/* Center - Promo Message */}
          <div className="text-center text-gray-800 font-medium mt-2 md:mt-0">
            Summer sale discount{" "}
            <span className="text-green-600 font-bold">50% OFF</span>.
          </div>

          {/* Right - User Links */}
          <div className="flex items-center space-x-4 mt-2 md:mt-0 text-gray-700">
            <a href="#login" className="flex items-center hover:text-green-600">
              <User size={16} className="mr-1" /> Login / Register
            </a>
            <a
              href="#wishlist"
              className="flex items-center hover:text-green-600"
            >
              <Heart size={16} className="mr-1" /> Wishlist
            </a>
            <a href="#cart" className="flex items-center hover:text-green-600">
              <ShoppingCart size={16} className="mr-1" /> Cart
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;

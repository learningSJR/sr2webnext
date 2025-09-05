"use client";
import React from "react";

const Contact = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden" id="contact">
      {/* Background Image with Zoom Animation */}
      <img
        src="https://images.unsplash.com/photo-1587560699334-cc4ff634909a?"
        alt="Contact Background"
        className="absolute inset-0 w-full h-full object-cover animate-slowZoom"
      />

      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 container mx-auto h-full grid grid-cols-1 md:grid-cols-2 items-center px-6">
        {/* Left Column */}
        <div className="hidden md:block text-white max-w-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-left mb-12 text-white-800">
            Get in <span className="text-green-600">Touch</span>
          </h2>
          <p className="text-lg text-gray-200">
            Let’s talk about your next project. Fill out the form and our team
            will get back to you shortly.
          </p>
        </div>

        {/* Right Column (Contact Form) */}
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md ml-auto w-full">
          <h3 className="text-2xl font-semibold mb-6 text-gray-900">
            Contact Us
          </h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-500 outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-500 outline-none"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-500 outline-none"
            />
            <button
              type="submit"
              className="w-full bg-emerald-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-emerald-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Animation Keyframes */}
      <style jsx>{`
        @keyframes slowZoom {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.1);
          }
        }
        .animate-slowZoom {
          animation: slowZoom 20s ease-in-out infinite alternate;
        }
      `}</style>
    </section>
  );
};

export default Contact;

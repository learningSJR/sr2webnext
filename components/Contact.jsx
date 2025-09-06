"use client";
import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 px-6 py-16"
      id="contact"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=1600&auto=format&fit=crop"
          alt="Contact Background"
          className="w-full h-full object-cover animate-slowZoom"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column - Info */}
        <div className="text-white space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Get in <span className="text-emerald-500">Touch</span>
          </h2>
          <p className="text-lg text-gray-300">
            Have a question or want to work with us? Reach out and we’ll get
            back to you as soon as possible.
          </p>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Mail className="text-emerald-500 w-6 h-6" />
              <span>info@sr2edge.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="text-emerald-500 w-6 h-6" />
              <span>+19 (44) 426-5859</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="text-emerald-500 w-6 h-6" />
              <span>MWC Chennai, TN, India</span>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-8 w-full space-y-4">
          <h3 className="text-2xl font-semibold mb-6 text-white">
            Contact <span className="text-emerald-500">Us</span>
          </h3>
          <form className="space-y-4">
            <div className="bg-gray-800/70 rounded-xl px-4 py-3 border border-gray-700 focus-within:border-emerald-500">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-transparent text-white placeholder-gray-400 outline-none"
              />
            </div>
            <div className="bg-gray-800/70 rounded-xl px-4 py-3 border border-gray-700 focus-within:border-emerald-500">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-transparent text-white placeholder-gray-400 outline-none"
              />
            </div>
            <div className="bg-gray-800/70 rounded-xl px-4 py-3 border border-gray-700 focus-within:border-emerald-500">
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full bg-transparent text-white placeholder-gray-400 outline-none resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-emerald-700 transition"
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
          animation: slowZoom 25s ease-in-out infinite alternate;
        }
      `}</style>
    </section>
  );
};

export default Contact;

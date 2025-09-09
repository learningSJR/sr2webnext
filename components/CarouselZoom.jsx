"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Features from "./Features";

const CarouselZoom = () => {
  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1706003259516-210aa931a5c1?",
      title: (
        <>
          Welcome to SR<sup>2</sup> Edge
        </>
      ),
      subtitle: "Find everything your office needs",
      description:
        "Explore premium office essentials and make your workspace efficient.",
      cta: "Shop Now",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop",
      title: "Smart Office Solutions",
      subtitle: "Work smarter, not harder",
      description: "Modern tools and furniture that boost productivity.",
      cta: "Explore Solutions",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop",
      title: "Premium Stationery",
      subtitle: "Organize with style",
      description: "High-quality supplies designed for professionals.",
      cta: "Browse Stationery",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <>
      <div
        className="relative w-full h-[60vh] sm:h-[80vh] md:h-[90vh] overflow-hidden"
        id="home"
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`
            absolute inset-0 flex items-center justify-start transition-opacity duration-1000
            ${current === index ? "opacity-100 z-20" : "opacity-0 z-10"}
          `}
          >
            {/* Background image with zoom */}
            <div
              className={`
              absolute inset-0 transition-transform duration-[3000ms] ease-in-out
              ${current === index ? "scale-100" : "scale-105"}
            `}
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Content (not zoomed) */}
            <div className="relative container mx-auto px-6 z-10 max-w-xl">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white">
                {slide.title}
              </h2>
              <p className="mt-2 text-sm sm:text-lg text-emerald-300">
                {slide.subtitle}
              </p>
              <p className="mt-1 text-xs sm:text-base text-gray-200">
                {slide.description}
              </p>
              <button className="mt-4 sm:mt-6 inline-flex items-center bg-emerald-600 hover:bg-emerald-700 text-white px-4 sm:px-5 py-2 sm:py-3 rounded-full text-sm sm:text-base">
                {slide.cta} <ChevronRight className="ml-2" size={18} />
              </button>
            </div>
          </div>
        ))}

        {/* Left Arrow */}
        <button
          onClick={() =>
            setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
          }
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full z-30"
        >
          <ChevronLeft size={28} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full z-30"
        >
          <ChevronRight size={28} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-30">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full ${
                current === idx ? "bg-emerald-500" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
      <div>
        <Features />
      </div>
    </>
  );
};

export default CarouselZoom;

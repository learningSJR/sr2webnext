"use client";
import React from "react";
import Link from "next/link";

const Sitemap = () => {
  const sitemap = {
    title: "UX Sitemap",
    children: [
      {
        title: "Company",
        links: ["About Us", "Contact Us", "Careers", "FAQ"],
      },
      {
        title: "Shop",
        links: ["Products", "New Arrivals", "Best Sellers", "Categories"],
      },
      {
        title: "Support",
        links: ["Delivery Policy", "Return Policy", "Privacy Policy", "Terms"],
      },
    ],
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 px-4 py-20 overflow-x-auto">
      <div className="w-full max-w-6xl flex flex-col items-center text-white relative">
        {/* Root Node */}
        <div className="relative flex flex-col items-center">
          <div className="w-44 h-16 flex items-center justify-center border-2 border-emerald-500 rounded-lg bg-gray-800 text-white font-bold shadow-lg">
            {sitemap.title}
          </div>

          {/* Horizontal line from root to parents */}
          <div className="w-full flex justify-between mt-12 relative">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gray-500"></div>

            {sitemap.children.map((section, i) => (
              <div
                key={i}
                className="flex flex-col items-center flex-1 relative px-4"
              >
                {/* Vertical line from horizontal bar to parent */}
                <div className="w-0.5 h-8 bg-gray-500"></div>

                {/* Parent Box */}
                <div className="w-44 h-16 flex items-center justify-center border-2 border-gray-400 rounded-lg bg-gray-700 text-center font-medium shadow-md relative z-10">
                  {section.title}
                </div>

                {/* Vertical line from parent through all children */}
                <div className="absolute top-[72px] bottom-0 left-1/2 w-0.5 bg-gray-500 -translate-x-1/2"></div>

                {/* Child Links */}
                <div className="flex flex-col items-center space-y-6 mt-8 relative z-10">
                  {section.links.map((link, idx) => (
                    <Link
                      key={idx}
                      href="#"
                      className="w-44 h-12 flex items-center justify-center border-2 border-gray-500 rounded-md bg-gray-800 hover:bg-emerald-600 transition text-sm shadow relative"
                    >
                      {link}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sitemap;

"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import TopBar from "@/components/TopBar";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Services", href: "/#services" },
    { label: "Contact", href: "./#contact" },
  ];
  return (
    <>
      {/* Navbar */}

      <nav className="fixed top-0 left-0 w-full h-14 sm:h-16 bg-white shadow z-50 flex items-center flex-col">
        <TopBar />
        <div className="bg-white w-full flex justify-between items-center">
          <div className="container mx-auto flex items-center justify-between">
            <div className="px-6 md:px-12 flex  items-center p-4 gap-3">
              <Image
                src="/assets/sr2edge-logo.svg"
                alt="sr2edge"
                height={48 * 2}
                width={48 * 2}
              />
              <h1 className="text-xl sm:text-base md:text-2xl lg:text-3xl font-bold text-green-600">
                SR<sup>2</sup>Edge
              </h1>
            </div>

            {/* Menu (shared for desktop + mobile) */}
            <div>
              <ul
                className={`flex flex-col md:flex-row md:space-x-6 font-medium text-gray-700 absolute md:static bg-white md:bg-transparent w-full left-0 transition-all duration-300 ease-in-out
            ${
              isOpen
                ? "top-16 opacity-100"
                : "top-[-400px] opacity-0 md:opacity-100"
            }
          `}
              >
                {menuItems.map((item) => (
                  <li
                    key={item.href}
                    className="px-4 py-2 md:py-0 text-center md:text-left"
                  >
                    <Link
                      href={item.href}
                      className="hover:text-green-600 block"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Toggle button (mobile only) */}
              <button
                className="md:hidden text-gray-700"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

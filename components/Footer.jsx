"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";
import Image from "next/image";

const Footer = () => {
  const [today, setToday] = useState("");

  useEffect(() => {
    // Run only on client
    setToday(new Date().toDateString());
  }, []);

  return (
    <footer className="bg-gray-900 text-gray-200 py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1 - Logo & Caption */}
        <div>
          <div className="flex items-center gap-2">
            <Image
              src="/assets/sr2edge-logo.svg"
              alt="SR2 Edge Logo"
              height={48}
              width={48}
            />
            <h2 className="text-2xl font-bold text-green-500">
              SR<span className="align-super text-xs">2</span>Edge
            </h2>
          </div>
          <p className="mt-3 text-sm text-gray-400 leading-relaxed">
            We promise we’ll get back to you promptly – your gifting needs are
            always on our minds!
          </p>
          <div className="flex space-x-4 mt-4">
            <Link href="#" className="hover:text-green-500">
              <Facebook size={20} />
            </Link>
            <Link href="#" className="hover:text-green-500">
              <Twitter size={20} />
            </Link>
            <Link href="#" className="hover:text-green-500">
              <Instagram size={20} />
            </Link>
            <Link href="#" className="hover:text-green-500">
              <Linkedin size={20} />
            </Link>
          </div>
        </div>

        {/* Column 2 - Useful Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Useful Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="hover:text-green-500">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-green-500">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/delivery-policy" className="hover:text-green-500">
                Delivery Policy
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-green-500">
                FAQ’s
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-green-500">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/returns" className="hover:text-green-500">
                Return Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 - Shop */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Shop</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/shop" className="hover:text-green-500">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-green-500">
                Blog News
              </Link>
            </li>
            <li>
              <Link href="/new-arrivals" className="hover:text-green-500">
                New Arrivals
              </Link>
            </li>
            <li>
              <Link href="/keywords" className="hover:text-green-500">
                Keywords
              </Link>
            </li>
            <li>
              <Link href="/sitemap" className="hover:text-green-500">
                Sitemap
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4 - Need Help */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Need Help</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center space-x-2">
              <Phone size={18} className="text-green-500" />
              <span>(+91)-44 - 42658359</span>
            </li>
            <li className="flex items-center space-x-2">
              <Clock size={18} className="text-green-500" />
              <span>Mon – Fri: 9:00am - 20:00pm</span>
            </li>
            <li className="flex items-center space-x-2">
              <Clock size={18} className="text-green-500" />
              <span>Sat: 11:00 – 15:00</span>
            </li>
            <li className="flex items-center space-x-2">
              <Mail size={18} className="text-green-500" />
              <span>info@sr2edge.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Aduma Edge. All rights reserved.{" "}
        <span>{today && `Today: ${today}`}</span>
      </div>
    </footer>
  );
};

export default Footer;

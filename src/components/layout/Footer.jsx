import React from "react";
import {
  FaWhatsapp,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[var(--color-secondary)] via-[var(--color-secondary)] to-[var(--color-primary)] text-white py-10 mt-auto">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
        {/* Left Part - Logo & Slogan */}
        <div className="flex flex-col space-y-2">
          <h1 className="text-2xl font-bold">Metro Mine</h1>
          <p className="text-sm">Your trusted order management partner</p>
        </div>

        {/* Center Part - Links */}
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-1 md:space-y-0 text-sm">
          <a href="#hero" className="hover:underline">
            Home
          </a>
          <a href="#services" className="hover:underline">
            Services
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
          <a href="#about" className="hover:underline">
            About
          </a>
        </div>

        {/* Right Part - Social Media */}
        <div className="flex space-x-4 text-xl">
          <a
            href="tel:+919930014480"
            aria-label="Call"
            className="hover:text-gray-300"
          >
            <FaPhone />
          </a>
          <a
            href="https://wa.me/919930014480"
            aria-label="WhatsApp"
            className="hover:text-gray-300"
          >
            <FaWhatsapp />
          </a>
          <a href="#" aria-label="Facebook" className="hover:text-gray-300">
            <FaFacebookF />
          </a>
          {/* <a href="#" aria-label="YouTube" className="hover:text-gray-300">
            <FaYoutube />
          </a> */}
          <a href="#" aria-label="Instagram" className="hover:text-gray-300">
            <FaInstagram />
          </a>
          <a
            href="mailto:metrominellp@gmail.com"
            aria-label="Gmail"
            className="hover:text-gray-300"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      <p className="text-center text-xs mt-6">
        © {new Date().getFullYear()} Metro Mine LLP. All rights reserved.
        {/* Bottom Bar */}
        <div className="mt-6 border-t border-white/30 pt-4 text-center text-xs md:text-sm flex flex-col md:flex-row justify-center md:space-x-4 space-y-2 md:space-y-0">
          <span>© {new Date().getFullYear()} Metro Mine LLP</span>
          <span>|</span>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            Sitemap
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            Terms & Conditions
          </a>
        </div>
      </p>
    </footer>
  );
}

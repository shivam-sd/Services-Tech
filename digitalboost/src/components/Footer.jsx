import React from "react";
import { FaFileContract } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-300 py-4 px-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        
        {/* Left Section - Terms & Conditions */}
        <div className="flex items-center gap-2">
          <FaFileContract className="text-gray-400 text-lg" />
          <span className="text-sm hover:text-gray-200 cursor-pointer">
            TERMS & CONDITIONS
          </span>
        </div>

        {/* Center Section - Copyright */}
        <div className="text-sm text-gray-400 text-center md:text-left mt-2 md:mt-0">
          Copyright © {new Date().getFullYear()} Chaneep Web Services Pvt Ltd - All Rights Reserved.
        </div>

        {/* Right Section - Links */}
        <div className="flex gap-6 text-sm font-semibold mt-2 md:mt-0">
          <Link to="/services" className="hover:text-yellow-400 transition">SERVICES</Link>
          <Link to="/about" className="hover:text-yellow-400 transition">ABOUT</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


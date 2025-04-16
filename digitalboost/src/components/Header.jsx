import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import logo from "../assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-[#1e3a8a] text-white">
      <nav className="w-full lg:p-2 p-1 flex items-center lg:justify-between bg-gray-800 text-white lg:pr-5 lg:pl-5 overflow-hidden">
        {/* Section 1 */}
        <div className="flex gap-4">
          <p className="flex items-center gap-1">
            <MdEmail />{" "}
            <span className="font-sans text-[12px] lg:text-sm">
            chaneepwebservicespvtltd@gmail.com
            </span>
          </p>
          <p className="flex items-center gap-1">
            <FaPhoneAlt />{" "}
            <span className="font-sans text-[12px] lg:text-sm">
              +91 9111945163
            </span>
          </p>
        </div>

        <div className="icons hidden lg:flex gap-4 font-AfacadFlux text-sm">
          <Link to="#">
            <FaFacebookF />
          </Link>
          <Link to="#">
            <FaSquareXTwitter />
          </Link>
          <Link to="#">
            <FaYoutube />
          </Link>
          <Link to="#">
            <IoLogoLinkedin />
          </Link>
        </div>
      </nav>

      {/* section2 */}

      <div className="w-full bg-[#0f172a] p-2 flex items-center justify-between lg:p-3 lg:pl-8 lg:pr-8">
        <div className="first flex items-center gap-14">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="w-14 h-14  rounded-full" />
          </Link>
          <div className="lg:flex gap-10 font-AfacadFlux text-2xl hidden">
            <Link to="/" className="hover:text-gray-200 duration-200">
              Home
            </Link>
            <Link to="/about" className="hover:text-gray-200 duration-200">
              About
            </Link>
            <Link to="/services" className="hover:text-gray-200 duration-200">
              Services
            </Link>
            <Link to="/contact" className="hover:text-gray-200 duration-200">
              Contact Us
            </Link>
            <Link to="/carrer" className="hover:text-gray-200 duration-200">
              Carrer
            </Link>
            <Link to="/termsandcondition" className="hover:text-gray-200 duration-200">
              Terms & Conditions
            </Link>
          </div>
        </div>

        <div className="second flex items-center justify-center">
          <h1 className="text-2xl font-bold text-stone-300">Chaneep Web Services</h1>
        </div>

        <div className="menu lg:hidden">
          <IoMdMenu
            className="text-4xl cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>

        {/* // Mobile Menu */}
      </div>

      <div
        className={`w-full bg-[#111827] p-2 transition-all duration-500 ease-in-out ${
          isOpen
            ? "opacity-100 max-h-50 visible"
            : "opacity-0 max-h-0 invisible"
        }`}
      >
        <div className="flex flex-col gap-2 items-center font-AfacadFlux text-2xl lg:flex">
          <Link to="/" className="hover:text-gray-200 duration-200">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-200 duration-200">
            About
          </Link>
          <Link to="/services" className="hover:text-gray-200 duration-200">
            Services
          </Link>
          <Link to="/contact" className="hover:text-gray-200 duration-200">
            Contact Us
          </Link>
          <Link to="/carrer" className="hover:text-gray-200 duration-200">
            Carrer
          </Link>
          <Link to="/termsandcondition" className="hover:text-gray-200 duration-200">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

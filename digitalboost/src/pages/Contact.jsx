import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaMicrophone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

// import Header from "../components/Header";
import Form from "./From";

const Contact = () => {

  return (
    <div className="w-full min-h-screen bg-[#1f2937] flex flex-col items-center">
     
        <h3 className="text-4xl text-white font-bold font-AfacadFlux">Contact us </h3>
      <p className="h-1 w-20 bg-white rounded mb-6 mt-2"></p>
      {/* <Header /> */}
      <div className="w-full max-w-[85vw] flex flex-col lg:flex-row items-center justify-between gap-8 p-4">
        {/* Address Section */}
        <div className="flex flex-col items-center text-white text-center">
          <div className="border w-20 h-20 bg-gray-800 border-white rounded-full flex items-center justify-center">
            <FaLocationDot className="text-5xl text-blue-400" />
          </div>
          <p className="mt-3 text-sm">
            <strong>Address</strong> <br />
            Office 411, 4th floor, Ocean Complex, Sector 18, Noida, <br />
             U.P. 201301
          </p>
        </div>

        {/* Phone Section */}
        <div className="flex flex-col items-center text-white text-center">
          <div className="border w-20 h-20 border-white rounded-full flex items-center justify-center bg-gray-800">
            <FaMicrophone className="text-blue-400 text-5xl" />
          </div>
          <p className="mt-3 text-sm">
            <strong>Phone</strong> <br />
            +919111945163
          </p>
        </div>

        {/* Email Section */}
        <div className="flex flex-col items-center text-white text-center">
          <div className="border w-20 h-20 border-white rounded-full flex items-center justify-center bg-gray-800">
            <MdEmail className="text-blue-400 text-5xl" />
          </div>
          <p className="mt-3 text-sm">
            <strong>Support</strong> <br />
            chaneepwebservicespvtltd@gmail.com
          </p>
        </div>
      </div>
 
 {/* form */}
 <h1 className="text-white text-3xl font-bold font-AfacadFlux underline mt-8">Get in touch</h1>
 <Form />

    </div>
  );
};

export default Contact;

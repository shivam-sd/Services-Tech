import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import ServicesData from "../components/ServicesData"; // Importing the Services Data
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="flex flex-col bg-[#0c4a6e] items-center gap-16 py-16 px-8 md:px-20">
      {/* Title Section */}
      <div className="relative text-center">
        <h1 className="text-5xl md:text-5xl font-bold font-AfacadFlux text-white">My Services</h1>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {ServicesData.map((service, index) => (
          <div
            key={index}
            className="flex flex-col justify-center gap-4 lg:p-2 p-3 border-2 border-white rounded-lg transition-all duration-300 cursor-pointer hover:border-pink-500 hover:bg-gradient-to-br from-[#3f0028] to-[#582300] transform hover:scale-105"
          >
            <h3 className="text-xl font-semibold font-AfacadFlux">{service.s_no}</h3>
            <h2 className="text-xl font-extrabold text-center bg-gradient-to-r from-yellow-500 to-purple-500 bg-clip-text text-transparent font-AfacadFlux">
              {service.s_name}
            </h2>
            <p className="text-gray-300 text-base leading-7 max-w-sm font-AfacadFlux">{service.s_desc}</p>
            <div className="flex items-center gap-3 mt-4">
              <Link
                to={`/services/${service.s_no}`}
                key={`${service.s_no}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-lg hover:underline"
              >
                Read More...
              </Link>
              <FaArrowRight className="text-xl" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

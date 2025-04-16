import React, { useState, useEffect } from "react";

const clients = [
  { name: "Renz Globle", img: "https://w3softech.com/assets/images/startup-service-w3softech.png" },
  { name: "Virtual Block Innovatons pvt ltd", img: "https://waysandmeanstechnology.com/Content/assets/images/inner-banner/startup-consulting-banner-desktop.png" },
  { name: "Care4Wheel", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOSj6Olfd1b6DttYnBwcrcGxBY8-XVRfzKLg&s" },
  { name: "Tendo Safaris", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7pn6E0MjI2pg8lA4XrhSlqszynw9tSmV4Ng&s" },
];

const testimonials = [
  " Renz Global helps you to become an entrepreneur, self-dependent, self-earner for a best life.So with RenzGlobal, Be Wise, Be Wealthy. ",
  " VBI helps others to create and improve digital products through modern web application development. We also consult entrepreneurs to create sustainable partnerships. ",
  " care4wheel enthusiastically provides car washing & detailing solutions at your doorstep for people who know how to drive & when to drive . ",
  " A Travel Company provides Travel Solutions & Management - Hotels Bookings & Accommodations around the World - Transportation - Holiday Packages. ",
];

const ClientsTestimonials = () => {
  const [clientIndex, setClientIndex] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    const clientInterval = setInterval(() => {
      setClientIndex((prevIndex) => (prevIndex + 1) % clients.length);
    }, 3000);

    const testimonialInterval = setInterval(() => {
      setTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);

    return () => {
      clearInterval(clientInterval);
      clearInterval(testimonialInterval);
    };
  }, []);

  return (
    <div className="bg-[#0f172a] text-white p-10 flex justify-between items-center flex-col lg:flex-row gap-5">
      {/* Clients Section */}
      <div className="w-1/2 text-center">
        <h2 className="text-lg font-semibold border-b-2 inline-block border-blue-400 mb-4">
          CLIENTS
        </h2>
        <div className="flex flex-col items-center">
          <img
            src={clients[clientIndex].img}
            alt="Client Logo"
            className="w-20 h-20 rounded-full object-contain transition-opacity duration-500"
          />
          <p className="font-bold text-lg mt-2">{clients[clientIndex].name}</p>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="lg:w-1/2 w-full text-center">
        <h2 className="text-lg font-semibold border-b-2 inline-block border-blue-400 mb-4">
          TESTIMONIALS
        </h2>
        <p className="text-sm  italic transition-opacity duration-500 font-AfacadFlux lg:text-xl">
          {testimonials[testimonialIndex]}
        </p>
      </div>
    </div>
  );
};

export default ClientsTestimonials;

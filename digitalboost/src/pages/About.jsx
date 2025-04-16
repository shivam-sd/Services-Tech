import React from "react";
import logo from "../assets/logo.png"; // Import your logo image here
const About = () => {
  return (
    <div className="w-full min-h-screen bg-[#1e293b] flex flex-col items-center p-6 lg:p-12">
      
      {/* Title Section */}
      <div className="text-center mt-10">
        <h1 className="text-4xl uppercase font-AfacadFlux text-white selection:bg-yellow-300 selection:text-red-500">
          About Us
        </h1>
        <span className="h-1 w-14 bg-white rounded-md mt-3 mx-auto block"></span>
        <p className="mt-3 lg:text-2xl text-xl font-AfacadFlux text-white selection:bg-yellow-300 selection:text-red-500">
          EVERYTHING YOU NEED TO KNOW ABOUT OUR COMPANY
        </p>
      </div>

      {/* Content Section1 */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-screen-lg mt-10 rounded-lg p-6 lg:p-12 gap-8 shadow-lg">
        
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="https://biopolislifesciences.com/wp-content/uploads/2019/01/who.png"
            loading="lazy"
            className="w-72 h-72 lg:w-96 lg:h-96 object-contain rounded-lg shadow-md"
            alt="About Us"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col items-center lg:items-start text-white text-center lg:text-left max-w-xl">
          <h3 className="text-xl lg:text-2xl font-AfacadFlux uppercase">
            Who We Are
          </h3>
          <span className="h-1 w-14 bg-white rounded-md mt-2"></span>
          <p className="mt-4 text-lg leading-relaxed">
          Chaneep Web Services Pvt Ltd is a dynamic IT solutions provider committed to delivering high-quality digital services tailored to modern business needs. We specialize in AWS solutions, web development, and mobile app development, helping businesses of all sizes build, scale, and optimize their digital presence. With a team of skilled professionals and a passion for innovation, we bring your ideas to life with robust, secure, and scalable technology.

          </p>
          <p className="mt-4 text-lg leading-relaxed">
          To be a leading technology partner that empowers businesses with innovative, reliable, and future-ready digital solutions—driving success through creativity, efficiency, and excellence.
          </p>
        </div>
      </div>

      {/* Content Section2 */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-screen-lg mt-10 rounded-lg p-6 lg:p-12 gap-8 shadow-lg">
        

        {/* Text Section */}
        <div className="flex flex-col items-center lg:items-start text-white text-center lg:text-left max-w-xl">
          <h3 className="text-xl lg:text-2xl font-AfacadFlux uppercase">
            Who We Are
          </h3>
          <span className="h-1 w-14 bg-white rounded-md mt-2"></span>
          <p className="mt-4 text-lg leading-relaxed">
            We are a team of young, talented, and skillful web developers and 
            design engineers who meticulously create great websites and designs! 
            We provide professional and customized solutions to our clients that 
            help them market their products to a wider audience.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            We are experts in web designing, developing, branding, optimizing, 
            and creating apps and software for a wide range of clients. Apart 
            from web development, we deliver a complete suite of digital services. 
            Our experienced team of developers is armed with the latest and advanced 
            technologies to ensure top-notch solutions.
          </p>
        </div>

         {/* Image Section */}
         <div className="flex justify-center">
          <img
            src={logo}
            loading="lazy"
            className="w-72 h-72 lg:w-96 lg:h-96  object-contain rounded shadow-md"
            alt="About Us"
          />
        </div>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  {
    src: "https://png.pngtree.com/thumb_back/fh260/background/20230620/pngtree-d-rendering-of-seo-optimization-stock-trading-data-analysis-and-web-image_3646327.jpg",
    text: "Markeing Strategy And Plan",
},
{
    src: "https://cbx-prod.b-cdn.net/COLOURBOX35006612.jpg?width=800&height=800&quality=70",
    text: "Web Design And Development",
  }
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto change slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-96 mx-auto overflow-hidden shadow-2xl">
    <AnimatePresence mode="wait">
      <motion.img
        key={currentIndex}
        src={images[currentIndex].src}
        alt="slider"
        className="w-full h-96 object-cover"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
    </AnimatePresence>

    {/* Text Overlay */}
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <h2 className="text-white text-4xl font-bold text-center font-AfacadFlux">
        {images[currentIndex].text}
      </h2>
    </div>

    {/* Dots Navigation */}
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
      {images.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentIndex(index)}
          className={`w-3 h-3 rounded-full transition-all ${
            currentIndex === index ? "bg-white" : "bg-gray-400"
          }`}
        ></button>
      ))}
    </div>
  </div>
  );
};

export default ImageSlider;

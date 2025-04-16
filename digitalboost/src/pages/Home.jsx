import React from "react";
import Header from "../components/Header";
import ImageSlider from "./ImageSlider";
import ClientsTestimonials from "./ClientsTestimonials";
import Services from "./Services";
import Contact from "./Contact";
import About from "./About";
import Footer from "../components/Footer";
import OpenChat from "./OpenChat";

const Home = () => {
  return (
    <div>
      <OpenChat />
      <Header />
      <ImageSlider />
      <ClientsTestimonials />
      <Services />
      <Contact />
      <About />
      <Footer />
    </div>
  );
};

export default Home;

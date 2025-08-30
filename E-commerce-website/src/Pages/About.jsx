import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <section className="px-6 md:px-20 py-16 bg-gray-50 min-h-screen">
        <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>
        <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto text-center">
          Welcome to <span className="font-semibold">Gen Z Fashion</span>!  
          Our mission is to redefine your style with the latest trends in streetwear, sneakers, and fashion essentials.  
          We believe in quality, authenticity, and bringing the best fashion to your doorstep.  
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">🌍 Our Vision</h3>
            <p className="text-gray-600">To be the leading fashion platform that inspires creativity and confidence globally.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">👕 Quality</h3>
            <p className="text-gray-600">We focus on providing high-quality apparel that balances comfort and style.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">🤝 Community</h3>
            <p className="text-gray-600">Our customers are our family. We thrive on collaboration and connection.</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;

import React from "react";
import streetwear from "../assets/streetwear.jpg";
import sneakers from "../assets/sneakers.jpg";
import accessories from "../assets/accessories.jpg";
import { Link } from "react-router-dom";
const FeaturedCollections = () => {
  const collections = [
    {
      id:16,
      title: "Streetwear",
      img: streetwear,
    },
    {
      id:12,
      title: "Sneakers",
      img: sneakers,
    },
    {
      id: 13,
      title: "Accessories",
      img: accessories,
    },
  ];

  return (
    <section className="w-full bg-gradient-to-bl from-white via-blue-50 to-white py-20">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-800">
            Featured <span className="text-blue-500">Collections</span>
          </h2>
          <p className="mt-4 text-gray-600">
            Explore our top categories crafted for Gen Z street fashion.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {collections.map((item, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden shadow-xl group cursor-pointer"
            >
              {/* Background Image */}
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                className="w-full h-96 object-cover transform group-hover:scale-110 transition duration-700 ease-in-out"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent group-hover:from-black/50 transition duration-500 ease-in-out"></div>

              {/* Content */}
              <div className="absolute bottom-6 left-6 z-10">
                <h3 className="text-3xl font-bold text-white drop-shadow-lg">
                  {item.title}
                </h3>
                <Link key={collections.id} to={`/product/${item.id}`}>
                <button className="mt-3 px-5 py-2 rounded-xl bg-white/20 backdrop-blur-md text-white font-medium shadow-lg hover:bg-white hover:text-black transition duration-300 ease-in-out">
                  Shop Now →
                </button></Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;

import React from "react";
import { Link } from "react-router-dom";
import men from "../assets/men.jpg";
import women from "../assets/women.jpg";
import accessories from "../assets/accessories.jpg";
import footwear from "../assets/footwear.jpg";

const CategoryShowcase = () => {
  const categories = [
    { name: "Men", img: men },
    { name: "Women", img: women },
    { name: "Accessories", img: accessories },
    { name: "Footwear", img: footwear },
  ];

  return (
    <section id='categories' className="w-full py-16 bg-gradient-to-bl from-white via-blue-50 to-white">
      <h1 className="text-5xl font-extrabold text-center mb-6">
        Shop by <span className="text-blue-500">Category</span>
      </h1>
      <p className="text-center text-gray-600 mb-12">
        Explore the latest styles tailored just for you
      </p>

      {/* Layout Grid */}
      <div className="grid lg:grid-cols-2 gap-6 px-8 lg:px-20">
        {/* Left side: one tall card (Men) */}
        <Link to='/Collections?gender=Men' >
        <div className="relative group h-[400px] rounded-2xl overflow-hidden shadow-2xl cursor-pointer">
          <img
            src={categories[0].img}
            alt={categories[0].name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          <h2 className="absolute bottom-10 left-10 text-4xl font-bold text-white drop-shadow-lg">
            {categories[0].name}
          </h2>
        </div>
        </Link>

        {/* Right side: 2 stacked cards */}
        <div className="grid grid-rows-2 gap-6">
          <Link to='/Collections?gender=Women'>
          <div
              
              className="relative group rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
            >
              <img
                src={categories[1].img}
                alt={categories[1].name}
                loading="lazy"
                className="h-[190px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <h2 className="absolute bottom-6 left-6 text-3xl font-bold text-white drop-shadow-lg">
                {categories[1].name}
              </h2>
            </div>
            </Link>
            <Link to='/Collections?category=Accessories'>
          <div
              
              className="relative group rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
            >
              <img
                src={categories[2].img}
                alt={categories[2].name}
                loading="lazy"
                className="h-[190px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <h2 className="absolute bottom-6 left-6 text-3xl font-bold text-white drop-shadow-lg">
                {categories[2].name}
              </h2>
            </div>
            </Link>
        </div>
      </div>

      {/* Full-width card (Footwear) */}
      <Link to='/Collections?category=Sneakers'>
      <div className="mt-6 px-8 lg:px-20">
        <div className="relative group rounded-2xl overflow-hidden shadow-2xl h-[180px] cursor-pointer">
          <img
            src={categories[3].img}
            alt={categories[3].name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          <h2 className="absolute bottom-6 left-6 text-3xl font-bold text-white drop-shadow-lg">
            {categories[3].name}
          </h2>
        </div>
      </div>
      </Link>
    </section>
  );
};

export default CategoryShowcase;

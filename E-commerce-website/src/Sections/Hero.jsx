import React from 'react'
import hero_img from '../assets/hero_img.jpg'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <section className="w-full h-min-screen lg:h-screen bg-gradient-to-br from-white via-blue-50 to-white overflow-hidden">
      <div className="w-full h-screen flex flex-col lg:flex-row items-center justify-between px-8 sm:px-10 lg:px-20 py-8 lg:py-20 gap-12">
        
        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight">
            Redefine Your <span className="text-blue-500">Style</span> with Gen Z Fashion
          </h1>
          <p className="text-gray-600 mt-6 sm:mt-8 tracking-wide">
            Discover exclusive outfits, sneakers and streetwear designed for the next generation
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 sm:gap-6 mt-8">
            <Link to='/Cart'>
            <button className="rounded-md py-3 px-6 bg-gradient-to-r from-[#2c67f2] to-[#62cff4] text-white hover:scale-105 transition duration-300 ease-in-out shadow-lg shadow-blue-300 cursor-pointer">
              Shop Now
            </button></Link>
            <Link to='/Collections'>
            <button className="rounded-md py-3 px-6 bg-white border border-gray-200 shadow-md hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
              Explore Collection
            </button>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full h-4/5 lg:w-1/2 flex justify-center">
          <img
            className="rounded-3xl shadow-2xl object-cover w-[80%] sm:w-[70%] lg:w-[80%]"
            src={hero_img}
            alt="Fashion"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero

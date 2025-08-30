import React, { useState, useEffect } from "react";
import saleImg from "../assets/sale.jpg"; // replace with your image

const Discount = () => {
  // Countdown timer (example: 2 days)
  const calculateTimeLeft = () => {
    const difference = +new Date("2025-09-01") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full px-10 rounded-2xl bg-gradient-to-br from-white via-blue-50 to-white">
        <div className="bg-gradient-to-r from-blue-900 via-indigo-600 to-purple-900 text-white py-16 px-6 lg:px-20 rounded-2xl">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 items-center">
                {/* LEFT SIDE */}
                <div className="flex flex-col items-start gap-6">
                <h2 className="text-4xl lg:text-6xl font-extrabold tracking-tight">
                    Limited Time <span className="text-yellow-400">Offer</span>
                </h2>
                <p className="text-lg text-gray-200">
                    Grab your favorite styles with up to{" "}
                    <span className="text-yellow-400 font-semibold">50% OFF</span>.  
                    Hurry, before the deal ends!
                </p>

                {/* Countdown */}
                <div className="flex lg:gap-4 sm:gap-2 text-center">
                    {Object.entries(timeLeft).map(([unit, value], idx) => (
                    <div key={idx} className="bg-white/10 backdrop-blur-lg lg:px-4 sm:px-3  lg:py-2 sm:py-1 rounded-xl">
                        <p className="text-2xl font-bold">{value}</p>
                        <span className="uppercase text-sm text-gray-300">{unit}</span>
                    </div>
                    ))}
                </div>

                <button className="mt-4 bg-gradient-to-r from-yellow-400 to-orange-500 px-6 py-3 rounded-lg text-black font-semibold hover:scale-105 hover:shadow-xl transition-all">
                    Shop Now
                </button>
                </div>

                {/* RIGHT SIDE (Image with overlay) */}
                <div className="relative w-full h-[250px] lg:h-[350px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                    src={saleImg}
                    alt="Sale"
                    loading="lazy"
                    className="w-full h-full object-cover scale-105 hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h3 className="text-3xl lg:text-5xl font-bold text-white drop-shadow-lg">
                    Summer Sale
                    </h3>
                </div>
                </div>
            </div>
      </div>
    </section>
  );
};

export default Discount;

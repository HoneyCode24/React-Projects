import React from "react";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sophia Lee",
      role: "Fashion Enthusiast",
      review:
        "Absolutely love the quality and style! The pieces I ordered fit perfectly and look even better in person.",
      img: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      name: "James Carter",
      role: "Streetwear Lover",
      review:
        "Fast delivery and premium feel. This brand truly understands Gen Z fashion trends!",
      img: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      name: "Aisha Khan",
      role: "Content Creator",
      review:
        "I get so many compliments whenever I wear their collection. A must for anyone who loves staying ahead in fashion.",
      img: "https://randomuser.me/api/portraits/women/55.jpg",
    },
  ];

  return (
    <section className="w-full py-20 px-6 bg-gradient-to-b from-white via-blue-50 to-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-gray-900">
          What Our <span className="text-blue-600">Customers Say</span>
        </h2>
        <p className="text-gray-600 mt-3 mb-12">
          Real stories from real people who trust our style.
        </p>

        {/* Testimonials */}
        <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-1">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white/80 backdrop-blur-md shadow-lg rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition"
            >
              <img
                src={t.img}
                alt={t.name}
                loading="lazy"
                className="w-20 h-20  rounded-full object-cover border-4 border-blue-200"
              />
              <h3 className="mt-4 font-bold text-lg">{t.name}</h3>
              <p className="text-sm text-blue-500">{t.role}</p>

              {/* Stars */}
              <div className="flex justify-center gap-1 my-3 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-600 text-sm italic">“{t.review}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

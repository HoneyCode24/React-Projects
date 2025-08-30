import React from "react";
import jeans1 from "../assets/jeans.jpg";
import jacket2 from "../assets/jacket.jpg";
import watch from "../assets/watch.jpg";
import sunglasses from "../assets/sunglasses.jpg";
import bag2 from "../assets/bag.jpg";
import { useCart } from "../Use-context/CartProvider";
const NewArrivals = () => {

  const {addToCart} = useCart()
  const products = [
      {
        id: 10,
        name: "Jeans",
        price: 800,
        gender: 'Men',
        category: "Jeans",
        images: [jeans1]
      },
    {
    id: 9,
    name: "Jacket",
    price: 1500,
    gender: 'Men',
    category: "Jackets",
    images: [jacket2]
  },
       {
       id: 15,
       name: "Wrist Watch",
       price: 800,
       gender: 'Men',
       category: "Accessories",
       images: [watch]
     },
       {
       id: 13,
       name: "Sun Glasses",
       price: 400,
       gender: 'Unisex',
       category: "Accessories",
       images: [sunglasses]
     },
     {
        id: 6,
        name: "Stylish Bag",
        price: 1200,
        gender: 'Unisex',
        category: "Accessories",
        images: [bag2]
      },
  ];

  const heroProduct = products[0];
  const otherProducts = products.slice(1);

  return (
    <section id='NewArrivals' className="w-full min-h-screen text-center bg-gradient-to-bl from-white via-blue-50 to-white">
      <h1 className="font-extrabold text-4xl md:text-5xl">
        New <span className="text-blue-500">Arrivals</span>
      </h1>
      <p className="text-gray-600 mt-2 mb-8 text-sm md:text-base">
        Fresh styles dropped. Be the first to rock them.
      </p>

      <div className="px-6 md:px-12 h-full w-full grid lg:grid-cols-2 sm:grid-cols-1 gap-6 md:gap-8">
        {/* Hero product */}
        <div className="shadow-2xl relative group rounded-2xl overflow-hidden">
          <img
            src={heroProduct.images[0]}
            alt={heroProduct.name}
            loading="lazy"
            className="h-[400px] md:h-[640px] w-full object-cover block"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition ease-in duration-500 flex flex-col justify-center items-center p-6">
            <button className="bg-gradient-to-r from-[#2c67f2] to-[#62cff4] text-white font-semibold py-2 px-6 rounded-md hover:scale-105 transition cursor-pointer"
            onClick={()=>addToCart(heroProduct)}>
              Add to Cart
            </button>
            <div className="absolute bottom-6 left-6 text-start">
              <p className="font-semibold text-lg text-white">{heroProduct.name}</p>
              <p className="font-semibold text-blue-400 text-lg">₹{heroProduct.price}</p>
            </div>
            <div className="absolute top-2 left-2 bg-gradient-to-r from-[#5b86e9] to-[#7ccee9] text-white font-semibold py-1 px-2 rounded-md">
              New
            </div>
          </div>
        </div>

        {/* Other products grid */}
        <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full">
          {otherProducts.map((item, idx) => (
            <div
              key={idx}
              className="shadow-2xl relative group rounded-2xl overflow-hidden"
            >
              <img
                src={item.images[0]}
                alt={item.name}
                loading="lazy"
                className="h-40 sm:h-54 md:h-78 w-full object-cover block"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent"></div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition ease-in duration-500 flex flex-col justify-center items-center p-6">
                <button className="bg-gradient-to-r from-[#2c67f2] to-[#62cff4] text-white font-semibold py-2 px-6 rounded-md hover:scale-105 transition cursor-pointer"
                onClick={()=>addToCart(item)}>
                  Add to Cart
                </button>
                <div className="absolute top-2 left-2 bg-gradient-to-r from-[#2c67f2] to-[#62cff4] text-white font-semibold px-2 py-1 rounded-md">
                  New
                </div>
              </div>
              <div className="absolute bottom-4 left-4 text-start">
                <p className="font-semibold text-sm sm:text-base text-white">{item.name}</p>
                <p className="font-semibold text-blue-400 text-sm sm:text-base">₹{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;

import React from "react";
import hoodie1 from "../assets/hoodie.jpg";
import sneaker from "../assets/sneaker.jpg";
import cap from "../assets/cap.jpg";
import tshirt2 from '../assets/tshirt.jpg'
import {useCart} from '../Use-context/CartProvider'
const TrendingProducts = () => {

  const {addToCart} = useCart()

  const products = [
    {
      id: 14,
      name: "T-Shirt",
      price: 1200,
      gender: 'Unisex',
      category: "T-Shirt",
      images: [tshirt2]
    },
    {
      id: 2,
      name: "Oversized Hoodie",
      price: 2200,
      gender: 'Women',
      category: "Hoodie",
      images: [hoodie1]
    },
    {
      id: 11,
      name: "Sneaker",
      price: 1600,
      gender: 'Unisex',
      category: "Sneakers",
      images: [sneaker]
    },
    {
      id: 7,
      name: "Stylish cap",
      price: 500,
      gender: 'Unisex',
      category: "Accessories",
      images: [cap]
    }
  ];

  return (
    <section className="w-full h-auto pt-8 bg-gradient-to-br from-white via-blue-50 to-white text-center">
      <h1 className="font-extrabold text-5xl mb-4">Trending <span className="text-blue-500">Products</span></h1>
      <p>Discover the hottest everyone's rocking right now.</p>
      <div className="w-full p-10  grid grid-col md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
        {products.map((item, idx) => {
          return (
            <div key={idx} className="rounded-3xl group relative shadow-2xl cursor-pointer group-hover:scale-110 transition duration-500">
              <img src={item.images[0]} alt="" loading="lazy" className="w-full h-92 object-cover rounded-t-3xl" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition ease-in duration-600 flex flex-col justify-center items-center p-6 rounded-3xl">
                <button className="bg-gradient-to-r from-[#2c67f2] to-[#62cff4] text-white font-semibold py-2 px-6 rounded-md hover:scale-105 transition cursor-pointer"
                  onClick={() => addToCart(item)}>
                  Add to Cart
                </button>
              </div>
              <div className="py-6">
                <p className="font-semibold text-lg">{item.name}</p>
                <p className="text-blue-600 font-bold mt-1">₹{item.price}</p>
              </div>

            </div>
          )

        })}
      </div>
    </section>
  );
};

export default TrendingProducts;

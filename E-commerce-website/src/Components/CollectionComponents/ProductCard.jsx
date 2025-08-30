import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product , addToCart}) => {
  return (
    <div className="relative group rounded-2xl shadow-md hover:shadow-2xl">
      <div>
        <img
          src={product.images[0]}
          alt={product.name}
          className="h-68 w-full object-cover rounded-t-2xl"
        />
        <div className="bg-gradient-to-t from-black/20 via-black/10 to-transparent"></div>
      </div>
      <div className="text-center py-4">
        <p>{product.name}</p>
        <p>₹{product.price}</p>
      </div>
      <div className="absolute inset-0 rounded-2xl flex lg:flex-row flex-col justify-center items-center gap-2 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <button className="rounded-4xl px-4 py-2 text-black bg-white hover:bg-blue-600 hover:text-white transition cursor-pointer" onClick={()=>addToCart(product)}>
          Add to cart
        </button>
        <Link key={product.id} to={`/product/${product.id}`}>
        <button className="rounded-4xl px-4 py-2 text-black bg-white hover:bg-blue-600 hover:text-white transition cursor-pointer">
          Quick view
        </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;

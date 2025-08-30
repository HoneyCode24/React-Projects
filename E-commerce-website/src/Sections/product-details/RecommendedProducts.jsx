import React from "react";
import { Link } from "react-router-dom";
import jacket1 from '../../assets/products/jacket1.jpg'
import bag1 from '../../assets/products/bag1.jpg'
const recommended = [
   {
     id: 4,
     name: "Denim Jacket",
     price: 2800,
     gender: "Women",
     category: "Jackets",
     images: [jacket1],
     description: "Trendy oversized denim jacket.",
     details: "100% Cotton. Oversized fit. Limited edition.",
     shipping: "Free shipping on orders above $100. Easy returns within 7 days.",
   },
   {
     id: 5,
     name: "Handcrafted Tote",
     price: 1800,
     gender: "Women",
     category: "Accessories",
     images: [bag1]
   }
];

const RecommendedProducts = () => {
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-6">You may also like</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {recommended.map((item) => (
          <Link key={item.id} to={`/product/${item.id}`}>
            <div className="rounded-xl shadow hover:shadow-lg transition overflow-hidden">
              <img
                src={item.images[0]}
                alt={item.name}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <p className="font-medium">{item.name}</p>
                <p className="text-blue-600">{item.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecommendedProducts;

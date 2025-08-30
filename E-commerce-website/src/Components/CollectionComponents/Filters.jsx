import React, { useContext, useState } from "react";
import { FilterContext } from "../../Use-context/ContextProvider";
const Filters = () => {

  const {gender ,setGender, category, setCategory} = useContext(FilterContext);

  return (
    <div className="sticky top-24 bg-white/60 backdrop-blur-md p-6 rounded-2xl shadow-xl space-y-6">
      <h2 className="text-xl font-bold mb-4">Filters</h2>
      
      {/* Gender */}
      <div >
        <h3 className="font-semibold mb-2">Gender</h3>
        <ul className="space-y-2">
          {["All", "Men", "Women", "Unisex"].map((item) => (
            <li
              key={item}
              className={`cursor-pointer hover:text-blue-600 ${
                gender === item ? "font-bold text-blue-600" : "text-gray-700"
              }`}
              onClick={() => setGender(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Categories */}
      <div>
        <h3 className="font-semibold mb-2">Categories</h3>
        <ul className="space-y-2">
          {["All", "T-Shirt", "Sneakers", "Jackets","Jeans", "Accessories","Hoodie","Dresses"].map(
            (item) => (
              <li
                key={item}
                className={`cursor-pointer hover:text-blue-600 ${
                  category === item ? "font-bold text-blue-600" : "text-gray-700"
                }`}
                onClick={() => setCategory(item)}
              >
                {item}
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default Filters;

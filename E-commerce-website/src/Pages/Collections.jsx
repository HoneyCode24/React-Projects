import React, { useContext, useState, useEffect} from "react";
import Filters from "../Components/CollectionComponents/Filters";
import ProductCard from "../Components/CollectionComponents/ProductCard";
import Pagination from "../Components/CollectionComponents/Pagination";
import products from "../data/products";
import { FilterContext } from "../Use-context/ContextProvider";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import {useCart} from '../Use-context/CartProvider'
import { useLocation } from "react-router-dom";
const Collections = () => {
  const { gender, category, setGender, setCategory } = useContext(FilterContext);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9; // or however many per page
  const {addToCart} = useCart();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  
  const genderFromUrl = queryParams.get("gender") || "All";
  const categoryFromUrl = queryParams.get("category") || "All";
    useEffect(() => {
    setGender(genderFromUrl);
    setCategory(categoryFromUrl)
  }, [genderFromUrl,categoryFromUrl]);

  // filter products here
  const filteredProducts = products.filter((product) => {
    const genderMatch = gender === "All" || product.gender === gender;
    const categoryMatch = category === "All" || product.category === category;
    return genderMatch && categoryMatch;
  });

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);


  return (
    <>
    <Navbar/>
    <div className="pt-8 px-8 md:px-16 mb-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Collections</h1>
        <p className="text-gray-500 mt-2">
          Explore our latest styles curated just for you.
        </p>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Sidebar Filters */}
        <aside className="block">
          <Filters />
        </aside>

        {/* Product Grid */}
        <main className="md:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
           {currentProducts.map((product) => (
              <ProductCard key={product.id} product={product} addToCart={addToCart}/>
            ))}

          </div>

          {/* Pagination */}
          <Pagination
            totalProducts={filteredProducts.length}
            productsPerPage={productsPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />

        </main>
      </div>
    </div>
    <Footer/>
    </>
    
  );
};

export default Collections;

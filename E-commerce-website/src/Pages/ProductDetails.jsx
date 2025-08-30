import React from "react";
import { useParams } from "react-router-dom";
import ProductGallery from "../Sections/product-details/ProductGallery";
import ProductInfo from "../Sections/product-details/ProductInfo";
import ProductTabs from "../Sections/product-details/ProductTabs";
import RecommendedProducts from "../Sections/product-details/RecommendedProducts";
import products from '../data/products'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { useCart } from "../Use-context/CartProvider"; 
const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart(); 

  const product = products.find((p) => String(p.id )=== id);

  if (!product) return <p className="text-center py-20">Product not found!</p>;

  return (
    <>
    <Navbar/>
    <section className="px-6 md:px-20 py-12">
      <div className="grid lg:grid-cols-2 gap-10">
        {/* Left - Gallery */}
        <ProductGallery images={product.images} />

        {/* Right - Info */}
        <ProductInfo product={product} addToCart={addToCart}/>
      </div>

      {/* Tabs */}
      <ProductTabs
        description={product.description}
        details={product.details}
        shipping={product.shipping}
      />

      {/* Recommended */}
      <RecommendedProducts />
    </section>
    <Footer/>
    </>
  );
};

export default ProductDetails;

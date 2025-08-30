import React from "react";
import { useCart } from "../Use-context/CartProvider";
import CartItem from "../Components/CartComponents/CartItem";
import CartSummary from "../Components/CartComponents/CartSummary";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
const Cart = () => {
  const { cart } = useCart();

  return (
    <>
    <Navbar/>
    <section className="px-6 md:px-20 py-34">
      <h2 className="text-3xl font-bold mb-6">Your Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty 🛒</p>
      ) : (
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Left - Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          {/* Right - Summary */}
          <CartSummary />
        </div>
      )}
    </section>
    <Footer/>
    </>
  );
};

export default Cart;

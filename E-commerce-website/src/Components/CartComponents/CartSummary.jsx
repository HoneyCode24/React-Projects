import React from "react";
import { useCart } from "../../Use-context/CartProvider";

const CartSummary = () => {
  const { cart } = useCart();

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="p-6 border rounded-xl shadow-md h-64  ">
      <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
      <p className="flex justify-between mb-2">
        <span>Subtotal</span>
        <span>₹{subtotal}</span>
      </p>
      <p className="flex justify-between mb-2">
        <span>Shipping</span>
        <span>Free</span>
      </p>
      <hr className="my-2" />
      <p className="flex justify-between font-bold text-lg">
        <span>Total</span>
        <span>₹{subtotal}</span>
      </p>
      <button className="mt-4 w-full py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CartSummary;

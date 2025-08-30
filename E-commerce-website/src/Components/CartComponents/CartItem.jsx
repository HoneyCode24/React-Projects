import React from "react";
import { useCart } from "../../Use-context/CartProvider";

const CartItem = ({ item }) => {
  const { updateQty, removeFromCart } = useCart();
  return (
    <div className="flex gap-6 items-center border rounded-xl p-4 shadow-sm">
    <img 
      src={item.images && item.images.length > 0 ? item.images[0] : "/fallback.png"} 
      alt={item.name} 
      className="w-24 h-24 rounded-lg object-cover" 
    />

      <div className="flex-1">
        <h3 className="font-semibold">{item.name}</h3>
        <p className="text-gray-600">₹{item.price}</p>
        <div className="flex items-center gap-3 mt-2">
          <button onClick={() => updateQty(item.id, item.qty - 1)} className="px-2 bg-gray-200 rounded">-</button>
          <span>{item.qty}</span>
          <button onClick={() => updateQty(item.id, item.qty + 1)} className="px-2 bg-gray-200 rounded">+</button>
        </div>
      </div>
      <button
        onClick={() => removeFromCart(item.id)}
        className="text-red-500 hover:text-red-700"
      >
        ✕
      </button>
    </div>
  );
};

export default CartItem;

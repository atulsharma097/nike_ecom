import React from "react";
import { useCart } from "../context/CartContext.jsx";
import { Trash2, Heart } from "lucide-react"; // ✅ icons for remove/fav

const CartItem = ({ item }) => {
  const { removeFromCart } = useCart();

  return (
    <div className="flex justify-between items-start border-b border-gray-200 pb-6">
      {/* Product Info */}
      <div className="flex items-start gap-6">
        <img
          src={item.imgURL}
          alt={item.name}
          className="w-32 h-32 object-cover rounded-lg border border-gray-200"
        />

        <div>
          <h3 className="font-semibold text-lg">{item.name}</h3>
          <p className="text-gray-500 text-sm">{item.category || "Product"}</p>
          <p className="text-gray-700 mt-1">${item.price}</p>
          <p className="text-gray-600 text-sm mt-1">Qty: {item.quantity}</p>

          <div className="flex items-center gap-4 mt-3">
            <button
              onClick={() => removeFromCart(item.id)}
              className="flex items-center gap-1 text-gray-500 hover:text-red-600"
            >
              <Trash2 size={18} /> Remove
            </button>
            <button className="flex items-center gap-1 text-gray-500 hover:text-pink-500">
              <Heart size={18} /> Save
            </button>
          </div>
        </div>
      </div>

      {/* Price on Right */}
      <div className="text-lg font-semibold">${(item.price * item.quantity).toFixed(2)}</div>
    </div>
  );
};

export default CartItem;

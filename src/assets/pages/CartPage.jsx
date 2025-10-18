import React from "react";
import { useCart } from "../../context/CartContext";
import CartItem from "../../Components/CartItem";

const CartPage = () => {
  const { cart, total, clearCart } = useCart(); 

  return (
    <div className="min-h-screen bg-white text-black px-8 pt-28 pb-10">
      <h2 className="text-3xl font-bold mb-8">Bag</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty 😢</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* LEFT: Cart Items */}
          <div className="lg:col-span-2 space-y-8">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          {/* RIGHT: Summary Section */}
          <div className="bg-gray-50 p-6 rounded-2xl shadow-md h-fit border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">Summary</h3>

            <div className="flex justify-between text-gray-700 mb-2">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-gray-700 mb-2">
              <span>Estimated Shipping & Handling</span>
              <span>Free</span>
            </div>

            <div className="flex justify-between text-gray-700 mb-4">
              <span>Estimated Tax</span>
              <span>-</span>
            </div>

            <hr className="my-4 border-gray-300" />

            <div className="flex justify-between text-lg font-bold mb-4">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <p className="text-sm text-gray-600 mb-4">
              You qualify for <span className="text-green-600 font-semibold">Free Shipping</span> as a member!
            </p>

            <button className="w-full bg-black text-white py-3 rounded-full font-semibold hover:bg-gray-900 transition">
              Checkout
            </button>

            <button
              onClick={clearCart}
              className="w-full mt-3 border border-gray-400 py-3 rounded-full hover:bg-gray-100 transition"
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
export { CartItem };
 

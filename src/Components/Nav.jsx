import React, { useState } from "react";
import { hamburger } from "../assets/icons";
import { logopng, cartIcon } from "../assets/images"; // ✅ add your cart icon
import { ShoppingCart } from "lucide-react";

import { useCart } from "../context/CartContext"; // ✅ import cart context
import { Link } from "react-router-dom"; // ✅ use Link for navigation

const navlink = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#Products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
];

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // useCart() should return the context value; guard against undefined
  const cartContext = useCart(); // ✅ get cart context (may be undefined if provider missing)
  const cart = (cartContext && Array.isArray(cartContext.cart)) ? cartContext.cart : [];
  const totalItems = Array.isArray(cart)
    ? cart.reduce((acc, item) => acc + (item.quantity || 0), 0)
    : 0; // ✅ total count (safe fallback)

  return (
    <header className="padding-x py-6 fixed top-0 left-0 z-50 w-full bg-black bg-opacity-70 backdrop-blur-md">
      <nav className="flex justify-between items-center max-container">
        {/* Logo */}
        <a href="/">
          <img
            src={logopng}
            alt="logo"
            className="m-0 w-[125px] h-[40px] object-contain"
            width={125}
            height={40}
          />
        </a>

        {/* Desktop Menu */}
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden text-white">
          {navlink.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg drop-shadow-xl hover:drop-shadow-2xl"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* ✅ Cart Icon */}
        <div className="flex items-center  bg-black gap-4 mr-6">
          <Link to="/cart" className="relative">
            <img
              src={cartIcon}
              alt="cart"
              width={28}
              height={28}
              className="cursor-pointer"
            />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </Link>

          {/* Hamburger Icon (Mobile) */}
          <div
            className="hidden max-lg:block mr-5 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <img src={hamburger} alt="hamburger icon" width={30} height={25} />
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-black bg-opacity-90 backdrop-blur-md py-6 transition-all duration-300 ease-in-out">
          <ul className="flex flex-col items-center gap-6 text-white">
            {navlink.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat text-lg hover:text-gray-300"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            {/* ✅ Cart link in mobile menu */}
            <li>
              <Link
                to="/cart"
                className="font-montserrat text-lg hover:text-gray-300"
                onClick={() => setMenuOpen(false)}
              >
                Cart ({totalItems})
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Nav;

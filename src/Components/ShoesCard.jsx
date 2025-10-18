import React, { useState, useRef } from "react";

const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
  const [cursorPos, setCursorPos] = useState({ x: 50, y: 50 });
  const cardRef = useRef(null);

  // 👇 Handle gradient movement following the cursor
  const handleMouseMove = (event) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    setCursorPos({ x, y });
  };

  // 👇 Change big shoe image on click
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigshoe) {
      changeBigShoeImage(imgURL.bigshoe);
    }
  };

  // 👇 Highlight selected thumbnail
  const isSelected = bigShoeImg === imgURL.bigshoe;

  return (
    <div
      className={`rounded-xl border-2 ${
        isSelected ? "border-coral-red" : "border-transparent"
      } cursor-pointer max-sm:flex-1 transition-all duration-300 hover:scale-105`}
      onClick={handleClick}
    >
      <div
        ref={cardRef}
        className="relative flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4 shadow-lg hover:shadow-2xl overflow-hidden"
        onMouseMove={handleMouseMove}
      >
        {/* 🔳 Base gradient background */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-gray-800 to-gray-900"></div>

        {/* 🟣 Hover light effect following cursor */}
        <div
          className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 100px at ${cursorPos.x}% ${cursorPos.y}%, rgba(220, 49, 214, 0.35), transparent)`,
            pointerEvents: "none",
          }}
        ></div>

        {/* 👟 Shoe Image */}
        <img
          src={imgURL.thumbnail}
          alt="shoe thumbnail"
          width={127}
          height={103}
          className="object-contain relative z-10 pointer-events-none"
        />
      </div>
    </div>
  );
};

export default ShoeCard;

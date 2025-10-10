import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Products } from "../constants";
import Button from "../Components/Button";
import PopularProductCard from "../Components/PopularProductCard";

const ProductBuying = () => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    // Simulate a data fetching process
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { productId } = useParams();
  const product = Products.find((prod) => prod.id === productId);

  const [cursorPos, setCursorPos] = useState({ x: "50%", y: "50%" });

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const { left, top, width, height } =
      event.currentTarget.getBoundingClientRect();
    const x = ((clientX - left) / width) * 100;
    const y = ((clientY - top) / height) * 100;
    setCursorPos({ x: `${x}%`, y: `${y}%` });
  };

  if (!product) {
    return <div className="text-center p-4">Product not found</div>;
  }

  return (
    <>
      <div
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        onMouseMove={handleMouseMove}
      >
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1.5px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1.5px,transparent_1px)] bg-[size:16px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(95%_80%_at_50%_10%,#34043c_10%,#000_100%)]"></div>
        {/* Glowing effect */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${cursorPos.x} ${cursorPos.y}, rgba(220, 49, 214, 0.7) 0%, transparent 70%)`,
            width: "100%",
            height: "100%",
            mixBlendMode: "overlay",
            zIndex: 1,
            backgroundSize: "100px 100px",
          }}
        ></div>
        
        <div className={`bg-transparent shadow-lg p-6 md:p-8 lg:p-10 mx-auto rounded-lg max-w-4xl z-20 relative mt-[10vh] transition duration-500 ease-in-out ${scrollY > 50 ? 'blur-in' : ''}`}>
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="flex-shrink-0 py-12 rounded-lg">
              <img
                src={product.imgURL}
                alt={product.name}
                className={`w-full h-auto rounded-lg transition duration-500 ease-in-out ${scrollY > 100 ? 'blur-in' : ''}`}
              />
            </div>
            <div className="md:ml-6 flex flex-col justify-between mt-4 md:mt-0">
              <h1 className={`text-3xl font-semibold text-white transition duration-500 ease-in-out ${scrollY > 150 ? 'blur-in' : ''}`}>
                {product.name}
              </h1>
              <p className={`text-lg text-white mt-2 transition duration-500 ease-in-out ${scrollY > 200 ? 'blur-in' : ''}`}>{product.description}</p>
              <div className="flex items-center mt-4">
                <span className="text-2xl font-bold text-coral-red">
                  {product.price}
                </span>
              </div>
              <div className="mt-6 flex flex-col md:flex-row gap-4">
                <Button label="Add to Cart" />
                <Button label="Buy Now" />
              </div>
              <div className="mt-20 justify-items-center gap-6">
                {Products
                  .filter((prod) => prod.id !== productId)
                  .map((prod) => (
                    <div key={prod.id} className={`gap mb-4 transition duration-500 ease-in-out ${scrollY > 250 ? 'blur-in' : ''}`}>
                      <PopularProductCard {...prod} />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductBuying;

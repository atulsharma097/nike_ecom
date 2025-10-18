import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "../Components/Button";
import { arrowRight } from "../assets/icons";
import {
  bigshoe1,
  bigshoe2,
  bigshoe3,
  thumbnailshoe1,
  thumbnailshoe2,
  thumbnailshoe3,
} from "../assets/images";
import ShoeCard from "../Components/ShoesCard";

const shoes = [
  { thumbnail: thumbnailshoe1, bigshoe: bigshoe1 },
  { thumbnail: thumbnailshoe2, bigshoe: bigshoe2 },
  { thumbnail: thumbnailshoe3, bigshoe: bigshoe3 },
];

const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];

const Hero = () => {
  const [bigShoeImg, setbigShoeImg] = useState(bigshoe1);

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col py-3 justify-center min-h-screen gap-10 max-container relative overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(95%_80%_at_50%_10%,#34043c_10%,#000_100%)]"></div>

      {/* Left Side Text */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10 relative xl:w-2/5 flex flex-col justify-center items-start w-full px-6 sm:px-12 pt-32 sm:pt-36"
      >
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-xl font-montserrat text-coral-red"
        >
          Our Summer Collection
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-8 font-palanquin font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight"
        >
          <span className="relative z-10 pr-2">The New Arrival</span> <br />
          <span className="inline-block mt-2 text-coral-red">Nike</span> Shoes
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="font-montserrat text-gray-300 text-base sm:text-lg leading-8 mt-6 mb-14 max-w-md"
        >
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </motion.p>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
        >
          <Button label="Shop Now" iconURL={arrowRight} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="flex justify-start items-start flex-wrap w-full mt-20 gap-7 sm:gap-16"
        >
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-3xl sm:text-4xl font-palanquin font-bold">
                {stat.value}
              </p>
              <p className="leading-7 font-montserrat text-gray-300">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Right Side Image */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative flex-1 flex justify-center items-center xl:min-h-screen sm:py-5 py-4"
      >
        <motion.img
          key={bigShoeImg}
          src={bigShoeImg}
          alt="Shoe Collection"
          initial={{ scale: 0.8, rotate: -20, opacity: 0 }}
          animate={{ scale: 1, rotate: -30, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="object-contain relative m-5 right-5 bottom-15 z-10 w-[90%] sm:w-[60%] md:w-[50%] lg:w-[610px]"
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex sm:gap-10 gap-4 absolute -bottom-[1%] sm:left-[10%] max-sm:px-5"
        >
          {shoes.map((shoe, index) => (
            <ShoeCard
              key={index}
              imgURL={shoe}
              changeBigShoeImage={setbigShoeImg}
              bigShoeImg={bigShoeImg}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

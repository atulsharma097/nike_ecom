import React from "react";
import { offer } from "../assets/images";
import Button from "../Components/Button";
import { arrowRight } from "../assets/icons";

const SpecialOffers = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(30%_43%_at_100%_40%,#34043c_1%,#000_100%)]"></div>

      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="w-full object-contain"
          alt=""
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className=" text-white font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
          <span className="text-coral-red"> Special </span>
          Offers
        </h2>
        <p className="mt-4 lg:max-w-lg text-white">
          Step into style and performance with our exclusive special offer on
          Nike shoes! For a limited time, enjoy incredible discounts on a wide
          range of Nike footwear. Whether you're hitting the gym, going for a
          run, or simply elevating your everyday look, there's a perfect pair
          waiting for you.
        </p>
        <p className="mt-6 lg:max-w-lg text-white">
          Experience unparalleled comfort, cutting-edge design, and the iconic
          swoosh at prices that can't be beaten. Don't miss out on this
          opportunity to upgrade your shoe game with Nike's latest and greatest.
          Shop now and stride confidently into the future!n
        </p>
        <div className="mt-11 flex flex-wrap gap-4 ">
          <Button label="Shop Now" iconURL={arrowRight} />
          <Button label="Learn more" backgroundColor = "bg-white" borderColor = "bordergrey" textColor="bg-black" hoverTextColor="hover:bg-white"/>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;

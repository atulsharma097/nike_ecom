import React from "react";
import Button from "../Components/Button";

const Subscribe = () => {
  return (
    <section className="max-container flex justify-center items-center max-lg:flex-col gap-10 mt-[-100] ">
      <h3 className="text-4xl font-bold font-palanquin lg:max-w-md leading-[68px]">
        Sign up for
        <span className="text-coral-red"> Updates </span> & Newsletter
      </h3>
      <div className="lg:max-w-[40%] w-full flex justify-between max-sm:flex-col gap-5 p-2.5 sm:border sm:border-gray-300 rounded-[10px]">
        <input type="text" placeholder="comehere@nike.com" className="focus:outline-none border-none" />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button  label="Sign Up" backgroundColor="bg-coral-red"/>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;

import React from 'react';
import { shoe8 } from "../assets/images";
import Button from "../Components/Button";

const SuperQuality = () => {
  return (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    >
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(30%_51%_at_5%_50%,#34043c_1%,#000_80%)]"></div>
      

      
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold text-white mb-4'>
          We Provide You
          <span className='text-coral-red'> Super Quality </span> Shoes
        </h2>
        <p className='mt-4 lg:max-w-lg info-text text-white'>
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className='mt-6 lg:max-w-lg info-text text-white'>
          Our dedication to detail and excellence ensures your satisfaction.
        </p>
        <div className='mt-11'>
          <Button label='View details' />
        </div>
      </div>

      <div className='flex-1 flex justify-center items-center perspective-1000'>
        <div className='transition-transform duration-300 ease-in-out transform hover:scale-105 hover:translate-z-4'>
          <img
            src={shoe8}
            alt='product detail'
            width={570}
            height={522}
            className='object-contain'
          />
        </div>
      </div>
    </section>
  );
};

export default SuperQuality;

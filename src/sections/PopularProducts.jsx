import React from 'react';
import { Products } from '../constants';
import PopularProductCard from '../Components/PopularProductCard';

const PopularProducts = () => {
  return (
    <section id='Products' className='max-container max-sm:mt-12'>
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(30%_43%_at_100%_40%,#34043c_1%,#000_100%)]"></div>
      <div className='flex flex-col justify-start gap-5'>
        <h2 className='text-4xl font-palanquin text-white font-bold'>
          Our <span className='text-coral-red'> Popular </span> Products
        </h2>
        <p className='text-gray-300 lg:max-w-lg mt-2 font-montserrat'>
          Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value.
        </p>
      </div>

      <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14'>
        {Products.map((Products) => (
          <PopularProductCard key={Products.id} {...Products} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;

import React from 'react';
import { Link } from 'react-router-dom';
import { star } from '../assets/icons';

const PopularProductCard = ({ id, imgURL, name, price }) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full product-card'>
      <Link to={`/Product/${id}`} className="block">
        <img
          src={imgURL}
          alt={name}
          className='w-[280px] h-[280px] transition duration-300 ease-in-out hover:scale-105 hover:rotate-3 cursor-pointer'
        />
        <div className='mt-8 flex justify-start gap-2.5'>
          <img src={star} alt="rating" width={24} height={24} />
          <p className='font-montserrat text-xl leading-normal text-gray-300'>4.5</p>
        </div>
        <h3 className='mt-2 text-2xl leading-normal font-bold font-palanquin text-white'>{name}</h3>
        <p className='mt-2 font-montserrat leading-normal text-coral-red text-xl'>{price}</p>
      </Link>
    </div>
  );
};

export default PopularProductCard;

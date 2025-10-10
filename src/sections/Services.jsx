import React from 'react'
import ServiceCard from '../Components/ServiceCard'
import {  shieldTick, support, truckFast} from "../assets/icons"



const service = [
    {
        imgURL: truckFast,
        label: "Free Shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."

    },
    {
        imgURL: shieldTick,
        label: "secure paymnet",
        subtext: "Experience worry-free transactions with our secure payment options."

    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."

    },
];


const Service = () => {
  return (
    <section className=' max-container flex justify-center  flex-wrap gap-9'>
      {service.map((service) => (<ServiceCard key = {service.label}{...service}/>))}
    </section>
  )
}

export default Service;

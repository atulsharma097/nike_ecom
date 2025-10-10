import React from 'react'
import { service } from '../constants'
import ServiceCard from '../Components/ServiceCard'

const Service = () => {
  return (
    <section className=' max-container flex justify-center  flex-wrap gap-9'>
      {service.map((service) => (<ServiceCard key = {service.label}{...service}/>))}
    </section>
  )
}

export default Service;

import PopularProductCard from '../Components/PopularProductCard';
import { shoe4, shoe5, shoe6 } from "../assets/images"

const Products = [
    {
        id: '1',
        imgURL: shoe4,
        name: "Nike Air Jordan-01",
        price: "$200.20",
        description: "tep up you gam with Nike Air Jordan-01. Renowned for its iconic design and premium craftsmanship, this shoe offers unmatched comfort and style. With its sleek silhouette and high-quality materials, it’s a must-have for sneaker enthusiasts and fashion-forward individuals alike. Perfect for both on-court performance and off-court street style. "
    },
    {
        id: '2',
        imgURL: shoe5,
        name: "stylish casual sneaker",
        price: '$30.20',
        description: "Add a touch of modern flair to your wardrobe with the Stylish Casual Sneaker. This versatile shoe is designed for everyday wear, combining a trendy look with all-day comfort. Its lightweight construction and fashionable design make it the ideal choice for casual outings or laid-back activities"

    },
    {
        id: '3',
        imgURL: shoe6,
        name: "Nike Air Huaracha",
        price: '$102.31',
        description: "Discover the ultimate in comfort and support with the Nike Air Huarache. Known for its innovative design and exceptional cushioning, this sneaker offers a snug, flexible fit that adapts to your movements. Whether you’re hitting the gym or running errands, the Air Huarache delivers both style and performance."

    },
    {

        id: '4',
        imgURL: shoe4,
        name: "J-Crew New Balance",
        price: "$5.30",
        description: "Embrace effortless style with the J-crew New Balance sneaker. This budget-friendly option doesn’t compromise on quality, featuring a classic design and comfortable fit. Ideal for casual wear, it adds a touch of sophistication to any outfit without breaking the bank"

    }
];

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

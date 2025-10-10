import { __unstable__loadDesignSystem } from "tailwindcss";
import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons"
import { bigshoe1, bigshoe2, bigshoe3, customer1, customer2, shoe4, shoe5, shoe6, thumbnailshoe1, thumbnailshoe2, thumbnailshoe3 } from "../assets/images"


export const navlink = [
    { href: "#home", lablel: "Home" },
    { href: "#about-us", lablel: "About" },
    { href: "#Products", lablel: "Products" },
    { href: "#Contact-us", lablel: "Contact us" },

];

export const shoes = [
    {
        thumbnail: thumbnailshoe1,
        bigshoe: bigshoe1,
    },
    {
        thumbnail: thumbnailshoe2,
        bigshoe: bigshoe2,
    },
    {
        thumbnail: thumbnailshoe3,
        bigshoe: bigshoe3,
    }
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];


export const Products = [
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

export const service = [
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


export const review = [
    {
        imgURL: customer1,
        CustomerName: 'Atul sharma',
        ratiing: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },

    {
        imgURL: customer2,
        CustomerName: 'Atu sharma',
        ratiing: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"


    }
];

export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo", href: "#" },
    { src: twitter, alt: "twitter logo", href: "#" },
    { src: instagram, alt: "instagram logo", href: "#" },
];
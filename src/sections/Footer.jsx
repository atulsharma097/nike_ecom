import { copyrightSign } from "../assets/icons";
import { footerlogo } from "../assets/images";
import { __unstable__loadDesignSystem } from "tailwindcss";
import { facebook, instagram,  twitter } from "../assets/icons"


const footerLinks = [
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

const socialMedia = [
    { src: facebook, alt: "facebook logo", href: "#" },
    { src: twitter, alt: "twitter logo", href: "#" },
    { src: instagram, alt: "instagram logo", href: "#" },
];

const Footer = () => {
  return (
    <footer className="max-container " id="contact-us">
      <div className="flex justify-between items-start gap-12 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/" className="">
            <img
              src={footerlogo}
              alt="logo"
              width={150}
              height={46}
              className="m-0"
            />
          </a>
          <p className="text-white mt-6 text-base leading-7 font-montserrat font-medium text-[17px] sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
        </div>
        <div className="flex items-center gap-5 mt-[5px]">
          {socialMedia.map((icon) => (
            <a href={icon.href} key={icon.alt} target="_blank" rel="noopener noreferrer">
              <div className="bg-white flex justify-center items-center w-12 h-12 rounded-full hover:scale-[1.1] transition-all hover:cursor-pointer hover:bg-coral-red">
                <img
                  src={icon.src}
                  alt={icon.alt}
                  width={24}
                  height={24}
                />
              </div>
            </a>
          ))}
        </div>
        <div className="text-white flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white text-2xl leading-normal font-medium mb-6 font-montserrat">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a className="flex text-white font-light font-montserrat leading-[19px] mt-3 flex-1 hover:text-gray-400 cursor-pointer">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-between mt-24 max-sm:flex-col max-sm:items-center'>
        <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
          <img
            src={copyrightSign}
            alt='copyright sign'
            width={20}
            height={20}
            className='rounded-full m-0 text-white'
          />
          <p className="text-white">Copyright. All rights reserved.</p>
        </div>
        <p className='text-white font-montserrat cursor-pointer'>Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;

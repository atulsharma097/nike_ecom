import {hamburger} from '../assets/icons';
import {logopng} from '../assets/images';

const navlink = [
    { href: "#home", lablel: "Home" },
    { href: "#about-us", lablel: "About" },
    { href: "#Products", lablel: "Products" },
    { href: "#Contact-us", lablel: "Contact us" },

];


const Nav = () => {
  return (
    <header className= "padding-x py-8 absolute z-10 w-full ">
    <nav className= "flex justify-between items-center max-container">
    <a href ="/">
    <img 
    src={logopng} 
    alt="logo" 
    className="m-0 w-[96px] h-[40px]"
    width={96}
    height={40}

    />
    </a> 

     <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden text-white'>
       {navlink.map ((item) => (
        <li key = {item.lablel}>
            <a
            href={item.href}
            className='font-montserrat leading-normal text-lg drop-shadow-xl hover:drop-shadow-2xl'
            >
                {item.lablel}
            </a>
        </li>
       ) )}
     </ul>

     <div className='hidden max-lg:block'>
        <img src= {hamburger} alt='hamburger icon' width={25} height={25} />
     </div>
     </nav>
     </header> 
  );
};

export default Nav;
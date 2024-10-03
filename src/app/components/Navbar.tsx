// components/Navbar.js
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm">
    
      <div className="flex justify-between items-center px-4 lg:px-8 py-2 w-[90%] m-auto">
       
        
        <div className="hidden md:flex items-center space-x-6 text-sm">
          <span className="text-gray-600">Dubai International Financial Centre</span>
          <span className="text-gray-800 font-bold">(+97) 19876 54321</span>
        </div>

        <div className="hidden md:flex space-x-8">
          <a href="https://facebook.com" className=" hover:text-gray-900">
          <FaFacebookF />
          </a>
          <a href="https://twitter.com" className=" hover:text-gray-900">
          <FaTwitter />
          </a>
          <a href="https://instagram.com" className=" hover:text-gray-900">
          <FaInstagram />
          </a>
        </div>
      </div>

      {/* Nav Links */}
      <nav className="border border-black  flex justify-between items-center">

          {/* <div className="bg-[#0043B7] ">
           <img src="/asset/Logo.svg" alt="" />
          </div> */}

          <div  className='bg-[#0043B7] px-10 py-1'>
            <img src="/asset/Frame 7.svg"
              alt="Cirqura logo"
              className="object-cover"
            />
          </div>


        
          <div className="flex space-x-20 text-sm">
            <Link href="#" className="hover:font-bold">
              Home
            </Link>
            <Link href="#" className="hover:font-bold">
              About
            </Link>
            <Link href="#" className="hover:font-bold">
              Services
            </Link>
            <Link href="#" className="hover:font-bold">
              Portfolio
            </Link>
            <Link href="#" className="hover:font-bold">
              Blogs
            </Link>
          </div>

          <div className="flex space-x-4 ">
            <Link href="#" className=" py-5 text-blue-600 font-bold px-5 text-center self-center ">
              Contact Us
            </Link>
            <Link href="#" className="text-white font-bold py-5  px-5  bg-[#0043B7] ">
              Learn More
            </Link>
          </div>

       
      </nav>
    </header>
  );
};

export default Navbar;
import React, { useState } from "react";
import { AiOutlineMenu,AiOutlineClose,AiFillTag } from "react-icons/ai";
import { BsFillCartFill,BsFillSaveFill } from 'react-icons/bs';
import {TbTruckDelivery} from 'react-icons/tb'
import {FaUserFriends, FaWallet} from 'react-icons/fa'
import {MdFavorite, MdHelp} from 'react-icons/md'
import { Link } from "react-router-dom";

const Navbar = () => {
    const [nav, setNav] = useState(false)
    
      return (
        <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
          {/* Left side */}
          <div className='flex items-center'>
            <div onClick={()=> setNav(!nav)} className='cursor-pointer'>
              <AiOutlineMenu size={30} />
            </div>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
              Best <span className='font-bold'>Eats</span>
            </h1>
            <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
              <p className='bg-black text-white rounded-full p-2'>Delivery</p>
              <p className='p-2'>Pickup</p>
            </div>
          </div>
    
          
         
          {/* Cart button */}
          <div
                className="nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5">
                <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
                    <li>
                        <Link to ='/' className="hover:text-gray-500" href="#">Home</Link>
                    </li>
                    <li>
                        <Link to ='/blog' className="hover:text-gray-500" href="#">Blog</Link>
                    </li>
                    <li>
                        <Link to ='/login' className="hover:text-gray-500" href="#">Login</Link>
                    </li>
                    <li>
                        <Link to ='/sign' className="hover:text-gray-500" href="#">Registation</Link>
                    </li>
                   
                </ul>
            </div>
    
          {/* Mobile Menu */}
          {/* Overlay */}
          {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}
          
    
          {/* Side drawer menu */}
          <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300' }>
            <AiOutlineClose
                onClick={()=> setNav(!nav)}
              size={30}
              className='absolute right-4 top-4 cursor-pointer'
            />
            <h2 className='text-2xl p-4'>
              Best <span className='font-bold'>Eats</span>
            </h2>
            <nav>
                <ul className='flex flex-col p-4 text-gray-800'>
                <li>
                        <Link to ='/' className="hover:text-gray-500" href="#">Home</Link>
                    </li>
                    <li>
                        <Link to ='/blog' className="hover:text-gray-500" href="#">Blog</Link>
                    </li>
                    <li>
                        <Link to ='/login' className="hover:text-gray-500" href="#">Login</Link>
                    </li>
                    <li>
                        <Link to ='/sign' className="hover:text-gray-500" href="#">Registation</Link>
                    </li>
                </ul>
            </nav>
          </div>
        </div>
      );
    };
    
    export default Navbar;

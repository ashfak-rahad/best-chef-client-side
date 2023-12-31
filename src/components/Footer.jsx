import React from 'react';

import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <div className='max-w-[1240px] mx-auto pb-20  py-40 px-4 grid lg:grid-cols-3 gap-8 text-black'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Best Chef</h1>
        <p className='py-4'>This website is run by a Japanese cook who shares traditional Japanese recipes, as well as information about Japanese ingredients and cooking techniques.</p>
        <p><span className='font-semibold'>Phone:</span>+81778620166</p>
        <p><span className='font-semibold'>Email:</span>ahsfakur@gmail.com</p>
        <p><span className='font-semibold'>Address:</span>V94F+RM4,Beni Kindo Lane,Japan</p>
        <div className='flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
    <div>
        <h6 className='font-medium  text-black'>Solutions</h6>
        <ul>
            <li className='py-2 text-sm'>Analytics</li>
            <li className='py-2 text-sm'>Marketing</li>
            <li className='py-2 text-sm'>Commerce</li>
            <li className='py-2 text-sm'>Insights</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-black'>Support</h6>
        <ul>
            <li className='py-2 text-sm'>Pricing</li>
            <li className='py-2 text-sm'>Documentation</li>
            <li className='py-2 text-sm'>Guides</li>
           
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-black'>Company</h6>
        <ul>
            
            <li className='py-2 text-sm'>Blog</li>
            <li className='py-2 text-sm'>Food</li>
            <li className='py-2 text-sm'>Chef</li>
            <li className='py-2 text-sm'>Food Blog</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-black'>Legal</h6>
        <ul>
            <li className='py-2 text-sm'>Claim</li>
            <li className='py-2 text-sm'>Policy</li>
            <li className='py-2 text-sm'>Terms</li>
        </ul>
    </div>
      </div>
    </div>
            
        </div>
    );
};

export default Footer;
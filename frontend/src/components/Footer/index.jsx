import React from 'react';

import { Link, NavLink } from 'react-router-dom';

import FacebookIcon from '../../assets/Icons/Social/FacebookIcon';
import LinkedinIcon from '../../assets/Icons/Social/LinkedinIcon';
import { footerAccount, footerShop } from '../../assets/constants';

const footer = () => {
  return (
    <footer className=" bg-[#F5F5F3] pb-24  ">
      <div className="flex flex-col lg:flex-row section-margin">
        <div className="flex flex-col w-[80%] lg:w-[70%] lg:pr-10">
          <h3 className='mb-2 text-xl font-semibold lg:mb-6' >More about EBike Lelo</h3>
          <div className='flex flex-col items-center'>
            <p className="pb-2 text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint
              ab ullam, numquam nesciunt in.
            </p>
            <ul className="flex items-center">
              <Link
                href="https://www.facebook.com/"
                target="_blank"
              >
                <li className="w-7 h-7 ">
                  <FacebookIcon />
                </li>
              </Link>
              <Link
                href="https://www.linkedin.com/"
                target="_blank"
              >
                <li className="w-7 h-7 ">
                  <LinkedinIcon />
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div className='w-[80%] lg:w-[50%]'>
          <h3 className='mb-2 text-xl font-semibold lg:mb-6' >Shop</h3>
          <ul className="flex flex-col gap-2">
            {footerShop.map(({ _id, title, link }) => (
              <NavLink to={link} key={_id}>
                <li className="text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                  {title}
                </li>
              </NavLink>
            ))}
          </ul>
        </div>
        <div className='w-[80%] lg:w-[50%] pt-4'>
          <h3 className='mb-2 text-xl font-semibold lg:mb-6' >Your account</h3>
          <ul className="flex flex-col gap-2">
            {footerAccount.map(({ _id, title, link }) => (
              <NavLink to={link} key={_id}>
                <li className="text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                  {title}
                </li>
              </NavLink>
            ))}
          </ul>
        </div>
        <div className="flex flex-col pt-4 w-[80%] lg:w-[50%]">
          <h3 className='mb-6 text-xl font-semibold' >Subscribe for Latest Offers.</h3>
          <div className="flex flex-col items-center w-full">
            <p className="self-start mb-4">
              A at pellentesque et mattis porta enim elementum.
            </p>
            <div className="w-[50%] lg:w-full flex-col xl:flex-row flex justify-between items-center gap-4">
              <div className="flex flex-col w-full">
                <input
                  className="w-full h-12 px-4 text-lg bg-transparent border-b border-gray-400 outline-none text-primeColor placeholder:text-base"
                  type="text"
                  placeholder="Enter your email ..."
                />
              </div>
              <button
                className="bg-white text-lightText w-[50%] h-10 hover:bg-black hover:text-white duration-300 text-base tracking-wide rounded-md"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" border-t-[1px] mt-4 pt-4 ">
        <p className="flex flex-col justify-center text-sm font-normal text-center md:items-center md:flex-row">
          <span className=" mr-[1px] mt-[2px] md:mt-0 hidden text-center md:inline-flex">
            ©
          </span>
          Copyright 2023 | EBike Lelo | All Rights Reserved |
          <a href="/" target="_blank" rel="noreferrer">
            <span className="ml-1 font-medium">
              Powered by EBike Lelo
            </span>
          </a>
        </p>
      </div>
    </footer>
  )
}

export default footer
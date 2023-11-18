import React, { useLayoutEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { toggleSideNav, setWidth } from './../../redux/slice/';

import { Link, NavLink } from 'react-router-dom';
import { motion } from "framer-motion";

import { navBarList } from '../../assets/constants';
import logo from '../../assets/Images/eBikeLeloLogoBlack.png';
import HamburgurIcon from '../../assets/Icons/HamburgurIcon';

const Header = () => {
  const dispatch = useDispatch();

  const handleToggleSideNav = () => {
    dispatch(toggleSideNav());
  }

  const width = useSelector((state) => state.EbikeLelo.width);
  useLayoutEffect(() => {
    const updateWidth = () => {
      dispatch(setWidth(window.innerWidth));
    };
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <>
      <header className="w-full md:hidden  bg-white  md:h-12 md:border-b-[1px] md:border-b-gray-200 sticky top-0 z-[15] ">
        <div className='md:w-[80vw] md:pt-0 md:pl-0 pl-[5vw] pt-4 mx-auto h-full flex flex-row items-center justify-between'>
          {width < 766 ?
            <Link to="/" className=''>
              <motion.img
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                src={logo}
              />
            </Link>
            :
            <></>
          }
          {width >= 766 ?
            <></>
            :
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className='flex items-center justify-center h-full pt-2'
            >
              <button
                onClick={handleToggleSideNav}
              >
                <HamburgurIcon />
              </button>
            </motion.div>
          }
        </div>
      </header>
    </>
  )
}

export default Header
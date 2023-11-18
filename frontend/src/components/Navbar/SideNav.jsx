import { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { toggleSideNav } from '../../redux/slice';

import { Link, NavLink } from 'react-router-dom';

import { motion } from "framer-motion";

import { navBarBrands, navBarCategory, navBarList } from '../../assets/constants';
import logo from '../../assets/Images/eBikeLeloLogoBlack.png';
import ArrowUpIcon from '../../assets/Icons/ArrowUpIcon';
import CloseHamburgurIcon from '../../assets/Icons/CloseHamburgurIcon';
import ArrowRightIcon from '../../assets/Icons/ArrowRightIcon';
import ArrowDownIcon from '../../assets/Icons/ArrowDownIcon';
import CartIcon from '../../assets/Icons/CartIcon';

const SideNav = () => {

  const [CategoryAndBrand, setCategoryAndBrand] = useState({ category: false, brand: false });

  const sideNav = useSelector((state) => state.EbikeLelo.sideNav);

  const dispatch = useDispatch();

  useEffect(() => {
    if (sideNav) {
      document.body.classList.add("Nav__Body--open");
    }
    else {
      document.body.classList.remove("Nav__Body--open");
    }
    return () => document.body.classList.remove("Nav__Body--open");
  }, [sideNav])

  const handleToggleSideNav = () => {
    dispatch(toggleSideNav(false));
  }

  const products = useSelector((state) => state.EbikeLelo.products)

  return (
    <>
      {sideNav && (
        <div className="fixed z-20 top-0 left-0 w-full h-screen bg-black text-gray-200 bg-opacity-80 ">
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-[80%] h-full relative bg-white flex flex-col  "
          >
            <div className="p-4 flex flex-row items-center justify-between  border-b-[1px] border-b-gray-200">
              <Link to={'/'} onClick={handleToggleSideNav}>
                <motion.img
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  src={logo}
                  alt="logo"
                />
              </Link>
              <button
                onClick={handleToggleSideNav}
              >
                <CloseHamburgurIcon />
              </button>
            </div>
            <div>
              <ul className=" flex flex-col gap-2">
                {navBarList.map(({ _id, title, link }) => (
                  <NavLink
                    to={link}
                    onClick={handleToggleSideNav}
                    key={_id}
                  >
                    <li
                      className="p-4 pb-0 flex justify-between font-normal hover:font-bold text-black items-center text-lg hover:underline underline-offset-[4px] decoration-[1px] hover:text-black md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
                    >
                      {title}
                      <ArrowRightIcon />
                    </li>
                  </NavLink>
                ))}

                <li
                  onClick={() => setCategoryAndBrand(prevState => ({
                    ...prevState,
                    category: !prevState.category
                  }
                  ))}
                  className="p-4 pb-0 flex justify-between font-normal hover:font-bold text-black items-center text-lg hover:underline underline-offset-[4px] decoration-[1px] hover:text-black md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
                >
                  Shop by Category
                  {CategoryAndBrand.category ? <ArrowUpIcon /> : <ArrowDownIcon />}
                </li>
                {CategoryAndBrand.category &&
                  <li
                    onClick={() => setCategoryAndBrand(prevState => ({
                      ...prevState,
                      category: !prevState.category
                    }
                    ))}
                  >
                    <motion.ul
                      initial={{ y: 15, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.4 }}
                      className="text-sm flex flex-col gap-1 pl-6"
                    >
                      {navBarCategory.map(({ _id, title, link }) => (
                        <li className="headerSedenavLi" key={_id} onClick={handleToggleSideNav} >
                          <NavLink to={link} >
                            {title}
                          </NavLink>
                        </li>
                      ))}
                    </motion.ul>
                  </li>
                }

                <li
                  onClick={() => setCategoryAndBrand(prevState => ({
                    ...prevState,
                    brand: !prevState.brand
                  }
                  ))}
                  className="p-4 pb-0 flex justify-between font-normal hover:font-bold text-black items-center text-lg hover:underline underline-offset-[4px] decoration-[1px] hover:text-black md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
                >
                  Shop by Brand
                  {CategoryAndBrand.brand ? <ArrowUpIcon /> : <ArrowDownIcon />}
                </li>
                {CategoryAndBrand.brand &&
                  <li
                    onClick={() => setCategoryAndBrand(prevState => ({
                      ...prevState,
                      brand: !prevState.brand
                    }
                    ))}
                  >
                    <motion.ul
                      initial={{ y: 15, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.4 }}
                      className="text-sm flex flex-col gap-1 pl-6"
                    >
                      {navBarBrands.map(({ _id, title, link }) => (
                        <li className="headerSedenavLi" key={_id} onClick={handleToggleSideNav} >
                          <NavLink to={link} >
                            {title}
                          </NavLink>
                        </li>
                      ))}
                    </motion.ul>
                  </li>
                }
                <Link to='/compare'
                  onClick={handleToggleSideNav}
                  className='relative'
                >
                  <div
                    className="p-4 pb-0 flex flex-row justify-between font-normal hover:font-bold text-black items-center text-lg hover:underline underline-offset-[4px] decoration-[1px] hover:text-black md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
                  >
                    Cart
                    <CartIcon />
                  </div>
                  <span className="absolute text-xs -bottom-1 right-3 w-4 h-4 flex items-center justify-center rounded-full bg-[#00F641] text-[#000]">
                    {products.length > 0 ? products.length : 0}
                  </span>
                </Link>
              </ul>
            </div>
          </motion.div>
        </div>
      )}
    </>
  )
}

export default SideNav
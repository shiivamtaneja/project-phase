import { useEffect, useLayoutEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { searchQuery, setWidth, toggleSearchFullScreen } from '../../redux/slice';
import { motion } from "framer-motion";

import { getSearchResult } from '../../assets/constants/index';
import SearchIcon from '../../assets/Icons/SearchIcon';
import ArrowLeftIcon from '../../assets/Icons/ArrowLeftIcon';
import UserProfileIcon from '../../assets/Icons/UserProfileIcon';
import Cross from '../../assets/Icons/CrossIcon';
import Search from '../displayLayouts/Search/Search';
import CartIcon from '../../assets/Icons/CartIcon';
import CardSkeleton from '../pageProps/Skeleton/CardSkeleton';

const HeaderBottom = () => {
  const width = useSelector((state) => state.EbikeLelo.width);
  useLayoutEffect(() => {
    const updateWidth = () => {
      dispatch(setWidth(window.innerWidth));
    };
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const dispatch = useDispatch();

  const searchFullScreen = useSelector((state) => state.EbikeLelo.searchFullScreen);
  useEffect(() => {
    if (searchFullScreen) {
      document.body.classList.add("Search__Body--open");
    }
    else {
      document.body.classList.remove("Search__Body--open");
    }
    return () => document.body.classList.remove("Search__Body--open");
  }, [searchFullScreen]);

  const query = useSelector((state) => state.EbikeLelo.searchQuery);

  const [suggestions, setSuggestions] = useState([]);

  const [isSearchInputFocused, setIsSearchInputFocused] = useState(false);

  const delay = useSelector((state) => state.EbikeLelo.debounceDelay);

  useEffect(() => {
    setSuggestions([]);
    const debounce = setTimeout(() => {
      if (query.length > 0) {
        const data = getSearchResult(query);
        setSuggestions(data);
      }
    }, delay);
    return () => {
      clearTimeout(debounce);
    }
  }, [query]);

  const clearSuggestions = () => {
    setSuggestions([]);
    dispatch(searchQuery(''));
  }

  const products = useSelector((state) => state.EbikeLelo.products);

  return (
    <>
      {width <= 766 ?
        // Small Screen
        <>
          <div className='sticky top-16 z-[15] bg-white pt-4'>
            <div className='pb-4 w-[90%] relative mx-auto'>
              <Search />
              <div className='absolute top-[12px] left-[15px]' >
                <SearchIcon />
              </div>
            </div>
            {
              searchFullScreen &&
              <div className='fixed top-0 left-0 h-[100vh] z-98 w-[100vw] bg-[#fff] overflow-y-auto'>
                <div className='h-12 flex m-[10px] relative border-2 border-[#59EC80] bg-[#f5f5f5] rounded-lg'>
                  <button
                    className='cursor-pointer bg-transparent border-none ml-[10px]'
                    onClick={() => dispatch(toggleSearchFullScreen(false))}
                  >
                    <ArrowLeftIcon />
                  </button>
                  <input
                    className='top-[10] text-sm w-full bg-[#f5f5f5] border-none font-[400] outline-none pl-[5px] text-[#7e8594] placeholder:text-[#7e8594]'
                    autoFocus="autofocus"
                    placeholder='Search Your Favourite Bikes'
                    onChange={(e) => dispatch(searchQuery(e.target.value))}
                    onFocus={() => setIsSearchInputFocused(true)}
                    onBlur={() => setIsSearchInputFocused(false)}
                    value={query}
                  />
                  {
                    query !== "" &&
                    <button className='bg-transparent border-none absolute right-[15px] top-[17px] w-[15px] cursor-pointer' onClick={clearSuggestions}>
                      <Cross />
                    </button>
                  }
                </div>
                {
                  query !== "" &&
                  <div className='flex flex-col text-left bg-white rounded-lg pl-[10px]'>
                    {suggestions.length === 0 ? <CardSkeleton /> :
                      suggestions.map(({ _id, productName }) => (
                        <div className='flex text-[#465166] py-[2px] pl-[5px] font-[400] text-base' key={_id}>
                          <SearchIcon />
                          <Link
                            to={`/search/${productName}/${_id}`}
                            style={{ paddingLeft: 10 }}
                            onMouseDown={(e) => {
                              e.preventDefault()
                            }}
                            onClick={() => {
                              dispatch(searchQuery(''))
                              dispatch(toggleSearchFullScreen(false))
                            }}
                          >
                            {productName}
                          </Link>
                        </div>
                      ))
                    }
                  </div>
                }
              </div>
            }
          </div>
        </>
        :
        // Big Screen
        <>
          <nav className=" bg-[#fff] sticky z-[17] top-0">
            <div className="flex flex-row items-center justify-between h-20 px-6 mx-auto md:max-w-screen-2xl md:pt-0 md:px-4">
              <Link to="/">
                <motion.img
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  src='/img/logo.png'
                />
              </Link>

              <div>
                <ul className='flex gap-10 text-sm font-semibold tracking-wider uppercase'>
                  <Link className='hover:text-[#00d639] transition duration-200 ease-in-out'>Listing</Link>
                  <Link className='hover:text-[#00d639] transition duration-200 ease-in-out'>Sell Your Bike</Link>
                  <Link className='hover:text-[#00d639] transition duration-200 ease-in-out' to={'/search'}>Shop</Link>
                  <Link className='hover:text-[#00d639] transition duration-200 ease-in-out'>Our Experts</Link>
                </ul>
              </div>

              <div className="relative flex items-center gap-4 pr-6 mt-2 cursor-pointer lg:mt-0">
                <div className="relative flex items-center gap-2">
                  <Link to='/profile'>
                    <UserProfileIcon />
                  </Link>
                  <Link to='/compare'>
                    <CartIcon />
                  </Link>
                  <span className="absolute text-xs top-[21px] -right-[6px] w-4 h-4 flex items-center justify-center rounded-full bg-[#00F641] text-[#000]">
                    {products.length > 0 ? products.length : 0}
                  </span>
                </div>
              </div>
            </div>
          </nav>
        </>
      }
    </>
  )
}

export default HeaderBottom
import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { searchQuery } from '../../redux/slice';

import Breadcrumbs from '../../components/pageProps/Breadcrumbs';
import ShopSideNav from '../../components/pageProps/shopPage/ShopSideNav';
import ShopMain from '../../components/pageProps/shopPage/ShopMain';
import Cross from '../../assets/Icons/CrossIcon';

const Search = ({ prevLocation, location }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const width = useSelector((state) => state.EbikeLelo.width);

  const dispatch = useDispatch();

  useEffect(() => {
    if (modalIsOpen) {
      document.body.classList.add("__Body--open");
    }
    else {
      document.body.classList.remove("__Body--open");
    }
    return () => document.body.classList.remove("__Body--open");
  }, [modalIsOpen]);

  const handleClick = () => {
    dispatch(searchQuery(''));
    setModalIsOpen(false);
  };

  return (
    <>
      {modalIsOpen &&
        <div className='absolute bg-white z-50  bottom-0 h-[65vh] custom-scroll-container w-full px-4'>
          <div className='flex items-center justify-between p-2 border-b-2 '>
            <p className='font-bold'>Filters</p>
            <button
              onClick={() => setModalIsOpen(false)}>
              <Cross />
            </button>
          </div>
          <div className='pt-2'>
            <ShopSideNav />
          </div>
          <Link to={`/search`} onClick={handleClick} className='flex items-center'>
            <p className='text-[#fff] bg-[#3ba5e0] p-2 rounded-lg w-20'>Clear All</p>
          </Link>
        </div>
      }
      <div className='w-full section-margin'>
        {width <= 766 &&
          <div className='w-full pb-4 bg-white cursor-pointer'
            onClick={() => setModalIsOpen(true)}
          >
            <div className=' w-full bg-[#f5f5f5] h-12  rounded-md flex justify-around items-center'>
              <div >Sort</div>
              <div>Filter</div>
            </div>
          </div>
        }
        <Breadcrumbs title="Products" prevLocation={prevLocation} location={location} />
        <div className="flex flex-col md:flex-row ">
          {
            width >= 766 &&
            <div className="w-[20%] lg:w-[25%] md:inline-flex h-full sticky top-24">
              <ShopSideNav />
            </div>
          }
          <div className="w-full md:w-[80%] lg:w-[75%] h-full flex flex-col gap-10 md:pl-4">
            <ShopMain />
          </div>
        </div>
      </div>
    </>
  )
}

export default Search
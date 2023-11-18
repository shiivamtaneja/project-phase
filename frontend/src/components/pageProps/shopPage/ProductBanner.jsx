import React from 'react';

import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { searchQuery, toggleGridView, toggleListView } from '../../../redux/slice';

import GridIcon from '../../../assets/Icons/GridIcon';
import ListIcon from '../../../assets/Icons/ListIcon';
import ArrowDownIcon from '../../../assets/Icons/ArrowDownIcon';
import { itemsPerPageValue, sortBy } from '../../../assets/constants';

const ProductBanner = ({ itemsPerPageFromBanner }) => {
  const gridViewActive = useSelector((state) => state.EbikeLelo.gridViewActive);
  const listViewActive = useSelector((state) => state.EbikeLelo.listViewActive);

  const dispatch = useDispatch();

  const handleViewClick = () => {
    dispatch(toggleGridView(!gridViewActive));
    dispatch(toggleListView(!listViewActive));
  }

  const width = useSelector((state) => state.EbikeLelo.width);

  return (
    <div className="w-full flex md:flex-row md:items-center justify-between">
      {width >= 766 &&
        <div className="flex items-center gap-4">
          <span
            onClick={handleViewClick}
            className={`${gridViewActive ? "viewActive" : "viewNotActive"} w-8 h-8 text-lg flex items-center justify-center cursor-pointer`}
          >
            <GridIcon />
          </span>
          <span
            onClick={handleViewClick}
            className={`${listViewActive ? "viewActive" : "viewNotActive"} w-8 h-8 text-base flex items-center justify-center cursor-pointer listView`}
          >
            <ListIcon />
          </span>
        </div>
      }

      <div className="md:flex items-center gap-2 md:gap-6 mt-4 md:mt-0 hidden">
        <div className=" border-[1px] border-gray-200 py-1 px-4 cursor-pointer text-base block dark:placeholder-gray-400 appearance-none focus-within:outline-none focus-visible:border-primeColor">
          <Link to={`/search/`} onClick={() => dispatch(searchQuery(''))} className='flex items-center'>
            <p className='text-md text-[#767676]'>Clear All</p>
            {/* <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"></path></svg> */}
          </Link>
        </div>
        <div className="flex items-center gap-2 text-base text-[#767676] relative">
          <label className="block" htmlFor='sort-by'>Sort by:</label>
          <select
            id="sort-by"
            className="w-32 md:w-52 border-[1px] border-gray-200 py-1 px-4 cursor-pointer text-base block dark:placeholder-gray-400 appearance-none focus-within:outline-none focus-visible:border-primeColor"
          >
            {sortBy.map(({ _id, sort }) => (
              <option value={sort} key={_id}>{sort}</option>
            ))}
          </select>
          <span className="absolute text-sm right-0 md:right-2">
            <ArrowDownIcon />
          </span>
        </div>
        <div className="flex items-center gap-2 text-[#767676] relative">
          <label className="block" htmlFor='itemsPerPage'>Show:</label>
          <select
            onChange={(e) => itemsPerPageFromBanner(+e.target.value)}
            id="itemsPerPage"
            className="w-16 md:w-20 border-[1px] border-gray-200 py-1 px-4 cursor-pointer text-base block dark:placeholder-gray-400 appearance-none focus-within:outline-none focus-visible:border-primeColor"
          >
            {itemsPerPageValue.map(({ _id, value }) => (
              <option value={value} key={_id}>{value}</option>
            ))}
          </select>
          <span className="absolute text-sm right-0 md:right-2">
            <ArrowDownIcon />
          </span>
        </div>
      </div>
    </div>
  )
}

export default ProductBanner
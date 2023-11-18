import React, { useState } from 'react';

import { useLoaderData } from 'react-router-dom';

import ReactPaginate from 'react-paginate';

import ProductView from './ProductView';

import { getNewProducts, getSearchProduct, products } from '../../../assets/constants';

export const loader = async ({ params }) => {
  let results;
  if (params.productId) {
    results = getSearchProduct(params.productId);
  } else if (params.productNew) {
    results = getNewProducts(true);
  }
  else {
    results = products;
  }
  return results;
}

const Pagination = ({ itemsPerPage }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const [itemStart, setItemStart] = useState(1);

  const items = useLoaderData();

  const endOffset = itemOffset + itemsPerPage;

  const currentItems = items?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items?.length / itemsPerPage);

  const handleNewPageClick = (e) => {
    const newOffset = (e.selected * itemsPerPage) % items?.length;
    setItemOffset(newOffset);
    setItemStart(newOffset);
  }

  return (
    <div>
      <div>
        <ProductView currentItems={currentItems} />
      </div>
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
        <ReactPaginate
          nextLabel=""
          onPageChange={handleNewPageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel=""
          pageLinkClassName="w-9 h-9 border-[1px] hover:border-gray-500 duration-300 flex justify-center items-center"
          pageClassName="mr-2"
          containerClassName="flex text-base font-semibold py-10"
          activeClassName="bg-black text-white"
        />

        <p className="text-base font-normal ">
          Products from {itemStart === 0 ? 1 : itemStart} to {endOffset > items?.length ? items?.length : endOffset} of{" "} {items?.length}
        </p>
      </div>
    </div>
  )
}

export default Pagination
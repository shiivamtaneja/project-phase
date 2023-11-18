import React, { useEffect, useState } from 'react';

import { useLoaderData, useParams } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Breadcrumbs from '../../components/pageProps/Breadcrumbs';
import CardSkeleton from '../../components/pageProps/Skeleton/CardSkeleton';
import Image from '../../components/displayLayouts/Image';

const ProductPage = () => {

  const [loading, setLoading] = useState(false);

  const [inCart, setInCart] = useState(false);

  const [prodCartFull, setProdCartFull] = useState(false);

  const [data] = useLoaderData();

  const params = useParams();

  const productsCart = useSelector((state) => state.EbikeLelo.products);

  useEffect(() => {
    if (productsCart.length == 4) {
      setProdCartFull(true)
    }
    const productInCart = productsCart.some((itemID) => itemID._id === data._id);
    productInCart ? setInCart(true) : setInCart(false);


  }, [])

  const addToCartNotification = () => toast('Added To Compare Sucessfully!', {
    position: "top-right",
    autoClose: 750,
    theme: "dark",
  });

  const removeFromCartNotification = () => toast('Removed Sucessfully!', {
    position: "top-right",
    autoClose: 750,
    theme: "dark",
  });

  const handleRemoveClick = () => {
    setLoading(true);

    if (!localStorage.getItem('compareCart')) {
      setInCart(false);
      return;
    }
    const existingData = JSON.parse(localStorage.getItem('compareCart'));

    const updateData = existingData.filter((item) => item._id !== data._id);

    localStorage.setItem('compareCart', JSON.stringify(updateData));
    removeFromCartNotification();
    setTimeout(() => {
      setLoading(false);
      window.location.reload();
    }, 1000);
  }

  const handleCompareClick = () => {
    setLoading(true);

    const compareData = JSON.stringify(data);

    const existingData = localStorage.getItem('compareCart') ? JSON.parse(localStorage.getItem('compareCart')) : [];

    if (!existingData.some((item) => JSON.stringify(item) === compareData)) {
      existingData.push(data);
      localStorage.setItem('compareCart', JSON.stringify(existingData));
    }
    addToCartNotification();
    setTimeout(() => {
      setLoading(false);
      window.location.reload();
    }, 1000);
  }

  return (
    <>
      <ToastContainer />
      {loading &&
        <div className='top-0 absolute flex justify-center items-center w-full h-[100vh] z-[99] bg-black opacity-50 '>
          <CardSkeleton />
        </div>
      }
      <div className="w-full pb-12 section-margin ">
        <div className="">
          <div className="pb-4 md:-mt-8">
            <Breadcrumbs title="" prevLocation={params.companyName} location={params.name} />
          </div>

          <div className="flex flex-col items-center lg:w-full lg:flex-row md:gap-10 ">
            <div >
              <Image imgSrc={data.imgSrc.Bike} className='rounded-md w-80 md:w-full' />
            </div>
            <div className="">
              <div className="text-[34px] font-semibold mb-2 flex flex-col">
                <div>
                  {data.productName}
                </div>
                <div>
                  {data.color}
                </div>
                <div>
                  MRP: ₹{data.price}
                </div>
              </div>

              <div className='flex flex-col'>
                {prodCartFull ?
                  <>
                    <button
                      className="py-4 mb-3 text-lg font-medium text-white transition-transform bg-black rounded-full w-52 active:scale-95 hover:opacity-75 disabled:opacity-100"
                      onClick={handleCompareClick} disabled={prodCartFull}>
                      Can't Add, Cart is Full
                    </button>
                  </>
                  :
                  <>
                    <button
                      className="py-4 mb-3 text-lg font-medium text-white transition-transform bg-black rounded-full w-52 active:scale-95 hover:opacity-75 disabled:opacity-100"
                      onClick={handleCompareClick} disabled={inCart}>
                      {inCart ? "Already Added" : 'Click to Compare'}
                    </button>
                    <button
                      className="py-4 mb-3 text-lg font-medium text-white transition-transform bg-black rounded-full w-52 active:scale-95 hover:opacity-75 disabled:opacity-100"
                      onClick={handleRemoveClick} disabled={!inCart}>
                      {inCart ? 'Click to Remove' : 'Cant remove'}
                    </button>
                  </>
                }
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default ProductPage
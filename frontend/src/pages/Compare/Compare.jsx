import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { motion } from 'framer-motion';

import CardSkeleton from '../../components/pageProps/Skeleton/CardSkeleton';
import Image from '../../components/displayLayouts/Image';
import ArrowUpIcon from '../../assets/Icons/ArrowUpIcon';
import ArrowDownIcon from '../../assets/Icons/ArrowDownIcon';
import Breadcrumbs from '../../components/pageProps/Breadcrumbs';
import CrossIcon from '../../assets/Icons/CrossIcon';

const Compare = () => {
  const [compareEmpty, setCompareEmpty] = useState();
  const [loading, setLoading] = useState(false);

  const productCart = useSelector((state) => state.EbikeLelo.products);

  const [accordionOpen, setAccordionOpen] = useState({ price: false, general: false, specs: false });

  const width = useSelector((state) => state.EbikeLelo.width);

  useEffect(() => {
    const compareCart = JSON.parse(localStorage.getItem('compareCart'));
    compareCart.length === 0 ? setCompareEmpty(true) : setCompareEmpty(false);

  }, []);

  const handleRemoveClick = (itemID) => {
    setLoading(true);

    const existingData = JSON.parse(localStorage.getItem('compareCart'));

    const updateData = existingData.filter((item) => item._id !== itemID);

    localStorage.setItem('compareCart', JSON.stringify(updateData));

    setTimeout(() => {
      setLoading(false);
      window.location.reload();
    }, 1000);
  }

  return (
    <>
      {loading &&
        <div className='top-0 absolute flex justify-center items-center w-full h-[100vh] z-[99] bg-black opacity-50'>
          <CardSkeleton />
        </div>
      }
      <div className='w-full section-margin '>
        <Breadcrumbs title="Compare Products" prevLocation={''} location={'Compare'} />
        {compareEmpty ?
          <div className='flex flex-col items-center gap-6 py-8'>
            <p className='text-lg font-medium'>Your Cart is Empty</p>
            <p className=''>Looks like you have not added anything to your cart.</p>
            <button
              className="bg-[#00F641] lg:w-[15%] p-2 h-10 hover:bg-black hover:text-white duration-300 text-base tracking-wide rounded-md"
            >
              <Link to={`/search`}>
                Return To Shop
              </Link>
            </button>
          </div>
          :
          <div className='flex flex-col'>
            <div className='flex flex-row gap-10 p-6 lg:pl-52 lg:p-0'>
              {productCart?.map((item) => (
                <div className='relative flex flex-col gap-5' key={item._id}>
                  <Image className='rounded-md w-72' imgSrc={item.imgSrc.Bike} />
                  <p key={item._id} className='w-5 text-sm'>{item.productName}</p>
                  <span className='absolute flex items-center justify-center w-8 h-8 bg-white rounded-full cursor-pointer -top-5 -right-5'
                    onClick={() => handleRemoveClick(item._id)}
                  >
                    <CrossIcon />
                  </span>
                </div>
              ))}
            </div>
            {width >= 1020 ?
              <div className='my-4'>
                <div className='mt-3 bg-[#F5F5F3] rounded-md'>
                  <div
                    onClick={() => setAccordionOpen(prevState => ({
                      ...prevState,
                      general: !prevState.general
                    }))}
                    className={`flex items-center justify-between p-4 pl-6 cursor-pointer rounded-md ${accordionOpen.general ? 'bg-[#f1faff] text-[#87cfff] font-medium' : 'text-[#6c757d]'}`}
                  >
                    General Information
                    {accordionOpen.general ? <ArrowUpIcon /> : <ArrowDownIcon />}
                  </div>
                  {
                    accordionOpen.general &&
                    <motion.div
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.4 }}
                      onClick={() => setAccordionOpen(prevState => ({
                        ...prevState,
                        general: !prevState.general
                      }))}
                      className='cursor-pointer'
                    >
                      <table
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        className='flex p-6 '
                      >
                        <tbody className=''>
                          <tr className='border-b-2 border-[#d6d6d6]'>
                            <th className='p-4 pt-0'>Price</th>
                            {productCart?.map((item) => (
                              <td key={item._id} className="p-4 px-12 pt-0 md:px-40">₹{item.price}</td>
                            ))}
                          </tr>

                          <tr className='border-b-2 border-[#d6d6d6]'>
                            <th className='p-4'>Color</th>
                            {productCart?.map((item) => (
                              <td key={item._id} className="p-4 px-12 md:px-40">{item.color}</td>
                            ))}
                          </tr>
                        </tbody>
                      </table>
                    </motion.div>
                  }
                </div>
              </div>
              :
              <div>
                <h4 className='py-2 items-center p-4 bg-[#F2F3F4]'>Price</h4>
                <table className='w-full' >
                  <tbody>
                    <tr className='border-b-2 border-[#d6d6d6]'>
                      {productCart?.map((item) => (
                        <td key={item._id} className="pl-[5vw]" style={{ width: `${100 / productCart.length}%` }}>₹{item.price}</td>
                      ))}
                    </tr>
                  </tbody>
                </table>

                <h4 className='py-2 items-center p-4 bg-[#F2F3F4]'>Color</h4>
                <table className='w-full' >
                  <tbody>
                    <tr className='border-b-2 border-[#d6d6d6]'>
                      {productCart?.map((item) => (
                        <td key={item._id} className="pl-[5vw]" style={{ width: `${100 / productCart.length}%` }}>{item.color}</td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            }
          </div>
        }
      </div>
    </>
  )
}

export default Compare
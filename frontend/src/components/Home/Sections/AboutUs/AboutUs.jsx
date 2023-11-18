import React from 'react'

import { Link } from 'react-router-dom'

const AboutUs = ({ path }) => {
  return (
    <section className='bg-[#FAFAFA] pt-8 pb-8 pl-3'>
      <div className='lg:max-w-7xl mx-auto'>
        <div className='flex flex-col md:items-center md:text-center'>
          <h2 className='font-[500] uppercase text-[#59EC80] pr-2 tracking-wider lg:pr-4 '>WHY CHOOSE US</h2>
          <div>
            <h3 className='font-bold text-[#3a2f3d] md:text-3xl text-xl pt-2 pb-3 tracking-wide'>EBikeLelo Is The Biggest EV Station In The World</h3>
            <div className='text-sm text-[#545454] pt-2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </div>
          </div>
          <div className='flex md:flex-row flex-col pt-4'>
            <div className='text-start md:pr-3'>
              <div className='pb-4'>
                <h4 className='font-bold text-[#3a2f3d] md:text-xl text-lg pt-2 pb-3 tracking-wide'>12-Month Warranty</h4>
                <span className='' >Enjoy peace of mind with our 12 month Warranty that is standard across all two wheelers that we sell</span>
              </div>
              <div className='pb-4'>
                <h4 className='font-bold text-[#3a2f3d] md:text-xl text-lg pt-2 pb-3 tracking-wide'>12-Month Warranty</h4>
                <span className='' >Enjoy peace of mind with our 12 month Warranty that is standard across all two wheelers that we sell</span>
              </div>
            </div>
            <div className='md:text-end'>
              <div className='pb-4'>
                <h4 className='font-bold text-[#3a2f3d] md:text-xl text-lg pt-2 pb-3 tracking-wide'>12-Month Warranty</h4>
                <span className='' >Enjoy peace of mind with our 12 month Warranty that is standard across all two wheelers that we sell</span>
              </div>
              <div className=''>
                <h4 className='font-bold text-[#3a2f3d] md:text-xl text-lg pt-2 pb-3 tracking-wide'>12-Month Warranty</h4>
                <span className='' >Enjoy peace of mind with our 12 month Warranty that is standard across all two wheelers that we sell</span>
              </div>
            </div>
          </div>
        </div>
        <div className='pt-4'>
          <Link to={`${path}`} >
            <button className='px-6 py-2 border border-none bg-[#82b440] rounded-md uppercase text-xs tracking-widest text-[#fff]' >
              more about us
            </button>
          </Link>
        </div>
      </div>
    </section >
  )
}

export default AboutUs
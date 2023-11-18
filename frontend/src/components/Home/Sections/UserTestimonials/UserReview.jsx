import React from 'react'

import Reviews from './Reviews'

const UserReview = ({ title }) => {

  return (
    <section className='w-full bg-[#f5f5f4] pb-4'>
      <div className='flex flex-col pb-8 section-margin '>
        <h2 className='flex flex-row items-center'>
          <span className='font-[500] capitalize text-[#3a2f3d] text-lg pr-2 lg:text-2xl lg:pr-4 '>
            {title}
          </span>
        </h2>

        <div>
          <Reviews />
        </div>

      </div>
    </section>
  )
}

export default UserReview
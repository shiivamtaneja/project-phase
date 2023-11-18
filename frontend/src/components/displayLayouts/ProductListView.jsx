import React from 'react'
import Image from './Image'
import Badge from './CategorySection/Badge'

const ProductListView = ({ _id, productName, price, color, badge, imgSrc, des }) => {
  return (
    <div className="relative flex flex-col pb-4 md:flex-row">
        <div className=''>
          <Image className="w-full h-60 md:rounded-l-md md:rounded-tr-none rounded-t-md" imgSrc={imgSrc} />
          <div className="absolute top-6 left-8">
            {badge && <Badge text="New" />}
          </div>
        </div>
        <div className="w-70 py-6 flex flex-col gap-1 border-[2px] md:border-l-0 md:border-t-[2px] border-t-0 px-4 md:rounded-r-lg rounded-b-lg md:rounded-bl-none">
          <div className="flex items-center justify-between ">
            <h2 className="text-lg font-bold text-primeColor">
              {productName}
            </h2>
            <p className="text-[#767676] text-[14px]">₹{price}</p>
          </div>
          <div>
            <p className="text-[#767676] text-[14px]">{color}</p>
          </div>
          <div>
            <p className="text-[#767676] text-[14px]">{des}</p>
          </div>
        </div>
    </div>
  )
}

export default ProductListView
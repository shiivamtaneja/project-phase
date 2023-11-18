import React from 'react'

import Image from '../Image'
import Badge from './Badge'

const Product = ({ img, productName, price, extraInfo, des, badge }) => {
  return (
    <div className="relative ">
      <div className="max-w-80 max-h-80 ">
        <Image className="w-full h-full rounded-t-md" imgSrc={img} />
        <div className="absolute top-6 left-8">
          {badge && <Badge text="New" />}
        </div>
      </div>
      <div className="max-w-80 py-6 flex flex-col gap-1 border-[2px] border-t-0 px-4 rounded-b-lg">
        <div className="flex items-center justify-between ">
          <h2 className="text-lg text-primeColor font-bold">
            {productName}
          </h2>
          <p className="text-[#767676] text-[14px]">₹{price}</p>
        </div>
        <div>
          <p className="text-[#767676] text-[14px]">{extraInfo}</p>
        </div>
        <div>
          <p className="text-[#767676] text-[14px]">{des}</p>
        </div>
      </div>
    </div>
  )
}

export default Product
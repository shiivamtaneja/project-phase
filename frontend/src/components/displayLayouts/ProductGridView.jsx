import React from 'react'

import { Link } from 'react-router-dom'

import Badge from './CategorySection/Badge'
import Image from './Image'

const ProductGridView = ({ _id, productName, price, color, badge, imgSrc, des }) => {
  return (
    <div className="relative md:w-1/2 lg:w-1/3 pr-2 pb-4">
      <Link to={`/products/company/${productName}/${_id}`}>
        <div >
          <Image className="w-full h-full rounded-t-md" imgSrc={imgSrc} />
          <div className="absolute top-6 left-8">
            {badge && <Badge text="New" />}
          </div>
        </div>
        <div className="w-70 py-6 flex flex-col gap-1 border-[2px] border-t-0 px-4 rounded-b-lg">
          <div className="flex items-center justify-between ">
            <h2 className="text-lg text-primeColor font-bold">
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
      </Link>
    </div>

  )
}

export default ProductGridView
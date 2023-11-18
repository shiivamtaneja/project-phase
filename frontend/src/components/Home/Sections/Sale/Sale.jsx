import React from 'react'

import { Link } from 'react-router-dom'

import Image from '../../../displayLayouts/Image'
import saleImgOne from '../../../../assets/Images/Sale/sale1.png'
import saleImgTwo from '../../../../assets/Images/Sale/sale2.png'
import saleImgThree from '../../../../assets/Images/Sale/sale3.png'

const Sale = () => {
  return (
    <div className="lg:w-[80vw]  mx-auto lg:py-10 pt-10 flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-10">
      <div className="w-full md:w-2/3 lg:w-1/2 h-full">
        <Link to="/deals">
          <Image className="h-full w-full object-cover" imgSrc={saleImgOne} />
        </Link>
      </div>
      <div className="w-full md:w-2/3 lg:w-1/2 h-auto flex flex-col gap-4 lg:gap-10">
        <div className="h-1/2 w-full">
          <Link to="/deals">
            <Image className="h-full w-full object-cover" imgSrc={saleImgTwo} />
          </Link>
        </div>
        <div className="h-1/2 w-full">
          <Link to="/deals">
            <Image className="h-full w-full object-cover" imgSrc={saleImgThree}
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Sale
import React from 'react'

import { Link } from 'react-router-dom'

import Image from '../../../displayLayouts/Image'
import productOfTheYear from '../../../../assets/Images/productOfYear.png'

const ProductYear = () => {
  return (
    <div className="md:w-[80vw] w-[95vw] mx-auto h-80 mt-10 bg-[#f3f3f3] relative ">
      <Link to='/deals'>
        <Image
          className="hidden object-cover w-full h-full md:inline-block "
          imgSrc={productOfTheYear}
        />
        <div className="absolute top-0 right-0 flex flex-col items-start justify-center w-full gap-6 px-4 md:w-2/3 xl:w-1/2 h-80 md:px-0">
          <h2 className="text-3xl font-semibold">
            Product of The year
          </h2>
          <p className="text-base font-normal max-w-[600px] mr-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
            cupiditate modi amet! Facilis, aperiam quaerat.
          </p>
          <button className="bg-black text-white text-lg w-[185px] h-[50px] hover:bg-black duration-300 font-bold">Shop Now</button>
        </div>
      </Link>
    </div>
  )
}

export default ProductYear
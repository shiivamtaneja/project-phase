import React from 'react'
import LongArrowRight from '../../../assets/Icons/LongArrowRight'

const NextArrow = ({ onClick }) => {
  return (
    <div
      className="w-14 h-14 rounded-full text-white bg-black bg-opacity-40 hover:bg-opacity-100 duration-300 cursor-pointer flex justify-center items-center z-10 absolute top-[35%] right-2"
      onClick={onClick}
    >
      <span className="text-xl">
        <LongArrowRight />
      </span>
    </div>
  )
}

export default NextArrow
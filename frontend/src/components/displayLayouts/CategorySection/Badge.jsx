import React from 'react'

const Badge = ({ text }) => {
  return (
    <div className="w-[92px] h-[35px] text-black flex justify-center items-center text-base font-semibold bg-[#00F641] hover:bg-white hover:text-black duration-300 cursor-pointer">
      {text}
    </div>
  )
}

export default Badge
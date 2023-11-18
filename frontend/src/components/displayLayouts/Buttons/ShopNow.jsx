import React from 'react'

const ShopNow = ({ btn }) => {
  return <button
    className='px-6 py-2 border border-[#00F641] bg-[#00F641] text-[#000] rounded-sm capitalize font-[500] text-md tracking-widest transition-all hover:border-[#fff] hover:bg-transparent hover:text-[#fff]'
  >
    {btn}
  </button>
}

export default ShopNow
import React, { useState } from 'react'

import { motion } from 'framer-motion'

import NavTitle from './NavTitle'

const Brand = () => {
  const [showBrands, setShowBrands] = useState(false)
  const brands = [
    {
      _id: 9006,
      title: "Ather",
    },
    {
      _id: 9007,
      title: "Okaya",
    },
    {
      _id: 9008,
      title: "Ola",
    },
  ]
  return (
    <div >
      <div
        onClick={() => setShowBrands(!showBrands)}
        className="cursor-pointer"
      >
        <NavTitle title="Shop by Brand" icons={showBrands} />
      </div>
      {showBrands && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ul className="cursor-pointer flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
            {brands.map((item) => (
              <li
                key={item._id}
                className=" border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center gap-2 hover:text-black hover:border-gray-400 duration-300"
              >
                {item.title}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  )
}

export default Brand
import React, { useState } from 'react'

import { motion } from 'framer-motion'
import NavTitle from './NavTitle';

const Category = () => {
  const [showCategory, setshowCategory] = useState(true)
  const items = [
    {
      _id: 990,
      title: "All Bikes",
      icons: true,
    },
    {
      _id: 991,
      title: "Premium / Super Bikes",
    },
    {
      _id: 992,
      title: "Vintage Bikes",
      icons: true,
    },
    {
      _id: 993,
      title: "Scooty",
    },
  ];
  return (
    <div>
      <div
        onClick={() => setshowCategory(!showCategory)}
        className="cursor-pointer w-full"
      >
        <NavTitle title="Shop by Category" icons={showCategory} />
      </div>
      {showCategory && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ul className="cursor-pointer flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
            {items.map((item) => (
              <li
                key={item._id}
                className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center gap-2 hover:text-black hover:border-gray-400 duration-300"
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

export default Category
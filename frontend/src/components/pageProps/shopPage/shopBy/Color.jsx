import React, { useState } from 'react'

import { motion } from 'framer-motion'

import NavTitle from './NavTitle'

const Color = () => {
  const [showColors, setShowColors] = useState(false)

  const colors = [
    {
      _id: 1001,
      title: "Green",
      color: "#22c55e",
    },
    {
      _id: 1002,
      title: "Gray",
      color: "#a3a3a3",
    },
    {
      _id: 1003,
      title: "Red",
      color: "#dc2626",
    },
    {
      _id: 1004,
      title: "Yellow",
      color: "#f59e0b",
    },
    {
      _id: 1005,
      title: "Blue",
      color: "#3b82f6",
    },
  ]

  return (
    <div>
      <div
        onClick={() => setShowColors(!showColors)}
        className="cursor-pointer"
      >
        <NavTitle title="Shop by Exterior Color" icons={showColors} />
      </div>
      {showColors && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ul className="cursor-pointer flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
            {colors.map((item) => (
              <li
                key={item._id}
                className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center gap-2 hover:text-black hover:border-gray-400 duration-300"
              >
                <span
                  style={{ background: item.color }}
                  className={`w-3 h-3 bg-gray-500 rounded-full`}
                ></span>
                {item.title}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  )
}

export default Color
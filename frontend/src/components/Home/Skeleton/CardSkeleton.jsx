import React from 'react'

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import "react-loading-skeleton/dist/skeleton.css";

import './CircleSkeleton.css'

const CardSkeleton = () => {
  const circle = Array(8).fill(0)
  return (
    <SkeletonTheme baseColor='#bdbdbd' highlightColor='#d8d8d8'>
      <div className='h-56 rounded-xl xl:w-96 circle-container'>
        {circle.map((_, i) => (
          <div className='circle' key={i}>
            <Skeleton circle={true} height={10} width={10} />
          </div>
        ))}
      </div>
    </SkeletonTheme>
  )
}

export default CardSkeleton
import React, { useLayoutEffect, useMemo } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { setWidth } from './../../../../redux/slice'

import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { styled } from 'styled-components'

import ArrowLeftIcon from '../../../../assets/Icons/Carosuel/ArrowLeftIcon'
import ArrowRightIcon from '../../../../assets/Icons/Carosuel/ArrowRightIcon'
import RightQuote from '../../../../assets/Icons/RightQuote'
import LeftQuote from '../../../../assets/Icons/LeftQuote'
import { CustomerReviews } from '../../../../assets/constants'


const PrevBtn = ({ className, onClick, currentSlide }) => {
  return (
    <>
      {currentSlide !== 0 && (
        <div className={className} onClick={onClick}>
          <ArrowLeftIcon />
        </div>
      )}
    </>
  )
}

const NextBtn = ({ className, onClick, currentSlide, slideCount, slidesToShow }) => {

  return (
    <>
      {currentSlide != slideCount - slidesToShow && (
        <div className={className} onClick={onClick}>
          <ArrowRightIcon />
        </div>
      )}
    </>
  )
}

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`
const Review = () => {

  const dispatch = useDispatch()

  const width = useSelector((state) => state.EbikeLelo.width)
  useLayoutEffect(() => {
    const updateWidth = () => {
      dispatch(setWidth(window.innerWidth))
    }
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener("resize", updateWidth)
  }, [])


  const slidesToShow = useMemo(() => {
    if (width <= 480) {
      return 1
    } else if (width > 480 && width <= 600) {
      return 2
    } else if (width > 600 && width <= 1000) {
      return 2
    } else {
      return 2
    }
  })

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: slidesToShow,
    swipeToSlide: true,
    nextArrow: <NextBtn slidesToShow={slidesToShow} />,
    prevArrow: <PrevBtn />,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: slidesToShow,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: slidesToShow,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: slidesToShow,
        }
      }
    ]
  }
  return (
    <Slider {...settings} className='pt-6'>
      {CustomerReviews.map(({ _id, imgSrc, review, name, location }) => (
        <div className='pr-8' key={_id}>
          <div className='h-fit bg-[#fff] rounded-xl  flex flex-col p-6 pb-2 gap-4 items-center lg:flex-row '>
            <div className='lg:w-screen h-full w-full' >
              <Image src={imgSrc} />
            </div>
            <div className='flex flex-col '>
              <span className='text-[#7a7b7f] font-[500] text-sm tracking-wide pt-2 '>
                <span className='inline-block pr-2'>
                  <LeftQuote />
                </span>
                {review}
                <span className='inline-block pl-2'>
                  <RightQuote />
                </span>
              </span>
              <div className='flex flex-col pt-3 '>
                <span className='text-[#4b4c51] font-[500]'>
                  {name}
                </span>
                <span className='text-[#a3a8ad] font-[500]'>
                  {location}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  )
}

export default Review
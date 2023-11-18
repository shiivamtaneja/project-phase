import React, { useLayoutEffect, useMemo } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { setWidth } from '../../../../redux/slice'

import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { styled } from 'styled-components'

import { HotDeals } from '../../../../assets/constants'
import ArrowLeftIcon from '../../../../assets/Icons/Carosuel/ArrowLeftIcon'
import ArrowRightIcon from '../../../../assets/Icons/Carosuel/ArrowRightIcon'

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`
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

const Deals = () => {

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
      return 3
    }
  })

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: slidesToShow,
    swipeToSlide: true,
    nextArrow: <NextBtn slidesToShow={slidesToShow} />,
    prevArrow: <PrevBtn />,
    autoplay: true,
    autoplaySpeed: 2000,
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
    <div className='pl-3 lg:pl-0'>

      <Slider {...settings}>
        {HotDeals.map(({ _id, imgSrc }) => (
          <div className='pr-4 ' key={_id}>
            <div className='h-60 bg-[#f5f5f5] rounded-xl xl:w-[27rem]'>
              <Image src={imgSrc} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Deals
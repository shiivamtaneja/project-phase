import { useState } from "react"

import Slider from "react-slick"

import Image from '../../../displayLayouts/Image'
import bannerImgOne from '../../../../assets/Images/Carousel/bannerImgOne.png'
import bannerImgTwo from '../../../../assets/Images/Carousel/bannerImgTwo.png'
import bannerImgThree from '../../../../assets/Images/Carousel/bannerImgThree.png'

const HomeCarousel = () => {
  const [dotActive, setDocActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplaySpeed: 2000,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          width: '1px',
          bottom: "10%",
          left: "80vw",
        }}
      >
        <ul style={{ display: 'flex', flexDirection: 'row' }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
              width: "30px",
              color: "#262626",
              borderTop: "3px #949494 solid",
              cursor: "pointer",
            }
            : {
              width: "30px",
              color: "transparent",
              borderTop: "3px #262626 solid",
              cursor: "pointer",
            }
        }
      >
        0{i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: true,
          appendDots: (dots) => (
            <div
              style={{
                position: "absolute",
                bottom: "0",
                transform: "translateY(-50%)",
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i === dotActive
                  ? {
                    width: "25px",
                    color: "#262626",
                    borderBottom: "3px #262626 solid",
                    cursor: "pointer",
                    fontSize: "12px",
                  }
                  : {
                    width: "25px",
                    color: "transparent",
                    borderBottom: "3px white solid",
                    cursor: "pointer",
                    fontSize: "12px",
                  }
              }
            >
              0{i + 1}
            </div>
          ),
        },
      },
    ],
  }
  return (
    <div>
      <Slider {...settings}>
        <div>
          <Image className="h-[300px]  lg:h-auto" imgSrc={bannerImgOne} />
        </div>
        <div>
          <Image className="h-[300px]  lg:h-auto" imgSrc={bannerImgTwo} />
        </div>
        <div>
          <Image className="h-[300px]  lg:h-auto" imgSrc={bannerImgThree} />
        </div>

        {/* <Link to="/deals">
          <div>
            <img className="h-[300px]  lg:h-auto" imgSrc={bannerImgOne} />
          </div>
        </Link> */}
      </Slider>
    </div>
  )
}

export default HomeCarousel
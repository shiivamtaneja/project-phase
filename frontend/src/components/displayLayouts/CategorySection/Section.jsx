import Slider from "react-slick";

import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';
import Heading from './Heading';
import Product from './Product';
import { products } from '../../../assets/constants';
import { Link } from 'react-router-dom';

const Section = ({ heading, link }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  }

  return (
    <div className="pt-10 pb-10 section-margin">

      <Heading heading={heading} link={link} />

      <Slider {...settings}>
        {products.slice(0, 10).map(({ _id, imgSrc, productName, price, badge, des }) => (
          <div className="px-2" key={_id}>
            <Link to={`/products/company/${productName}/${_id}`}>
              <Product
                _id={_id}
                img={imgSrc.Bike}
                productName={productName}
                price={price}
                extraInfo="Gen 3"
                badge={badge}
                des={des}
              />
            </Link>
          </div>
        ))}

      </Slider>
    </div>
  )
}

export default Section
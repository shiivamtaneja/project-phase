import { Link } from 'react-router-dom';

import ShopNow from '../../../displayLayouts/Buttons/ShopNow';

const BannersFull = ({ img, heading, info, btn }) => {
  return (
    <section className='pt-8 flex h-[400px] ' style={{ backgroundImage: `url(${img})` }}>
      <div className='flex text-[#fff] lg:text-[#fff] w-full flex-col section-margin '>
        <h3 className='font-[500] capitalize text-2xl pr-2 md:text-3xl lg:text-4xl lg:pr-4 pb-8 tracking-wider'>
          {heading}
        </h3>
        <p className='font-[300] capitalize text-2xl lg:text-3xl tracking-wider pb-8'>
          {info}
        </p>
        <Link to="/deals">
          <ShopNow btn={btn} />
        </Link>
      </div>
    </section >
  )
}

export default BannersFull
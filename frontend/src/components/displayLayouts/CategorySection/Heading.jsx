import { Link } from 'react-router-dom';

import ArrowRightIcon from '../../../assets/Icons/ArrowRightIcon'

const Heading = ({ heading, link }) => {
  return <h2 className='flex flex-row items-center pb-6 pl-3 lg:pl-[3px]'>
    <span className='font-[500] capitalize text-[#3a2f3d] text-lg pr-2 lg:text-2xl lg:pr-4 '>
      {heading}
    </span>
    <Link className='' to={link} >
      <div className='flex flex-row text-[#59EC80] font-[500] tracking-wider'>
        <div>View All</div>
        <div>
          <ArrowRightIcon />
        </div>
      </div>
    </Link>
  </h2>
}

export default Heading
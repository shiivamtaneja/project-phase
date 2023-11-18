import { Link } from 'react-router-dom';

import ArrowRightIcon from '../../assets/Icons/ArrowRightIcon';

const Breadcrumbs = ({ prevLocation, title, location }) => {

  return (
    <div className="w-full md:py-5 xl:py-10 flex flex-col gap-3 pl-[5vw] md:pl-0">
      <h1 className="md:text-5xl font-bold hidden md:flex">
        {title}
      </h1>
      <p className="text-sm font-normal text-lightText capitalize flex items-center">
        <span className='cursor-pointer'> {prevLocation === "" ?
          <Link to={`/`}>Home</Link>
          : prevLocation}</span>
        <span className="px-1">
          <ArrowRightIcon />
        </span>
        <span className="capitalize font-semibold">
          {location}
        </span>
      </p>
    </div>
  )
}

export default Breadcrumbs
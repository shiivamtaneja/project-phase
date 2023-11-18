const HeadingCompany = ({ heading }) => {
  return <h2 className='flex flex-col items-center pl-[3px]'>
    <span className='font-[500] uppercase text-[#3a2f3d]/50 text-sm '>
      {heading}
    </span>
    <span className='font-[700] uppercase text-[#3a2f3d] text-2xl underline underline-offset-2 decoration-[#00F641] '>
      Recommended for you
    </span>
  </h2>
}

export default HeadingCompany
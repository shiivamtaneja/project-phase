const Insight = () => {
  return <section className="relative my-6">
    <div className="flex flex-col items-center section-margin ">
      <div className="self-start lg:absolute">
        <h3 className="flex flex-col text-3xl font-bold text-black uppercase lg:text-5xl lg:items-start">Sell Used Bikes
          <span className="italic font-normal text-[#49d46e]">With Ease</span>
        </h3>
        <div className="lg:w-3/5">
          <p className="my-4 text-xl font-semibold opacity-60 w1/2">Register with Our Marketplace and Enjoy the Smoothest Selling Ride Ever</p>
        </div>
        <div id="search-submit-btn" className="w-full mb-24 rounded-full md:w-1/4">
          <button className='w-full h-12 px-6 font-semibold tracking-wider text-white border-0 '>
            List Your Bike
          </button>
        </div>
      </div>
    </div>
    <div className="hidden lg:flex">
      <svg className="" width="100%" height="250" viewBox="0 0 1920 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className="animated-path" d="M-1 249H859.044C870.089 249 879.044 240.046 879.044 229V192.992V156.983C879.044 145.938 887.998 136.983 899.044 136.983H1409C1420.05 136.983 1429 128.029 1429 116.983V21C1429 9.95429 1437.95 1 1449 1H1920" stroke="#00F641" strokeWidth="2"></path>
        <path d="M-1 249H859.044C870.089 249 879.044 240.046 879.044 229V192.992V156.983C879.044 145.938 887.998 136.983 899.044 136.983H1409C1420.05 136.983 1429 128.029 1429 116.983V21C1429 9.95429 1437.95 1 1449 1H1920" stroke="#00f64257" strokeWidth="2"></path>
        <path className="animated-electric-icon" style={{ 'fill': '#00f642' }} d="M315.232,9.015C311.883,3.276,305.681,0,298.244,0h-91.308c-10.9,0-22.224,7.113-26.93,16.924 L83.17,218.041c-3.162,6.56-2.967,13.518,0.471,19.037c3.463,5.568,9.592,8.811,16.859,8.966l71.662,0.902l-51.877,129.675 c-1.276,3.235-3.959,10.014,0.821,16.981c2.089,3.056,5.674,4.926,9.364,4.926h0.837c6.999,0,11.217-5.308,13.241-7.868 L312.176,180.17c7.153-8.966,4.202-17.013,3.121-19.354c-1.122-2.243-5.625-9.592-17.046-9.592h-53.34l69.8-122.985 C318.37,21.752,318.573,14.729,315.232,9.015z"
          transform="translate(950, 35) scale(0.5)" />
      </svg>
    </div>
  </section>
}

export default Insight
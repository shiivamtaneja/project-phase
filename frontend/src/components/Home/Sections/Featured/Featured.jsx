import { useState } from "react";

const Featured = () => {

  const [selectedButton, setSelectedButton] = useState(0);

  const buttons = ['EV-Bikes', 'E-Scooters'];

  const handleButtonClick = (index) => {
    setSelectedButton(index);
  };

  return <section className="bg-[#0099ff] ">
    <div className="flex flex-col justify-between section-margin ">
      <div className="flex flex-col items-center lg:items-start">
        <div className="mb-6 ">
          <h2 className="text-lg font-semibold text-white uppercase opacity-75 ">Featured Bikes </h2>
          <h3 className="text-4xl font-bold text-white uppercase">Find the best Bikes</h3>
        </div>
        <div className="flex flex-col items-center w-full lg:flex-row lg:justify-around">
          <div className="mb-4 lg:mb-24">
            <img src="/img/bike.png" alt="" />
          </div>
          <div>
            <div className="flex mb-8">
              {buttons.map((buttonText, index) => (
                <button
                  key={index}
                  className={`px-8 transition duration-300 ease-in-out border-b-2 font-semibold hover:text-white hover:border-white
                 ${selectedButton === index ? 'text-white border-white' : 'text-white opacity-50 '}`}
                  onClick={() => handleButtonClick(index)}
                >
                  {buttonText}
                </button>
              ))}
            </div>
            <div className="mb-4">
              <p className="w-full mb-6 text-3xl font-semibold tracking-wider text-white">
                FAAST F2B
              </p>
              <div className="flex flex-col mb-4 md:flex-row">
                <div className="flex flex-col pr-4 ">
                  <span className="text-sm font-semibold text-white uppercase opacity-60">starting at</span>
                  <span className="text-2xl font-semibold tracking-wider text-white uppercase">₹ 99950</span>
                </div>
                <span className="border-r-2 border-white opacity-60"></span>
                <div className="flex flex-col md:px-4 ">
                  <span className="text-sm font-semibold text-white uppercase opacity-60">Range</span>
                  <span className="text-2xl font-semibold tracking-wider text-white uppercase">80-85 Kmpc</span>
                </div>
                <span className="border-r-2 border-white opacity-60"></span>
                <div className="flex flex-col md:pl-4">
                  <span className="text-sm font-semibold text-white uppercase opacity-60">Top Speed</span>
                  <span className="text-2xl font-semibold tracking-wider text-white uppercase">70 Km/Hr</span>
                </div>
              </div>
            </div>
            <div id="featured-btn" className="w-full mb-24 rounded-full md:w-1/2">
              <button className='w-full h-12 px-6 font-semibold tracking-wider text-white border-0 '>
                Know More
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
}

export default Featured
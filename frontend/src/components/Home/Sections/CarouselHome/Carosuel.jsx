// import { Link } from "react-router-dom"

const Carosuel = () => {
  return <main>
    <section id="hero" className="pb-12 lg:pb-0" >
      <div className="flex flex-col justify-center lg:justify-between lg:flex-row md:justify-start section-margin">
        <div className="flex flex-col lg:w-1/2">
          <h1 className="mb-4 text-2xl font-bold text-black uppercase lg:text-5xl md:text-3xl ">Get Your Next <br /> <span className="italic">Electric 2 Wheeler</span></h1>
          <div className="p-4 bg-[#f5f7fc] shadow-md  rounded-md">
            <span className="text-sm font-semibold ">Find Your EV</span>
            <div className="pt-4">
              <form action="">
                <div>
                  <select
                    id="make"
                    name="Make"
                    required
                    defaultValue={'DEFAULT'}
                    className='w-full h-12 px-6 mb-4 text-gray-900 border-0 rounded-full shadow-sm appearance-none'>
                    <option value="DEFAULT" disabled >Choose Brand</option>
                    <option value="Okaya">Okaya</option>
                    <option value="Ola">Ola</option>
                  </select>
                </div>
                <div>
                  <select
                    id="model"
                    name="Model"
                    required
                    defaultValue={'DEFAULT'}
                    className='w-full h-12 px-6 mb-4 text-gray-900 border-0 rounded-full shadow-sm appearance-none'>
                    <option value="DEFAULT" disabled >Choose Model</option>
                    <option value="FAAST_F2B">FAAST F2B</option>
                    <option value="FAAST_F3">FAAST F3</option>
                  </select>
                </div>
                <div id="search-submit-btn" className="rounded-full">
                  <button className='w-full h-12 px-6 font-semibold tracking-wider text-white border-0 shadow-sm'>
                    Find Your EV
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex-col items-center justify-center hidden w-full lg:flex">
          <img src="/img/bike.png" alt="" />
        </div>
      </div>
      <div className="hidden lg:block">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className=" waves"><path fill="#0099ff" fillOpacity="1" d="M0,128L60,149.3C120,171,240,213,360,202.7C480,192,600,128,720,96C840,64,960,64,1080,90.7C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
      </div>
    </section>
  </main>
}

export default Carosuel
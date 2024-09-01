import React from 'react'
import { CiMail } from 'react-icons/ci'
import Image from 'next/image'

const Banner = () => {
  return (
    <section
      className={`lg:min-h-screen bg-cover bg-no-repeat bg-center bg-white text-black overflow-hidden bg-[url('../src/assets/images/1.png')]`}
    >
      <div className="w-full mx-auto px-[15px] sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1140px] 2xl:max-w-[1170px] relative flex flex-col lg:flex-row justify-around">
        <div className="w-full lg:w-[50%] xl:pt-[297px] md:pt-20 md:pb-20 pt-28 pb-14 xl:pb-40 space-y-8">
          <h1 className="text-4xl font-[1000]">
            {' '}
            Study/Work <br />
            <span className=" inline-block text-7xl md:text-8xl  bg-no-repeat bg-bottom text-[#30BEAD]">
              Roadmaps
            </span>{' '}
            <br /> RoadMaps
          </h1>
          <div className="text-xl leading-9 font-medium text-gray-700 leading-[30px]">
            <b className="text-black">desi2abroad.com</b> is a collaborative platform for students
            and professionals from the sub-continent to join forces, exchange knowledge, and
            navigate pathways for studying and working abroad. 🇮🇳🇵🇰🇧🇩🇱🇰🇳🇵
          </div>
          <div className="w-full flex flex-col  md:flex-row mx-auto md:justify-between">
            <div className="flex-none">
              <button className="bg-[rgb(255,126,132)] my-2 text-white hover:ring hover:ring-[rgb(255,126,132)] w-72 md:w-60 hover:ring-opacity-100 hover:ring-offset-2 hover:ring-offset-transparent inline-block rounded-md py-[13px] px-6 text-base leading-6 font-medium transition-all duration-300 ease-in-out">
                Get Started Now
              </button>
            </div>
            <div className="flex-none">
              <button className="bg-black text-white my-2 hover:ring hover:ring-black hover:ring-opacity-100 w-72 md:w-60 hover:ring-offset-2 hover:ring-offset-transparent inline-block rounded-md py-[13px] px-6 text-base leading-6 font-medium transition-all duration-300 ease-in-out">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[50%] text-xl leading-9 font-medium h-full my-auto flex justify-around items-center hidden xl:block bottom-0 p-6">
          <img className="w-full " src={'/static/images/alumni.jpg'} alt="manOne" />
        </div>
      </div>
    </section>
  )
}

export default Banner

import React from 'react'
import { CiMail } from 'react-icons/ci'

const Banner = () => {
  return (
    <section
      className={`lg:min-h-screen bg-cover bg-no-repeat bg-center overflow-hidden bg-[url('../src/assets/images/1.png')]`}
    >
      <div className="w-full mx-auto px-[15px] sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1140px] 2xl:max-w-[1170px] relative flex flex-col lg:flex-row justify-around">
        <div className="w-full lg:w-[50%] xl:pt-[297px] md:pt-20 md:pb-20 pt-28 pb-14 xl:pb-40 space-y-8">
          <h1 className="text-4xl font-[1000]">
            {' '}
            Study/Work <br />
            <span
              className=" inline-block text-7xl md:text-8xl  bg-no-repeat bg-bottom text-[#30BEAD]"
              style={{ backgroundImage: 'url(../images/banner/shape.svg)' }}
            >
              Roadmaps
            </span>{' '}
            <br /> RoadMaps
          </h1>
          <div className="text-xl leading-9 font-medium text-gray-700 leading-[30px]">
            <b className="text-black">desi2abroad.com</b> is a collaborative platform for
            students and professionals from the sub-continent to join forces, exchange knowledge,
            and navigate pathways for studying and working abroad. 🇮🇳🇵🇰🇧🇩🇱🇰🇳🇵
          </div>
          <div className="bg-white md:flex rounded-md shadow-lg hover:shadow-xl items-center py-[10px] relative lg:pr-[10px] lg:pl-[38px] pl-4 pr-4">
            <div className="flex-1 flex items-center lg:mb-0 mb-2">
              <div className="flex-none">
                <span className=" ">
                  <CiMail />
                </span>
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Enter your mail"
                  className="border-none focus:ring-0"
                />
              </div>
            </div>
            <div className="flex-none">
              <button className="bg-[rgb(255,126,132)] text-white hover:ring hover:ring-[rgb(255,126,132)] hover:ring-opacity-100 hover:ring-offset-2 hover:ring-offset-transparent inline-block rounded-md py-[13px] px-6 text-base leading-6 font-medium transition-all duration-300 ease-in-out">
                Get Started Now
              </button>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[50%] text-xl leading-9 font-medium h-full my-auto flex justify-around items-center hidden xl:block bottom-0 p-6">
          <img
            className="w-full "
            src={
              'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fcb86dd61-c1ef-484d-8ad1-a9a198b73ec4%2Fc0378afa-fa6e-41be-a584-28e12002724f%2FPass_your_A1_exam_in_two_months.jpg?table=block&id=98bdc755-8561-4d4c-952d-2dac25a0a3a0&cache=v2'
            }
            alt="manOne"
          />
        </div>
      </div>
    </section>
  )
}

export default Banner

/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { topicsData } from '@/data/homeData/homeData'

const Topics = () => {
  return (
    <div className=" py-20">
      <div className="w-full mx-auto px-[15px] sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1140px] 2xl:max-w-[1170px]">
        <div className="text-center">
          <div className="mb-1 text-lg leading-7 font-semibold text-teal-500">
            Start Learning From Today
          </div>
          <div className="mb-6 text-2xl leading-9 font-bold text-[rgb(12,19,39)]">
            Popular{' '}
            <span className="inline-block bg-[url('../src/assets/images/line-shape.svg')] bg-no-repeat pb-2 text-[rgb(255_126_132)] bg-[length:100%_auto] bg-[position:center_bottom]">
              Topics
            </span>{' '}
            To Learn
          </div>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2  grid-cols-1 gap-[30px] pt-10">
          {topicsData.map((item, index) => (
            <a
              className=" rounded-[8px] transition duration-100 hover:shadow-box hover:bg-white group bg-[#FFE8E8]  text-center px-6
            py-[65px] hover:-translate-y-2"
              href="#"
              key={index}
            >
              <div className="w-[72px] h-[72px] rounded-full bg-white relative mx-auto flex flex-col justify-center items-center mb-8 group-hover:bg-[#FFE8E8]">
                <img src={item.logo} alt="" className=" w-[32px] h-[32px] object-cover " />
              </div>
              <div className="course-content">
                <h4 className=" text-2xl  mb-2 font-bold">{item.title}</h4>
                <p>{item.quantity}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Topics

/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import { IoBulbOutline } from 'react-icons/io5'
import { GiArcheryTarget } from 'react-icons/gi'
import Link from 'next/link'

const About = () => {
  return (
    <div className="about-area py-20">
      <div className="w-full mx-auto px-[15px] sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1140px] 2xl:max-w-[1170px]">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
          <div>
            <img src="/static/images/saifoo.jpg" alt="aboutOne" className=" mx-auto w-full" />
          </div>
          <div>
            <div className="mb-1 text-lg leading-7 font-semibold text-teal-500">About Edumim</div>
            <h4 className="mb-6 text-2xl leading-9 font-bold text-[rgb(12,19,39)] ">
              The Place Where You Can
              <span className="bg-[url('../src/assets/images/line-shape.svg')] bg-no-repeat pb-2 text-[rgb(255_126_132)] bg-[length:100%_auto] bg-[position:center_bottom]">
                {' '}
                Achieve
              </span>
            </h4>
            <div>
              There are many variations of passages of Lorem Ipsum available, but the majority have
              suffered.
            </div>
            <ul className=" list-item space-y-6 pt-8">
              <li className="flex">
                <div className="flex-none mr-6">
                  <div className="h-[72px] w-[72px] rounded-full">
                    <IoBulbOutline className=" w-full h-full p-2 object-cover rounded-full block text-white bg-green-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className=" text-xl mb-1 font-bold">Our Mission</h4>
                  <div>There are many variations of passages of the Lorem Ipsum available.</div>
                </div>
              </li>
              <li className="flex">
                <div className="flex-none mr-6">
                  <div className="h-[72px] w-[72px] rounded-full">
                    <GiArcheryTarget className=" w-full h-full p-2 object-cover rounded-full block text-white bg-green-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className=" text-xl mb-1 font-bold">Our Vision</h4>
                  <div>There are many variations of passages of the Lorem Ipsum available.</div>
                </div>
              </li>
            </ul>
            <div className="pt-8">
              <Link
                href="/about"
                className="bg-[rgb(255,126,132)] text-white hover:ring hover:ring-[rgb(255,126,132)] hover:ring-opacity-100 hover:ring-offset-2 hover:ring-offset-transparent inline-block rounded-md py-[13px] px-6 text-base leading-6 font-medium transition-all duration-300 ease-in-out"
              >
                Read More Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

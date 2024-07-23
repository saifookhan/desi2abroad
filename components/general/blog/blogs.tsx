/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { allBlogs } from 'contentlayer/generated'
import { SlCalender } from 'react-icons/sl'
import { FaUser } from 'react-icons/fa'




const Blogs = () => {
  console.log(allBlogs)
  return (
    <div className=" py-[65px] px-auto bg-cover bg-no-repeat bg-center">
      <div className="mx-auto w-full px-[15px] ">
        <div className="lg:flex justify-between items-center ">
          <div className="mb-3">
            <div className="mini-title text-[#30BEAD] text-xl font-bold">Team Member</div>
            <div className="column-title text-5xl font-bold">
              Our Latest <span className=" text-[#FF7E84]">Blogs</span>
            </div>
          </div>
          <div className="mb-3">
            <a
              href="#"
              className="bg-[rgb(255,126,132)] text-white hover:ring hover:ring-[rgb(255,126,132)] hover:ring-opacity-100 hover:ring-offset-2 hover:ring-offset-transparent inline-block rounded-md py-[13px] px-6 text-base leading-6 font-medium transition-all duration-300 ease-in-out"
            >
              Read All Blogs
            </a>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px] pt-7">
          {allBlogs.map((blog, index) => (
            <div
              className=" bg-white shadow-[0px_15px_30px_rgba(0,0,0,0.03)] rounded-[8px] transition duration-100 hover:shadow-box3"
              key={index}
            >
              <div className="course-thumb h-[260px] rounded-t-[8px]  relative">
                <img
                  src={blog.images}
                  alt=""
                  className=" w-full h-full object-cover rounded-t-[8px]"
                />
                <span className="bg-[#30BEAD] py-1 px-3 text-lg font-semibold rounded text-white absolute left-6 top-6">
                  Education
                </span>
              </div>
              <div className="course-content p-8">
                <div className="flex   lg:space-x-10 space-x-5 mb-5">
                  <a href={blog.filePath} className=" flex items-center space-x-2">
                    <FaUser className="text-[#30BEAD]" />
                    <span>{blog.authors}</span>
                  </a>
                  <a href={blog.filePath} className=" flex items-center space-x-2">
                    <SlCalender className="text-[#30BEAD]" />
                    <span>{blog.date}</span>
                  </a>
                </div>
                <h4 className=" text-xl mb-5 font-bold">
                  <a href={blog.filePath} className=" hover:text-[#FF7E84] transition duration-150">
                    {blog.title}
                  </a>
                </h4>
                <a
                  href={blog.filePath}
                  className=" text-black text-lg font-bold hover:underline transition duration-150"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blogs

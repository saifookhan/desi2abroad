'use client'

import React from 'react'
import { ConfigProvider } from 'antd'
import theme from '../css/themeConfig'

const HomePage = () => (
  <ConfigProvider theme={theme}>
    <div className="min-h-auto relative min-h-[192px] border-b border-b-[#1e293c] sm:min-h-[281px] transition-all">
      {' '}
      <div
        className="container px-5 py-6 pb-14 text-left transition-opacity duration-300 sm:px-0 sm:py-20 sm:text-center"
        id="hero-text"
      >
        {' '}
        <p className="-mt-4 sm:-mt-10 mb-7">
          {' '}
          <a
            className="rounded-md border border-dashed border-purple-700 px-3 py-1.5 text-purple-400 transition-colors hover:border-gray-700 hover:text-white"
            href="https://saifookhan.com/whatsapp-study"
            target="_blank"
          >
            <span className="relative -top-[0.5px] mr-1 text-xs font-semibold uppercase text-white">
              New
            </span>{' '}
            <span className="hidden sm:inline">
              Join our Whatsapp group. <span className="font-semibold">Click here</span>
            </span>
            <span className="inline sm:hidden">Announcing roadmaps for teams!</span>
          </a>{' '}
        </p>{' '}
        <h1 className="mb-2 bg-gradient-to-b from-amber-50 to-purple-500 bg-clip-text text-2xl font-bold text-transparent sm:mb-4 sm:text-5xl">
          Study/Work Abroad Roadmaps
        </h1>{' '}
        <p className="hidden px-4 text-lg text-gray-400 sm:block">
          {' '}
          <span className="font-medium text-gray-400">desi2abroad.com</span> is a collaborative
          platform for students and professionals from the sub-continent to join forces, exchange
          knowledge, and navigate pathways for studying and working abroad.
        </p>{' '}
        <p className="text-md block px-0 text-gray-400 sm:hidden">
          Community created roadmaps, guides and articles to help developers grow in their career.
        </p>{' '}
      </div>{' '}
    </div>
    <div className="relative border-b border-b-[#1e293c] py-10 sm:py-14">
      {' '}
      <div className="container">
        {' '}
        <h2 className="text-md font-regular absolute -top-[17px] flex rounded-lg border border-[#1e293c] bg-slate-900 px-3 py-1 text-slate-400 sm:left-1/2 sm:-translate-x-1/2">
          {' '}
          Current Roadmaps
        </h2>{' '}
        <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
          {' '}
          <li>
            {' '}
            <a
              className="group border border-slate-800 bg-slate-900 p-2.5 sm:p-3.5 block no-underline rounded-lg relative text-slate-400 font-regular text-md hover:border-slate-600 hover:text-slate-100 overflow-hidden"
              href="/germany"
            >
              {' '}
              <span className="relative z-20 text-slate-400"> Germany (Masters) </span>{' '}
              <span
                data-progress=""
                className="absolute bottom-0 left-0 top-0 z-10 w-0 bg-[#172a3a] transition-[width] duration-300"
              ></span>{' '}
            </a>{' '}
          </li>
          <li>
            {' '}
            <a
              className="group border border-slate-800 bg-slate-900 p-2.5 sm:p-3.5 block no-underline rounded-lg relative text-slate-400 font-regular text-md hover:border-slate-600 hover:text-slate-100 overflow-hidden"
              href="/germany"
            >
              {' '}
              <span className="relative z-20 text-slate-400"> Germany (Bachelors) </span>{' '}
              <span
                data-progress=""
                className="absolute bottom-0 left-0 top-0 z-10 w-0 bg-[#172a3a] transition-[width] duration-300"
              ></span>{' '}
            </a>{' '}
          </li>
          <li>
            {' '}
            <a
              className="group border border-slate-800 bg-slate-900 p-2.5 sm:p-3.5 block no-underline rounded-lg relative text-slate-400 font-regular text-md hover:border-slate-600 hover:text-slate-100 overflow-hidden"
              href="/usa"
            >
              {' '}
              <span className="relative z-20 text-slate-400"> United States of Amerca </span>{' '}
              <span
                data-progress=""
                className="absolute bottom-0 left-0 top-0 z-10 w-0 bg-[#172a3a] transition-[width] duration-300"
              ></span>{' '}
            </a>{' '}
          </li>
          <li>
            {' '}
            <a
              className="group border border-slate-800 bg-slate-900 p-2.5 sm:p-3.5 block no-underline rounded-lg relative text-slate-400 font-regular text-md hover:border-slate-600 hover:text-slate-100 overflow-hidden"
              href="/italy"
            >
              {' '}
              <span className="relative z-20 text-slate-400"> Italy </span>{' '}
              <span className="absolute bottom-1.5 right-2 flex items-center rounded-br rounded-tl text-xs font-medium text-purple-300">
                {' '}
                <span className="mr-1.5 flex h-2 w-2">
                  {' '}
                  <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-purple-400 opacity-75"></span>{' '}
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-purple-500"></span>{' '}
                </span>
                New
              </span>{' '}
              <span
                data-progress=""
                className="absolute bottom-0 left-0 top-0 z-10 w-0 bg-[#172a3a] transition-[width] duration-300"
              ></span>{' '}
            </a>{' '}
          </li>{' '}
        </ul>{' '}
      </div>{' '}
    </div>
  </ConfigProvider>
)

export default HomePage

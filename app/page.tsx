'use client'

import React, { useEffect } from 'react'
import { ConfigProvider, message } from 'antd'
import theme from '../css/themeConfig'

import SectionContainer, { backgroundStyles } from 'components/SectionContainer'
import BubbleList from '@/components/general/BubbleList/BubbleList'
import { HomepageCateogries } from 'src/types/types'
import ArticlesList from '@/components/general/blog/ArticlesList'
import { getToken } from 'firebase/messaging'
import Topics from '@/components/topic'
import About from '@/components/about'
import Banner from '@/components/banner'

const categories: HomepageCateogries[] = [
  {
    chapter: 'Germany 🇩🇪',
    picture: '/static/images/countries/germany.png',
    subChapters: [
      {
        title: 'Study Flow: (Masters)',
        path: '/germany',
        status: 'new',
      },
      {
        title: 'Germany (Bachelors) [Coming soon]',
        path: '/germany-bachelors',
        disabled: true,
      },
      {
        title: 'Work: Germany Tech Jobs 🎥',
        path: '/germany/it-jobs',
      },
    ],
  },
  {
    chapter: 'Italy 🇮🇹',
    picture: '/static/images/countries/italy.png',
    subChapters: [
      {
        title: 'Italy 🎥',
        path: '/italy',
      },
    ],
  },
  {
    chapter: 'America 🇺🇸',
    picture: '/static/images/countries/usa.png',
    subChapters: [
      {
        title: 'America (Study+Work) 🎥',
        path: '/america',
      },
    ],
  },
  {
    chapter: 'Finland 🇫🇮',
    picture: '/static/images/countries/finland.png',
    subChapters: [
      {
        title: 'Finland 🎥',
        path: '/finland',
      },
    ],
  },
  {
    chapter: 'Austria 🇦🇹',
    picture: '/static/images/countries/austria.png',
    subChapters: [
      {
        title: 'Austria 🎥',
        path: '/austria',
      },
    ],
  },
]

function HomePage() {
  return (
    <ConfigProvider theme={theme}>
      <SectionContainer backgroundStyle={'lightGrey'}>
        <div className="min-h-auto relative min-h-[192px] border-b border-b-[#1e293c] sm:min-h-[281px] transition-all">
          {' '}
          <div
            className="container md:px-5 md:my-6 pb-14 text-left transition-opacity duration-300 sm:text-center"
            id="hero-text"
          >
            {' '}
            <p className="pt-8 sm:-mt-10 mb-7">
              {' '}
              <a
                className="rounded-md border border-dashed border-purple-700 px-3 py-1.5 text-purple-400 transition-colors hover:border-gray-700 hover:text-red-500"
                href="/groups"
              >
                <span className="relative -top-[0.5px] mr-1 text-xs font-semibold uppercase text-red-500	">
                  New
                </span>{' '}
                <span className="hidden sm:inline">
                  Join our Whatsapp group. <span className="font-semibold">Click here</span>
                </span>
                <span className="inline sm:hidden">Join our work/study Whatsapp group!</span>
              </a>{' '}
            </p>{' '}
            <h1 className="mb-2 bg-gradient-to-b from-purple-500 to-purple-950 bg-clip-text text-2xl font-bold text-transparent sm:mb-4 sm:text-5xl">
              Study/Work Abroad Roadmaps
            </h1>{' '}
            <p className="hidden px-4 text-lg text-gray-800 sm:block">
              {' '}
              <span className="font-medium text-gray-800">desi2abroad.com</span> is a collaborative
              platform for students and professionals from the sub-continent to join forces,
              exchange knowledge, and navigate pathways for studying and working abroad. 🇮🇳🇵🇰🇧🇩🇱🇰🇳🇵
            </p>{' '}
            <p className="text-md block px-0 text-gray-400 sm:hidden">
              Step-by-step guides, communities, articles for studying and working abroad. 🇮🇳🇵🇰🇧🇩🇱🇰🇳🇵
            </p>{' '}
          </div>{' '}
        </div>

        {categories.map((category) => {
          return (
            <div key={category.chapter}>
              {' '}
              <div className="relative border-b border-b-[#1e293c] py-10 sm:py-14 xs:pb-20">
                {' '}
                <div className="container">
                  {' '}
                  <h2 className="text-md font-regular absolute -top-[17px] flex rounded-lg border border-[#1e293c] bg-slate-200 px-3 py-1 text-slate-800 sm:left-1/2 sm:-translate-x-1/2">
                    {' '}
                    {category.chapter}
                  </h2>{' '}
                  {category.subChapters && <BubbleList category={category.subChapters} />}
                  {category.subChaptersTwo && (
                    <BubbleList category={category.subChaptersTwo} secondCateogryFlag />
                  )}
                </div>{' '}
              </div>
            </div>
          )
        })}
      </SectionContainer>
      <div className="m-auto">
        <Banner></Banner>
        <About></About>
        <Topics></Topics>
      </div>
      <SectionContainer backgroundStyle={'mediumGrey'}>
        <ArticlesList articleType={'all'} />
      </SectionContainer>
    </ConfigProvider>
  )
}

export default HomePage

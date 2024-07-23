'use client'

import React, { useEffect } from 'react'
import { ConfigProvider, message } from 'antd'
import theme from '../../css/themeConfig'

import SectionContainer, { backgroundStyles } from 'components/SectionContainer'
import BubbleList from '@/components/general/BubbleList/BubbleList'
import { HomepageCateogries } from 'src/types/types'
import ArticlesList from '@/components/general/blog/ArticlesList'
import { getToken } from 'firebase/messaging'
import Topics from '@/components/topic'
import About from '@/components/about'
import Banner from '@/components/banner'
import Blogs from '@/components/general/blog/blogs'
import Comments from '@/components/Comments'



function HomePage() {
 
  return (
    <ConfigProvider theme={theme}>
    
      <div className="m-auto">
        <Banner></Banner>
        <About></About>
        <Topics></Topics>
        <Blogs></Blogs>
        <Comments slug='this is the first'></Comments>
      </div>
      <SectionContainer backgroundStyle={'mediumGrey'}>
        <ArticlesList articleType={'all'} />
      </SectionContainer>
    </ConfigProvider>
  )
}

export default HomePage

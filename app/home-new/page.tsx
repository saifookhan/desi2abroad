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



function HomePage() {
 
  return (
    <ConfigProvider theme={theme}>
    
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

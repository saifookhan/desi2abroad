'use client'
import { ConfigProvider, message } from 'antd'
import theme from '../../css/themeConfig'
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
        <div className='my-20'>
          <Comments slug="this is the first"></Comments>
        </div>
      </div>
     
    </ConfigProvider>
  )
}

export default HomePage

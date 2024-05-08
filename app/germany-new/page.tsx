import VideoPlayerCard from '@/components/general/Video/VideoPlayerCard'
import ArticlesList from '@/components/general/blog/ArticlesList'
import GermanyNewPage from '@/components/general/page/germany-new'
import Divider from 'antd/es/divider'
import { genPageMetadata } from 'app/seo'
import SectionContainer from 'components/SectionContainer'
import DisqusComments from 'components/general/Disqus/disqus'
import dynamic from 'next/dynamic'

//TODO:: fill meta
export const metadata = genPageMetadata({ title: 'Blog' })

export default function BlogPage() {
  return (
    <>
      <SectionContainer backgroundStyle={'lightGrey'}>
        <GermanyNewPage />
        <div className="mb-8 text-black">By Zain</div>
      </SectionContainer>
    </>
  )
}

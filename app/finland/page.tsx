'use client'

import SectionContainer from 'components/SectionContainer'
import PageHeader from '@/components/general/page/PageHeader'
import VideoPlayerCard from '@/components/general/Video/VideoPlayerCard'
import { signInWithGoogle } from '@/components/germany/google'

//TODO:: fill meta
// export const metadata = genPageMetadata({ title: 'Blog' })

const videosList = [
  {
    name: 'What is Rolling Intakes? Scam?',
    embedId: 'cw_NLA_DXXM',
  },
]
if(process.env.test){
  console.log(process.env.test || 'faflse')
}

export default function BlogPage() {
  return (
    <>
      <PageHeader
        headerTitle="Finland: Study Situation"
        headerDescription="Watch category-wise study + job prospects"
        headerColor="white"
      />
      <br />
      <button className="border-4 text-white h-[10%]" onClick={signInWithGoogle}>
        click
      </button>
      <SectionContainer backgroundStyle="lightGrey">
        <div className="pt-8 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-4">
            {videosList.map((vid) => {
              return (
                <div
                  className="bg-slate-200	rounded-md flex items-center justify-center"
                  key={vid.name}
                >
                  <VideoPlayerCard embedId={vid.embedId} name={vid.name} />
                </div>
              )
            })}
          </div>
        </div>
      </SectionContainer>
    </>
  )
}

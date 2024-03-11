import SectionContainer from 'components/SectionContainer'
import PageHeader from '@/components/general/page/PageHeader'
import VideoPlayerCard from '@/components/general/Video/VideoPlayerCard'
import dynamic from 'next/dynamic'

//TODO:: fill meta
// export const metadata = genPageMetadata({ title: 'Blog' })

const videosList = [
  {
    name: 'Live Q&A: Study + Work in Italy',
    embedId: 'vga2LondNRQ',
  },
  {
    name: 'Student Problems in Italy',
    embedId: '1ZcjSlzQEDs',
  },
]

export default function BlogPage() {
  const Flow = dynamic(() => import('components/germany/Roadmap'), {
    ssr: false,
  })

  return (
    <>
      <PageHeader
        headerTitle="Italy: Study Situation"
        headerDescription="Watch category-wise study + job prospects"
        headerColor="white"
      />
      <br />
      <SectionContainer backgroundStyle={'lightGrey'}>
        {/* //TODO:: Zoha */}
        <Flow />
        <div className="mb-8 text-black">
          Credits: Hamza, Iraj A., Mariah M. Saifoo Khan, Sidra N., Yumna I., Zubair K.
        </div>
      </SectionContainer>
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

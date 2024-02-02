import SectionContainer from 'components/SectionContainer'
import PageHeader from '@/components/general/page/PageHeader'
import VideoPlayerCard from '@/components/general/Video/VideoPlayerCard'

//TODO:: fill meta
// export const metadata = genPageMetadata({ title: 'Blog' })

const videosList = [
  {
    name: 'Application Steps: Vienna University',
    embedId: 'vncun_wUwf4',
  },
]

export default function BlogPage() {
  return (
    <>
      <PageHeader
        headerTitle="Austria: Study Route"
        headerDescription="Watch category-wise study + job prospects"
        headerColor="white"
      />
      <br />
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

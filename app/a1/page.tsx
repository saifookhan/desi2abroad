import NotionPage from '../../components/general/Notion/NotionPage'
import { getPageData } from '../../src/lib/notion'
import SectionContainer from '@/components/SectionContainer'

export default async function BlogPage() {
  const pageId = '0b1bda311ec74f269ed37b2b0fdbed6d'
  const recordMap = await getPageData(pageId)

  return (
    <SectionContainer backgroundStyle="lightGrey">
      <div className="pt-8 pb-8">
        <NotionPage recordMap={recordMap} />
      </div>
    </SectionContainer>
  )
}

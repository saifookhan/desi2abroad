import PageHeader from '@/components/general/page/PageHeader'
import SectionContainer from '@/components/SectionContainer'
import BubbleListCollapse from '@/components/general/BubbleList/Collapse'
import CalcCollapse from '@/components/germany/calculator/calcCollapse'
import { getGermanyDataFromExcelSheet } from '@/data/fetch/germany'

const App: React.FC = async () => {
  const germanyData = await getGermanyDataFromExcelSheet()
  const stringifiedData = JSON.stringify(germanyData)

  return (
    <>
      <div className="bg-white">
        <PageHeader
          headerTitle="Germany Study Steps"
          headerDescription="Join our support communities"
          headerColor="white"
        />
        <br />
        <SectionContainer backgroundStyle="white">
          <div className="flex flex-col-reverse py-6 lg:flex-row ">
            <BubbleListCollapse stringifiedData={stringifiedData}></BubbleListCollapse>
            <CalcCollapse></CalcCollapse>
          </div>
        </SectionContainer>
      </div>
    </>
  )
}

export default App

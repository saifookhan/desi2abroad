import React from 'react'
import PageHeader from '@/components/general/page/PageHeader'
import SectionContainer from '@/components/SectionContainer'
import CollapseCover from '@/components/germany/collapseCover'
import {
  GOOGLE_SHEET_ID,
  getDataFromFirebaseDatabase,
  getGermanyDataFromExcelSheet,
} from '@/data/fetch/germany'

const App: React.FC = async () => {
  const germanyData = await getGermanyDataFromExcelSheet()
  const stringifiedData = JSON.stringify(germanyData)

  const dataFromDatabase = await getDataFromFirebaseDatabase().then((val) => {
    return val[GOOGLE_SHEET_ID]
  })

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
          <CollapseCover
            studyPrograms={dataFromDatabase.ProgramsList}
            resources={dataFromDatabase.Resources}
            stringifiedData={stringifiedData}
          ></CollapseCover>
        </SectionContainer>
      </div>
    </>
  )
}

export default App

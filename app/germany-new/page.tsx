
import { Collapse, Typography } from 'antd'
import axios from 'axios'
import * as XLSX from 'xlsx'
import PageHeader from '@/components/general/page/PageHeader'
import SectionContainer from '@/components/SectionContainer'
import { ECTS, Calc } from '@/components/calculator'
import CustomCollapse from '@/components/collapse'
import CalcCollapse from '@/components/calcCollapse'


const { Panel } = Collapse
const { Text } = Typography

const App: React.FC = () => {





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
            <CustomCollapse></CustomCollapse>
            <CalcCollapse></CalcCollapse>
          </div>
        </SectionContainer>
      </div>
    </>
  )
}

export default App

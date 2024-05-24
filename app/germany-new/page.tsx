'use client'
import React, { useEffect, useState } from 'react'
import { Collapse } from 'antd'
import axios from 'axios'
import * as XLSX from 'xlsx'
import PageHeader from '@/components/general/page/PageHeader'
import SectionContainer from '@/components/SectionContainer'
import { ECTS,Calc } from '@/components/calculator'

const { Panel } = Collapse

const App: React.FC = () => {
  const [data, setData] = useState<any[]>([])
  const [fileData, setFileData] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  // Link to your Google Sheets file
  const GOOGLE_SHEET_URL =
    'https://docs.google.com/spreadsheets/d/1hBI5WUxiwG06kncYRV7qhQcO52GqX5qYfup_zfBtN6Q/edit#gid=0'

  const fetchDataFromGoogleSheet = async () => {
    try {
      const response = await axios.get(GOOGLE_SHEET_URL, {
        responseType: 'arraybuffer',
      })
      const dataBuffer = response.data
      const workbook = XLSX.read(dataBuffer, { type: 'buffer' })
      const sheetName = workbook.SheetNames[0]
      const sheet = workbook.Sheets[sheetName]
      const parsedData = XLSX.utils.sheet_to_json(sheet)

      // Group topics by name
      const groupedTopics: { [key: string]: any[] } = {}
      parsedData.forEach((item) => {
        if (item.B) {
          if (!groupedTopics[item.B]) {
            groupedTopics[item.B] = []
          }
          groupedTopics[item.B].push(item)
        }
      })

      // Convert object of arrays into an array of arrays
      const groupedData = Object.values(groupedTopics)
      setFileData(groupedData)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching data from Google Sheets:', error)
      setLoading(false)
    }
  }

  const childStyle = {
    background: '#fff',
    border: 'none',
  }

  useEffect(() => {
    fetchDataFromGoogleSheet()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <>
   <div style={{background:'white'}}>
   <PageHeader
        headerTitle="Germany Study Steps"
        headerDescription="Join our support communities"
        headerColor="white"
      />
      <br />
      <SectionContainer backgroundStyle="white">
        <div className="flex flex-col-reverse py-6 lg:flex-row">
          <Collapse className='w-full mt-0 py-0 lg:w-[65%]'  >
            {fileData.map((topicGroup: any[], index) => {
              console.log(topicGroup)
              if (index != 0) {
                return (
                  <Panel className='py-2 w-full  ' header={topicGroup[0].B} key={index} style={childStyle}>
                    <Collapse >
                      {topicGroup.map((topic, subIndex) => (
                        <Panel className='py-2 w-full  ' header={topic.C} key={subIndex} style={childStyle}>
                          <p>
                            <strong>Answer:</strong> {topic.D}
                          </p>
                          <div>
                            <strong>Answer HTML:</strong>
                            <div dangerouslySetInnerHTML={{ __html: topic.E }} />
                          </div>
                          <p>
                            <strong>Topic:</strong> {topic.B}
                          </p>
                          <p>
                            <strong>Video Link:</strong>{' '}
                            <iframe style={{ width: '560px', height: '400px' }} src={topic.E}>
                              {topic.E}
                            </iframe>
                          </p>
                        </Panel>
                      ))}
                    </Collapse>
                  </Panel>
                )
              }
            })}
          </Collapse>
          <div className='calc_container  h-auto w-full lg:w-[35%]'>
            <Collapse defaultActiveKey={['00']} >
            <Panel  header="GPA CALCULATOR" key='00'>
            <div className=' min-h-[100vh] lg:min-h-0'><Calc/></div>
            </Panel>
            <Panel  header="ECTS CALCULATOR" key='01'>
            <div className=' min-h-[100vh] lg:min-h-0'><ECTS/></div>
            </Panel>
          
            </Collapse>
     
      
          </div>
        </div>
      </SectionContainer>
   </div>
    </>
  )
}

export default App

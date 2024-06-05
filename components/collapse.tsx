<<<<<<< HEAD

'use client'
import { Collapse, Typography } from 'antd'
=======
'use client'
import React, { useState, useEffect } from 'react'
import { Collapse } from 'antd'
>>>>>>> b6f96e8bd648b7e826daadcf778033be7338a681
import * as XLSX from 'xlsx'
import axios from 'axios'
import Data from './collapseServer'

const { Panel } = Collapse

<<<<<<< HEAD



const CustomCollapse =async ({newData}) => {
  const data=JSON.parse(newData)


  

  return (
    <>
    <Collapse className="w-full mt-0 py-0 lg:w-[60%]">
    {data.map((topicGroup: any[], index) => {
      if (index != 0) {
        return (
          <Panel
            className="py-2 w-full  "
            header={topicGroup[0].B}
            key={index}
          >
            <Collapse  size="small">
              {topicGroup.map((topic, subIndex) => (
                <Panel
                  className="py-2 w-full  "
                  header={topic.C}
                  key={subIndex}
                >
                  {/* <p>
                    <strong>Answer:</strong> {topic.D}
                  </p> */}
                  <div>
                    <div dangerouslySetInnerHTML={{ __html: topic.E }} />
                  </div>
                  {/* <p>
                    <strong>Topic:</strong> {topic.B}
                  </p> */}
                  <br />
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
=======
const CustomCollapse: React.FC = () => {
  const [fileData, setFileData] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  // Link to Google Sheets file
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

  // consistently updating
  useEffect(() => {
    fetchDataFromGoogleSheet()
  }, [])

  return (
    <>
      <Collapse className="w-full mt-0 py-0 lg:w-[60%]">
        {fileData.map((topicGroup: any[], index) => {
          console.log(topicGroup)
          if (index != 0) {
            return (
              <Panel className="py-2 w-full  " header={topicGroup[0].B} key={index}>
                <Collapse size="small">
                  {topicGroup.map((topic, subIndex) => (
                    <Panel className="py-2 w-full  " header={topic.C} key={subIndex}>
                      <div>
                        <div dangerouslySetInnerHTML={{ __html: topic.E }} />
                      </div>
                      <br />
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
>>>>>>> b6f96e8bd648b7e826daadcf778033be7338a681
    </>
  )
}

export default CustomCollapse

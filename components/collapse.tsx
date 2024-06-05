
'use client'
import { Collapse, Typography } from 'antd'
import * as XLSX from 'xlsx'
import axios from 'axios'



const { Panel } = Collapse
const { Text } = Typography




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
    </>
  )
}



export default CustomCollapse
'use client'
import { Collapse, Typography } from 'antd'

const { Panel } = Collapse
const { Text } = Typography

const BubbleListCollapse = ({ stringifiedData }) => {
  const data = JSON.parse(stringifiedData)

  return (
    <>
      <Collapse className="w-full mt-0 py-0 lg:w-[60%]">
        {data.map((topicGroup, index) => {
          if (index != 0) {
            return (
              <Panel className=" w-full  " header={topicGroup[0].B} key={index}>
                <Collapse size="small">
                  {topicGroup.map((topic, subIndex) => (
                    <Panel className=" w-full  " header={topic.C} key={subIndex}>
                      <div>
                        <div dangerouslySetInnerHTML={{ __html: topic.E }} />
                      </div>

                      <br />
                      <p>
                        <strong>Video Link:</strong>{' '}
                        <iframe
                          style={{ width: '560px', height: '400px' }}
                          src={topic.E}
                          title="video tutorial"
                        >
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

export default BubbleListCollapse

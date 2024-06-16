'use client'
import { Collapse } from 'antd'
const { Panel } = Collapse

const BubbleListCollapseNested = ({ studyPrograms }) => {
  studyPrograms = [] //Object.keys(studyPrograms).map((key) => studyPrograms[key])

  return (
    <>
      <Collapse className="w-full mt-0 py-0" defaultActiveKey={['1']}>
        <Panel className={`w-full`} header={'Expand the list'} key={'1'}>
          <Collapse size="small">
            {studyPrograms.map((row) => {
              return (
                <Panel header={row.Question} key={row.Question}>
                  <div dangerouslySetInnerHTML={{ __html: row.AnswersHTML }} />
                </Panel>
              )
            })}
          </Collapse>
        </Panel>
      </Collapse>
    </>
  )
}

export default BubbleListCollapseNested

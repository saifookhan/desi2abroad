'use client'
import { Collapse, List } from 'antd'

const { Panel } = Collapse

const BubbleListCollapseFlat = ({ data }) => {
  data = data.filter((x) => x)

  return (
    <>
      <Collapse className="w-full mt-0 py-0" >
        <Panel header="Resources By Group Members" key="1">
          <List
            size="small"
            bordered
            dataSource={data}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            renderItem={(item: any) => (
              <List.Item>
                {item.ResourceName}:{' '}
                <a className="text-blue" target="_blank" href={item.resourceLink}>
                  Click here to open
                </a>
              </List.Item>
            )}
          />
        </Panel>
      </Collapse>
    </>
  )
}

export default BubbleListCollapseFlat

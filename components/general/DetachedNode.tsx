import React, { memo } from 'react'
import { Handle, Position } from 'reactflow'
import { Collapse } from 'antd'
import { RightOutlined } from '@ant-design/icons'
import store from 'src/store'
import { CollapsableStudyNode, WrapperCollapsableStudyNode } from 'src/types/types'
import { orange, teal, yellow } from 'tailwindcss/colors'

function DetachedNode(props: WrapperCollapsableStudyNode) {
  const { currentExpanded, setCurrentExpanded } = store()

  const onChange = (key: string | string[]) => {
    if (key.length > 0) {
      setCurrentExpanded(key[0])
    } else {
      setCurrentExpanded(undefined)
    }
  }

  const newData = [
    {
      key: props.id,
      label: props.data.label,
      description: props.data.descriptionHTML,
      children: props.data.descriptionHTML,
    },
  ]

  return (
    <div className="w-72 shadow-md rounded-md bg-white border-2 border-stone-400">
      {newData[0].description ? (
        <Collapse
          items={newData}
          style={{
            fontSize: '16px',
            textAlign: props.data.style?.alignContent ? 'center' : 'left',
            backgroundColor: props.data.style?.backgroundColor,
          }}
          className="text-lg"
          onChange={onChange}
          expandIcon={({ isActive }) =>
            newData[0].description && <RightOutlined rotate={isActive ? 90 : 0} />
          }
          activeKey={props.id === currentExpanded ? currentExpanded : []}
        />
      ) : (
        <div
          className="text-black"
          style={{
            fontSize: '17px',
            textAlign: props.data.style?.alignContent ? 'center' : 'left',
            backgroundColor: props.data.style?.backgroundColor,
            padding: '12px 16px',
          }}
        >
          {newData[0].label}
        </div>
      )}
    </div>
  )
}

export default memo(DetachedNode)

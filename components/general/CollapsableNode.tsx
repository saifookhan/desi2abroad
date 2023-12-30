import React, { memo } from 'react'
import { Handle, Position } from 'reactflow'
import { Collapse } from 'antd'
import { RightOutlined } from '@ant-design/icons'
import store from 'src/store'

type CollapsableNode = {
  data: { label: string }
  targetPosition: 'top' | 'right' | 'bottom' | 'left'
}

function CollapsableNode(props) {
  const { currentExpanded, setCurrentExpanded } = store.getState()

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
      <Handle
        type={props.targetPosition === 'top' ? 'target' : 'source'}
        id="a"
        position={Position.Top}
        className=" !bg-teal-500"
      />
      <Handle
        type={props.targetPosition === 'right' ? 'target' : 'source'}
        id="b"
        position={Position.Right}
        className=" !bg-teal-500"
      />
      <Handle
        type={props.targetPosition === 'bottom' ? 'target' : 'source'}
        id="c"
        position={Position.Bottom}
        className=" !bg-teal-500"
      />
      <Handle
        type={props.targetPosition === 'left' ? 'target' : 'source'}
        id="d"
        position={Position.Left}
        className=" !bg-teal-500"
      />
      <Collapse
        items={newData}
        onChange={onChange}
        expandIcon={({ isActive }) =>
          newData[0].description && <RightOutlined rotate={isActive ? 90 : 0} />
        }
        activeKey={props.id === currentExpanded && currentExpanded}
      />
    </div>
  )
}

export default memo(CollapsableNode)

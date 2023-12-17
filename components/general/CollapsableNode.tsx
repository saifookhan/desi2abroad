import React, { memo } from 'react'
import { Handle, Position } from 'reactflow'
import type { CollapseProps } from 'antd'
import { Collapse } from 'antd'

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`
type CollapsableNode = {
  data: { job: string }
  targetPosition: 'top' | 'right' | 'bottom' | 'left'
}

function CollapsableNode(props) {
  const onChange = (key: string | string[]) => {
    console.log(key)
  }

  const newData = [
    {
      key: '1',
      label: props.data.job,
      children: <p>{text}</p>,
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
      <Collapse items={newData} onChange={onChange} />
    </div>
  )
}

export default memo(CollapsableNode)

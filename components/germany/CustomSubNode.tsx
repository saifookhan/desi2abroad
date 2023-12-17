import React, { memo } from 'react'
import { Handle, Position } from 'reactflow'
import type { CollapseProps } from 'antd'
import { Collapse } from 'antd'

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`

function CustomSubNode({ data }) {
  const onChange = (key: string | string[]) => {
    console.log(key)
  }

  const newData = [
    {
      key: '1',
      label: data.label,
      children: <p>{text}</p>,
    },
  ]

  return (
    <div className="w-72 shadow-md rounded-md bg-white border-2 border-stone-400">
      <Handle type="source" id="a" position={Position.Top} className=" !bg-teal-500" />
      <Handle type="target" id="b" position={Position.Right} className=" !bg-teal-500" />
      <Handle type="source" id="c" position={Position.Bottom} className=" !bg-teal-500" />
      <Handle type="target" id="d" position={Position.Left} className=" !bg-teal-500" />
      <Collapse items={newData} onChange={onChange} />
    </div>
  )
}

export default memo(CustomSubNode)

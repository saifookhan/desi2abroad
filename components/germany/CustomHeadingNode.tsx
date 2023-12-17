import React, { memo, useState } from 'react'
import { Handle, Position } from 'reactflow'
import { Collapse } from 'antd'

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`
function CustomHeadingNode({ data }) {
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
    <div className=" w-64 shadow-md rounded-md bg-white border-2 border-stone-400">
      {/* <div className="flex">
        <div className="ml-2 w-40">
          <div className="text-gray-500 text-xs">{data.label}</div>
        </div>
      </div> */}
      <Handle type="target" id="a" position={Position.Top} className="!bg-teal-500" />
      <Handle type="source" id="b" position={Position.Right} className=" !bg-teal-500" />
      <Handle type="source" id="c" position={Position.Bottom} className=" !bg-teal-500" />
      <Handle type="source" id="d" position={Position.Left} className=" !bg-teal-500" />
      <Collapse bordered={false} items={newData} onChange={onChange} />
    </div>
  )
}

export default memo(CustomHeadingNode)

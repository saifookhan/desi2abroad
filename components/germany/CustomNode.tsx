import React, { memo } from 'react'
import { Handle, Position } from 'reactflow'

function CustomNode({ data }) {
  return (
    <div className="px-4 py-2 shadow-md rounded-md bg-white border-2 border-stone-400">
      <div className="flex">
        <div className="rounded-full w-12 h-12 flex justify-center items-center bg-gray-100">
          {data.emoji}
          Saif
        </div>
        <div className="ml-2">
          <div className="text-lg font-bold text-blue-900">{data.name}</div>
          <div className="text-gray-500">{data.job}</div>
        </div>
      </div>
      <Handle type="source" id="a" position={Position.Top} className="w-16 !bg-teal-500" />
      <Handle type="source" id="b" position={Position.Right} className="w-16 !bg-teal-500" />
      <Handle type="source" id="c" position={Position.Bottom} className="w-16 !bg-teal-500" />
      <Handle type="target" id="d" position={Position.Left} className="w-16 !bg-teal-500" />
    </div>
  )
}

export default memo(CustomNode)

'use client'

import React, { useCallback } from 'react'
import ReactFlow, { useNodesState, useEdgesState, addEdge, Controls } from 'reactflow'

import 'reactflow/dist/base.css'
// import 'reactflow/dist/style.css'

import CollapsableNode from '../general/CollapsableNode'
import useScreenSize from 'src/utils/useScreenSize'
import { nodesMapper } from 'src/utils/nodesMapper'
import { germanyNodes, germanyEdges } from './germanyNodes'

const nodeTypes = {
  collapsableNode: CollapsableNode,
}

const Flow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(germanyNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(germanyEdges)

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [])

  const screenSize = useScreenSize()
  if (screenSize.mobileView === undefined) {
    return null
  }

  //TODO:: fix the server vs client size issue
  //TODO:: Hide reactflow stamp
  const displaySize = screenSize.mobileView
    ? {
        minViewHeight: 500,
      }
    : {
        minViewHeight: 1200,
      }
  nodesMapper(germanyNodes)

  return (
    <div style={{ height: displaySize.minViewHeight }}>
      <ReactFlow
        nodes={nodesMapper(germanyNodes)}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        snapToGrid
        className="bg-grey-100"
        nodesDraggable={false}
        // defaultViewport={zoom: }
        minZoom={0.35}
        translateExtent={[
          [-800, -300],
          [1200, 1800],
        ]}
      >
        <Controls />
      </ReactFlow>
    </div>
  )
}

export default Flow

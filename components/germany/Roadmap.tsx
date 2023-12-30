'use client'

import React, { useCallback, useEffect, useState } from 'react'
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  Controls,
  ReactFlowProvider,
} from 'reactflow'

import 'reactflow/dist/base.css'
// import 'reactflow/dist/style.css'

import CollapsableNode from '../general/CollapsableNode'
import useScreenSize from 'src/utils/useScreenSize'
import { nodesMapper } from 'src/utils/nodesMapper'
import { germanyNodes, germanyEdges } from './germanyNodes'
import store from 'src/store'

const nodeTypes = {
  collapsableNode: CollapsableNode,
}

const Flow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(germanyNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(germanyEdges)

  const [myNodes, setMyNodes] = useState(nodesMapper(germanyNodes))

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [])
  const { currentExpanded } = store()

  useEffect(() => {
    const zIndex = myNodes?.map((node) => {
      const xNode = node
      if (xNode.id === currentExpanded) {
        xNode.zIndex = 1
      } else {
        xNode.zIndex = 0
      }
      return { ...xNode }
    })
    setMyNodes(zIndex)
  }, [currentExpanded])

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
        nodes={myNodes}
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

function FlowWithProvider(props) {
  return (
    <ReactFlowProvider>
      <Flow {...props} />
    </ReactFlowProvider>
  )
}

export default FlowWithProvider

import React, { useCallback } from 'react'
import ReactFlow, { useNodesState, useEdgesState, addEdge, Controls, MarkerType } from 'reactflow'

import 'reactflow/dist/base.css'
// import 'reactflow/dist/style.css'

import CustomNode from './CustomNode'
import CustomHeadingNode from './CustomHeadingNode'
import CustomSubNode from './CustomSubNode'
import CollapsableNode from '../general/CollapsableNode'

const nodeTypes = {
  custom: CustomNode,
  customHeading: CustomHeadingNode,
  customSubNode: CustomSubNode,
  collapsableNode: CollapsableNode,
}

const basicEdgeConfig = {
  sourceHandle: 'c',
  style: {
    strokeWidth: 2,
    stroke: '#FF0072',
  },
}

const initNodes = [
  {
    id: 'parentA',
    data: { label: 'Before Admission Steps' },
    position: { x: -50, y: 100 },
    className: 'light',
    style: { backgroundColor: 'rgba(255, 0, 0, 0.2)', width: 350, height: 600 },
  },
  {
    id: 'a1',
    type: 'customHeading',
    data: {
      job: 'Start',
    },
    position: { x: 0, y: 0 },
  },
  {
    id: 'a2',
    type: 'customHeading',
    data: {
      job: 'Have you done O/A Levels?',
    },
    position: { x: 0, y: 100 },
  },
  {
    id: 'a2_1',
    type: 'collapsableNode',
    data: {
      job: 'Get equivalency from HEC',
    },
    targetPosition: 'left',
    position: { x: 400, y: 100 },
  },
  {
    id: 'a3',
    type: 'customHeading',
    data: {
      job: 'Apply for degree at your uni & transcript attestation from HEC',
    },
    position: { x: 0, y: 200 },
  },
  {
    id: 'a4',
    type: 'customHeading',
    data: {
      job: 'Take IELTS exam',
    },
    position: { x: 0, y: 300 },
  },
  {
    id: 'a5',
    type: 'customHeading',
    data: {
      job: 'Shortlist universities',
    },
    position: { x: 0, y: 350 },
  },
  {
    id: 'a5_1',
    type: 'collapsableNode',
    data: {
      job: 'Types of Unis: FH vs Uni',
    },
    targetPosition: 'left',
    position: { x: 400, y: 250 },
  },
  {
    id: 'a5_2',
    type: 'collapsableNode',
    data: {
      job: 'Uni-assist vs Direct Application',
    },
    targetPosition: 'left',
    position: { x: 400, y: 310 },
  },
  {
    id: 'a5_3',
    type: 'collapsableNode',
    data: {
      job: 'How to choose cities vs states?',
    },
    targetPosition: 'left',
    position: { x: 400, y: 380 },
  },
  {
    id: 'a5_3',
    type: 'collapsableNode',
    data: {
      job: 'Entry-test/NC-free',
    },
    targetPosition: 'left',
    position: { x: 400, y: 380 },
  },
  {
    id: 'a5_4',
    type: 'collapsableNode',
    data: {
      job: 'IELTS / German language / ECTS / CGPA',
    },
    targetPosition: 'left',
    position: { x: 400, y: 450 },
  },
  {
    id: 'a6',
    type: 'customHeading',
    data: {
      job: 'Write Letter of Motivation (not all unis require it)',
    },
    position: { x: 0, y: 420 },
  },
  {
    id: 'a7',
    type: 'customHeading',
    data: {
      job: 'Get letters of recommendation from profs (not all unis require it)',
    },
    position: { x: 0, y: 500 },
  },
  {
    id: 'a8',
    type: 'customHeading',
    data: {
      job: 'Start applying as soon as admissions open',
    },
    position: { x: 0, y: 620 },
  },
  {
    id: 'a8_1',
    type: 'customSubNode',
    data: { job: 'Uni-assist Application' },
    targetPosition: 'right',
    position: { x: -400, y: 500 },
  },
  {
    id: 'a8_2',
    type: 'collapsableNode',
    data: { job: 'upload the VPD & apply through uni portal' },
    targetPosition: 'right',
    position: { x: -400, y: 570 },
  },
  {
    id: 'a8_3',
    type: 'collapsableNode',
    data: { job: 'Uni-assist (VPD)' },
    targetPosition: 'right',
    position: { x: -400, y: 640 },
  },
  {
    id: 'a8_4',
    type: 'customSubNode',
    data: { job: 'Direct Application on uni portal' },
    position: { x: -400, y: 710 },
  },
  {
    id: 'b1',
    type: 'customHeading',
    data: { job: 'Did you get an admission offer?' },
    position: { x: 0, y: 750 },
  },
  {
    id: 'c1',
    type: 'customHeading',
    data: { job: 'Book your visa appointment' },
    position: { x: 0, y: 850 },
  },
  {
    id: 'c2',
    type: 'customHeading',
    data: { job: 'Apply for hostel accommodations' },
    position: { x: 0, y: 920 },
  },
  {
    id: 'c4',
    type: 'customHeading',
    data: {
      job: 'Open blocked account and remit blocked amount',
    },
    position: { x: 0, y: 1000 },
  },
  {
    id: 'c5',
    type: 'customHeading',
    data: {
      job: 'Appear for visa interview',
    },
    position: { x: 0, y: 1070 },
  },
  {
    id: 'c5_1',
    type: 'collapsableNode',
    data: { job: 'Visa Documents and fee' },
    position: { x: 400, y: 950 },
    targetPosition: 'left',
  },
  {
    id: 'c5_2',
    type: 'collapsableNode',
    data: { job: 'Visa CV' },
    position: { x: 400, y: 1020 },
    targetPosition: 'left',
  },
  {
    id: 'c5_3',
    type: 'collapsableNode',
    data: { job: 'Motivation Letter' },
    position: { x: 400, y: 1080 },
    targetPosition: 'left',
  },
  {
    id: 'c6',
    type: 'customHeading',
    data: {
      job: 'Did you receive your visa?',
    },
    position: { x: 0, y: 1130 },
  },
  {
    id: 'c7',
    type: 'customHeading',
    data: {
      job: 'Book flight (student discount)',
    },
    position: { x: 0, y: 1190 },
  },
  {
    id: 'c8',
    type: 'collapsableNode',
    data: {
      job: 'Prepare for arrival',
    },
    position: { x: 0, y: 1280 },
  },
  {
    id: 'c8_1',
    type: 'customSubNode',
    data: { job: 'Shopping List' },
    position: { x: -400, y: 1200 },
  },
  {
    id: 'c8_2',
    type: 'customSubNode',
    data: { job: 'Make connections (PSA/ISA)' },
    position: { x: -400, y: 1250 },
  },
  {
    id: 'c8_3',
    type: 'customSubNode',
    data: { job: 'Train Ticket Tutorial' },
    position: { x: -400, y: 1320 },
  },
  {
    id: 'c8_4',
    type: 'customSubNode',
    data: { job: 'Important Mobile Apps' },
    position: { x: -400, y: 1370 },
  },
  {
    id: 'c8_5',
    type: 'customSubNode',
    data: { job: 'Drivers License' },
    position: { x: -400, y: 1420 },
  },
  {
    id: 'd1',
    type: 'customHeading',
    data: {
      job: 'Land in Germany',
    },
    position: { x: 0, y: 1400 },
  },
]

const initEdges = [
  {
    ...basicEdgeConfig,
    id: 'a2-a2_1',
    source: 'a2',
    target: 'a2_1',
    sourceHandle: 'b',
    label: 'yes',
  },
  {
    ...basicEdgeConfig,
    id: 'a2-a2_1',
    source: 'a2_1',
    target: 'a3',
    sourceHandle: 'c',
    type: 'smoothstep',
  },
  {
    id: 'e1-12',
    source: '1',
    target: '12',
    sourceHandle: 'b',
  },
  {
    id: 'e1-13',
    source: '1',
    target: '13',
    sourceHandle: 'b',
  },
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    sourceHandle: 'c',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: '#FF0072',
    },
    label: 'marker size and color',
    style: {
      strokeWidth: 2,
      stroke: '#FF0072',
    },
  },

  {
    id: 'a3-a4',
    source: 'a3',
    target: 'a4',
    ...basicEdgeConfig,
  },
  {
    id: 'a4-a5',
    source: 'a4',
    target: 'a5',
    ...basicEdgeConfig,
  },
  {
    id: 'a5-a6',
    source: 'a5',
    target: 'a6',
    ...basicEdgeConfig,
  },
  {
    id: 'a5-a5_1',
    source: 'a5',
    target: 'a5_1',
    ...basicEdgeConfig,
    sourceHandle: 'b',
  },
  {
    id: 'a5-a5_2',
    source: 'a5',
    target: 'a5_2',
    ...basicEdgeConfig,
    sourceHandle: 'b',
  },
  {
    id: 'a5-a5_3',
    source: 'a5',
    target: 'a5_3',
    ...basicEdgeConfig,
    sourceHandle: 'b',
  },
  {
    id: 'a5-a5_4',
    source: 'a5',
    target: 'a5_4',
    ...basicEdgeConfig,
    sourceHandle: 'b',
  },
  {
    ...basicEdgeConfig,
    id: 'a8-a_1',
    source: 'a8',
    target: 'a8_1',
    sourceHandle: 'd',
  },
  {
    ...basicEdgeConfig,
    id: 'a8-a_2',
    source: 'a8',
    target: 'a8_2',
    sourceHandle: 'd',
  },
  {
    ...basicEdgeConfig,
    id: 'a8-a_3',
    source: 'a8',
    target: 'a8_3',
    sourceHandle: 'd',
  },
  {
    ...basicEdgeConfig,
    id: 'a8-a_4',
    source: 'a8',
    target: 'a8_4',
    sourceHandle: 'd',
  },
  {
    ...basicEdgeConfig,
    id: 'c5-c5_1',
    source: 'c5',
    target: 'c5_1',
    sourceHandle: 'b',
  },
  {
    ...basicEdgeConfig,
    id: 'c5-c5_2',
    source: 'c5',
    target: 'c5_2',
    sourceHandle: 'b',
  },
  {
    ...basicEdgeConfig,
    id: 'c5-c5_3',
    source: 'c5',
    target: 'c5_3',
    sourceHandle: 'b',
  },
  {
    ...basicEdgeConfig,
    id: 'c8-c8_1',
    source: 'c8',
    target: 'c8_1',
    sourceHandle: 'd',
  },
  {
    ...basicEdgeConfig,
    id: 'c8-c8_2',
    source: 'c8',
    target: 'c8_2',
    sourceHandle: 'd',
  },
  {
    ...basicEdgeConfig,
    id: 'c8-c8_3',
    source: 'c8',
    target: 'c8_3',
    sourceHandle: 'd',
  },
  {
    ...basicEdgeConfig,
    id: 'c8-c8_4',
    source: 'c8',
    target: 'c8_4',
    sourceHandle: 'd',
  },
  {
    ...basicEdgeConfig,
    id: 'c8-c8_5',
    source: 'c8',
    target: 'c8_5',
    sourceHandle: 'd',
  },
]

const Flow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initEdges)

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [])

  return (
    <div style={{ height: 500 }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        snapToGrid
        className="bg-teal-50"
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

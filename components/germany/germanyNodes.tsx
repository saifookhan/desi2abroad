import { Position } from 'reactflow'
import { StudyParentNode } from 'src/types/types'

const germanyNodes: StudyParentNode[] = [
  {
    id: 'a1',
    type: 'collapsableNode',
    data: {
      label: 'Start',
    },
    position: { x: 0, y: 0 },
  },
  {
    id: 'a2',
    type: 'collapsableNode',
    data: {
      label: 'Have you done O/A Levels?',
    },
    targetPosition: Position.Left,
    position: { x: 0, y: 100 },
    children: [
      {
        id: 'a2_1',
        type: 'collapsableNode',
        data: {
          label: 'Get equivalency from HEC',
        },
        targetPosition: Position.Left,
        position: { x: 400, y: 100 },
      },
    ],
  },
  {
    id: 'a3',
    type: 'collapsableNode',
    data: {
      label: 'Apply for degree at your uni & transcript attestation from HEC',
    },
    position: { x: 0, y: 200 },
  },
  {
    id: 'a4',
    type: 'collapsableNode',
    data: {
      label: 'Take IELTS exam',
    },
    position: { x: 0, y: 300 },
  },
  {
    id: 'a5',
    type: 'collapsableNode',
    data: {
      label: 'Shortlist universities',
    },
    position: { x: 0, y: 350 },
    children: [
      {
        id: 'a5_1',
        type: 'collapsableNode',
        data: {
          label: 'Types of Unis: FH vs Uni',
        },
        targetPosition: Position.Left,
        position: { x: 400, y: 250 },
      },
      {
        id: 'a5_2',
        type: 'collapsableNode',
        data: {
          label: 'Uni-assist vs Direct Application',
        },
        targetPosition: Position.Left,
        position: { x: 400, y: 310 },
      },
      {
        id: 'a5_3',
        type: 'collapsableNode',
        data: {
          label: 'How to choose cities vs states?',
        },
        targetPosition: Position.Left,
        position: { x: 400, y: 380 },
      },
      {
        id: 'a5_3',
        type: 'collapsableNode',
        data: {
          label: 'Entry-test/NC-free',
        },
        targetPosition: Position.Left,
        position: { x: 400, y: 380 },
      },
      {
        id: 'a5_4',
        type: 'collapsableNode',
        data: {
          label: 'IELTS / German language / ECTS / CGPA',
        },
        targetPosition: Position.Left,
        position: { x: 400, y: 450 },
      },
    ],
  },
  {
    id: 'a6',
    type: 'collapsableNode',
    data: {
      label: 'Write Letter of Motivation (not all unis require it)',
    },
    position: { x: 0, y: 420 },
  },
  {
    id: 'a7',
    type: 'collapsableNode',
    data: {
      label: 'Get letters of recommendation from profs (not all unis require it)',
    },
    position: { x: 0, y: 500 },
  },
  {
    id: 'a8',
    type: 'collapsableNode',
    data: {
      label: 'Start applying as soon as admissions open',
    },
    position: { x: 0, y: 620 },
    children: [
      {
        id: 'a8_1',
        type: 'collapsableNode',
        data: { label: 'Uni-assist Application' },
        targetPosition: Position.Right,
        position: { x: -400, y: 500 },
      },
      {
        id: 'a8_2',
        type: 'collapsableNode',
        data: { label: 'upload the VPD & apply through uni portal' },
        targetPosition: Position.Right,
        position: { x: -400, y: 570 },
      },
      {
        id: 'a8_3',
        type: 'collapsableNode',
        data: { label: 'Uni-assist (VPD)' },
        targetPosition: Position.Right,
        position: { x: -400, y: 640 },
      },
      {
        id: 'a8_4',
        type: 'collapsableNode',
        data: { label: 'Direct Application on uni portal' },
        position: { x: -400, y: 710 },
        targetPosition: Position.Right,
      },
    ],
  },
  {
    id: 'b1',
    type: 'collapsableNode',
    data: { label: 'Did you get an admission offer?' },
    position: { x: 0, y: 750 },
  },
  {
    id: 'c1',
    type: 'collapsableNode',
    data: { label: 'Book your visa appointment' },
    position: { x: 0, y: 850 },
  },
  {
    id: 'c2',
    type: 'collapsableNode',
    data: { label: 'Apply for hostel accommodations' },
    position: { x: 0, y: 920 },
  },
  {
    id: 'c4',
    type: 'collapsableNode',
    data: {
      label: 'Open blocked account and remit blocked amount',
    },
    position: { x: 0, y: 1000 },
  },
  {
    id: 'c5',
    type: 'collapsableNode',
    data: {
      label: 'Appear for visa interview',
    },
    position: { x: 0, y: 1070 },
    children: [
      {
        id: 'c5_1',
        type: 'collapsableNode',
        data: { label: 'Visa Documents and fee' },
        position: { x: 400, y: 950 },
        targetPosition: Position.Left,
      },
      {
        id: 'c5_2',
        type: 'collapsableNode',
        data: { label: 'Visa CV' },
        position: { x: 400, y: 1020 },
        targetPosition: Position.Left,
      },
      {
        id: 'c5_3',
        type: 'collapsableNode',
        data: { label: 'Motivation Letter' },
        position: { x: 400, y: 1080 },
        targetPosition: Position.Left,
      },
    ],
  },
  {
    id: 'c6',
    type: 'collapsableNode',
    data: {
      label: 'Did you receive your visa?',
    },
    position: { x: 0, y: 1130 },
  },
  {
    id: 'c7',
    type: 'collapsableNode',
    data: {
      label: 'Book flight (student discount)',
    },
    position: { x: 0, y: 1190 },
  },
  {
    id: 'c8',
    type: 'collapsableNode',
    data: {
      label: 'Prepare for arrival',
    },
    position: { x: 0, y: 1280 },
    children: [
      {
        id: 'c8_1',
        type: 'collapsableNode',
        data: { label: 'Shopping List' },
        position: { x: -400, y: 1200 },
        targetPosition: Position.Right,
      },
      {
        id: 'c8_2',
        type: 'collapsableNode',
        data: { label: 'Make connections (PSA/ISA)' },
        position: { x: -400, y: 1250 },
        targetPosition: Position.Right,
      },
      {
        id: 'c8_3',
        type: 'collapsableNode',
        data: { label: 'Train Ticket Tutorial' },
        position: { x: -400, y: 1320 },
        targetPosition: Position.Right,
      },
      {
        id: 'c8_4',
        type: 'collapsableNode',
        data: { label: 'Important Mobile Apps' },
        position: { x: -400, y: 1370 },
        targetPosition: Position.Right,
      },
      {
        id: 'c8_5',
        type: 'collapsableNode',
        data: { label: 'Drivers License' },
        position: { x: -400, y: 1420 },
        targetPosition: Position.Right,
      },
    ],
  },
  {
    id: 'd1',
    type: 'collapsableNode',
    data: {
      label: 'Land in Germany',
    },
    position: { x: 0, y: 1400 },
  },
]

export default germanyNodes

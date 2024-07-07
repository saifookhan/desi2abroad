import { CollapsableStudyNode, StudyParentNode } from '../types/types'
import { Node } from 'reactflow'

function positionCalculator(nodes: StudyParentNode[] | CollapsableStudyNode[]) {
  const initialNode = nodes[0]
  const calculatedNodes = nodes.map((node, index) => {
    node.position.y = initialNode.position.y + 100 * index - (node.data.label.length > 30 ? 10 : 0)
    return node
  })
  return calculatedNodes
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function nodesMapper(nodes: StudyParentNode[]): Node<any, string | undefined>[] | undefined {
  const parentNodes = positionCalculator(nodes)

  const childNodes = parentNodes.map((node,index) => {
    let x = [] as CollapsableStudyNode[]
    if (node.children) {
      x = positionCalculator(node.children)
    }
    return x
  })
  return parentNodes.concat(...childNodes)
}

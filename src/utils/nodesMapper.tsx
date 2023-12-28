import { StudyNode, StudyParentNode } from '../types/types'
import { Node } from 'reactflow'

function flattenNodesChildren(children: StudyNode[]) {}

function positionCalculator(nodes: StudyParentNode[] | StudyNode[]) {
  const initialNodes = nodes
  const firstNode = initialNodes[0]
  const newNodes = nodes.map((node, index) => {
    node.position.y = 100 * index - (node.data.label.length > 30 ? 10 : 0)
    // console.log(node)
    return node
  })
  return newNodes
}

export function nodesMapper(nodes: StudyParentNode[]): Node<any, string | undefined>[] | undefined {
  const newNodes = positionCalculator(nodes)
  console.log(newNodes)

  const newerNodes = newNodes.map((node) => {
    let x = [] as StudyNode[]
    if (node.children) {
      x = positionCalculator(node.children)
    }
    return x
  })
  return newNodes
}

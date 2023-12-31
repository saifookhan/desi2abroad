import { ReactElement } from 'react'
import { Node, Position } from 'reactflow'

export interface StudyNode extends Node {
  id: string
  type: string
  data: {
    label: string
    descriptionHTML?: Element | ReactElement<any, any>
  }
  position: { x: number; y: number }
  targetPosition?: Position
}

export interface StudyParentNode extends StudyNode {
  children?: StudyNode[]
}

export interface HomepageCateogries {
  chapter: string
  subChapters: HomepageCateogriesCategories[]
  subChaptersTwo?: HomepageCateogriesCategories[]
}

export interface HomepageCateogriesCategories {
  title: string
  path: string
}

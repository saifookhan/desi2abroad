import { ReactElement } from 'react'
import { NodeProps } from 'reactflow'

export type WrapperCollapsableStudyNode = NodeProps & {
  data: {
    label: string
    descriptionHTML?: ReactElement<any, any>
    style?: { alignContent?: 'center'; backgroundColor?: string }
  }
  position: { x: number; y: number }
}

export type CollapsableStudyNode = Pick<
  WrapperCollapsableStudyNode,
  'id' | 'type' | 'targetPosition' | 'data' | 'position'
>

export type StudyParentNode = CollapsableStudyNode & {
  children?: CollapsableStudyNode[]
}

export type HomepageCateogries = {
  chapter: string
  subChapters: HomepageCateogriesCategories[]
  subChaptersTwo?: HomepageCateogriesCategories[]
}

export type HomepageCateogriesCategories = {
  title: string
  path: string
}

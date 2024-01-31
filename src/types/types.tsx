import { ReactElement } from 'react'
import { NodeProps } from 'reactflow'
import { amber, fuchsia, green, yellow } from 'tailwindcss/colors'

export const NodeBackgroundColors = {
  yellow300: yellow[300],
  amber100: amber[100],
  amber50: amber[50],
  green300: green[300],
  green100: green[100],
  green50: green[50],
  fuchsia300: fuchsia[300],
  fuchsia100: fuchsia[100],
  fuchsia50: fuchsia[50],
}

export type WrapperCollapsableStudyNode = NodeProps & {
  data: {
    label: string
    descriptionHTML?: ReactElement<any, any>
    style?: { alignContent?: 'center'; backgroundColor?: typeof NodeBackgroundColors }
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
  status?: 'new'
  disabled?: boolean
}

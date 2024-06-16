// Commented out code is for Aashir

'use client'

import React from 'react'
import CalcCollapse from './calculator/calcCollapse'
import BubbleListCollapse from '../general/BubbleList/Collapse'
import BubbleListCollapseFlat from '../general/BubbleList/BubbleListCollapseFlat'
import Title from 'antd/es/typography/Title'
import BubbleListCollapseNested from '../general/BubbleList/BubbleListCollapseNested'

const CollapseCover = ({ studyPrograms, resources, stringifiedData }) => {
  return (
    <>
      <div className="flex flex-col-reverse mt-2 py-6 lg:flex-row">
        {/* <button className="border-4 text-black h-[10%]" onClick={login}>
          click
        </button> */}

        <div className="grid grid-flow-row">
          <div>
            <Title level={3}>List of Field-wise Programs and Unis</Title>
            <BubbleListCollapseNested studyPrograms={studyPrograms} />
          </div>
          <div>
            <Title level={3}>Detailed Steps</Title>
            <BubbleListCollapse stringifiedData={stringifiedData} />
          </div>
          <div>
            <Title level={3}>Resources</Title>
            <BubbleListCollapseFlat data={resources} />
          </div>
        </div>
        <div>
          <CalcCollapse />
        </div>
        {/* <Switch onChange={changer} /> */}
      </div>
    </>
  )
}

export default CollapseCover

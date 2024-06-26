// Commented out code is for Aashir

'use client'

import React, { useState } from 'react'
import CalcCollapse from './calculator/calcCollapse'
import BubbleListCollapse from '../general/BubbleList/Collapse'
import BubbleListCollapseFlat from '../general/BubbleList/BubbleListCollapseFlat'
import Title from 'antd/es/typography/Title'
import BubbleListCollapseNested from '../general/BubbleList/BubbleListCollapseNested'
import { Switch } from 'antd'
import dynamic from 'next/dynamic'

const CollapseCover = ({ studyPrograms, resources, stringifiedData }) => {
  const [toggle, setToggle] = useState(false)

  const Flow = dynamic(() => import('./Roadmap'), {
    ssr: false,
  })

  var changer = () => {
    setToggle(!toggle)
  }
  if (studyPrograms) {
    console.log(studyPrograms)
  }
  return (
    <>
      <div className="flex flex-col-reverse mt-2 py-6 lg:flex-row">
        {/* <button className="border-4 text-black h-[10%]" onClick={login}>
          click
        </button> */}

        <div className="grid grid-flow-row w-full lg:w-[70%]">
          <div className="pt-5 w-[95%] lg:w-full">
            <div className="flex flex-row justify-between ">
              <Title level={3} className="w-[80%]">
                {toggle === false ? 'List of Field-wise Programs and Unis' : 'RoadMap'}
              </Title>
              <Switch onChange={changer} />
            </div>
            {toggle === false ? (
              <BubbleListCollapseNested studyPrograms={studyPrograms} />
            ) : (
              <Flow />
            )}
          </div>
          <div className="pt-5">
            <Title level={3}>Detailed Steps</Title>
            <BubbleListCollapse stringifiedData={stringifiedData} />
          </div>
          <div className="pt-5">
            <Title level={3}>Resources</Title>
            <BubbleListCollapseFlat data={resources} />
          </div>
        </div>
        <div className="w-full lg:w-[30%]">
          <CalcCollapse />
        </div>
        {/* <Switch onChange={changer} /> */}
      </div>
    </>
  )
}

export default CollapseCover

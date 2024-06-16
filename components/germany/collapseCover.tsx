// Commented out code is for Aashir

'use client'

import React, { useState } from 'react'
import CalcCollapse from './calculator/calcCollapse'
import BubbleListCollapse from '../general/BubbleList/Collapse'
import BubbleListCollapseFlat from '../general/BubbleList/BubbleListCollapseFlat'
// import { Switch } from 'antd'
// import dynamic from 'next/dynamic'
import Title from 'antd/es/typography/Title'
import BubbleListCollapseNested from '../general/BubbleList/BubbleListCollapseNested'
// import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
// import { auth } from 'app/germany-new/firebaseConfig'

// Dynamically import ReactFlow component

const CollapseCover = ({ studyPrograms, resources, stringifiedData }) => {
  // const [checked, setChecked] = useState(false)

  // const Flow = dynamic(() => import('components/germany/Roadmap'), {
  //   ssr: false,
  // })

  // const changer = () => {
  //   setChecked(!checked)
  // }

  // Example data for ReactFlow
  const myNodes = [] // Add your nodes here
  const extraGermanyNodes = [] // Add your extra nodes here
  const edges = [] // Add your edges here

  const onNodesChange = () => {}
  const onEdgesChange = () => {}
  const onConnect = () => {}
  const nodeTypes = {} // Define your node types here

  // function login() {
  //   const provider = new GoogleAuthProvider()
  //   signInWithPopup(auth, provider).then(async (result) => {
  //     console.log(result)
  //   })
  // }

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

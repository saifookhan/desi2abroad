'use client';

import React, { useState } from 'react';
import CalcCollapse from './calculator/calcCollapse';
import BubbleListCollapse from '../general/BubbleList/Collapse';
import { Switch } from 'antd';
import dynamic from 'next/dynamic';
import { GoogleAuthProvider,signInWithPopup } from 'firebase/auth';
import { auth } from 'app/germany-new/firebaseConfig';

// Dynamically import ReactFlow component


const CollapseCover = ({ stringifiedData }) => {
  const [checked, setChecked] = useState(false);


  const Flow = dynamic(() => import('components/germany/Roadmap'), {
    ssr: false,
  });

  const changer = () => {
    setChecked(!checked);
  };

  // Example data for ReactFlow
  const myNodes = []; // Add your nodes here
  const extraGermanyNodes = []; // Add your extra nodes here
  const edges = []; // Add your edges here

  const onNodesChange = () => {};
  const onEdgesChange = () => {};
  const onConnect = () => {};
  const nodeTypes = {}; // Define your node types here

  function login(){
    const provider =new GoogleAuthProvider()
    signInWithPopup(auth,provider).then(
      async (result)=>{
    console.log(result)
      }
    )
  }

  return (
    <>
    
      <div className="flex flex-col-reverse mt-2 py-6 lg:flex-row">
      <button className='border-4 text-black h-[10%]' onClick={login}>click</button>
        {checked === false ? (
          <BubbleListCollapse stringifiedData={stringifiedData} />
        ) : (
          <Flow
            nodes={myNodes.concat(extraGermanyNodes)}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            nodeTypes={nodeTypes}
            fitView
            snapToGrid
            className="bg-grey-500"
            nodesDraggable={false}
            minZoom={0.35}
            translateExtent={[
              [-800, -300],
              [1200, 1800],
            ]}
          />
        )}
        <CalcCollapse />
        <Switch onChange={changer} />
      </div>
    </>
  );
};

export default CollapseCover;

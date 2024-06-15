import React, { useEffect, useState } from 'react';
import PageHeader from '@/components/general/page/PageHeader';
import SectionContainer from '@/components/SectionContainer';
import BubbleListCollapse from '@/components/general/BubbleList/Collapse';
import CalcCollapse from '@/components/germany/calculator/calcCollapse';
import { getGermanyDataFromExcelSheet } from '@/data/fetch/germany';
import CollapseCover from '@/components/germany/collapseCover';
import { db } from './firebaseConfig';
import { getDatabase, ref, onValue } from 'firebase/database';

const App: React.FC =async () => {



  
  const germanyData = await getGermanyDataFromExcelSheet()
  const stringifiedData = JSON.stringify(germanyData)



  return (
    <>
      <div className="bg-white">
        <PageHeader
          headerTitle="Germany Study Steps"
          headerDescription="Join our support communities"
          headerColor="white"
        />
        <br />
        <SectionContainer backgroundStyle="white">
            
            {/* <BubbleListCollapse stringifiedData={stringifiedData}></BubbleListCollapse>
            <CalcCollapse></CalcCollapse> */}
            <CollapseCover stringifiedData={stringifiedData}></CollapseCover>
             
        
        </SectionContainer>
      </div>
    </>
  )
}

export default App

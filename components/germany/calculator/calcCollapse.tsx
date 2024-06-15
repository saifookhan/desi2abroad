'use client'
import React from 'react'
import { Collapse } from 'antd'
import { GermanCgpaCalculator, GermanECTSCalculator } from './calculator'

const { Panel } = Collapse

const CalcCollapse = () => {
  return (
    <>
      <div className="calc_container  h-auto w-full lg:w-[35%] mb-4 lg:mb-0 lg:mx-6">
        <Collapse defaultActiveKey={['00']}>
          <Panel header="GPA CALCULATOR" key="00">
            <div className="h-auto">
              <GermanCgpaCalculator />
            </div>
          </Panel>
          <Panel header="ECTS CALCULATOR" key="01">
            <div className="h-auto">
              <GermanECTSCalculator />
            </div>
          </Panel>
        </Collapse>
      </div>
    </>
  )
}

export default CalcCollapse

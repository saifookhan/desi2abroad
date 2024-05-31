"use client"
import React from 'react'
import { Collapse, Typography } from 'antd'
import { Calc,ECTS } from './calculator'

const { Panel } = Collapse
const { Text } = Typography

const CalcCollapse = () => {
  return (
    <>
     <div className="calc_container  h-auto w-full lg:w-[35%] mb-4 lg:mb-0 lg:mx-6" >
              <Collapse defaultActiveKey={['00']}>
                <Panel header="GPA CALCULATOR" key="00">
                  <div className=" min-h-[100vh] lg:min-h-0">
                    <Calc />
                  </div>
                </Panel>
                <Panel header="ECTS CALCULATOR" key="01">
                  <div className=" min-h-[100vh] lg:min-h-0">
                    <ECTS />
                  </div>
                </Panel>
              </Collapse>
            </div>
    </>
  )
}

export default CalcCollapse
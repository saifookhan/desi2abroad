'use client'
import React, { useState } from 'react';
import { InputNumber, Button, Form, Input, Flex } from 'antd';

const calc = () => {
  const [form] = Form.useForm();
  const [calc_data, setCalc_data] = useState(0);
  const [ects_data, setEcts_data] = useState(0);

  const styler={
    cover:{
      width:'600px',
      height:'500px',
    },
    Flex:{
      margin:'5% 0'
    },
    text:{
        color:'white'
    },
    result:{
      textAlign:'center',
      color:'#fff',
      width:'16%'
    },
    taBle:{
       borderCollapse: 'separate',
        borderSpacing: '15px 1em'
    },
    row:{
      border:'0.25px solid',
    }
  }

  const changer = () => {
    const { max_gpa, min_gpa, c_gpa } = form.getFieldsValue();
    const gpa_diff = max_gpa - c_gpa;
    const normal_diff = gpa_diff / (max_gpa - min_gpa);
    const data = normal_diff * 3 + 1;
    setCalc_data(data);
  };
  const ects_calc=()=>{
    const { L, S, N,H } = form.getFieldsValue();
    var W=(L+S)*N;
    var C=W/H;
    setEcts_data(C);
  }

  return (
    <div style={styler.cover}>
    <img src='/images/gps_formula'></img>
    {/* table created */}
    <table style={styler.taBle}>
      <tr style={styler.row}>
        <td>German Grade</td>
        <td>Percentage</td>
        <td>Meaning</td>
        <td>Pass or Fail</td>
      </tr>
      <tr style={styler.row}>
      <td>1.0-1.5</td>
        <td>90-100%</td>
        <td>Very Good</td>
        <td>Pass</td>
      </tr>
      <tr style={styler.row}>
      <td>1.6-2.5</td>
        <td>75-89%</td>
        <td>Good</td>
        <td>Pass</td>
      </tr>
      <tr style={styler.row}>
      <td>2.6-3.5</td>
        <td>60-74%</td>
        <td>Satisfactory</td>
        <td>Pass</td>
      </tr>
      <tr style={styler.row}>
      <td>3.6-4</td>
        <td>50-59%</td>
        <td>Sufficient</td>
        <td>Pass</td>
      </tr>
      <tr style={styler.row}>
      <td>5.0</td>
        <td>0-49%</td>
        <td>Failed</td>
        <td>Fail</td>
      </tr>
      

    </table>
      <Form form={form} onValuesChange={changer}>
        <h1 style={styler.text}>Max. score that can be attained in your course (GPA/Percentage)</h1>
        <Form.Item name="max_gpa">
          <InputNumber size="large" min={0} max={4} defaultValue={0} />
        </Form.Item>
        <h1 style={styler.text}>Min. score that can be attained in your course (GPA/Percentage)</h1>
        <Form.Item name="min_gpa">
          <InputNumber size="large" min={0} max={4} defaultValue={0} />
        </Form.Item>
        <h1 style={styler.text}>Score that you obtained in the course (GPA/Percentage)</h1>
        <Form.Item name="c_gpa">
          <InputNumber size="large" min={0} max={4} defaultValue={0} />
        </Form.Item>
    <Flex style={styler.Flex}>
      
    </Flex>
        
        <Input style={styler.result} placeholder="Basic usage" disabled value={calc_data} />
      </Form>

      <h1>ECTS Calculator</h1>
      <Form form={form} onValuesChange={ects_calc}>
        <h1 style={styler.text}>Enter the number of lectures per week</h1>
        <Form.Item name="L">
          <InputNumber size="large" min={0}  defaultValue={0} />
        </Form.Item>
        <h1 style={styler.text}>Hours spend in self study per week</h1>
        <Form.Item name="S">
          <InputNumber size="large" min={0}  defaultValue={0} />
        </Form.Item>
        <h1 style={styler.text}>Number if Weeks in Semester</h1>
        <Form.Item name="N">
          <InputNumber size="large" min={0}  defaultValue={0} />
        </Form.Item>
        <h1 style={styler.text}>Hours per ECTS credit (Usaually between 24-30 hours)</h1>
        <Form.Item name="H">
          <InputNumber size="large" min={0}  defaultValue={0} />
        </Form.Item>

        
        <Input style={styler.result} placeholder="Basic usage" disabled value={ects_data} />
      </Form>
    </div>
  );
};

export default calc;

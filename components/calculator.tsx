import React, { useState } from 'react';
import { InputNumber, Form, Input, Table } from 'antd';

const Calc = () => {
  const [form] = Form.useForm();
  const [calcData, setCalcData] = useState(0);

  const styler = {
    cover: {
      width: '600px',
      height: '500px',
    },
    text: {
      color: 'white',
    },
    result: {
      textAlign: 'center',
      color: '#fff',
      width: '16%',
    },
    table: {
      margin: '20px 0'
    },
    row:{
      borderBottom:'1px solid'
      
    }
  };

  const changer = () => {
    const { max_gpa, min_gpa, c_gpa } = form.getFieldsValue();
    const gpaDiff = max_gpa - c_gpa;
    const normalDiff = gpaDiff / (max_gpa - min_gpa);
    const data = normalDiff * 3 + 1;
    setCalcData(data);
  };

  return (
    <div style={styler.cover}>
        <img className='w-[40%]' src='/static/images/gps_formula.jpg'></img>
         <table style={styler.taBle} className='40%'>
      <tr style={styler.row}>
        <td className='p-1'>German Grade</td>
        <td className='p-1'>Percentage</td>
        <td className='p-1'>Meaning</td>
        <td className='p-1'>Pass or Fail</td>
      </tr>
      <tr style={styler.row}>
      <td className='p-1'>1.0-1.5</td>
        <td className='p-1'>90-100%</td>
        <td className='p-1'>Very Good</td>
        <td className='p-1'>Pass</td>
      </tr>
      <tr style={styler.row}>
      <td className='p-1'>1.6-2.5</td>
        <td className='p-1'>75-89%</td>
        <td className='p-1'>Good</td>
        <td className='p-1'>Pass</td>
      </tr>
      <tr style={styler.row}>
      <td className='p-1'>2.6-3.5</td>
        <td className='p-1'>60-74%</td>
        <td className='p-1'>Satisfactory</td>
        <td className='p-1'>Pass</td>
      </tr>
      <tr style={styler.row}>
      <td className='p-1'>3.6-4</td>
        <td className='p-1'>50-59%</td>
        <td className='p-1'>Sufficient</td>
        <td className='p-1'>Pass</td>
      </tr>
      <tr style={styler.row}>
      <td className='p-1'>5.0</td>
        <td className='p-1'>0-49%</td>
        <td className='p-1'>Failed</td>
        <td className='p-1'>Fail</td>
      </tr>
      

    </table>
      <h1 style={styler.text}>Grade Calculator</h1>
      <Form form={form} onValuesChange={changer}>
        <Form.Item label="Max. score that can be attained">
          <InputNumber size="large" min={0} max={4} defaultValue={0} name="max_gpa" />
        </Form.Item>
        <Form.Item label="Min. score that can be attained">
          <InputNumber size="large" min={0} max={4} defaultValue={0} name="min_gpa" />
        </Form.Item>
        <Form.Item label="Your score in the course">
          <InputNumber size="large" min={0} max={4} defaultValue={0} name="c_gpa" />
        </Form.Item>
        <Form.Item label="Here is your result">
        <Input style={styler.result} placeholder="Result" disabled value={calcData} />
        </Form.Item>
      

      </Form>
    </div>
  );
};

const ECTS = () => {
  const [form] = Form.useForm();
  const [ectsData, setEctsData] = useState(0);

  const styler = {
    cover: {
      width: '600px',
      height: '500px',
    },
    text: {
      color: 'white',
    },
    result: {
      textAlign: 'center',
      color: '#fff',
      width: '16%',
    },
  };

  const ectsCalc = () => {
    const { L, S, N, H } = form.getFieldsValue();
    const W = (L + S) * N;
    const C = W / H;
    setEctsData(C);
  };

  return (
    <div style={styler.cover}>
      <h1 style={styler.text}>ECTS Calculator</h1>
      <Form form={form} onValuesChange={ectsCalc}>
        <Form.Item label="Number of lectures per week">
          <InputNumber size="large" min={0} defaultValue={0} name="L" />
        </Form.Item>
        <Form.Item label="Hours spent in self-study per week">
          <InputNumber size="large" min={0} defaultValue={0} name="S" />
        </Form.Item>
        <Form.Item label="Number of weeks in semester">
          <InputNumber size="large" min={0} defaultValue={0} name="N" />
        </Form.Item>
        <Form.Item label="Hours per ECTS credit">
          <InputNumber size="large" min={0} defaultValue={0} name="H" />
        </Form.Item>
        <Form.Item label="Here is your result">
        <Input style={styler.result} placeholder="Result" disabled value={ectsData} />
        </Form.Item>
     

      </Form>
    </div>
  );
};

export { Calc, ECTS };

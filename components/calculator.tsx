import React, { useState,useEffect } from 'react';
import { InputNumber, Form, Input, Table } from 'antd';


const Calc = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState({
    max_gpa: 0,
    min_gpa: 0,
    c_gpa: 0
  });
  const [calcData, setCalcData] = useState(0);

  const styler = {
    cover: {
      width: 'auto',
      height: 'auto',
    },
    text: {
      color: 'white',
    },
    table: {
      margin: '20px 0'
    },
    row: {
      borderBottom: '1px solid'
    }
  };

  const changer = (value, name) => {
    setData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  useEffect(() => {
    const { max_gpa, min_gpa, c_gpa } = data;
    if (max_gpa && min_gpa && c_gpa) {
      const gpaDiff = max_gpa - c_gpa;
      const normalDiff = gpaDiff / (max_gpa - min_gpa);
      const val = normalDiff * 3 + 1;
      setCalcData(val);
    }
  }, [data]);

  return (
    <div style={styler.cover}>
      <h1 style={styler.text}>Grade Calculator</h1>
      <Form form={form} layout='vertical'>
        <Form.Item className='flex flex-col lg:flex' label='Max. score that can be attained'  name="max_gpa">

          <InputNumber
            size="large"
            min={0}
            max={4}
           
            placeholder='eg 4.0'
            value={data.max_gpa}
            onChange={(value) => changer(value, 'max_gpa')}
          />
        </Form.Item>
        <Form.Item label='Min. score that can be attained' name="min_gpa">

          <InputNumber
            size="large"
            min={0}
            max={4}
            
            placeholder='eg 2'
            value={data.min_gpa}
            onChange={(value) => changer(value, 'min_gpa')}
          />
        </Form.Item>
        <Form.Item className='flex flex-col lg:flex' label='Your score in the course'  name="c_gpa">

          <InputNumber
            size="large"
            min={0}
            max={4}
           
            placeholder='eg 3.0'
            value={data.c_gpa}
            onChange={(value) => changer(value, 'c_gpa')}
          />
        </Form.Item>
        <Form.Item label='Here is your result'>
          <InputNumber className='text-black' placeholder="Result" disabled value={calcData} />
        </Form.Item>
      </Form>

      <table style={styler.table} className='w-full'>
        <tbody>
          <tr style={styler.row}>
            <td className='p-1 text-xs'>German Grade</td>
            <td className='p-1 text-xs'>Percentage</td>
            <td className='p-1 text-xs'>Meaning</td>
            <td className='p-1 text-xs'>Pass or Fail</td>
          </tr>
          <tr style={styler.row}>
            <td className='p-1 text-xs'>1.0-1.5</td>
            <td className='p-1 text-xs'>90-100%</td>
            <td className='p-1 text-xs'>Very Good</td>
            <td className='p-1 text-xs'>Pass</td>
          </tr>
          <tr style={styler.row}>
            <td className='p-1 text-xs'>1.6-2.5</td>
            <td className='p-1 text-xs'>75-89%</td>
            <td className='p-1 text-xs'>Good</td>
            <td className='p-1 text-xs'>Pass</td>
          </tr>
          <tr style={styler.row}>
            <td className='p-1 text-xs'>2.6-3.5</td>
            <td className='p-1 text-xs'>60-74%</td>
            <td className='p-1 text-xs'>Satisfactory</td>
            <td className='p-1 text-xs'>Pass</td>
          </tr>
          <tr style={styler.row}>
            <td className='p-1 text-xs'>3.6-4</td>
            <td className='p-1 text-xs'>50-59%</td>
            <td className='p-1 text-xs'>Sufficient</td>
            <td className='p-1 text-xs'>Pass</td>
          </tr>
          <tr style={styler.row}>
            <td className='p-1 text-xs'>5.0</td>
            <td className='p-1 text-xs'>0-49%</td>
            <td className='p-1 text-xs'>Failed</td>
            <td className='p-1 text-xs'>Fail</td>
          </tr>
        </tbody>
      </table>
      <img className='w-[60%] object-contain' src='/static/images/gps_formula.jpg' alt="GPS formula" />
    </div>
  );
};

const ECTS = () => {
  const [form] = Form.useForm();
  const [ectsData, setEctsData] = useState(0);

  const styler = {
    cover: {
      width: 'auto',
      height: 'auto',
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

  const handleChange = (name, value) => {
    form.setFieldsValue({ [name]: value }); // Update form values
    calculateEcts(); // Recalculate ECTS
  };

  const calculateEcts = () => {
    const { L, N, S, H } = form.getFieldsValue(); // Get form values
    if (L && N && S && H) {
      const W = (L + S) * N;
      const C = W / H;
      setEctsData(C);
    }
  };

  useEffect(() => {
    calculateEcts();
  }, []); // Run once on initial render

  return (
    <div style={styler.cover}>
      <h1 style={styler.text}>ECTS Calculator</h1>
      <Form form={form} layout='vertical'>
        <Form.Item label="Number of lectures per week" name="L">
          <InputNumber size="large" min={0} onChange={(value) => handleChange("L", value)} placeholder='E.g 5'/>
        </Form.Item>
        <Form.Item label="Hours spent in self-study per week" name="S">
          <InputNumber size="large" min={0} onChange={(value) => handleChange("S", value)} placeholder='E.g 6'/>
        </Form.Item>
        <Form.Item label="Number of weeks in semester" name="N">
          <InputNumber size="large" min={0} onChange={(value) => handleChange("N", value)} placeholder='E.g 10'/>
        </Form.Item>
        <Form.Item label="Hours per ECTS credit" name="H">
          <InputNumber size="large" min={0} onChange={(value) => handleChange("H", value)} placeholder='E.g 4'/>
        </Form.Item>
        <Form.Item label="Here is your result">
          <InputNumber  placeholder="Result" className='text-black' disabled value={ectsData} />
        </Form.Item>
      </Form>
    </div>
  );
};


export { Calc, ECTS };

import React from 'react'
// import './index.css';
import { Timeline, Collapse } from 'antd'

const items = [
  {
    key: '1',
    label: 'This is panel header 1',
    children: <p>Some text</p>,
  },
  {
    key: '2',
    label: 'This is panel header 1',
    children: <p>Some text</p>,
  },
]

const GermanyTimeline = ({ title, description, imgSrc, href }) => (
  <Timeline
    items={[
      {
        children: (
          <Timeline
            items={[
              {
                children: (
                  <a>
                    <h2>Initial Reserarch</h2>
                  </a>
                ),
              },

              {
                children: <Collapse items={items} />,
              },
              {
                children: <Collapse items={items} />,
              },
              {
                children: <Collapse items={items} />,
              },
              {
                children: 'Network problems being solved 2015-09-01',
              },
            ]}
          />
        ),
      },
      {
        children: <h3>Some texy</h3>,
      },
      {
        children: <Collapse items={items} />,
      },
      {
        children: <Collapse items={items} />,
      },
      {
        children: <Collapse items={items} />,
      },
      {
        children: 'Network problems being solved 2015-09-01',
      },
    ]}
  />
)

export default GermanyTimeline

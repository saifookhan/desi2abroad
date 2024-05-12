'use client'
import React, { useEffect, useState } from 'react'
import { get, ref } from 'firebase/database'
import { Collapse } from 'antd'
import { db } from './firebaseConfig'

const { Panel } = Collapse

const App: React.FC = () => {
  const [data, setData] = useState<any[]>([])
  const [loading, setLoading] = useState(true) // Added loading state

  const parentStyler = {
    width: '60%',
    margin: '50px auto',
    border: 'none',
    color: '#fff',
  }
  const childStyle = {
    background: '#fff',
    marginTop: '5px',
    border: 'none',
  }
  useEffect(() => {
    console.log('Fetching data...')
    const fetchData = async () => {
      try {
        const dataRef = ref(db, '1hBI5WUxiwG06kncYRV7qhQcO52GqX5qYfup_zfBtN6Q/Sheet1')
        const snapshot = await get(dataRef)
        console.log(snapshot.exists())
        if (snapshot.exists()) {
          const dataArray: any[] = []
          snapshot.forEach((childSnapshot) => {
            const childData = childSnapshot.val()
            dataArray.push(childData)
          })
          console.log('Data fetched:', dataArray)
          setData(dataArray)
        } else {
          console.log('No data available')
        }
        setLoading(false) // Mark loading as false after data retrieval
      } catch (error) {
        console.error('Error fetching data:', error)
        setLoading(false) // Ensure loading is marked as false even if there's an error
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  console.log('Data:', data)

  return (
    <div style={{ padding: '20px' }}>
      <Collapse accordion style={parentStyler}>
        {data.map((item: any) => (
          <Panel header={item.Question} key={item.ID} style={childStyle}>
            <p>
              <strong>Answer:</strong> {item.Answer}
            </p>
            <p>
              <strong>Topic:</strong> {item.Topic}
            </p>
            <p>
              <strong>Video Link:</strong> <a href={item.VideoLink}>{item.VideoLink}</a>
            </p>
          </Panel>
        ))}
      </Collapse>
    </div>
  )
}

export default App

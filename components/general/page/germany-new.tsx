'use client'

import React, { useState, useEffect } from 'react'
import { getApps, initializeApp } from 'firebase/app'
import { getDatabase, ref, get, child } from 'firebase/database'
import { Collapse } from 'antd'

const { Panel } = Collapse

const GermanyNewPage = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: 'AIzaSyCVwCEWiqqWeZ-MOVy4w72mD6PDxzEjvJ8',
      authDomain: 'desi2abroad-com.firebaseapp.com',
      databaseURL: 'https://desi2abroad-com-default-rtdb.europe-west1.firebasedatabase.app',
      projectId: 'desi2abroad-com',
      storageBucket: 'desi2abroad-com.appspot.com',
      messagingSenderId: '120248603952',
      appId: '1:120248603952:web:1a7ede86f3c13748d7e4f5',
      measurementId: 'G-8DDJZ8QDD1',
    }

    // Initialize Firebase
    const firebaseApp = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]

    // Fetch data from Firebase
    const fetchData = async (firebaseApp) => {
      // const database = getDatabase(firebaseApp)
      const dbRef = ref(getDatabase(firebaseApp))

      get(child(dbRef, `/`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            console.log(snapshot.val())
            //TODO:: map this data onto the list
          } else {
            console.log('No data available')
          }
        })
        .catch((error) => {
          console.error(error)
        })

      // const snapshot = await database
      //   .ref(
      //     'https://desi2abroad-com-default-rtdb.europe-west1.firebasedatabase.app/1hBI5WUxiwG06kncYRV7qhQcO52GqX5qYfup_zfBtN6Q/Sheet1'
      //   )
      //   .once('value')
      // setData(snapshot.val())
    }

    fetchData(firebaseApp)
  }, [])

  return (
    <div>
      <h1>Germany New Page</h1>
      {/* Display fetched data using AntDesign Collapse */}
      <Collapse accordion>
        {Object.entries(data).map(([key, value]) => (
          <Panel header={key} key={key}>
            <p>{value}</p>
          </Panel>
        ))}
      </Collapse>
    </div>
  )
}

export default GermanyNewPage

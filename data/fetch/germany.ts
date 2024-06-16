import { db, dbRef } from 'app/germany-new/firebaseConfig'
import { child, get, goOffline } from 'firebase/database'
import * as XLSX from 'xlsx'

export const GOOGLE_SHEET_ID = '1hBI5WUxiwG06kncYRV7qhQcO52GqX5qYfup_zfBtN6Q'
const GOOGLE_SHEET_URL = `https://docs.google.com/spreadsheets/d/${GOOGLE_SHEET_ID}/edit#gid=0`

async function getGermanyDataFromExcelSheet() {
  'use server'

  try {
    const response = await fetch(GOOGLE_SHEET_URL)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const dataBuffer = await response.arrayBuffer()
    const workbook = XLSX.read(dataBuffer, { type: 'buffer' })
    const sheetName = workbook.SheetNames[0]
    const sheet = workbook.Sheets[sheetName]
    const parsedData = XLSX.utils.sheet_to_json(sheet)

    // Group topics by name
    const groupedTopics = {}
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    parsedData.forEach((item: any) => {
      if (item.B) {
        if (!groupedTopics[item.B]) {
          groupedTopics[item.B] = []
        }
        groupedTopics[item.B].push(item)
      }
    })

    // Convert object of arrays into an array of arrays
    const groupedData = Object.values(groupedTopics)
    return groupedData
  } catch (error) {
    console.error('Error fetching data from Google Sheets:', error)
  }
}

async function getDataFromFirebaseDatabase() {
  'use server'

  const result = await get(child(dbRef, `/`)).then((snapshot) => {
    if (snapshot.exists()) {
      // goOffline(db)

      return snapshot.val()
    } else {
      console.log('No data available')
    }
  })
  return result
}

export { getGermanyDataFromExcelSheet, getDataFromFirebaseDatabase }

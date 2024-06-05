import axios from "axios"
import * as XLSX from 'xlsx'

const Data=async ()=>{
  

    // Link to Google Sheets file
  const GOOGLE_SHEET_URL =
  'https://docs.google.com/spreadsheets/d/1hBI5WUxiwG06kncYRV7qhQcO52GqX5qYfup_zfBtN6Q/edit#gid=0'


    try {
        const response = await axios.get(GOOGLE_SHEET_URL, {
          responseType: 'arraybuffer',
        })
        const dataBuffer = response.data
        const workbook = XLSX.read(dataBuffer, { type: 'buffer' })
        const sheetName = workbook.SheetNames[0]
        const sheet = workbook.Sheets[sheetName]
        const parsedData = XLSX.utils.sheet_to_json(sheet)
  
        // Group topics by name
        const groupedTopics: { [key: string]: any[] } = {}
        parsedData.forEach((item) => {
          if (item.B) {
            if (!groupedTopics[item.B]) {
              groupedTopics[item.B] = []
            }
            groupedTopics[item.B].push(item)
          }
        })
  
        // Convert object of arrays into an array of arrays
        const groupedData = Object.values(groupedTopics)
        console.log(groupedData)
        return groupedData;
      
      } catch (error) {
        console.error('Error fetching data from Google Sheets:', error)
    
      }
   
}


export default Data
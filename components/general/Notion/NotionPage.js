import React from 'react'
import { NotionRenderer } from 'react-notion-x'
import 'react-notion-x/src/styles.css'

const NotionPage = ({ recordMap }) => {
  return <NotionRenderer recordMap={recordMap} fullPage={true} darkMode={false} />
}

export default NotionPage

// components/NotionPage.js
import { NotionRenderer } from 'react-notion-x'
import 'react-notion-x/src/styles.css'

const NotionPage = ({ recordMap }) => (
  <NotionRenderer recordMap={recordMap} fullPage={true} darkMode={false} />
)

export default NotionPage

// lib/notion.js

import { NotionAPI } from 'notion-client'

const notion = new NotionAPI()

export async function getPageContent(pageId) {
  const x = await notion.getPage(pageId)
  console.log(x)
  return null
}

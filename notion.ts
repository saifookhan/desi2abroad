// lib/notion.js
import { NotionAPI } from 'notion-client'

const notion = new NotionAPI()

export const getPageData = async () => {
  var pageId = '06fa9762f4c0484193fe7e3d5b58fa5a'
  await console.log(notion.getPage(pageId))
  return await notion.getPage(pageId)
}

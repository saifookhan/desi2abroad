import { NotionAPI } from 'notion-client'

const notion = new NotionAPI()

export async function getPageContent(pageId) {
  return await notion.getPage(pageId)
}

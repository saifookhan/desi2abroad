import { NotionAPI } from 'notion-client'

const notion = new NotionAPI()

export const getPageData = async (pageId) => {
  return await notion.getPage(pageId)
}

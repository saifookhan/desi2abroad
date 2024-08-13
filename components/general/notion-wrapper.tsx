import React from 'react'
import NotionPage from './react-notion'
import { getPageData } from 'notion'

export async function getStaticPaths() {
  // Define your page IDs here
  const paths = [{ params: { pageId: '06fa9762f4c0484193fe7e3d5b58fa5a' } }]

  return {
    paths,
    fallback: true, // false or 'blocking' if you want to render new pages on demand
  }
}

export async function getStaticProps({ params }) {
  const pageId = params.pageId
  const recordMap = await getPageData(pageId)

  return {
    props: {
      recordMap,
    },
    revalidate: 10, // Revalidate the data every 10 seconds
  }
}

const Page = ({ recordMap }) => {
  return <NotionPage recordMap={recordMap} />
}

export default Page

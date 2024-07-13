'use client'

import React from 'react'
import NotionPage from '../../components/general/Notion/NotionPage'
import { getPageContent } from 'src/lib/notion';

export async function generateStaticParams() {
  // Define your page IDs here
  const pageIds = [
    '06fa9762f4c0484193fe7e3d5b58fa5a',
  ];

  return pageIds.map((pageId) => ({
    pageId,
  }));
}

export default async function Page({ params }) {
  const { pageId } = params;
  const recordMap = await getPageContent(pageId);

  console.log(JSON.stringify(recordMap))

  return null;

  return <NotionPage recordMap={recordMap} />;
}
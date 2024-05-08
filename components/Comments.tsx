'use client'

import { Comments as CommentsComponent } from 'pliny/comments'
import { useState } from 'react'
import siteMetadata from '@/data/siteMetadata'
import SectionContainer from './SectionContainer'

export default function Comments({ slug }: { slug: string }) {
  const [loadComments, setLoadComments] = useState(false)
  return (
    <SectionContainer backgroundStyle={'white'}>
      {siteMetadata.comments && (
        <div className="px-4">
          <CommentsComponent commentsConfig={siteMetadata.comments} slug={slug} />
        </div>
      )}
    </SectionContainer>
  )
}

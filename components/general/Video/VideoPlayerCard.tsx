'use client'

import YouTube from '@/components/mdx/YouTube'
import React, { memo } from 'react'

function VideoPlayerCard({ embedId, name }) {
  return (
    <div className="mt-4 mb-4 rounded-md flex items-center justify-center">
      <div className="flex-1 mr-1">
        <div className="w-full">
          <YouTube id={embedId} />
        </div>
        <div>
          <h4 className="text-lg font-medium text-black">{name}</h4>
          <p className="mt-2 font-hairline text-black text-sm text-grey-darker">
            desi2Abroad
            <span className="w-3 h-3 text-black inline-block text-center rounded-full bg-grey-dark text-2xs">
              &#10004;
            </span>
          </p>
          <p className="mt-1 text-black font-hairline text-xs text-grey-darker">
            336K views &middot; 1 month ago
          </p>
          <p className="inline text-black  block p-1 text-grey-darker bg-grey-lighter font-hairline text-2xs">
            CC
          </p>
        </div>
      </div>
    </div>
  )
}

export default memo(VideoPlayerCard)

'use client'

import FacebookEmbed from '@/components/mdx/FacebookEmbed'
import YouTube from '@/components/mdx/YouTube'
import React, { memo } from 'react'

function VideoPlayerCard({ embedId, name, playerSite }) {
  return (
    <div className="mt-4 mb-4 rounded-md flex items-center justify-center">
      <div className="flex-1 mr-1">
        <div className="w-full">
          {playerSite === 'facebook' ? <FacebookEmbed id={embedId} /> : <YouTube id={embedId} />}
        </div>
        <div>
          <h4 className="text-lg font-medium text-black">{name}</h4>
          <p className="font-hairline text-black text-sm text-grey-darker">
            desi2Abroad
            <span className="w-3 h-3 text-black inline-block text-center rounded-full bg-grey-dark text-2xs">
              &#10004;
            </span>
          </p>
          <p className="mt-1 text-black font-hairline text-xs text-grey-darker">
            336K views &middot; 1 month ago
          </p>
        </div>
      </div>
    </div>
  )
}

export default memo(VideoPlayerCard)

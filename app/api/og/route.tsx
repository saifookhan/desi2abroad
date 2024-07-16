import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'
import FlowCover from './flow'

export const config = {
  runtime: 'edge',
}

export async function GET(req: NextRequest) {
  return new ImageResponse(
    (
      <div
        tw="flex w-full h-full flex-col justify-end bg-slate-200 items-stretch"
        style={{
          display:'flex',
          backgroundImage:
            'url(https://scastiel.dev/_next/image?url=%2Fposts%2Fcreate-og-images-for-your-blog-with-nextjs%2Fog-result-01.png&w=3840&q=75)',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '1280 700',
        }}
      >
        <div>
          <img
            src="https://desi2abroad.com/_next/image?url=%2Fstatic%2Fimages%2Flogo.png&w=64&q=75"
            style={{ width: '100' }}
          ></img>
        </div>
        <h1 style={{ position: 'absolute', top: '0' }}>hello</h1>
      </div>
    ),
    { width: 1200, height: 628 }
  )
}

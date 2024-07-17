import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'
import FlowCover from './flow'

export const config = {
  runtime: 'edge',
}

export async function GET(req: NextRequest) {
  const {searchParams}=new URL(req.url)

  const hasTitle = searchParams.has('title')
  const hasDesc = searchParams.has('desc')
  const hasImage = searchParams.has('image')
  const title = hasTitle ? searchParams.get('title')?.slice(0, 100) : 'Frontend'
  const desc = hasDesc
    ? searchParams.get('desc')?.slice(0, 100)
    : 'this is a dummy description thanks for reading'
  const Image = hasImage
    ? searchParams.get('image')?.slice(0, 100)
    : 'https://desi2abroad.com/_next/image?url=%2Fstatic%2Fimages%2Favatar.png&w=384&q=75'
  return new ImageResponse(
    (
      <div tw="flex w-full h-[100vh] bg-white flex-col justify-end items-stretch">
        <div tw="flex flex-col h-[30%] px-4">
          <h1>{title}</h1>
          <p>{desc}</p>
        </div>
        <div tw="flex h-[70%] overflow-hidden">
          <img tw='h-full w-full ' src={Image}></img>
        </div>
      </div>
    ),
    { width: 1200, height: 628 }
  )
}

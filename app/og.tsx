import { NextRequest, NextResponse } from 'next/server'
import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'edge',
}

export default function handler(req) {
  const { searchParams } = new URL(req.url)
  const title = searchParams.get('title') || 'Default Title'
  const description = searchParams.get('description') || 'Default Description'

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          height: '100%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          backgroundColor: '#fff',
          fontSize: 48,
          fontWeight: 'bold',
        }}
      >
        <div>{title}</div>
        <div style={{ fontSize: 24 }}>{description}</div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}

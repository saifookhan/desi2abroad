import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

export const config = {
  runtime: 'edge',
}

export async function GET(req: NextRequest) {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          backgroundColor: '#1A1A1A',
          color: '#FFFFFF',
          width: '1200px',
          height: '630px',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          fontSize: '48px',
          padding: '64px',
        }}
      >
        <div>Aashir</div>
        <div style={{ fontSize: '24px', marginTop: '32px' }}>hello world</div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}

import { ImageResponse } from '@vercel/og'
import { chromium } from '@playwright/test'
import type { NextRequest } from 'next/server'

export const config = {
  runtime: 'edge',
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const targetUrl = searchParams.get('url')

  if (!targetUrl) {
    return new Response('Missing URL parameter', { status: 400 })
  }

  const browser = await chromium.launch()
  const page = await browser.newPage()
  await page.goto(targetUrl, { waitUntil: 'networkidle' })

  const screenshot = await page.screenshot({ type: 'jpeg' })
  await browser.close()

  return new ImageResponse(
    <img src={`data:image/jpeg;base64,${screenshot.toString('base64')}`} />,
    {
      width: 1200,
      height: 630,
    }
  )
}

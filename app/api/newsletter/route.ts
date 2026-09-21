import { NextResponse } from 'next/server'

export async function POST() {
  return NextResponse.json(
    {
      error: 'Newsletter signups have been discontinued. The printable guide is available without signing up.',
      downloadUrl: '/downloads/bryan-johnson-sauna-protocol.pdf',
    },
    { status: 410 }
  )
}

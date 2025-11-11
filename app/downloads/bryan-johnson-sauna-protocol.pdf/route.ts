import { redirect } from 'next/navigation'

export async function GET() {
  // Redirect to the printable version of the protocol
  redirect('/protocols/bryan-johnson?print=true')
}


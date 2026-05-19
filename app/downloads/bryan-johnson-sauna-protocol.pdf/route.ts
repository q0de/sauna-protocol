import { redirect } from 'next/navigation'

export async function GET() {
  // Keep the legacy PDF URL working while serving the latest printable guide.
  redirect('/downloads/bryan-johnson-sauna-protocol')
}

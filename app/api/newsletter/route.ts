import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase/client'

export async function POST(request: Request) {
  try {
    const { email, firstName, leadMagnet } = await request.json()

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // Save to Supabase
    const { error: dbError } = await supabase
      .from('email_subscribers')
      .insert([
        {
          email,
          lead_magnet: leadMagnet || 'general',
          status: 'active',
        },
      ])

    if (dbError && !dbError.message.includes('duplicate')) {
      console.error('Supabase error:', dbError)
      return NextResponse.json(
        { error: 'Failed to save subscription' },
        { status: 500 }
      )
    }

    // Send to ConvertKit (if configured)
    if (process.env.CONVERTKIT_API_KEY && process.env.CONVERTKIT_FORM_ID) {
      try {
        const convertkitResponse = await fetch(
          `https://api.convertkit.com/v3/forms/${process.env.CONVERTKIT_FORM_ID}/subscribe`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              api_key: process.env.CONVERTKIT_API_KEY,
              email,
              first_name: firstName || '',
              tags: [leadMagnet || 'general'],
            }),
          }
        )

        if (!convertkitResponse.ok) {
          console.error('ConvertKit error:', await convertkitResponse.text())
        }
      } catch (convertkitError) {
        console.error('ConvertKit request failed:', convertkitError)
        // Don't fail the whole request if ConvertKit fails
      }
    }

    return NextResponse.json(
      { success: true, message: 'Successfully subscribed!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    )
  }
}


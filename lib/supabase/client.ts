import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// Create a client with empty credentials if env vars are missing (for build time)
// This will fail at runtime if you try to use it, but allows the build to complete
export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-key'
)

// Database types
export type Article = {
  id: string
  slug: string
  title: string
  excerpt: string | null
  published_at: string | null
  updated_at: string | null
  view_count: number
  category: string | null
  keywords: string[] | null
}

export type EmailSubscriber = {
  id: string
  email: string
  subscribed_at: string
  lead_magnet: string | null
  status: string
}

export type AffiliateClick = {
  id: string
  product_slug: string
  clicked_at: string
  referrer: string | null
  converted: boolean
}

export type Comment = {
  id: string
  article_slug: string
  author_name: string | null
  author_email: string | null
  content: string
  created_at: string
  approved: boolean
}


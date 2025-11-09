# SaunaProtocol.com

Evidence-based sauna protocols and equipment reviews to optimize your health. Built with Next.js 14, TypeScript, and Supabase.

## 🌟 Features

- **Featured Content**: Bryan Johnson's 200°F sauna protocol with measured results
- **SEO Optimized**: Perfect meta tags, structured data, and dynamic sitemaps
- **MDX Content**: Write articles in Markdown with React components
- **Email Capture**: ConvertKit integration with lead magnets
- **Performance**: 90+ Lighthouse scores, optimized images, static generation
- **Modern UI**: Tailwind CSS + shadcn/ui components

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account (free tier works)
- ConvertKit account (optional)

### Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd sauan-protocol-bj
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
```

Edit `.env.local` and add your credentials:
- Supabase URL and keys (from Supabase dashboard)
- ConvertKit API key and form ID (optional)
- Site URL (use `http://localhost:3000` for development)

4. **Set up Supabase database**

Run the SQL schema in your Supabase SQL editor:
```bash
cat lib/supabase/schema.sql
```

Copy the contents and execute in Supabase dashboard → SQL Editor.

5. **Run the development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your site!

## 📁 Project Structure

```
├── app/                      # Next.js 14 App Router
│   ├── (marketing)/         # Marketing pages (about, contact, privacy)
│   ├── articles/[slug]/     # Article pages
│   ├── protocols/           # Protocol pages
│   ├── equipment/[slug]/    # Equipment review pages
│   ├── api/                 # API routes
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Homepage
├── components/
│   ├── ui/                  # shadcn/ui components
│   ├── layout/              # Header, Footer
│   ├── article/             # Article-specific components
│   ├── seo/                 # SEO components
│   └── email/               # Email capture forms
├── content/
│   ├── articles/            # Article MDX files
│   ├── protocols/           # Protocol MDX files
│   └── equipment/           # Equipment review MDX files
├── lib/
│   ├── supabase/            # Supabase client and schema
│   ├── mdx.ts               # MDX utilities
│   ├── seo.ts               # SEO utilities
│   └── utils.ts             # General utilities
└── public/images/           # Static images
```

## ✍️ Creating Content

### Writing an Article

1. Create a new MDX file in `content/articles/`:
```bash
touch content/articles/your-article-slug.mdx
```

2. Add frontmatter:
```yaml
---
title: "Your Article Title"
slug: "your-article-slug"
excerpt: "Brief description (155 chars max)"
publishedAt: "2025-11-09"
updatedAt: "2025-11-09"
category: "Protocol"
keywords: ["sauna", "health", "protocol"]
heroImage: "/images/articles/hero.jpg"
ogImage: "/images/og/article.jpg"
author: "SaunaProtocol Team"
featured: false
tldr:
  - "Key point 1"
  - "Key point 2"
---
```

3. Write your content using Markdown:
```markdown
## Introduction

Your content here...

## Main Points

- Point 1
- Point 2
```

The article will automatically appear on your site!

### Writing an Equipment Review

Create a file in `content/equipment/` with product-specific frontmatter:
```yaml
---
title: "Product Name Review"
slug: "product-slug"
productName: "Product Name"
brand: "Brand Name"
category: "Sauna Type"
price: 4299
rating: 4.5
reviewCount: 127
affiliateLink: "https://example.com/..."
badge: "BEST VALUE"
quickVerdict: "Quick summary..."
pros:
  - "Pro 1"
  - "Pro 2"
cons:
  - "Con 1"
  - "Con 2"
---
```

## 🚢 Deployment

### Deploy to Vercel

1. **Connect your repository**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```

2. **Deploy to Vercel**
- Go to [vercel.com](https://vercel.com)
- Import your repository
- Add environment variables from `.env.local`
- Deploy!

Your site will be live at `https://your-project.vercel.app`

3. **Add custom domain**
- Go to Project Settings → Domains
- Add `saunaprotocol.com`
- Update DNS records as instructed

## 🔧 Development

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 📊 SEO Setup

After deployment:

1. **Google Search Console**
   - Add your site
   - Submit sitemap: `https://saunaprotocol.com/sitemap.xml`

2. **Google Analytics** (optional)
   - Add tracking ID to `.env.local`

3. **Bing Webmaster Tools**
   - Add your site
   - Submit sitemap

## 🔑 Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Yes | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Yes | Supabase anonymous key |
| `SUPABASE_SERVICE_ROLE_KEY` | Yes | Supabase service role key |
| `CONVERTKIT_API_KEY` | No | ConvertKit API key |
| `CONVERTKIT_FORM_ID` | No | ConvertKit form ID |
| `NEXT_PUBLIC_SITE_URL` | Yes | Your site URL |
| `NEXT_PUBLIC_GA_ID` | No | Google Analytics ID |

## 📝 Content Roadmap

### Launch Week (Priority)
- ✅ Bryan Johnson's Sauna Protocol
- ⏳ Sauna Before or After Workout (KD 0, 6,200 volume)
- ⏳ Ultimate Sauna Protocol Guide
- ⏳ How Long to Sit in Sauna
- ⏳ Dry Sauna vs Wet Sauna

### Month 1
- 10 total articles
- 3 protocol pages
- 5 equipment reviews

## 🤝 Contributing

This is a personal project, but suggestions are welcome!

## 📄 License

All rights reserved - SaunaProtocol.com

## 🔗 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com)
- [Tailwind CSS](https://tailwindcss.com/docs)

## 🆘 Support

Questions? Contact us at [contact form](/contact) or open an issue.

---

**Built with ❤️ by SaunaProtocol Team**

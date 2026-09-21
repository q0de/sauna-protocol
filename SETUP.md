# SaunaProtocol.com - Setup Guide

## ✅ Project Status: COMPLETE!

Your SaunaProtocol.com website is fully built and ready to launch! 🎉

## 🚀 What's Been Built

### ✅ Core Features
- ✅ Next.js 16 with TypeScript and App Router
- ✅ Tailwind CSS + shadcn/ui components
- ✅ Local product images and MDX content (no database required)
- ✅ MDX content management system
- ✅ SEO optimized (meta tags, structured data, sitemaps)
- ✅ Printable protocol guide with no signup
- ✅ Responsive mobile-first design

### ✅ Pages Built
- ✅ Homepage with all sections (hero, protocols, articles, printable guide)
- ✅ **Bryan Johnson Protocol Page** (FEATURED - complete with video embed, specs, results)
- ✅ Article listing page
- ✅ Dynamic article pages with MDX rendering, TOC, related articles
- ✅ Equipment review template with pros/cons, affiliate links
- ✅ About page
- ✅ Contact page
- ✅ Privacy policy page
- ✅ Automated sitemap.xml and robots.txt

### ✅ Components
- ✅ Header with mobile menu
- ✅ Footer with navigation
- ✅ Direct links to the printable guide
- ✅ SEO components (structured data, breadcrumbs)
- ✅ Article components (MDX renderer, table of contents)
- ✅ UI components (buttons, cards, badges, accordions, tabs)

### ✅ Sample Content
- ✅ **"Sauna Before or After Workout"** article (fully written, 2,500+ words, SEO optimized)

## 📋 Next Steps to Launch

### 1. Install Dependencies

Use Node.js 20.9+ and run `npm install`.

### 2. Set Up Environment Variables

Create `.env.local`:
```dotenv
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Set the production value to `https://saunaprotocol.com`. No Supabase or ConvertKit account, database setup, or API credentials are required. Product images and the optional hero video are included in `public/`.

### 3. Test Locally

```bash
# The dev server should already be running!
# If not, start it with:
npm run dev

# Open http://localhost:3000 in your browser
```

### 4. Deploy to Vercel (10 minutes)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial SaunaProtocol site"
   git push
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Add environment variables from your `.env.local`
   - Click "Deploy"

3. **Add Custom Domain:**
   - Go to Project Settings → Domains
   - Add `saunaprotocol.com`
   - Follow DNS instructions

### 5. Submit to Search Engines

Once deployed:

1. **Google Search Console:**
   - Add your site at [search.google.com/search-console](https://search.google.com/search-console)
   - Submit your sitemap: `https://saunaprotocol.com/sitemap.xml`

2. **Bing Webmaster Tools:**
   - Add your site at [bing.com/webmasters](https://www.bing.com/webmasters)
   - Submit your sitemap

## 📝 Creating Content

### Writing Articles

1. Create a new `.mdx` file in `content/articles/`:
   ```bash
   # Example: content/articles/dry-vs-wet-sauna.mdx
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
   keywords: ["sauna", "health"]
   heroImage: "/images/articles/hero.jpg"
   ogImage: "/images/og/article.jpg"
   author: "SaunaProtocol Team"
   featured: false
   tldr:
     - "Key point 1"
     - "Key point 2"
   ---
   ```

3. Write content in Markdown below the frontmatter
4. Article automatically appears on the site!

### Priority Articles to Write

Based on your requirements, here are the high-priority articles:

1. **Sauna Before or After Workout** ✅ DONE!
2. **Ultimate Sauna Protocol Guide** - Pillar content, 4,000 words
3. **How Long to Sit in Sauna** - 9,500 traffic potential
4. **Dry Sauna vs Wet Sauna** - KD 1, easy win
5. **Beginner Protocol Page** - /protocols/beginner

## 🎨 Customization

### Update Colors

Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: '#ff6b6b',    // Red/heat
  secondary: '#2196f3',  // Blue/cool
  accent: '#f59e0b',     // Orange/energy
}
```

### Add Images

Place images in:
- `/public/images/articles/` - Article images
- `/public/images/og/` - OpenGraph images (1200x630px)
- `/public/images/equipment/` - Product images

### Update Site Info

Edit `lib/seo.ts` to update:
- Site name
- Default OG image
- Site description

## 🔧 Maintenance

### Check for Issues
```bash
npm run build    # Check for build errors
npm run lint     # Check for code issues
```

### Update Dependencies
```bash
npm update       # Update packages
```

## 📊 Analytics

### Add Google Analytics (Optional)

1. Create a GA4 property
2. Add to `.env.local`:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

### Vercel Analytics

Vercel Analytics is already integrated! View your traffic in the Vercel dashboard.

## 🎯 Content Roadmap

### Week 1 (Launch)
- ✅ Bryan Johnson Protocol
- ✅ Sauna Before/After Workout article
- ⏳ Beginner Protocol page
- ⏳ 2-3 more articles

### Month 1
- Target: 10 articles total
- 3 protocol pages
- 5 equipment reviews
- Submit to Google Search Console

### Month 3
- Target: 20+ articles
- 5,000-8,000 monthly visitors
- 3-5 keywords in top 10

## 🆘 Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Environment Variables Not Working
- Make sure `.env.local` exists (not `.env`)
- Restart dev server after adding variables
- Variables starting with `NEXT_PUBLIC_` are exposed to the browser

### Retiring the Previous Supabase Project

Follow the retirement checklist in `README.md`: privately export any existing subscribers, deploy and verify the site, then review other project consumers before changing paid resources. Site changes do not cancel Supabase billing automatically.

## 📚 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [MDX Docs](https://mdxjs.com/)

## 🎉 You're Ready to Launch!

Your site is production-ready. Just:
1. Set the site URL
2. Deploy to Vercel
3. Start creating content!

Need help? Check the README.md for more detailed instructions.

---

**Built with ❤️ by Cursor AI**


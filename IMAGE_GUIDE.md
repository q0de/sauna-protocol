# Image Guide for SaunaProtocol.com

## 📸 Image Requirements & SEO Best Practices

### Image Specifications

**Formats:** WebP (primary), JPEG (fallback)  
**Optimization:** Use Next.js Image component for automatic optimization  
**Naming:** Descriptive, lowercase, hyphens (e.g., `bryan-johnson-sauna-protocol.jpg`)

---

## 🎯 Required Images by Section

### 1. Homepage Hero Section
**Location:** `/public/images/hero/`

**Image:** `sauna-hero.jpg` (1920x1080px)
- **Alt Text:** "Modern luxury sauna interior with wooden benches and warm lighting"
- **Description:** High-quality image of a premium sauna interior, well-lit, inviting
- **Keywords:** sauna interior, luxury sauna, home sauna setup
- **Suggested Sources:** 
  - Unsplash: Search "luxury sauna interior"
  - Pexels: Search "modern sauna"
  - Your own: Take photo of a premium sauna

---

### 2. Bryan Johnson Protocol Section
**Location:** `/public/images/protocols/`

**Image 1:** `bryan-johnson-profile.jpg` (600x600px)
- **Alt Text:** "Bryan Johnson biohacker and longevity expert"
- **Description:** Professional photo of Bryan Johnson
- **Source:** Official Bryan Johnson press photos / Blueprint website

**Image 2:** `bryan-johnson-sauna.jpg` (1200x800px)
- **Alt Text:** "Person using sauna following Bryan Johnson's 200°F protocol"
- **Description:** Someone in a sauna at high temperature, monitoring time/temp
- **Keywords:** sauna protocol, high temperature sauna, Bryan Johnson method

---

### 3. Protocol Cards Section
**Location:** `/public/images/protocols/`

**Beginner Protocol:** `beginner-sauna.jpg` (800x600px)
- **Alt Text:** "Comfortable beginner-friendly sauna setup at moderate temperature"
- **Description:** Inviting, lower-temp sauna scene
- **Keywords:** beginner sauna, gentle sauna, sauna for beginners

**Advanced Protocol:** `advanced-sauna.jpg` (800x600px)
- **Alt Text:** "High-intensity sauna session for advanced users"
- **Description:** More intense sauna scene, steam/heat visible
- **Keywords:** advanced sauna, high temperature sauna, intense sauna

---

### 4. Articles Section
**Location:** `/public/images/articles/`

**Article Hero Images:** (1200x630px - OG image size)

1. **Sauna Before or After Workout**
   - File: `sauna-workout-timing.jpg`
   - Alt: "Athlete timing sauna session around workout for optimal recovery"
   - Shows: Person in gym clothes near sauna, or workout-to-sauna transition

2. **Future Articles** (to add):
   - `how-long-sauna-session.jpg` - Clock/timer in sauna
   - `dry-vs-wet-sauna.jpg` - Split image showing both types
   - `sauna-benefits-cardiovascular.jpg` - Heart health concept
   - `home-sauna-buying-guide.jpg` - Modern home sauna

---

### 5. Equipment Reviews
**Location:** `/public/images/equipment/`

**Product Images:** (1200x900px)
- File naming: `[brand]-[model]-[type].jpg`
- Examples:
  - `almost-heaven-barrel-sauna.jpg`
  - `clearlight-infrared-sauna.jpg`
  - `finnleo-traditional-sauna.jpg`

**Alt Text Format:** "[Brand] [Model] [Type] sauna - [Key Feature]"
- Example: "Almost Heaven Barrel Sauna - Premium Finnish cedar construction"

---

### 6. OpenGraph (OG) Images
**Location:** `/public/images/og/`
**Size:** 1200x630px (Facebook/LinkedIn standard)

**default.jpg** - Site-wide default
- Text overlay: "SaunaProtocol"
- Subtitle: "Evidence-Based Sauna Protocols"
- Background: Professional sauna image with gradient overlay

**bryan-johnson-protocol.jpg**
- Text: "Bryan Johnson's 200°F Sauna Protocol"
- Stats overlay: "200°F | 25 min | 4x/week"
- Background: High-temp sauna image

**article-template.jpg** (for articles without custom OG)
- Text: "SaunaProtocol Guide"
- Background: Clean sauna image

---

## 🖼️ Image Optimization Checklist

### Before Adding Images:

- [ ] **Resize** to exact dimensions needed
- [ ] **Compress** using tools like:
  - [TinyPNG](https://tinypng.com/) - Lossless compression
  - [Squoosh](https://squoosh.app/) - Google's image optimizer
  - [ImageOptim](https://imageoptim.com/) - Mac app
- [ ] **Convert to WebP** format for better performance
- [ ] **Keep JPG fallback** for older browsers
- [ ] **Add descriptive filenames** (not IMG_1234.jpg)
- [ ] **Write SEO-optimized alt text** (descriptive, includes keywords)

### Alt Text Best Practices:

✅ **Good:** "Man relaxing in Finnish-style dry sauna at 180°F temperature"
❌ **Bad:** "Sauna image" or "IMG_1234"

**Formula:** [Subject] + [Action] + [Context] + [Relevant Details]

---

## 📥 Where to Get Images

### Free Stock Photos (Commercial Use):
1. **Unsplash** - https://unsplash.com/
   - Search: "sauna", "spa", "wellness", "relaxation"
   - High quality, free for commercial use
   
2. **Pexels** - https://pexels.com/
   - Search: "sauna interior", "steam room", "infrared sauna"
   - Good variety of sauna images

3. **Pixabay** - https://pixabay.com/
   - Search: "sauna", "finnish sauna"
   - Free, no attribution required

### Paid Stock Photos (Premium):
1. **Shutterstock** - Professional sauna photography
2. **Adobe Stock** - High-end commercial images
3. **Getty Images** - Premium editorial photos

### Custom Photography:
- Visit local sauna shops/spas
- Take your own photos
- Hire photographer for branded content
- Use AI generation (Midjourney, DALL-E) for concepts

---

## 🎨 Image Style Guide

### Consistent Look:
- **Warm tones** - Oranges, reds, natural wood colors
- **Well-lit** - Bright, inviting, not dark/dingy
- **Professional** - High resolution, sharp focus
- **Aspirational** - Premium, luxury feel
- **Authentic** - Real saunas, not overly staged

### Colors to Emphasize:
- Natural wood tones (cedar, pine)
- Warm lighting (amber, orange glow)
- Steam/heat effects (subtle)
- Clean, modern aesthetics

### Avoid:
- Dark, poorly lit images
- Crowded or cluttered scenes
- Low resolution or pixelated
- Overly stock-photo looking
- Generic spa/gym stock photos

---

## 🚀 Implementation with Next.js Image

```tsx
import Image from 'next/image'

// Optimized image component
<Image
  src="/images/hero/sauna-hero.jpg"
  alt="Modern luxury sauna interior with wooden benches and warm lighting"
  width={1920}
  height={1080}
  priority // For above-the-fold images
  quality={90}
  placeholder="blur" // Optional: add blur placeholder
  className="rounded-2xl"
/>
```

### Priority Images:
- Homepage hero
- Bryan Johnson protocol card
- Article hero images (above fold)

### Lazy-loaded Images:
- Equipment gallery
- Related articles
- Footer content
- Below-the-fold content

---

## 📊 Image SEO Checklist

- [ ] Descriptive, keyword-rich file names
- [ ] Comprehensive alt text (not keyword stuffing)
- [ ] Proper image dimensions declared
- [ ] WebP format with JPG fallback
- [ ] Compressed/optimized file size
- [ ] Responsive images for mobile
- [ ] Open Graph images for social sharing
- [ ] Image sitemap (auto-generated by Next.js)

---

## 🎯 Priority Image List (Start Here)

### Immediate (Launch Week):
1. ✅ Homepage hero image
2. ✅ Bryan Johnson protocol featured image  
3. ✅ Default OG image
4. ✅ Article: "Sauna Before or After Workout" hero

### Week 2:
5. Protocol card thumbnails (3 images)
6. Equipment review images (top 3 products)
7. Article OG images for top content

### Month 1:
8. All equipment review images
9. Custom OG images for all articles
10. Author/team photos for About page

---

## 📝 Image Tracking Sheet

| Image | Location | Size | Format | Alt Text | Status |
|-------|----------|------|--------|----------|--------|
| sauna-hero.jpg | /hero/ | 1920x1080 | WebP | Modern luxury sauna... | ⏳ Needed |
| bryan-johnson-sauna.jpg | /protocols/ | 1200x800 | WebP | Person using sauna... | ⏳ Needed |
| default.jpg | /og/ | 1200x630 | JPG | SaunaProtocol OG | ⏳ Needed |

---

**Note:** All images should be added to the `/public/images/` directory and referenced using Next.js Image component for automatic optimization, responsive sizing, and lazy loading.


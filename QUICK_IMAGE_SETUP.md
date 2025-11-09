# 🖼️ Quick Image Setup Guide

## ⚡ 5-Minute Image Setup

### Step 1: Download Free Sauna Images

**Visit Unsplash:** https://unsplash.com/s/photos/sauna

Search and download these 3 priority images:

1. **Hero Image** - "luxury sauna interior" 
   - Save as: `public/images/hero/sauna-hero.jpg`
   - Alt text: "Modern luxury sauna interior with wooden benches and warm lighting"

2. **Bryan Johnson Section** - "modern sauna"
   - Save as: `public/images/protocols/bryan-johnson-sauna.jpg`
   - Alt text: "High-temperature sauna session following Bryan Johnson's protocol"

3. **Default OG Image** - "finnish sauna"
   - Save as: `public/images/og/default.jpg`
   - Size: Crop to 1200x630px
   - Alt text: "SaunaProtocol - Evidence-based sauna protocols and equipment reviews"

### Step 2: Compress Images

Use **TinyPNG**: https://tinypng.com/
- Drag and drop your 3 images
- Download compressed versions
- Replace in `/public/images/` folders

### Step 3: Images Are Auto-Optimized

Next.js Image component automatically:
- ✅ Generates multiple sizes for responsive design
- ✅ Converts to WebP format
- ✅ Lazy loads below-the-fold images  
- ✅ Adds blur placeholders
- ✅ Optimizes for performance

---

## 📸 Recommended Unsplash Images

### Best Free Sauna Photos:

1. **For Homepage Hero:**
   - https://unsplash.com/photos/luxury-sauna-interior
   - Search: "luxury sauna" "modern sauna" "finnish sauna"
   - Look for: Warm lighting, wood interior, inviting atmosphere

2. **For Protocol Cards:**
   - Search: "sauna wellness" "spa interior" "infrared sauna"
   - Look for: Clean, modern, high-quality photography

3. **For Articles:**
   - Search: "fitness recovery" "wellness" "health optimization"
   - Look for: Action shots, lifestyle images, health concepts

---

## 🎨 Image Style Guidelines

### ✅ Choose Images That Are:
- **High resolution** (at least 1920px wide for hero)
- **Well-lit** (bright, warm, inviting)
- **Professional** (sharp, in focus)
- **Warm-toned** (amber, orange, natural wood colors)
- **Aspirational** (premium, luxury feel)

### ❌ Avoid Images That Are:
- Dark or poorly lit
- Blurry or low resolution
- Generic stock photo looking
- Crowded or cluttered
- Cool-toned (blue, clinical)

---

## 🚀 Adding Images to Your Site

### Using Next.js Image Component:

```tsx
import Image from 'next/image'

<Image
  src="/images/hero/sauna-hero.jpg"
  alt="Modern luxury sauna interior with wooden benches"
  width={1920}
  height={1080}
  priority
  className="rounded-2xl"
/>
```

### Image Locations:

```
public/images/
├── hero/               # Homepage hero: 1920x1080
├── og/                 # Social sharing: 1200x630
├── articles/           # Article heroes: 1200x800
├── protocols/          # Protocol images: 800x600
└── equipment/          # Product photos: 1200x900
```

---

## 📋 Priority Checklist

### Launch Week (3 images minimum):
- [ ] Homepage hero image
- [ ] Bryan Johnson protocol image
- [ ] Default OG image for social sharing

### Week 2 (Add 5 more):
- [ ] Beginner protocol card image
- [ ] Advanced protocol card image
- [ ] Article hero: "Sauna Before or After Workout"
- [ ] Equipment review #1
- [ ] Equipment review #2

### Month 1 (Complete library):
- [ ] All protocol images
- [ ] All article hero images
- [ ] Custom OG images for top articles
- [ ] Equipment gallery (top 10 products)
- [ ] Benefits section graphics

---

## 🔍 SEO Alt Text Formula

**Format:** [Subject] + [Action/State] + [Context] + [Keywords]

**Examples:**

✅ "Man relaxing in traditional Finnish sauna at 180 degrees fahrenheit"  
✅ "Modern infrared sauna interior with red cedar benches and soft lighting"  
✅ "Bryan Johnson demonstrating high-temperature sauna protocol for longevity"

❌ "Sauna" (too short)  
❌ "IMG_1234.jpg" (not descriptive)  
❌ "sauna sauna hot sauna best sauna" (keyword stuffing)

---

## 💡 Pro Tips

1. **Batch Download:** Get 10-15 images at once from Unsplash
2. **Consistent Style:** Choose images from same photographer for cohesive look
3. **Natural Lighting:** Prefer natural/warm lighting over cool fluorescent
4. **Horizontal Format:** Works better for hero sections and cards
5. **People Optional:** Empty saunas work fine, but lifestyle shots can increase engagement

---

## 🎯 Quick Links

- **Free Images:** [Unsplash Sauna Collection](https://unsplash.com/s/photos/sauna)
- **Compress Tool:** [TinyPNG](https://tinypng.com/)
- **Image Guide:** See `IMAGE_GUIDE.md` for complete specifications
- **Image Folders:** `/public/images/` in your project

---

**Get started in 5 minutes!** Download 3 priority images from Unsplash, compress them, and add to `/public/images/` folders. Your site will look professional immediately! 🚀


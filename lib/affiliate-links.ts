// Affiliate Links Configuration
// Includes both Amazon Associates links and direct manufacturer affiliate programs
// Amazon is used for accessories. Manufacturer programs vary by brand and SKU.

export const affiliateLinks = {
  // ===========================================
  // DIRECT MANUFACTURER AFFILIATE LINKS
  // High-commission programs (8-10%)
  // ===========================================
  
  // Clearlight Saunas - Apply at: https://www.clearlight.com/affiliate-program
  // Public Awin terms list 5% base commission for eligible wellness products.
  // Major sauna cabins are excluded: Sanctuary Full Spectrum, Sanctuary Outdoor,
  // Premier IS-1-3, and custom builds. Treat cabin links as editorial/referral
  // links until the private SAUNAPROTOCOL terms are confirmed.
  clearlight: {
    main: 'https://www.clearlight.com/?ref=SAUNAPROTOCOL',
    sanctuary2: 'https://www.clearlight.com/sanctuary-full-spectrum/?ref=SAUNAPROTOCOL', // Cabin link; public terms may exclude commission
    sanctuary3: 'https://www.clearlight.com/sanctuary-full-spectrum/?ref=SAUNAPROTOCOL', // Cabin link; public terms may exclude commission
    premier: 'https://www.clearlight.com/premier-far-infrared/?ref=SAUNAPROTOCOL', // Cabin link; public terms may exclude commission
    essential: 'https://www.clearlight.com/essential-full-spectrum/?ref=SAUNAPROTOCOL', // Confirm terms before relying on commission
    outdoorSanctuary: 'https://www.clearlight.com/outdoor-sauna/?ref=SAUNAPROTOCOL', // Cabin link; public terms may exclude commission
  },
  
  // Sunlighten Saunas - Apply at: https://www.sunlighten.com/affiliate-program
  // Commission: 8-10% on $4,000-$12,000+ products = $320-1,200 per sale
  sunlighten: {
    main: 'https://www.sunlighten.com/?ref=SAUNAPROTOCOL', // TODO: Replace with actual affiliate link after approval
    mPulse: 'https://www.sunlighten.com/mpulse-smart-sauna/?ref=SAUNAPROTOCOL', // mPulse smart saunas
    signature: 'https://www.sunlighten.com/signature/?ref=SAUNAPROTOCOL', // Signature line
    solo: 'https://www.sunlighten.com/solo-system/?ref=SAUNAPROTOCOL', // Solo portable
  },
  
  // ===========================================
  // AMAZON AFFILIATE LINKS
  // Lower commission (1-4%) - use for accessories
  // ===========================================
  
  // Thermometers
  thermometerDialTraditional: 'https://www.amazon.com/dp/B08KYC3T7R?tag=saunaprotocol-20', // Bjerg Instruments Pine Wood Analog - 248°F - ~$17
  thermometerHygrometerCombo: 'https://amzn.to/49Kpw6L', // Northwood Sauna - Finnish Pine - $29.97 ✅
  thermometerDigital: 'https://www.amazon.com/dp/B07WF1JPX8?tag=saunaprotocol-20', // Digital Sauna Thermometer & Hygrometer
  
  // Timers
  timerSand15Min: 'https://www.amazon.com/dp/B08GS9CMZ2?tag=saunaprotocol-20', // Northwood Sauna Cedar Sand Timer - 15 min
  timerSand20Min: 'https://www.amazon.com/dp/B07C7SD6XG?tag=saunaprotocol-20', // HSE Cedar Box Sand Timer - 15 min (closest)
  timerDigitalRemote: 'https://www.amazon.com/dp/B07QSDWXWT?tag=saunaprotocol-20', // Navaris Sauna Hourglass Pine Wood - 15 min
  timerIntervalWaterproof: 'https://www.amazon.com/s?k=sauna+timer+waterproof&tag=saunaprotocol-20', // Search - waterproof timer
  timerMechanicalStainless: 'https://amzn.to/3JS8KZ3', // VOVCIG Stainless Steel - 55 min - $22.98 ✅ CORRECTED
  
  // Towels
  towelsLinen2Pack: 'https://amzn.to/3JI4Ce8', // COTTON CRAFT Waffle - 4 pack - $39.99 ✅
  towelsTurkishCotton: 'https://amzn.to/443EHnU', // White Classic Luxury - 700 GSM - $37.99 ✅ CORRECTED
  
  // Buckets & Ladles
  bucketLadleWooden: 'https://amzn.to/4p5RNJD', // 5L Pine Bucket & Ladle - $54.99 ✅
  bucketLadleStainless: 'https://www.amazon.com/dp/B00JD34I1W?tag=saunaprotocol-20', // FINO Stainless Steel Bucket & Ladle Set
  
  // Comfort Accessories
  backrestWooden: 'https://www.amazon.com/dp/B01HIXPL14?tag=saunaprotocol-20', // HSE Canadian Red Cedar S-Shape Backrest
  backrestErgonomic: 'https://www.amazon.com/dp/B0BFZTG9DN?tag=saunaprotocol-20', // Northwood Sauna Cedar Ergonomic S-Shape Backrest
  pillowSauna: 'https://www.amazon.com/s?k=sauna+headrest+pillow+bamboo&tag=saunaprotocol-20', // Search - sauna pillow/headrest
  
  // Ice Packs & Recovery
  icePackTesticles: 'https://amzn.to/4qTfeY9', // Undeez Vasectomy Ice Pack - 2 custom fit - $39.00 ✅
  icePackHead: 'https://amzn.to/487cn6y', // Quboora Head Ice Pack - 2 pcs - $9.99 ✅
  
  // Aromatherapy
  essentialOilsSet: 'https://amzn.to/4nPEA6M', // Breathe Essential Oil Blend - Eucalyptus - $11.49 ✅ CORRECTED
  
  // Cleaning Supplies
  cleanerWoodNatural: 'https://www.amazon.com/s?k=sauna+wood+cleaner+natural&tag=saunaprotocol-20', // Search - natural wood cleaner
  brushSoftBristle: 'https://www.amazon.com/s?k=sauna+brush+soft+bristle&tag=saunaprotocol-20', // Search - soft bristle brush
  clothsMicrofiber: 'https://www.amazon.com/s?k=microfiber+cleaning+cloths&tag=saunaprotocol-20', // Search - microfiber cloths
  disinfectantSpray: 'https://www.amazon.com/s?k=sauna+cleaner+disinfectant+spray&tag=saunaprotocol-20', // Search - sauna disinfectant
  
  // Tracking & Wearables
  heartRateMonitorPolar: 'https://amzn.to/4qVba9R', // Polar H10 - ANT+ Bluetooth - $104.95 ✅ CORRECTED
  heartRateMonitorGarmin: 'https://www.amazon.com/dp/B0B3PNFK9H?tag=saunaprotocol-20', // Garmin HRM-Pro Plus Chest Strap - ~$129
  ouraRing: 'https://www.amazon.com/s?k=oura+ring+gen+3&tag=saunaprotocol-20', // Amazon search (no direct Oura affiliate yet)
  
  // Lighting
  ledLightFixture: 'https://amzn.to/4p42AE6', // COB LED Strip 2700K Warm White - $30.99 ✅
  chromotherapySystem: 'https://www.amazon.com/s?k=sauna+chromotherapy+LED+light&tag=saunaprotocol-20', // Search - chromotherapy lights
  
  // Sound Systems
  speakerBluetoothHeatResistant: 'https://amzn.to/49e0X24', // INSMY C12 IPX7 Waterproof - $21.59 ✅
  speakerSystemWired: 'https://www.amazon.com/s?k=sauna+speaker+heat+resistant+wired&tag=saunaprotocol-20', // Search - wired sauna speakers
  
  // General Amazon Search Links
  searchSaunaThermometers: 'https://amazon.com/s?k=sauna+thermometer&tag=saunaprotocol-20',
  searchSaunaTowels: 'https://amazon.com/s?k=sauna+towels+linen&tag=saunaprotocol-20',
  searchSaunaTimers: 'https://amazon.com/s?k=sauna+timer&tag=saunaprotocol-20',
  searchSaunaAccessories: 'https://amazon.com/s?k=sauna+accessories&tag=saunaprotocol-20',
}

// Helper function to add tracking parameters to URLs
// Only works with simple string URLs, not nested objects like clearlight/sunlighten
export function getAffiliateLink(key: keyof typeof affiliateLinks, additionalParams?: Record<string, string>): string {
  const link = affiliateLinks[key]
  
  // If the link is an object (like clearlight or sunlighten), return the main URL
  if (typeof link === 'object' && link !== null) {
    return (link as { main: string }).main
  }
  
  let url = link as string
  
  // Add additional tracking parameters if provided
  if (additionalParams) {
    const urlObj = new URL(url)
    Object.entries(additionalParams).forEach(([k, value]) => {
      urlObj.searchParams.set(k, value)
    })
    url = urlObj.toString()
  }
  
  return url
}

// Affiliate Program Disclosure
export const affiliateDisclosure = {
  short: "We earn commissions from qualifying purchases.",
  full: "We have affiliate relationships with Clearlight Saunas, Sunlighten, Amazon, and other brands mentioned on this site. When you purchase through our links, we earn a commission at no extra cost to you. This supports our ability to test products and create free, evidence-based content.",
  manufacturerNote: "We partner directly with premium sauna manufacturers like Clearlight and Sunlighten. These partnerships allow us to offer our readers direct access to the best products while supporting our mission to provide research-backed sauna protocols.",
}

// Link to affiliate application pages (for internal reference)
export const affiliatePrograms = {
  clearlight: 'https://www.clearlight.com/affiliate-program',
  sunlighten: 'https://www.sunlighten.com/affiliate-program',
  shareASale: 'https://www.shareasale.com', // Check for other sauna brands
  cjAffiliate: 'https://www.cj.com', // Commission Junction - check for sauna brands
}

// Affiliate Links Configuration
// Includes both Amazon Associates links and direct manufacturer affiliate programs
// Direct manufacturer programs offer 8-10% commission vs Amazon's 1-4%

export const affiliateLinks = {
  // ===========================================
  // DIRECT MANUFACTURER AFFILIATE LINKS
  // High-commission programs (8-10%)
  // ===========================================
  
  // Clearlight Saunas - Apply at: https://www.clearlight.com/affiliate-program
  // Commission: 8-10% on $3,000-$6,000+ products = $240-600 per sale
  clearlight: {
    main: 'https://www.clearlight.com/?ref=SAUNAPROTOCOL', // TODO: Replace with actual affiliate link after approval
    sanctuary2: 'https://www.clearlight.com/sanctuary-full-spectrum/?ref=SAUNAPROTOCOL', // 2-person Sanctuary
    sanctuary3: 'https://www.clearlight.com/sanctuary-full-spectrum/?ref=SAUNAPROTOCOL', // 3-person Sanctuary
    premier: 'https://www.clearlight.com/premier-far-infrared/?ref=SAUNAPROTOCOL', // Premier line
    essential: 'https://www.clearlight.com/essential-full-spectrum/?ref=SAUNAPROTOCOL', // Essential line
    outdoorSanctuary: 'https://www.clearlight.com/outdoor-sauna/?ref=SAUNAPROTOCOL', // Outdoor
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
  thermometerDialTraditional: 'https://amazon.com/dp/YOUR-AFFILIATE-LINK', // TODO: Add traditional dial thermometer
  thermometerHygrometerCombo: 'https://amzn.to/49Kpw6L', // Northwood Sauna - Finnish Pine - $29.97 ✅
  thermometerDigital: 'https://amazon.com/dp/YOUR-AFFILIATE-LINK', // TODO: Add digital thermometer
  
  // Timers
  timerSand15Min: 'https://amazon.com/dp/YOUR-AFFILIATE-LINK',
  timerSand20Min: 'https://amazon.com/dp/YOUR-AFFILIATE-LINK',
  timerDigitalRemote: 'https://amazon.com/dp/YOUR-AFFILIATE-LINK',
  timerIntervalWaterproof: 'https://amazon.com/dp/YOUR-AFFILIATE-LINK',
  timerMechanicalStainless: 'https://amzn.to/3JS8KZ3', // VOVCIG Stainless Steel - 55 min - $22.98 ✅ CORRECTED
  
  // Towels
  towelsLinen2Pack: 'https://amzn.to/3JI4Ce8', // COTTON CRAFT Waffle - 4 pack - $39.99 ✅
  towelsTurkishCotton: 'https://amzn.to/443EHnU', // White Classic Luxury - 700 GSM - $37.99 ✅ CORRECTED
  
  // Buckets & Ladles
  bucketLadleWooden: 'https://amzn.to/4p5RNJD', // 5L Pine Bucket & Ladle - $54.99 ✅
  bucketLadleStainless: 'https://amazon.com/dp/YOUR-AFFILIATE-LINK',
  
  // Comfort Accessories
  backrestWooden: 'https://amazon.com/dp/YOUR-AFFILIATE-LINK',
  backrestErgonomic: 'https://amazon.com/dp/YOUR-AFFILIATE-LINK',
  pillowSauna: 'https://amazon.com/dp/YOUR-AFFILIATE-LINK',
  
  // Ice Packs & Recovery
  icePackTesticles: 'https://amzn.to/4qTfeY9', // Undeez Vasectomy Ice Pack - 2 custom fit - $39.00 ✅
  icePackHead: 'https://amzn.to/487cn6y', // Quboora Head Ice Pack - 2 pcs - $9.99 ✅
  
  // Aromatherapy
  essentialOilsSet: 'https://amzn.to/4nPEA6M', // Breathe Essential Oil Blend - Eucalyptus - $11.49 ✅ CORRECTED
  
  // Cleaning Supplies
  cleanerWoodNatural: 'https://amazon.com/dp/YOUR-AFFILIATE-LINK',
  brushSoftBristle: 'https://amazon.com/dp/YOUR-AFFILIATE-LINK',
  clothsMicrofiber: 'https://amazon.com/dp/YOUR-AFFILIATE-LINK',
  disinfectantSpray: 'https://amazon.com/dp/YOUR-AFFILIATE-LINK',
  
  // Tracking & Wearables
  heartRateMonitorPolar: 'https://amzn.to/4qVba9R', // Polar H10 - ANT+ Bluetooth - $104.95 ✅ CORRECTED
  heartRateMonitorGarmin: 'https://amazon.com/dp/YOUR-AFFILIATE-LINK',
  ouraRing: 'https://ouraring.com/product/horizon-silver?ref=YOUR-AFFILIATE',
  
  // Lighting
  ledLightFixture: 'https://amzn.to/4p42AE6', // COB LED Strip 2700K Warm White - $30.99 ✅
  chromotherapySystem: 'https://amazon.com/dp/YOUR-AFFILIATE-LINK',
  
  // Sound Systems
  speakerBluetoothHeatResistant: 'https://amzn.to/49e0X24', // INSMY C12 IPX7 Waterproof - $21.59 ✅
  speakerSystemWired: 'https://amazon.com/dp/YOUR-AFFILIATE-LINK',
  
  // General Amazon Search Links
  searchSaunaThermometers: 'https://amazon.com/s?k=sauna+thermometer&tag=saunaprotocol-20',
  searchSaunaTowels: 'https://amazon.com/s?k=sauna+towels+linen&tag=saunaprotocol-20',
  searchSaunaTimers: 'https://amazon.com/s?k=sauna+timer&tag=saunaprotocol-20',
  searchSaunaAccessories: 'https://amazon.com/s?k=sauna+accessories&tag=saunaprotocol-20',
}

// Helper function to add tracking parameters to URLs
export function getAffiliateLink(key: keyof typeof affiliateLinks, additionalParams?: Record<string, string>) {
  let url = affiliateLinks[key]
  
  // Add additional tracking parameters if provided
  if (additionalParams) {
    const urlObj = new URL(url)
    Object.entries(additionalParams).forEach(([key, value]) => {
      urlObj.searchParams.set(key, value)
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


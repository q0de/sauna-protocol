// Amazon Affiliate Links Configuration
// Replace the placeholder URLs with your actual Amazon Associates affiliate links
// Format: https://amazon.com/dp/PRODUCT-ID?tag=YOUR-AFFILIATE-TAG

export const affiliateLinks = {
  // Thermometers
  thermometerDialTraditional: 'https://amazon.com/dp/YOUR-AFFILIATE-LINK',
  thermometerHygrometerCombo: 'https://amazon.com/dp/YOUR-AFFILIATE-LINK',
  thermometerDigital: 'https://amazon.com/dp/YOUR-AFFILIATE-LINK',
  
  // Timers
  timerSand15Min: 'https://amazon.com/dp/YOUR-AFFILIATE-LINK',
  timerSand20Min: 'https://amazon.com/dp/YOUR-AFFILIATE-LINK',
  timerDigitalRemote: 'https://amazon.com/dp/YOUR-AFFILIATE-LINK',
  timerIntervalWaterproof: 'https://amazon.com/dp/YOUR-AFFILIATE-LINK',
  
  // Towels
  towelsLinen2Pack: 'https://amazon.com/dp/YOUR-AFFILIATE-LINK',
  towelsTurkishCotton: 'https://amazon.com/dp/YOUR-AFFILIATE-LINK',
  
  // Buckets & Ladles
  bucketLadleWooden: 'https://amazon.com/dp/YOUR-AFFILIATE-LINK',
  bucketLadleStainless: 'https://amazon.com/dp/YOUR-AFFILIATE-LINK',
  
  // Comfort Accessories
  backrestWooden: 'https://amazon.com/dp/YOUR-AFFILIATE-LINK',
  backrestErgonomic: 'https://amazon.com/dp/YOUR-AFFILIATE-LINK',
  pillowSauna: 'https://amazon.com/dp/YOUR-AFFILIATE-LINK',
  
  // Aromatherapy
  essentialOilsSet: 'https://amazon.com/dp/YOUR-AFFILIATE-LINK',
  
  // Cleaning Supplies
  cleanerWoodNatural: 'https://amazon.com/dp/YOUR-AFFILIATE-LINK',
  brushSoftBristle: 'https://amazon.com/dp/YOUR-AFFILIATE-LINK',
  clothsMicrofiber: 'https://amazon.com/dp/YOUR-AFFILIATE-LINK',
  disinfectantSpray: 'https://amazon.com/dp/YOUR-AFFILIATE-LINK',
  
  // Tracking & Wearables
  heartRateMonitorPolar: 'https://amazon.com/dp/YOUR-AFFILIATE-LINK',
  heartRateMonitorGarmin: 'https://amazon.com/dp/YOUR-AFFILIATE-LINK',
  ouraRing: 'https://ouraring.com/product/horizon-silver?ref=YOUR-AFFILIATE',
  
  // Lighting
  ledLightFixture: 'https://amazon.com/dp/YOUR-AFFILIATE-LINK',
  chromotherapySystem: 'https://amazon.com/dp/YOUR-AFFILIATE-LINK',
  
  // Sound Systems
  speakerBluetoothHeatResistant: 'https://amazon.com/dp/YOUR-AFFILIATE-LINK',
  speakerSystemWired: 'https://amazon.com/dp/YOUR-AFFILIATE-LINK',
  
  // General Amazon Search Links
  searchSaunaThermometers: 'https://amazon.com/s?k=sauna+thermometer&tag=YOUR-AFFILIATE-TAG',
  searchSaunaTowels: 'https://amazon.com/s?k=sauna+towels+linen&tag=YOUR-AFFILIATE-TAG',
  searchSaunaTimers: 'https://amazon.com/s?k=sauna+timer&tag=YOUR-AFFILIATE-TAG',
  searchSaunaAccessories: 'https://amazon.com/s?k=sauna+accessories&tag=YOUR-AFFILIATE-TAG',
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

// Amazon Associates Program Disclosure
export const affiliateDisclosure = {
  short: "We earn from qualifying purchases through our Amazon affiliate links.",
  full: "We have affiliate relationships with Amazon and other retailers mentioned in this guide. When you purchase through our links, we earn a small commission at no extra cost to you. This helps us continue testing products and creating free content like this guide.",
}


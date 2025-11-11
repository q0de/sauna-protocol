// Amazon Affiliate Links Configuration
// Replace the placeholder URLs with your actual Amazon Associates affiliate links
// Format: https://amazon.com/dp/PRODUCT-ID?tag=YOUR-AFFILIATE-TAG

export const affiliateLinks = {
  // Thermometers
  thermometerDialTraditional: 'https://amazon.com/dp/YOUR-AFFILIATE-LINK', // TODO: Add traditional dial thermometer
  thermometerHygrometerCombo: 'https://amzn.to/49Kpw6L', // Northwood Sauna - Finnish Pine - $29.97 ✅
  thermometerDigital: 'https://amazon.com/dp/YOUR-AFFILIATE-LINK', // TODO: Add digital thermometer
  
  // Timers
  timerSand15Min: 'https://amazon.com/dp/YOUR-AFFILIATE-LINK',
  timerSand20Min: 'https://amazon.com/dp/YOUR-AFFILIATE-LINK',
  timerDigitalRemote: 'https://amazon.com/dp/YOUR-AFFILIATE-LINK',
  timerIntervalWaterproof: 'https://amazon.com/dp/YOUR-AFFILIATE-LINK',
  timerMechanicalStainless: 'https://amzn.to/4oANaal', // VOVCIG Stainless Steel - 55 min - $22.98 ✅ UPDATED
  
  // Towels
  towelsLinen2Pack: 'https://amzn.to/3JI4Ce8', // COTTON CRAFT Waffle - 4 pack - $39.99 ✅
  towelsTurkishCotton: 'https://amzn.to/3JrK1iY', // White Classic Luxury - 700 GSM - $37.99 ✅ UPDATED
  
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
  essentialOilsSet: 'https://amzn.to/4qYMk9j', // Breathe Essential Oil Blend - Eucalyptus - $11.49 ✅ UPDATED
  
  // Cleaning Supplies
  cleanerWoodNatural: 'https://amazon.com/dp/YOUR-AFFILIATE-LINK',
  brushSoftBristle: 'https://amazon.com/dp/YOUR-AFFILIATE-LINK',
  clothsMicrofiber: 'https://amazon.com/dp/YOUR-AFFILIATE-LINK',
  disinfectantSpray: 'https://amazon.com/dp/YOUR-AFFILIATE-LINK',
  
  // Tracking & Wearables
  heartRateMonitorPolar: 'https://amzn.to/47YPUYO', // Polar H10 - ANT+ Bluetooth - $104.95 ✅ UPDATED
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

// Amazon Associates Program Disclosure
export const affiliateDisclosure = {
  short: "We earn from qualifying purchases through our Amazon affiliate links.",
  full: "We have affiliate relationships with Amazon and other retailers mentioned in this guide. When you purchase through our links, we earn a small commission at no extra cost to you. This helps us continue testing products and creating free content like this guide.",
}


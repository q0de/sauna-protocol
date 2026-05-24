#!/usr/bin/env node

import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const EXPECTED_TAG = "saunaprotocol-20";
const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const siteRoot = path.resolve(scriptDir, "..");
const layoutPath = path.join(siteRoot, "app/layout.tsx");
const layout = await fs.readFile(layoutPath, "utf8");
const errors = [];
const warnings = [];

function fail(message) {
  errors.push(message);
}

function warn(message) {
  warnings.push(message);
}

if (!layout.includes("commission_status") || !layout.includes("confirmed_amazon_associates")) {
  fail("app/layout.tsx: affiliate_click events must include commission_status");
}
if (!layout.includes("manufacturer_unconfirmed_or_limited")) {
  fail("app/layout.tsx: manufacturer/source clicks must be classified as unconfirmed or limited");
}
if (!layout.includes("affiliate_tag") || !layout.includes("page_type")) {
  fail("app/layout.tsx: affiliate_click events must include affiliate_tag and page_type");
}

async function walk(dir) {
  const out = [];
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if ([".next", "node_modules", ".git"].includes(entry.name)) continue;
      out.push(...await walk(full));
    } else if (/\.(ts|tsx|js|jsx|mjs|mdx)$/.test(entry.name)) {
      out.push(full);
    }
  }
  return out;
}

const scanRoots = ["app", "components", "content", "lib"];
const files = [];
for (const root of scanRoots) {
  try {
    files.push(...await walk(path.join(siteRoot, root)));
  } catch {
    // Some roots are optional.
  }
}

let directAmazonCount = 0;
let shortlinkCount = 0;
let manufacturerReferralCount = 0;

for (const file of files) {
  const text = await fs.readFile(file, "utf8");
  const rel = path.relative(siteRoot, file);

  for (const match of text.matchAll(/https?:\/\/(?:www\.)?amazon\.com\/[^"'`\s)<>]+/gi)) {
    directAmazonCount += 1;
    const raw = match[0].replace(/&amp;/g, "&");
    let url;
    try {
      url = new URL(raw);
    } catch {
      fail(`${rel}: invalid Amazon URL: ${raw}`);
      continue;
    }
    const tag = url.searchParams.get("tag");
    if (!tag) {
      fail(`${rel}: Amazon URL is missing tag=${EXPECTED_TAG}: ${raw}`);
    } else if (tag !== EXPECTED_TAG) {
      fail(`${rel}: Amazon URL has wrong tag=${tag}: ${raw}`);
    }
  }

  for (const match of text.matchAll(/https?:\/\/amzn\.to\/[A-Za-z0-9]+/g)) {
    shortlinkCount += 1;
    fail(`${rel}: amzn.to shortlinks are not allowed; use direct Amazon URLs with tag=${EXPECTED_TAG}: ${match[0]}`);
  }

  if (/TODO:\s*Replace with actual affiliate link after approval/i.test(text)) {
    fail(`${rel}: remove TODO affiliate placeholders or classify them as unconfirmed referral/source links`);
  }

  for (const match of text.matchAll(/https?:\/\/(?:www\.)?(clearlight|sunlighten)\.com\/[^"'`\s)<>]*/gi)) {
    manufacturerReferralCount += 1;
    const raw = match[0].replace(/&amp;/g, "&");
    try {
      const url = new URL(raw);
      if (url.searchParams.has("ref") && url.searchParams.get("ref") !== "SAUNAPROTOCOL") {
        fail(`${rel}: manufacturer referral URL has unexpected ref value: ${raw}`);
      }
    } catch {
      fail(`${rel}: invalid manufacturer referral URL: ${raw}`);
    }
  }
}

if (warnings.length) {
  console.warn("Affiliate validation warnings:");
  warnings.forEach((message) => console.warn(`- ${message}`));
}

if (errors.length) {
  console.error("Affiliate validation failed:");
  errors.forEach((message) => console.error(`- ${message}`));
  process.exit(1);
}

console.log(`Affiliate validation passed. Direct Amazon URLs: ${directAmazonCount}. Shortlinks flagged: ${shortlinkCount}. Manufacturer referral/source URLs: ${manufacturerReferralCount}.`);

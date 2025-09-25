#!/usr/bin/env node

/**
 * Deployment Script for Bake & Che Website
 * Ensures deployment always uses the official URL: bakeandche-webiste-official.vercel.app
 */

import { execSync } from 'child_process'
import fs from 'fs'

const OFFICIAL_URL = 'bakeandche-webiste-official.vercel.app'
const PROJECT_NAME = 'bakeandche-website-official'

console.log('🚀 Deploying Bake & Che Website to Official URL...')
console.log(`📍 Target URL: https://${OFFICIAL_URL}`)
console.log(`📦 Project Name: ${PROJECT_NAME}`)

try {
  // Build the project
  console.log('\n📦 Building project...')
  execSync('npm run build', { stdio: 'inherit' })
  
  // Deploy to Vercel with specific project name
  console.log('\n🚀 Deploying to Vercel...')
  execSync(`vercel --prod --name ${PROJECT_NAME}`, { stdio: 'inherit' })
  
  console.log('\n✅ Deployment successful!')
  console.log(`🌐 Your website is live at: https://${OFFICIAL_URL}`)
  
} catch (error) {
  console.error('\n❌ Deployment failed:', error.message)
  process.exit(1)
}

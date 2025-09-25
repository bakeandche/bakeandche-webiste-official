#!/usr/bin/env node

/**
 * Smart Commit Script for Bake & Che Website
 * Intelligently commits changes based on file types and content
 */

import { execSync } from 'child_process'
import fs from 'fs'

// Get commit message from command line or use smart detection
let commitMessage = process.argv[2]

if (!commitMessage) {
  // Smart commit message based on changed files
  try {
    const status = execSync('git status --porcelain', { encoding: 'utf8' })
    const lines = status.trim().split('\n').filter(line => line)
    
    if (lines.length === 0) {
      console.log('✅ No changes to commit')
      process.exit(0)
    }
    
    // Analyze changes to create smart message
    const hasImages = lines.some(line => line.includes('public/images/') || line.includes('.png') || line.includes('.webp'))
    const hasComponents = lines.some(line => line.includes('src/components/'))
    const hasPages = lines.some(line => line.includes('src/pages/'))
    const hasStyles = lines.some(line => line.includes('.css'))
    const hasConfig = lines.some(line => line.includes('vercel.json') || line.includes('package.json'))
    
    if (hasImages) {
      commitMessage = 'Update: Fix image paths and add new images'
    } else if (hasComponents) {
      commitMessage = 'Update: Improve component functionality'
    } else if (hasPages) {
      commitMessage = 'Update: Enhance page content and layout'
    } else if (hasStyles) {
      commitMessage = 'Update: Improve styling and design'
    } else if (hasConfig) {
      commitMessage = 'Update: Configuration and deployment settings'
    } else {
      commitMessage = 'Update: Website improvements and fixes'
    }
  } catch (error) {
    commitMessage = 'Update: Website changes'
  }
}

console.log('🧠 Smart Commit running...')
console.log(`💬 Message: ${commitMessage}`)

try {
  console.log('📦 Staging changes...')
  execSync('git add .', { stdio: 'inherit' })
  
  console.log('💾 Committing changes...')
  execSync(`git commit -m "${commitMessage}"`, { stdio: 'inherit' })
  
  console.log('🚀 Pushing to GitHub...')
  execSync('git push origin main', { stdio: 'inherit' })
  
  console.log('✅ Smart commit completed!')
  console.log('🌐 Changes are now live on Vercel')
  
} catch (error) {
  console.error('❌ Smart commit failed:', error.message)
  process.exit(1)
}

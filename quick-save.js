#!/usr/bin/env node

/**
 * Quick Save Script for Bake & Che Website
 * Automatically commits and pushes changes with a quick message
 */

import { execSync } from 'child_process'

const quickMessages = [
  'Quick save: Website updates',
  'Auto-save: Content changes',
  'Update: Website improvements',
  'Save: Latest changes',
  'Commit: Website updates'
]

// Get a random quick message
const randomMessage = quickMessages[Math.floor(Math.random() * quickMessages.length)]

console.log('⚡ Quick Save running...')
console.log(`💬 Message: ${randomMessage}`)

try {
  // Check if there are any changes to commit
  const status = execSync('git status --porcelain', { encoding: 'utf8' })
  
  if (!status.trim()) {
    console.log('✅ No changes to save')
    process.exit(0)
  }

  console.log('📦 Staging changes...')
  execSync('git add .', { stdio: 'inherit' })
  
  console.log('💾 Quick committing...')
  execSync(`git commit -m "${randomMessage}"`, { stdio: 'inherit' })
  
  console.log('🚀 Pushing to GitHub...')
  execSync('git push origin main', { stdio: 'inherit' })
  
  console.log('✅ Quick save completed!')
  console.log('🌐 Changes are now live on Vercel')
  
} catch (error) {
  console.error('❌ Quick save failed:', error.message)
  process.exit(1)
}

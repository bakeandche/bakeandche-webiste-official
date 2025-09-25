#!/usr/bin/env node

/**
 * Auto-commit script for Bake & Che Website
 * Automatically commits and pushes changes after successful operations
 */

import { execSync } from 'child_process'
import fs from 'fs'

const commitMessage = process.argv[2] || 'Auto-commit: Update website content'

console.log('🤖 Auto-commit script running...')
console.log(`📝 Commit message: ${commitMessage}`)

try {
  // Check if there are any changes to commit
  const status = execSync('git status --porcelain', { encoding: 'utf8' })
  
  if (!status.trim()) {
    console.log('✅ No changes to commit')
    process.exit(0)
  }

  console.log('📦 Staging changes...')
  execSync('git add .', { stdio: 'inherit' })
  
  console.log('💾 Committing changes...')
  execSync(`git commit -m "${commitMessage}"`, { stdio: 'inherit' })
  
  console.log('🚀 Pushing to GitHub...')
  execSync('git push origin main', { stdio: 'inherit' })
  
  console.log('✅ Auto-commit completed successfully!')
  console.log('🌐 Changes are now live on Vercel')
  
} catch (error) {
  console.error('❌ Auto-commit failed:', error.message)
  process.exit(1)
}

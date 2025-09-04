#!/usr/bin/env node

/**
 * Environment Setup Script for BNC Website
 * This script helps you set up your environment variables
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const envTemplate = `# Supabase Configuration
VITE_SUPABASE_URL=your_supabase_project_url_here
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here

# Fal.ai API Configuration
VITE_FAL_KEY=your_fal_ai_api_key_here

# Development Configuration
VITE_APP_URL=http://localhost:3000
VITE_NODE_ENV=development`

const envPath = path.join(__dirname, '.env')

console.log('🚀 Setting up environment for BNC Website...\n')

if (fs.existsSync(envPath)) {
  console.log('⚠️  .env file already exists. Skipping creation.')
  console.log('   If you need to update it, please edit .env manually.\n')
} else {
  try {
    fs.writeFileSync(envPath, envTemplate)
    console.log('✅ Created .env file successfully!')
    console.log('📝 Please edit .env and add your actual credentials:\n')
    console.log('   - VITE_SUPABASE_URL: Your Supabase project URL')
    console.log('   - VITE_SUPABASE_ANON_KEY: Your Supabase anonymous key')
    console.log('   - VITE_FAL_KEY: Your fal.ai API key\n')
  } catch (error) {
    console.error('❌ Error creating .env file:', error.message)
    process.exit(1)
  }
}

console.log('🎉 Environment setup complete!')
console.log('💡 Next steps:')
console.log('   1. Edit .env with your actual credentials')
console.log('   2. Run: npm run dev')
console.log('   3. Open: http://localhost:3000')

# Auto-Commit Commands

This project now includes automatic commit functionality to streamline development workflow.

## Available Commands

### Quick Commands
```bash
npm run save          # Quick save with random message
npm run commit        # Auto-commit with custom message
npm run smart         # Smart commit (analyzes changes)
```

### Usage Examples

#### Quick Save (Recommended for small changes)
```bash
npm run save
```
- Automatically stages all changes
- Uses a random friendly commit message
- Pushes to GitHub immediately
- Perfect for quick fixes and updates

#### Custom Commit Message
```bash
npm run commit "Fix navigation menu styling"
```
- Allows you to specify a custom commit message
- Automatically stages and pushes changes

#### Smart Commit (Analyzes your changes)
```bash
npm run smart
```
- Automatically detects what type of changes you made
- Creates appropriate commit messages:
  - Images: "Update: Fix image paths and add new images"
  - Components: "Update: Improve component functionality"
  - Pages: "Update: Enhance page content and layout"
  - Styles: "Update: Improve styling and design"
  - Config: "Update: Configuration and deployment settings"

## Workflow

1. **Make your changes** to any files
2. **Run auto-commit** with one of the commands above
3. **Changes are automatically:**
   - Staged with `git add .`
   - Committed with appropriate message
   - Pushed to GitHub
   - Deployed to Vercel automatically

## Benefits

- ✅ **No manual git commands needed**
- ✅ **Automatic deployment to Vercel**
- ✅ **Smart commit messages**
- ✅ **Faster development workflow**
- ✅ **Always up-to-date on GitHub**

## Examples

```bash
# After editing a component
npm run save

# After adding new images
npm run smart

# After fixing a bug
npm run commit "Fix: Resolve navigation issue"
```

Your changes will be live on `bakeandche-webiste-official.vercel.app` within minutes!

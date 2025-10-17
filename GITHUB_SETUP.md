# GitHub Deployment Instructions

## 📝 Step 1: Create GitHub Repository (IN BROWSER NOW)

In the GitHub page that just opened:

1. **Repository name**: `portfolio-website` (or any name you prefer)
2. **Description**: Personal portfolio website for deployment assignment
3. **Visibility**: ✅ **Public** (required for GitHub Pages)
4. **Initialize repository**: ❌ Leave ALL checkboxes UNCHECKED
   - Do NOT add README
   - Do NOT add .gitignore
   - Do NOT choose a license
5. Click **"Create repository"** button

---

## 🚀 Step 2: Push Your Code (RUN THESE COMMANDS)

After creating the repository, GitHub will show you a page with instructions.

Copy your repository URL (it will look like):
`https://github.com/YOUR-USERNAME/portfolio-website.git`

Then run these commands in PowerShell:

```powershell
cd "c:\Users\sride\OneDrive\Desktop\Deployment 1.0"

# Add GitHub repository as remote
git remote add origin https://github.com/YOUR-USERNAME/portfolio-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Replace YOUR-USERNAME with your actual GitHub username!**

---

## 🔑 Authentication

When you run `git push`, you might be asked to authenticate:

### Option 1: GitHub Desktop (Easiest)
- Login through the popup window

### Option 2: Personal Access Token
If it asks for password:
1. Go to https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Give it a name: "Portfolio Deployment"
4. Select scopes: ✅ repo (all)
5. Click "Generate token"
6. Copy the token
7. Use this token as your password when pushing

---

## ✅ After Successful Push

You should see output like:
```
Enumerating objects: X, done.
Counting objects: 100% (X/X), done.
Writing objects: 100% (X/X), done.
To https://github.com/YOUR-USERNAME/portfolio-website.git
 * [new branch]      main -> main
```

Then your code will be on GitHub! 🎉

---

## 📋 What to Tell Me

After you create the repository, tell me:
**"Created repository as: YOUR-USERNAME/portfolio-website"**

Then I'll give you the exact commands to run!

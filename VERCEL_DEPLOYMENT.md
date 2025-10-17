# Vercel Deployment Guide

## 🚀 Easy Deployment Methods

### Method 1: Deploy via GitHub (Recommended - 5 minutes)

#### Step 1: Create GitHub Repository
1. Go to https://github.com/new
2. Repository name: `portfolio-website` (or any name you prefer)
3. Keep it **Public**
4. Don't initialize with README (we already have files)
5. Click "Create repository"

#### Step 2: Push Your Code to GitHub
Open PowerShell in your project folder and run:

```powershell
cd "c:\Users\sride\OneDrive\Desktop\Deployment 1.0"

# Add GitHub as remote (replace YOUR-USERNAME and YOUR-REPO-NAME)
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

#### Step 3: Deploy to Vercel
1. Go to https://vercel.com/
2. Click **"Sign Up"** or **"Log In"** (use your GitHub account)
3. After logging in, click **"Add New..."** → **"Project"**
4. Click **"Import Git Repository"**
5. Find and select your `portfolio-website` repository
6. Click **"Import"**
7. Configure Project:
   - **Framework Preset**: Other
   - **Root Directory**: ./
   - **Build Command**: (leave empty)
   - **Output Directory**: (leave empty)
   - **Install Command**: (leave empty)
8. Click **"Deploy"**
9. Wait 30-60 seconds ⏳
10. **Done!** 🎉 Your site is live!

Your Vercel URL will be: `https://your-repo-name.vercel.app`

---

### Method 2: Direct Upload via Vercel CLI (If you enable scripts)

#### Enable PowerShell Scripts:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

#### Install Vercel CLI:
```powershell
npm install -g vercel
```

#### Deploy:
```powershell
cd "c:\Users\sride\OneDrive\Desktop\Deployment 1.0"
vercel

# For production deployment:
vercel --prod
```

---

## 📝 After Deployment

### Your Three Deployment URLs:

1. **GitHub Pages**: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`
2. **Netlify**: `https://YOUR-SITE-NAME.netlify.app`
3. **Vercel**: `https://YOUR-REPO-NAME.vercel.app`

### Custom Domain (Optional)
In Vercel dashboard:
1. Go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain

## 🔧 Troubleshooting

**Problem: Vercel shows 404 error**
- Make sure `index.html` is in the root directory ✓ (it is!)
- Check that all file paths are relative (no C:\ paths)

**Problem: Images not loading**
- Verify image files are committed to Git
- Check image paths are relative: `./asrithphoto.jpg` or `asrithphoto.jpg`

**Problem: Can't push to GitHub**
- Make sure you created the repository on GitHub first
- Check your GitHub username and repository name in the URL
- You may need to authenticate (use Personal Access Token if asked)

## 🎯 Quick Checklist

- [x] Portfolio created
- [x] Git initialized with commits
- [ ] Pushed to GitHub
- [ ] Deployed to Vercel
- [ ] Tested Vercel URL
- [ ] Shared URL with team/instructor

## 📞 Need Help?

- Vercel Docs: https://vercel.com/docs
- GitHub Docs: https://docs.github.com/
- Video Tutorial: Search "Deploy static site to Vercel" on YouTube

---

**Pro Tip**: After your first deployment, every time you push new commits to GitHub, Vercel will automatically redeploy your site! 🚀

# Deployment Guide - Quick Reference

## 🚀 Quick Deployment Steps

### Before You Deploy - Customize Your Portfolio!

1. Open `index.html` and replace:
   - "Your Name" with your actual name
   - Email, phone, location in the contact section
   - Social media links (GitHub, LinkedIn, Twitter)
   - Projects with your actual projects
   - Skills with your skills

2. Replace placeholder images:
   - Profile picture in About section
   - Project images

### 1️⃣ GitHub Repository Setup

```powershell
# Navigate to your project folder
cd "c:\Users\sride\OneDrive\Desktop\Deployment 1.0"

# Initialize Git
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Personal portfolio website"

# Create a new repository on GitHub (github.com/new)
# Then run (replace with your username and repo name):
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git branch -M main
git push -u origin main
```

### 2️⃣ Deploy to Netlify (Method 1 - Easiest)

1. Visit https://app.netlify.com/drop
2. Drag and drop your entire project folder
3. Done! Your site is live

### 2️⃣ Deploy to Netlify (Method 2 - Git Integration)

1. Go to https://app.netlify.com/
2. Click "New site from Git"
3. Choose GitHub
4. Select your repository
5. Deploy settings:
   - Build command: (leave blank)
   - Publish directory: /
6. Click "Deploy site"
7. Your site is live!

### 3️⃣ Deploy to GitHub Pages

1. Push your code to GitHub (see step 1)
2. Go to your repository on GitHub
3. Click Settings > Pages
4. Under "Source", select `main` branch
5. Select `/ (root)` as folder
6. Click Save
7. Visit: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

### 4️⃣ Deploy to Vercel

**Option A - Import from GitHub:**
1. Go to https://vercel.com/
2. Click "New Project"
3. Import your GitHub repository
4. Leave all settings as default
5. Click "Deploy"

**Option B - Vercel CLI:**
```powershell
# Install Vercel CLI
npm i -g vercel

# Deploy
cd "c:\Users\sride\OneDrive\Desktop\Deployment 1.0"
vercel

# For production deployment
vercel --prod
```

## 📋 Submission Checklist

- [ ] Customized portfolio with your information
- [ ] GitHub repository created with commits
- [ ] Deployed to Netlify (URL: _____________)
- [ ] Deployed to GitHub Pages (URL: _____________)
- [ ] Deployed to Vercel (URL: _____________)
- [ ] All three URLs tested and working
- [ ] Repository link shared with team/instructor

## 🔗 Your Deployment URLs

After deployment, fill in your URLs:

1. **Netlify**: https://your-site.netlify.app
2. **GitHub Pages**: https://your-username.github.io/repo-name
3. **Vercel**: https://your-site.vercel.app

## 💡 Tips

- Make sure `index.html` is in the root directory
- Check that all file paths are relative (no `C:\` paths)
- Test your site locally before deploying
- Keep your Git commits organized with clear messages
- Update README.md with your deployment URLs

## 🐛 Troubleshooting

**Site not loading?**
- Check that `index.html` is in the root directory
- Verify all file names are lowercase
- Check for broken links

**GitHub Pages showing 404?**
- Wait 2-3 minutes after enabling
- Check repository settings
- Ensure index.html is in root

**Form not working?**
- Integrate with FormSpree or EmailJS
- Or use Netlify Forms (add `netlify` attribute to form)

## 📞 Need Help?

- GitHub Guides: https://guides.github.com/
- Netlify Docs: https://docs.netlify.com/
- Vercel Docs: https://vercel.com/docs

Good luck with your deployment! 🎉

# Portfolio Customization Checklist

## ✏️ Required Changes Before Deployment

### 1. Personal Information (index.html)

#### Hero Section (Lines ~30-40)
- [ ] Replace `<span class="highlight">Your Name</span>` with your actual name
- [ ] Update `Full Stack Developer | UI/UX Enthusiast | Problem Solver` with your roles
- [ ] Change description to match your profile

#### Social Links (Lines ~47-51)
- [ ] Update GitHub URL: `https://github.com/yourusername` → your GitHub profile
- [ ] Update LinkedIn URL: `https://linkedin.com/in/yourusername` → your LinkedIn
- [ ] Update Twitter URL or replace with Instagram/other social media

#### About Section (Lines ~59-95)
- [ ] Replace profile image: `https://via.placeholder.com/400x400` → your photo
- [ ] Rewrite the "Hello! I'm a passionate web developer" paragraph with your story
- [ ] Update statistics (10+ Projects, 2+ Years Experience, 5+ Technologies)

#### Skills Section (Lines ~97-165)
- [ ] Keep, remove, or add skills based on what you actually know
- [ ] Adjust skill progress bars (style="width: 90%") to reflect your proficiency
- [ ] Add more skills if needed (follow the same HTML structure)

#### Projects Section (Lines ~167-265)
- [ ] Replace ALL THREE projects with your actual projects
- [ ] For each project:
  - [ ] Change project image (replace placeholder URLs)
  - [ ] Update project title
  - [ ] Write project description
  - [ ] Update technology tags
  - [ ] Add live demo link
  - [ ] Add GitHub repository link

#### Contact Section (Lines ~267-310)
- [ ] Update email: `your.email@example.com` → your real email
- [ ] Update phone: `+1 (123) 456-7890` → your phone (or remove if you don't want to share)
- [ ] Update location: `City, Country` → your location

#### Footer (Lines ~312-330)
- [ ] Change copyright: `Your Name` → your actual name
- [ ] Update footer social links (same as hero section)

### 2. Style Customization (styles.css) - Optional

#### Color Scheme (Lines 8-16)
```css
:root {
    --primary-color: #667eea;    /* Main brand color */
    --secondary-color: #764ba2;   /* Accent color */
    --accent-color: #f093fb;      /* Highlight color */
}
```
- [ ] Choose your own colors or keep the default purple gradient

### 3. Meta Tags (index.html, Lines 4-7)
- [ ] Update `<meta name="description">` with your portfolio description
- [ ] Update `<meta name="keywords">` with relevant keywords
- [ ] Update `<meta name="author">` with your name
- [ ] Update `<title>` tag

### 4. Assets to Replace

#### Images
- [ ] Profile picture for About section
- [ ] 3 project screenshots/images
- [ ] Consider adding a favicon

#### Optional Enhancements
- [ ] Add Google Analytics tracking code
- [ ] Add a custom favicon.ico
- [ ] Replace Font Awesome CDN with local files (for faster loading)

### 5. Form Integration (Optional but Recommended)

Choose one method to make your contact form functional:

**Option A: FormSpree (Easiest)**
1. Sign up at https://formspree.io/
2. Get your form endpoint
3. In index.html, update the form tag:
   ```html
   <form action="https://formspree.io/f/YOUR-FORM-ID" method="POST" id="contactForm">
   ```

**Option B: Netlify Forms**
1. Add `netlify` attribute to form tag:
   ```html
   <form class="contact-form" netlify id="contactForm">
   ```
2. Deploy to Netlify

**Option C: EmailJS**
1. Sign up at https://www.emailjs.com/
2. Follow their integration guide
3. Update script.js with EmailJS code

### 6. GitHub Repository Setup

```powershell
# After customizing, commit your changes:
git add .
git commit -m "Customize portfolio with personal information"

# Create a repository on GitHub, then:
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git branch -M main
git push -u origin main
```

### 7. Testing Before Deployment

- [ ] Open index.html in a browser
- [ ] Test on mobile (browser dev tools → device toolbar)
- [ ] Click all navigation links
- [ ] Test all external links (GitHub, LinkedIn, etc.)
- [ ] Test contact form
- [ ] Check for spelling/grammar errors
- [ ] Verify all images load properly

### 8. Deployment Checklist

- [ ] Deploy to Netlify
- [ ] Deploy to GitHub Pages
- [ ] Deploy to Vercel
- [ ] Test all three deployed URLs
- [ ] Share URLs with your team/instructor

## 📝 Quick Find & Replace

Use your code editor's Find & Replace (Ctrl+H) for quick updates:

| Find | Replace With |
|------|--------------|
| `Your Name` | `Your Actual Name` |
| `your.email@example.com` | `youremail@email.com` |
| `yourusername` | `actualusername` |
| `https://via.placeholder.com/400x400` | `path/to/your/photo.jpg` |
| `https://via.placeholder.com/600x400` | `path/to/project-image.jpg` |

## 🎯 Priority Order

1. **High Priority** (Must do before deployment)
   - Personal name and contact info
   - Social media links
   - At least 1-2 real projects

2. **Medium Priority** (Should do)
   - All three projects with real information
   - Skills section accuracy
   - About section personal story
   - Profile picture

3. **Low Priority** (Nice to have)
   - Color scheme customization
   - Form integration
   - Additional projects
   - Advanced animations

## ✅ Final Check

Before you submit:
- [ ] No "Your Name" text remains
- [ ] No placeholder images remain
- [ ] All links work and point to real URLs
- [ ] Contact information is accurate
- [ ] GitHub repository has commit history
- [ ] All three deployment URLs work
- [ ] Mobile responsive design works

---

**Good luck with your deployment assignment! 🚀**

# Personal Portfolio Website 🚀

A modern, responsive personal portfolio website showcasing skills, projects, and contact information. Built with HTML5, CSS3, and vanilla JavaScript.

## 📋 Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Elements**: Smooth scrolling, form validation, and dynamic effects
- **SEO Optimized**: Meta tags and semantic HTML for better search engine visibility
- **Fast Loading**: Optimized assets and minimal dependencies
- **Cross-browser Compatible**: Works on all modern browsers

## 🎯 Sections Included

1. **About**: Personal introduction and professional statistics
2. **Skills**: Technical skills with visual progress bars
3. **Projects**: Portfolio of completed projects with descriptions
4. **Contact**: Contact form and information

## 🚀 Deployment Instructions

This portfolio can be deployed to three different hosting platforms:

### 1. Deploy to Netlify

**Option A: Drag and Drop**
1. Go to [Netlify](https://www.netlify.com/)
2. Sign up or log in
3. Drag and drop your project folder to the Netlify dashboard
4. Your site will be live instantly!

**Option B: GitHub Integration**
1. Push your code to GitHub (see Git setup below)
2. Go to [Netlify](https://www.netlify.com/) and log in
3. Click "New site from Git"
4. Choose GitHub and select your repository
5. Build settings:
   - Build command: (leave empty)
   - Publish directory: `/`
6. Click "Deploy site"

**Custom Domain (Optional)**
- Go to Site Settings > Domain Management
- Add your custom domain

### 2. Deploy to GitHub Pages

1. Push your code to a GitHub repository
2. Go to repository Settings > Pages
3. Under "Source", select `main` branch
4. Select root (`/`) as the folder
5. Click Save
6. Your site will be available at: `https://yourusername.github.io/repository-name/`

**Important**: If your site doesn't load properly, make sure `index.html` is in the root directory.

### 3. Deploy to Vercel

**Option A: CLI Deployment**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd your-portfolio-folder
vercel

# Follow the prompts
```

**Option B: GitHub Integration**
1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com/) and log in
3. Click "New Project"
4. Import your GitHub repository
5. Configure:
   - Framework Preset: Other
   - Root Directory: ./
   - Build Command: (leave empty)
   - Output Directory: (leave empty)
6. Click "Deploy"

## 💻 Local Development

1. Clone or download this repository
2. Open `index.html` in your web browser
3. Or use a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js http-server
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`

## 🛠️ Customization

### Update Your Information

1. **index.html**: Update personal information, projects, and links
   - Replace "Your Name" with your actual name
   - Update social media links (GitHub, LinkedIn, Twitter)
   - Add your real projects with descriptions
   - Update contact information

2. **styles.css**: Customize colors and styling
   - Change color scheme in `:root` variables
   - Adjust spacing and layouts
   - Modify animations

3. **script.js**: Add or modify interactive features
   - Form submission integration
   - Additional animations
   - Analytics tracking

### Color Scheme

The default colors can be changed in `styles.css`:

```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --accent-color: #f093fb;
    /* Modify these to change the entire color scheme */
}
```

### Adding New Projects

In `index.html`, find the projects section and add:

```html
<div class="project-card">
    <div class="project-image">
        <img src="your-image.jpg" alt="Project Name">
        <div class="project-overlay">
            <a href="#" class="project-link"><i class="fas fa-external-link-alt"></i></a>
        </div>
    </div>
    <div class="project-info">
        <h3>Your Project Name</h3>
        <p>Project description...</p>
        <div class="project-tags">
            <span class="tag">Tech1</span>
            <span class="tag">Tech2</span>
        </div>
        <div class="project-links">
            <a href="#" class="btn-small">Live Demo</a>
            <a href="#" class="btn-small">GitHub</a>
        </div>
    </div>
</div>
```

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # Stylesheet
├── script.js           # JavaScript functionality
├── README.md           # Documentation
└── .gitignore         # Git ignore file
```

## 🔧 Contact Form Integration

The contact form currently shows a demo message. To make it functional, integrate with:

- **FormSpree**: https://formspree.io/
- **EmailJS**: https://www.emailjs.com/
- **Netlify Forms**: Built-in form handling (if deployed on Netlify)
- **Custom Backend**: Your own API endpoint

### Example with FormSpree:

1. Sign up at formspree.io
2. Get your form endpoint
3. Update form in `index.html`:

```html
<form action="https://formspree.io/f/your-form-id" method="POST">
```

## 🎨 Assets Used

- **Icons**: Font Awesome 6.4.0 (CDN)
- **Fonts**: System fonts (Segoe UI)
- **Images**: Placeholder images from placeholder.com (replace with your own)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📝 Git Setup & GitHub Repository

```bash
# Initialize Git repository
git init

# Add all files
git add .

# First commit
git commit -m "Initial commit: Portfolio website"

# Create repository on GitHub, then:
git remote add origin https://github.com/yourusername/your-repo-name.git
git branch -M main
git push -u origin main
```

## 🎓 Assignment Checklist

- [x] Individual portfolio website created
- [x] HTML, CSS, JavaScript implemented
- [x] About section included
- [x] Projects/Skills section included
- [x] Contact section included
- [ ] Deployed on Netlify
- [ ] Deployed on GitHub Pages
- [ ] Deployed on Vercel
- [ ] GitHub repository created with commit history

## 📄 License

This project is open source and available for educational purposes.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📞 Support

If you have any questions or need help with deployment, please create an issue in the GitHub repository.

---

**Made with ❤️ for Deployment Assignment**

*Remember to replace all placeholder content with your actual information before deploying!*

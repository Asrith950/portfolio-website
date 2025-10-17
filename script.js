// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Active Navigation Link
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections and cards
document.querySelectorAll('section, .skill-card, .project-card, .about-image, .about-text').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Skill bars animation
const skillBars = document.querySelectorAll('.skill-progress');
const skillsSection = document.querySelector('.skills');

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            skillBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
            skillObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

if (skillsSection) {
    skillObserver.observe(skillsSection);
}

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        showMessage('Please fill in all fields', 'error');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        showMessage('Please enter a valid email address', 'error');
        return;
    }
    
    // Simulate form submission
    try {
        // In a real application, you would send this to a backend API
        // For demo purposes, we'll just show a success message
        
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        showMessage('Thank you for your message! I will get back to you soon.', 'success');
        contactForm.reset();
        
        // You can integrate with services like:
        // - FormSpree (https://formspree.io/)
        // - EmailJS (https://www.emailjs.com/)
        // - Netlify Forms (if deployed on Netlify)
        // - Your own backend API
        
    } catch (error) {
        showMessage('Oops! Something went wrong. Please try again later.', 'error');
    }
});

function showMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    
    setTimeout(() => {
        formMessage.style.display = 'none';
        formMessage.className = 'form-message';
    }, 5000);
}

// Typing effect for hero subtitle (Optional enhancement)
const subtitleText = document.querySelector('.hero-subtitle');
if (subtitleText) {
    const originalText = subtitleText.textContent;
    const words = originalText.split(' | ');
    let wordIndex = 0;
    
    function typeEffect() {
        const currentWord = words[wordIndex];
        let charIndex = 0;
        subtitleText.textContent = '';
        
        const typeInterval = setInterval(() => {
            if (charIndex < currentWord.length) {
                subtitleText.textContent += currentWord[charIndex];
                charIndex++;
            } else {
                clearInterval(typeInterval);
                setTimeout(() => {
                    wordIndex = (wordIndex + 1) % words.length;
                    typeEffect();
                }, 2000);
            }
        }, 100);
    }
    
    // Uncomment to enable typing effect
    // setTimeout(typeEffect, 1000);
}

// Project card hover effect enhancement
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Trigger animations for visible elements
    const visibleElements = document.querySelectorAll('section:first-of-type, .hero-content');
    visibleElements.forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
    });
});

// Dynamic year in footer
const currentYear = new Date().getFullYear();
const footerText = document.querySelector('.footer-content p');
if (footerText) {
    footerText.textContent = footerText.textContent.replace('2025', currentYear);
}

// Parallax effect for hero section (optional)
const hero = document.querySelector('.hero');
if (hero) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    });
}

// Log to console
console.log('%c Portfolio Website Loaded Successfully! ', 'background: linear-gradient(135deg, #667eea, #764ba2); color: white; padding: 10px; font-size: 14px; border-radius: 5px;');
console.log('%c Customize this portfolio to make it yours! ', 'color: #667eea; font-size: 12px;');

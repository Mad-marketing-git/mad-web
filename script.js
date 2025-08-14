// Phone mockup slideshow logic (Page 4)
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.phone-slide');
    let currentSlide = 0;
    function showSlide(idx) {
        slides.forEach((slide, i) => {
            slide.style.opacity = (i === idx) ? '1' : '0';
        });
    }
    showSlide(currentSlide);
    document.getElementById('phone-slide-prev').addEventListener('click', function() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });
    document.getElementById('phone-slide-next').addEventListener('click', function() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });
    // Optional: auto-advance every 4 seconds
    setInterval(function() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }, 4000);
});
// DOM Elements
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const statNumbers = document.querySelectorAll('.stat-number');

// MAD LOGIC SLIDER
document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.showcase-track');
    const images = document.querySelectorAll('.showcase-img');
    const leftArrow = document.querySelector('.slider-arrow-left');
    const rightArrow = document.querySelector('.slider-arrow-right');
    let currentIndex = 0;
    const visibleCount = 3;
    function updateSlider() {
        const offset = -currentIndex * (images[0].offsetWidth + 32);
        track.style.transform = `translateX(${offset}px)`;
        leftArrow.disabled = currentIndex === 0;
        rightArrow.disabled = currentIndex >= images.length - visibleCount;
    }
    leftArrow.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });
    rightArrow.addEventListener('click', () => {
        if (currentIndex < images.length - visibleCount) {
            currentIndex++;
            updateSlider();
        }
    });
    window.addEventListener('resize', updateSlider);
    updateSlider();
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 14, 26, 0.98)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(10, 14, 26, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animated counter for statistics
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }
    
    updateCounter();
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Animate statistics
            if (entry.target.classList.contains('stats')) {
                statNumbers.forEach(stat => {
                    const target = parseInt(stat.dataset.target);
                    animateCounter(stat, target);
                });
            }
            
            // Add animation classes
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for scroll animations
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Parallax effect for hero background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground) {
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Tech cards floating animation
const techCards = document.querySelectorAll('.tech-card');
techCards.forEach((card, index) => {
    card.addEventListener('mouseenter', () => {
        card.style.animation = 'none';
        card.style.transform = 'translateY(-10px) scale(1.05)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.animation = `float 6s ease-in-out infinite`;
        card.style.animationDelay = `${-2 * index}s`;
        card.style.transform = '';
    });
});

// Video play functionality
document.querySelectorAll('.play-button').forEach(button => {
    button.addEventListener('click', () => {
        // Add your video play logic here
        alert('Video player would open here');
    });
});

// Form submission handlers (for CTA buttons)
document.querySelectorAll('.btn-primary').forEach(button => {
    if (button.textContent.includes('Start Free Trial') || 
        button.textContent.includes('Get Started') ||
        button.textContent.includes('Explore Now')) {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            // Add your form/signup logic here
            showModal('Sign Up', 'Start your free trial today!');
        });
    }
});

document.querySelectorAll('.btn-secondary, .btn-outline').forEach(button => {
    if (button.textContent.includes('Contact Sales') ||
        button.textContent.includes('Schedule Demo')) {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            // Add your contact form logic here
            showModal('Contact Sales', 'Get in touch with our sales team!');
        });
    }
});

// Simple modal function
function showModal(title, message) {
    // Create modal overlay
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
    `;
    
    // Create modal content
    const modal = document.createElement('div');
    modal.style.cssText = `
        background: #1a1f2e;
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 16px;
        padding: 40px;
        max-width: 400px;
        text-align: center;
        color: white;
    `;
    
    modal.innerHTML = `
        <h3 style="margin-bottom: 16px; color: #6366f1;">${title}</h3>
        <p style="margin-bottom: 24px; color: rgba(255, 255, 255, 0.8);">${message}</p>
        <button onclick="this.closest('.modal-overlay').remove()" 
                style="background: #6366f1; color: white; border: none; padding: 12px 24px; border-radius: 8px; cursor: pointer;">
            Close
        </button>
    `;
    
    overlay.className = 'modal-overlay';
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
    
    // Close on overlay click
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.remove();
        }
    });
}

// Add loading animation
window.addEventListener('load', () => {
    // Remove any loading screens
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => loader.remove(), 500);
    }
    
    // Start hero animations
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroCta = document.querySelector('.hero-cta');
    
    if (heroTitle) {
        setTimeout(() => {
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'translateY(0)';
        }, 200);
    }
    
    if (heroSubtitle) {
        setTimeout(() => {
            heroSubtitle.style.opacity = '1';
            heroSubtitle.style.transform = 'translateY(0)';
        }, 400);
    }
    
    if (heroCta) {
        setTimeout(() => {
            heroCta.style.opacity = '1';
            heroCta.style.transform = 'translateY(0)';
        }, 600);
    }
});

// Initialize hero animations
document.addEventListener('DOMContentLoaded', () => {
    const heroElements = ['.hero-title', '.hero-subtitle', '.hero-cta'];
    heroElements.forEach((selector, index) => {
        const element = document.querySelector(selector);
        if (element) {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        }
    });
});

// Testimonial carousel (optional enhancement)
const testimonials = document.querySelectorAll('.testimonial-card');
let currentTestimonial = 0;

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.style.display = i === index ? 'block' : 'none';
    });
}

// Auto-rotate testimonials on smaller screens
if (window.innerWidth < 768) {
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }, 5000);
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close any open modals
        const modals = document.querySelectorAll('.modal-overlay');
        modals.forEach(modal => modal.remove());
    }
});

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(() => {
    // Scroll-based animations here
}, 16)); // ~60fps

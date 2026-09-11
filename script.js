// Mobile Menu Toggle
const menuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('.nav');

menuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Close mobile menu on link click
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Fast scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll(
        '.product-card, .number-item, .contact-card, .feature, .about-visual, .brand-item, .project-card, .branch-card, .vision-item, .leader-card, .mv-card, .machine-item'
    );

    elements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(15px)';
        el.style.transition = `opacity 0.3s ease ${(index % 4) * 0.05}s, transform 0.3s ease ${(index % 4) * 0.05}s`;
        observer.observe(el);
    });

    const style = document.createElement('style');
    style.textContent = '.visible { opacity: 1 !important; transform: translateY(0) !important; }';
    document.head.appendChild(style);
});

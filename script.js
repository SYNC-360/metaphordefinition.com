// ============================================================
// METAPHOR DEFINITION - Main JavaScript
// ============================================================

// ============================================================
// SMOOTH SCROLLING & TOC
// ============================================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
});

// ============================================================
// NAVBAR STICKY BEHAVIOR
// ============================================================

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
    }
});

// ============================================================
// TABLE OF CONTENTS ACTIVE HIGHLIGHTING
// ============================================================

function updateTOCHighlight() {
    const sections = document.querySelectorAll('section[id]');
    const tocLinks = document.querySelectorAll('.toc a');

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - 200 && window.scrollY < sectionTop + sectionHeight - 200) {
            currentSection = section.getAttribute('id');
        }
    });

    tocLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === currentSection) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateTOCHighlight);
document.addEventListener('DOMContentLoaded', updateTOCHighlight);

// ============================================================
// FAQ FUNCTIONALITY
// ============================================================

document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const summary = item.querySelector('summary');

        // Allow native details/summary behavior
        // Remove any interference with default toggle
        item.addEventListener('toggle', function(e) {
            // Add animation class if desired
            if (this.open) {
                this.style.maxHeight = 'none';
            }
        });
    });
});

// ============================================================
// COPY BUTTON FUNCTIONALITY
// ============================================================

function createCopyButton() {
    document.querySelectorAll('pre').forEach(pre => {
        if (!pre.parentElement.classList.contains('embed-card')) {
            const button = document.createElement('button');
            button.className = 'btn btn-small';
            button.textContent = 'Copy';
            button.style.marginTop = '0.5rem';
            button.onclick = function() {
                const text = pre.innerText;
                copyToClipboard(text);
                this.textContent = 'Copied!';
                setTimeout(() => this.textContent = 'Copy', 2000);
            };
            pre.parentElement.insertBefore(button, pre.nextSibling);
        }
    });
}

function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}

// ============================================================
// INITIALIZATION
// ============================================================

document.addEventListener('DOMContentLoaded', function() {
    createCopyButton();

    // Lazy load images if supported
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    observer.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // Add active class to current nav item
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-menu a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (href === '/' && currentPage === '') || (href === '/' && currentPage === 'index.html')) {
            link.style.color = 'var(--primary-color)';
            link.style.fontWeight = '600';
        }
    });
});

// ============================================================
// ANALYTICS & TRACKING (Optional - Add Google Analytics or similar)
// ============================================================

// Example structure for tracking tool usage
const Analytics = {
    trackToolUsage: function(toolName) {
        // Track when users interact with tools
        console.log('Tool used:', toolName);
        // Send to analytics service
    },

    trackFAQClick: function(questionNumber) {
        console.log('FAQ clicked:', questionNumber);
        // Send to analytics service
    }
};

// ============================================================
// PERFORMANCE OPTIMIZATION
// ============================================================

// Defer non-critical CSS loading
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        optimizePerformance();
    });
} else {
    optimizePerformance();
}

function optimizePerformance() {
    // Preload next page resources
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = 'calculator.html';
    document.head.appendChild(link);
}

// ============================================================
// SERVICE WORKER REGISTRATION (Optional - for PWA)
// ============================================================

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Uncomment to enable service worker
        // navigator.serviceWorker.register('sw.js').then(registration => {
        //     console.log('Service Worker registered:', registration);
        // });
    });
}

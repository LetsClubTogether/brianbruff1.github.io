// Main application JavaScript

// Initialize components when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Render all components
    document.getElementById('header').innerHTML = renderHeader();
    document.getElementById('hero').innerHTML = renderHero();
    document.getElementById('value-props').innerHTML = renderValueProps();
    document.getElementById('how-it-works').innerHTML = renderHowItWorks();
    document.getElementById('target-markets').innerHTML = renderTargetMarkets();
    document.getElementById('cta-section').innerHTML = renderCTASection();
    document.getElementById('footer').innerHTML = renderFooter();
    
    // Initialize mobile menu functionality
    initializeMobileMenu();
    
    // Add smooth scrolling
    initializeSmoothScrolling();
    
    // Initialize animations
    initializeAnimations();
    
    // Initialize spotlight effect
    initializeSpotlightEffect();
});

// Mobile menu toggle functionality
function initializeMobileMenu() {
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('open');
            menuIcon.classList.toggle('hidden');
            closeIcon.classList.toggle('hidden');
        });
        
        // Close menu when clicking on a link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('open');
                menuIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
            });
        });
    }
}

// Smooth scrolling for anchor links
function initializeSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerOffset = 80; // Account for fixed header
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialize scroll-based animations
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all glass-card elements
    const cards = document.querySelectorAll('.glass-card');
    cards.forEach(card => {
        observer.observe(card);
    });
}

// Utility function to add event listeners safely
function addEventListenerSafe(selector, event, handler) {
    const element = document.querySelector(selector);
    if (element) {
        element.addEventListener(event, handler);
    }
}

// Form validation helper
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Show notification helper
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-20 right-4 p-4 rounded-lg glass-card animate-fade-in z-50 ${
        type === 'success' ? 'border-green-500' : 
        type === 'error' ? 'border-red-500' : 
        'border-blue-500'
    }`;
    notification.innerHTML = `
        <div class="flex items-center gap-3">
            <span class="${
                type === 'success' ? 'text-green-500' : 
                type === 'error' ? 'text-red-500' : 
                'text-blue-500'
            }">
                ${type === 'success' ? '✓' : type === 'error' ? '✗' : 'ℹ'}
            </span>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('animate-fade-out');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Make showNotification available globally
window.showNotification = showNotification;

// Spotlight hover effect for glass cards and buttons
function initializeSpotlightEffect() {
    // Apply to glass cards
    const glassCards = document.querySelectorAll('.glass-card');
    
    glassCards.forEach(card => {
        card.addEventListener('mouseenter', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
        
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
    
    // Apply to buttons
    const buttons = document.querySelectorAll('.btn-secondary, .glass-button');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            button.style.setProperty('--mouse-x', `${x}px`);
            button.style.setProperty('--mouse-y', `${y}px`);
        });
        
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            button.style.setProperty('--mouse-x', `${x}px`);
            button.style.setProperty('--mouse-y', `${y}px`);
        });
    });
    
    // Add spotlight effect CSS
    const spotlightStyle = document.createElement('style');
    spotlightStyle.textContent = `
        .glass-card, .btn-secondary, .glass-button {
            position: relative;
            overflow: hidden;
        }
        
        .glass-card::before,
        .btn-secondary::before,
        .glass-button::before {
            content: '';
            position: absolute;
            top: var(--mouse-y, 50%);
            left: var(--mouse-x, 50%);
            width: 150px;
            height: 150px;
            background: radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, transparent 70%);
            transform: translate(-50%, -50%);
            opacity: 0;
            transition: opacity 0.3s ease;
            pointer-events: none;
            z-index: 1;
        }
        
        .glass-card:hover::before {
            opacity: 1;
        }
        
        .btn-secondary:hover::before,
        .glass-button:hover::before {
            opacity: 0.7;
        }
        
        /* Ensure content is above the spotlight */
        .glass-card > *,
        .btn-secondary > *,
        .glass-button > * {
            position: relative;
            z-index: 2;
        }
        
        /* Special effect for primary buttons */
        .btn-primary {
            position: relative;
            overflow: hidden;
        }
        
        .btn-primary::before {
            content: '';
            position: absolute;
            top: var(--mouse-y, 50%);
            left: var(--mouse-x, 50%);
            width: 100px;
            height: 100px;
            background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%);
            transform: translate(-50%, -50%);
            opacity: 0;
            transition: opacity 0.3s ease;
            pointer-events: none;
        }
        
        .btn-primary:hover::before {
            opacity: 0.5;
        }
    `;
    document.head.appendChild(spotlightStyle);
    
    // Apply to primary buttons too
    const primaryButtons = document.querySelectorAll('.btn-primary');
    
    primaryButtons.forEach(button => {
        button.addEventListener('mouseenter', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            button.style.setProperty('--mouse-x', `${x}px`);
            button.style.setProperty('--mouse-y', `${y}px`);
        });
        
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            button.style.setProperty('--mouse-x', `${x}px`);
            button.style.setProperty('--mouse-y', `${y}px`);
        });
    });
}
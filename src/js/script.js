// Simple Dark Mode Toggle - Tailwind Standard
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    
    // Get saved theme or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    // Apply saved theme
    if (savedTheme === 'dark') {
        html.classList.add('dark');
        themeToggle.innerHTML = '<span class="text-lg">☀️</span>';
    } else {
        html.classList.remove('dark');
        themeToggle.innerHTML = '<span class="text-lg">🌙</span>';
    }
    
    // Toggle theme on click
    themeToggle.addEventListener('click', function() {
        if (html.classList.contains('dark')) {
            html.classList.remove('dark');
            themeToggle.innerHTML = '<span class="text-lg">🌙</span>';
            localStorage.setItem('theme', 'light');
        } else {
            html.classList.add('dark');
            themeToggle.innerHTML = '<span class="text-lg">☀️</span>';
            localStorage.setItem('theme', 'dark');
        }
    });

    // Mobile menu toggle
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            
            // Toggle hamburger icon
            const icon = mobileMenuToggle.querySelector('svg path');
            if (mobileMenu.classList.contains('hidden')) {
                icon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16'); // Hamburger
            } else {
                icon.setAttribute('d', 'M6 18L18 6M6 6l12 12'); // Close X
            }
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileMenuToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.classList.add('hidden');
                const icon = mobileMenuToggle.querySelector('svg path');
                icon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16'); // Reset to hamburger
            }
        });
    }

    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                    const icon = mobileMenuToggle.querySelector('svg path');
                    icon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16'); // Reset to hamburger
                }
            }
        });
    });

    // Auto-update copyright year
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});
// Dark Mode Toggle with Device Preference Support
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    
    // Function to get initial theme preference
    function getInitialTheme() {
        // Check for saved manual preference first
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            return savedTheme;
        }
        
        // If no saved preference, check device setting
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        
        // Default to light
        return 'light';
    }
    
    // Function to apply theme
    function applyTheme(theme) {
        if (theme === 'dark') {
            html.classList.add('dark');
            themeToggle.innerHTML = '<span class="text-lg">☀️</span>';
        } else {
            html.classList.remove('dark');
            themeToggle.innerHTML = '<span class="text-lg">🌙</span>';
        }
    }
    
    // Apply initial theme
    const initialTheme = getInitialTheme();
    applyTheme(initialTheme);
    
    // Listen for device preference changes (if no manual override)
    if (window.matchMedia) {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        mediaQuery.addEventListener('change', function(e) {
            // Only auto-switch if user hasn't manually set a preference
            if (!localStorage.getItem('theme')) {
                applyTheme(e.matches ? 'dark' : 'light');
            }
        });
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
    
    // Desktop services dropdown toggle
    const desktopServicesToggle = document.getElementById('desktop-services-toggle');
    const desktopServicesMenu = document.getElementById('desktop-services-menu');
    const desktopServicesArrow = document.getElementById('desktop-services-arrow');
    
    if (desktopServicesToggle && desktopServicesMenu && desktopServicesArrow) {
        desktopServicesToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const isOpen = !desktopServicesMenu.classList.contains('opacity-0');
            
            if (isOpen) {
                // Close dropdown
                desktopServicesMenu.classList.add('opacity-0', 'invisible', 'scale-95');
                desktopServicesMenu.classList.remove('opacity-100', 'visible', 'scale-100');
                desktopServicesArrow.classList.remove('rotate-180');
                desktopServicesToggle.setAttribute('aria-expanded', 'false');
            } else {
                // Open dropdown
                desktopServicesMenu.classList.remove('opacity-0', 'invisible', 'scale-95');
                desktopServicesMenu.classList.add('opacity-100', 'visible', 'scale-100');
                desktopServicesArrow.classList.add('rotate-180');
                desktopServicesToggle.setAttribute('aria-expanded', 'true');
            }
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!desktopServicesToggle.contains(e.target) && !desktopServicesMenu.contains(e.target)) {
                desktopServicesMenu.classList.add('opacity-0', 'invisible', 'scale-95');
                desktopServicesMenu.classList.remove('opacity-100', 'visible', 'scale-100');
                desktopServicesArrow.classList.remove('rotate-180');
                desktopServicesToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }
    
    // Mobile services submenu toggle
    const mobileServicesToggle = document.getElementById('mobile-services-toggle');
    const mobileServicesMenu = document.getElementById('mobile-services-menu');
    const mobileServicesArrow = document.getElementById('mobile-services-arrow');
    
    if (mobileServicesToggle && mobileServicesMenu && mobileServicesArrow) {
        mobileServicesToggle.addEventListener('click', function(e) {
            e.preventDefault();
            mobileServicesMenu.classList.toggle('hidden');
            mobileServicesArrow.classList.toggle('rotate-180');
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
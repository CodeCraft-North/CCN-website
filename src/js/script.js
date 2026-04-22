// Dark Mode Toggle with Device Preference Support
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;

    // Storage can throw in hardened or private modes; never abort the rest of this handler (cookie banner, etc.)
    function safeGetLocalStorage(key) {
        try {
            return localStorage.getItem(key);
        } catch (e) {
            return null;
        }
    }

    function safeSetLocalStorage(key, value) {
        try {
            localStorage.setItem(key, value);
        } catch (e) {}
    }

    // Function to get initial theme preference
    function getInitialTheme() {
        const savedTheme = safeGetLocalStorage('theme');
        if (savedTheme) {
            return savedTheme;
        }

        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }

        return 'light';
    }

    // Function to apply theme
    function applyTheme(theme) {
        if (theme === 'dark') {
            html.classList.add('dark');
            if (themeToggle) {
                themeToggle.innerHTML = '<span class="text-lg">☀️</span>';
            }
        } else {
            html.classList.remove('dark');
            if (themeToggle) {
                themeToggle.innerHTML = '<span class="text-lg">🌙</span>';
            }
        }
    }

    const initialTheme = getInitialTheme();
    applyTheme(initialTheme);

    if (window.matchMedia) {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        mediaQuery.addEventListener('change', function(e) {
            if (!safeGetLocalStorage('theme')) {
                applyTheme(e.matches ? 'dark' : 'light');
            }
        });
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            if (html.classList.contains('dark')) {
                html.classList.remove('dark');
                themeToggle.innerHTML = '<span class="text-lg">🌙</span>';
                safeSetLocalStorage('theme', 'light');
            } else {
                html.classList.add('dark');
                themeToggle.innerHTML = '<span class="text-lg">☀️</span>';
                safeSetLocalStorage('theme', 'dark');
            }
        });
    }

    // Mobile menu toggle
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileServicesToggle = document.getElementById('mobile-services-toggle');
    const mobileServicesMenu = document.getElementById('mobile-services-menu');
    const mobileServicesArrow = document.getElementById('mobile-services-arrow');

    function closeMobileMenu() {
        if (mobileMenu) mobileMenu.classList.add('hidden');
        if (mobileMenuToggle) {
            const icon = mobileMenuToggle.querySelector('svg path');
            if (icon) icon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
            mobileMenuToggle.setAttribute('aria-expanded', 'false');
        }
        if (mobileServicesMenu) mobileServicesMenu.classList.add('hidden');
        if (mobileServicesArrow) mobileServicesArrow.classList.remove('rotate-180');
        if (mobileServicesToggle) mobileServicesToggle.setAttribute('aria-expanded', 'false');
    }

    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            const isHidden = mobileMenu.classList.contains('hidden');
            mobileMenu.classList.toggle('hidden');

            const icon = mobileMenuToggle.querySelector('svg path');
            if (mobileMenu.classList.contains('hidden')) {
                if (icon) icon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
            } else {
                if (icon) icon.setAttribute('d', 'M6 18L18 6M6 6l12 12');
                mobileMenuToggle.setAttribute('aria-expanded', 'true');
            }
        });

        document.addEventListener('click', function(e) {
            if (!mobileMenuToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
                closeMobileMenu();
            }
        });

        document.addEventListener('keydown', function(e) {
            if (e.key !== 'Escape') return;
            if (mobileServicesMenu && !mobileServicesMenu.classList.contains('hidden')) {
                mobileServicesMenu.classList.add('hidden');
                if (mobileServicesArrow) mobileServicesArrow.classList.remove('rotate-180');
                if (mobileServicesToggle) mobileServicesToggle.setAttribute('aria-expanded', 'false');
            } else if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                closeMobileMenu();
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
    
    if (mobileServicesToggle && mobileServicesMenu && mobileServicesArrow) {
        mobileServicesToggle.addEventListener('click', function(e) {
            e.preventDefault();
            const isHidden = mobileServicesMenu.classList.contains('hidden');
            mobileServicesMenu.classList.toggle('hidden');
            mobileServicesArrow.classList.toggle('rotate-180');
            mobileServicesToggle.setAttribute('aria-expanded', String(!isHidden));
        });
    }

    // Scroll reveal: fade/slide-in elements with the .reveal class as they enter the viewport.
    // Respects prefers-reduced-motion by revealing everything immediately, and degrades gracefully
    // when IntersectionObserver is unavailable.
    const revealables = document.querySelectorAll('.reveal');
    if (revealables.length) {
        const prefersReducedMotion = window.matchMedia
            && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
            revealables.forEach((el) => el.classList.add('is-visible'));
        } else {
            const revealObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.15,
                rootMargin: '0px 0px -40px 0px'
            });

            revealables.forEach((el) => revealObserver.observe(el));
        }
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
                
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    closeMobileMenu();
                }
            }
        });
    });

    // Auto-update copyright year
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Cookie consent banner and GA gating
    const CONSENT_KEY = 'ccn_consent';
    const GA_ID = 'G-MDYV0G0D42';
    const consentBanner = document.getElementById('cookie-consent-banner');
    const consentAccept = document.getElementById('cookie-consent-accept');
    const consentDecline = document.getElementById('cookie-consent-decline');
    const manageCookies = document.getElementById('manage-cookies');

    function loadGoogleAnalytics() {
        if (document.querySelector('script[src*="googletagmanager.com/gtag"]')) return;
        const s = document.createElement('script');
        s.async = true;
        s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
        document.head.appendChild(s);
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        window.gtag = gtag;
        gtag('js', new Date());
        gtag('config', GA_ID);
    }

    function showConsentBanner() {
        if (consentBanner) consentBanner.classList.remove('hidden');
    }

    function hideConsentBanner() {
        if (consentBanner) consentBanner.classList.add('hidden');
    }

    function setConsent(analytics) {
        try {
            localStorage.setItem(CONSENT_KEY, JSON.stringify({
                analytics: analytics,
                timestamp: Date.now()
            }));
        } catch (e) {}
    }

    function shouldShowBanner() {
        try {
            const stored = localStorage.getItem(CONSENT_KEY);
            if (!stored) return true;
            const prefs = JSON.parse(stored);
            return typeof prefs.analytics !== 'boolean';
        } catch (e) {
            return true;
        }
    }

    if (consentBanner && shouldShowBanner()) {
        showConsentBanner();
    }

    if (consentAccept) {
        consentAccept.addEventListener('click', function() {
            setConsent(true);
            loadGoogleAnalytics();
            hideConsentBanner();
        });
    }

    if (consentDecline) {
        consentDecline.addEventListener('click', function() {
            setConsent(false);
            hideConsentBanner();
        });
    }

    if (manageCookies) {
        manageCookies.addEventListener('click', function() {
            showConsentBanner();
        });
    }
});
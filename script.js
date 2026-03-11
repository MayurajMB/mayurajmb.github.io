document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');

    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('open');
        });

        // Close sidebar when a link is clicked on mobile
        const navLinks = sidebar.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 800) {
                    sidebar.classList.remove('open');
                }
            });
        });
    }

    // SPA Router Logic
    const navItems = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('main.content section.page-section');

    function navigateToSection(hash) {
        if (!hash || hash === '#') {
            hash = '#section-1'; // Default to first section
        }

        // Hide all sections
        sections.forEach(section => {
            section.classList.remove('active');
        });

        // Show target section
        const targetSection = document.querySelector(hash);
        if (targetSection) {
            targetSection.classList.add('active');
            window.scrollTo(0, 0); // Scroll to top of the page
        } else {
            // Fallback if hash doesn't exist
            const defaultSection = document.getElementById('section-1');
            if (defaultSection) defaultSection.classList.add('active');
        }

        // Update active nav link
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === hash) {
                item.classList.add('active');
            }
        });
    }

    // Handle initial load
    navigateToSection(window.location.hash);

    // Handle clicks on navigation links
    navItems.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            history.pushState(null, null, targetId); // Update URL hash without reloading
            navigateToSection(targetId);
        });
    });

    // Handle back/forward browser buttons
    window.addEventListener('popstate', () => {
        navigateToSection(window.location.hash);
    });
});

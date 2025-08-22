// Countdown Timer Implementation
function updateCountdown() {
    const eventDate = new Date('March 13, 2025 17:00:00').getTime();
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    // Calculate days, hours, minutes and seconds
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Display the result
    document.getElementById('days').innerHTML = days.toString().padStart(2, '0');
    document.getElementById('hours').innerHTML = hours.toString().padStart(2, '0');
    document.getElementById('minutes').innerHTML = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').innerHTML = seconds.toString().padStart(2, '0');

    // If the countdown is over, display a message
    if (timeLeft < 0) {
        clearInterval(countdownInterval);
        document.getElementById('countdown').innerHTML = '<div class="col-span-4 text-2xl text-amber-300">Event has started!</div>';
    }
}

// Update countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call

// Loading state handler
document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');

    // Hide loader after content loads
    window.addEventListener('load', () => {
        loader.style.opacity = '0';
        loader.style.transition = 'opacity 0.5s ease-out';

        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    });
});

// 1. NAVIGATION BAR
// Mobile menu toggle with improved functionality
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuButton.addEventListener("click", function (e) {
    e.stopPropagation();
    mobileMenu.classList.toggle("hidden");
});

// Handle mobile menu item clicks
document.querySelectorAll("#mobile-menu a").forEach((link) => {
    link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
    });
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
    if (!mobileMenu.contains(e.target) && !mobileMenuButton.contains(e.target)) {
        mobileMenu.classList.add("hidden");
    }
});

// 2. HERO SECTION
// Add smooth reveal animation when scrolling
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("opacity-100", "translate-y-0");
            }
        });
    },
    {
        threshold: 0.1,
    }
);

// THE SCROLL INDICATOR WHEN CLICKED TO SCROLL DOWN
document.getElementById('scroll-indicator').addEventListener('click', () => {
    const nextSection = document.querySelector('#registration-guide').nextElementSibling;
    nextSection.scrollIntoView({ behavior: 'smooth' });
});

document
    .querySelectorAll(".hero-animate")
    .forEach((el) => observer.observe(el));


// Modal functionality
function openModal(modalId) {
    document.getElementById(modalId).classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal(modal.id);
        }
    });
});

// Close modal on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal').forEach(modal => {
            closeModal(modal.id);
        });
    }
});

// Gallery Filter
document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.gallery-filter');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active', 'bg-primary', 'text-primary'));
            filterButtons.forEach(btn => btn.classList.add('border-2', 'border-primary', 'text-primary'));;

            // Add active class to clicked button
            button.classList.add('active', 'bg-primary', 'text-secondary');
            button.classList.remove('border-2', 'border-primary', 'text-secondary');

            const filterValue = button.getAttribute('data-filter');

            galleryItems.forEach(item => {
                if (filterValue === 'all' || item.classList.contains(filterValue)) {
                    item.style.display = 'block';
                    // Add animation
                    item.style.animation = 'fadeIn 0.5s ease forwards';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});

// Lightbox functionality
function openLightbox(button) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const img = button.closest('.gallery-item').querySelector('img');

    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Close lightbox when clicking outside the image
document.getElementById('lightbox').addEventListener('click', function (e) {
    if (e.target === this) {
        closeLightbox();
    }
});

// Add keyboard support for closing lightbox
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});

// Back to Top Button Implementation
document.addEventListener('DOMContentLoaded', () => {
    const backToTopButton = document.getElementById('backToTop');

    const toggleBackToTop = () => {
        if (window.scrollY > 500) {
            backToTopButton.classList.remove('opacity-0', 'invisible', 'translate-y-10');
            backToTopButton.classList.add('opacity-100', 'visible', 'translate-y-0');
        } else {
            backToTopButton.classList.add('opacity-0', 'invisible', 'translate-y-10');
            backToTopButton.classList.remove('opacity-100', 'visible', 'translate-y-0');
        }
    };

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', toggleBackToTop);
});


// FREQUENTLY ASKED QUESTIONS
document.addEventListener('DOMContentLoaded', function () {
    const faqToggles = document.querySelectorAll('.faq-toggle');

    faqToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const content = toggle.nextElementSibling;
            const icon = toggle.querySelector('svg');

            // Toggle content
            content.classList.toggle('hidden');

            // Rotate icon
            icon.style.transform = content.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';

            // Add highlight to active FAQ
            toggle.parentElement.classList.toggle('bg-white/10');
        });
    });
});  // Remove extra ');'

// Handle both desktop and mobile downloads dropdown
document.addEventListener('DOMContentLoaded', () => {
    // Desktop downloads dropdown
    const desktopDropdownButton = document.getElementById('desktop-downloads-button');
    const desktopDropdownMenu = document.getElementById('desktop-downloads-menu');
    const desktopArrow = desktopDropdownButton.querySelector('svg');

    desktopDropdownButton.addEventListener('click', (e) => {
        e.stopPropagation();
        desktopDropdownMenu.classList.toggle('hidden');
        desktopArrow.classList.toggle('rotate-180');
    });

    // Mobile downloads dropdown
    const mobileDropdownButton = document.getElementById('mobile-downloads-button');
    const mobileDropdownMenu = document.getElementById('mobile-downloads-menu');
    const mobileArrow = mobileDropdownButton.querySelector('svg');

    mobileDropdownButton.addEventListener('click', () => {
        mobileDropdownMenu.classList.toggle('hidden');
        mobileArrow.classList.toggle('rotate-180');
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
        if (!desktopDropdownButton.contains(e.target)) {
            desktopDropdownMenu.classList.add('hidden');
            desktopArrow.classList.remove('rotate-180');
        }
    });

    // Add active state tracking
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Keyboard Navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const dropdowns = document.querySelectorAll('.dropdown-menu');
            dropdowns.forEach(dropdown => dropdown.classList.add('hidden'));
            desktopArrow.classList.remove('rotate-180');
            mobileArrow.classList.remove('rotate-180');
        }
    });
});

// Add smooth scroll reveal animations
const registrationGuideObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.step-card').forEach(card => {
    registrationGuideObserver.observe(card);
});

// smooth scroll transitions
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            // Close mobile menu if open
            if (mobileMenuButton) {
                const mobileMenu = document.querySelector('.mobile-menu');
                mobileMenu.classList.remove('active');
            }
        }
    });
});
function smoothScroll(target, duration, offset = 0) {
    const targetElement = document.querySelector(target);
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        smoothScroll(targetId, 1000, 60); // 1000ms duration, 60px offset
    });
});

// CHAPTERS SECTION 
// scroll reveal animations
const cards = document.querySelectorAll('#chapters .group');
cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    card.style.transition = 'all 0.6s ease-out';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 100);
                observer.unobserve(card);
            }
        });
    });

    observer.observe(card);
});
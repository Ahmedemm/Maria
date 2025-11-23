// ==========================================
// MENU BURGER
// ==========================================

const burgerMenu = document.getElementById('burger-menu');
const nav = document.getElementById('nav');

if (burgerMenu && nav) {
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle menu
    burgerMenu.addEventListener('click', () => {
        burgerMenu.classList.toggle('active');
        nav.classList.toggle('active');
        document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
    });

    // Fermer le menu au clic sur un lien
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            burgerMenu.classList.remove('active');
            nav.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Fermer le menu en cliquant en dehors
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !burgerMenu.contains(e.target)) {
            burgerMenu.classList.remove('active');
            nav.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// ==========================================
// ACCORDÉONS (PAGE SERVICES)
// ==========================================

const accordionTriggers = document.querySelectorAll('.accordion-trigger');

accordionTriggers.forEach(trigger => {
    trigger.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        const content = document.getElementById(targetId);

        // Toggle active class on trigger
        this.classList.toggle('active');

        // Toggle active class on content
        content.classList.toggle('active');

        // Update button text
        const span = this.querySelector('span');
        if (content.classList.contains('active')) {
            span.textContent = 'Voir moins';
        } else {
            span.textContent = 'En savoir plus';
        }
    });
});

// ==========================================
// SMOOTH SCROLL
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Ne pas empêcher le comportement par défaut pour les liens placeholder
        if (href === '#' || href === '#mentions') {
            return;
        }

        e.preventDefault();
        const target = document.querySelector(href);

        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ==========================================
// FORMULAIRE DE CONTACT
// ==========================================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Récupérer les valeurs
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Validation simple
        if (!name || !email || !subject || !message) {
            alert('Veuillez remplir tous les champs obligatoires.');
            return;
        }

        // Validation email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Veuillez entrer une adresse email valide.');
            return;
        }

        // Simulation d'envoi (à remplacer par une vraie API)
        alert('Merci pour votre message ! Je vous répondrai dans les plus brefs délais.');
        contactForm.reset();
    });
}

// ==========================================
// HEADER SCROLL EFFECT
// ==========================================

let lastScroll = 0;
const header = document.querySelector('.header');

if (header) {
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Ajouter une ombre au header lors du scroll
        if (currentScroll > 50) {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
        }

        lastScroll = currentScroll;
    });
}

// ==========================================
// ANIMATION AU SCROLL (FADE IN)
// ==========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observer les éléments à animer
const elementsToAnimate = document.querySelectorAll('.service-card, .pricing-item, .testimonial-card, .value-card');
elementsToAnimate.forEach(el => observer.observe(el));

// ==========================================
// RESPONSIVE IMAGES (Gestion des erreurs)
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');

    images.forEach(img => {
        img.addEventListener('error', function() {
            // Si l'image ne charge pas, afficher un placeholder
            this.style.backgroundColor = '#F4E8E0';
            this.style.minHeight = '300px';
            this.style.display = 'flex';
            this.style.alignItems = 'center';
            this.style.justifyContent = 'center';
        });
    });
});

// ==========================================
// CONSOLE INFO
// ==========================================

console.log('%c✨ Site développé pour Maria Christina Bernard', 'color: #C9A86A; font-size: 14px; font-weight: bold;');
console.log('%cBien-être & Massages', 'color: #4A4A4A; font-size: 12px;');

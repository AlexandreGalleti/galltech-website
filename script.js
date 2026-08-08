// ===== GALLTECH — site scripts =====

// --- Mobile menu ---
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
  navLinks.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

// --- Pixel field (the logo's dispersing pixels, brought to life) ---
// Generates a cluster of gradient-colored squares drifting in the hero,
// denser toward the top-right, echoing the burst in the GallTech logo.
const pixelField = document.querySelector('.pixel-field');
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (pixelField) {
  const COLORS = ['#016FEE', '#0FDAF0', '#45F08A', '#2FA8F2'];
  const COUNT = window.innerWidth < 760 ? 22 : 46;

  for (let i = 0; i < COUNT; i++) {
    const px = document.createElement('span');
    px.className = 'px';

    // Bias positions toward the top-right corner (like the logo burst)
    const bias = Math.random();
    const left = bias > 0.35 ? 55 + Math.random() * 45 : Math.random() * 100;
    const top = bias > 0.35 ? Math.random() * 55 : Math.random() * 100;

    const size = 3 + Math.random() * 11;
    const color = COLORS[Math.floor(Math.random() * COLORS.length)];
    const opacity = (0.25 + Math.random() * 0.6).toFixed(2);

    px.style.left = left + '%';
    px.style.top = top + '%';
    px.style.width = size + 'px';
    px.style.height = size + 'px';
    px.style.background = color;
    px.style.setProperty('--o', opacity);
    px.style.animationDelay = (Math.random() * 1.2).toFixed(2) + 's, ' + (Math.random() * 4).toFixed(2) + 's';
    px.style.animationDuration = '0.6s, ' + (4 + Math.random() * 5).toFixed(2) + 's';

    pixelField.appendChild(px);
  }
}

// --- Scroll reveal ---
const revealEls = document.querySelectorAll('.reveal');

if (prefersReduced || !('IntersectionObserver' in window)) {
  revealEls.forEach((el) => el.classList.add('visible'));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealEls.forEach((el) => observer.observe(el));
}

// --- Contact form (Formspree) ---
const form = document.querySelector('.contact-form');
const formStatus = document.getElementById('formStatus');

if (form && formStatus) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (form.action.includes('YOUR_FORM_ID')) {
      formStatus.textContent = 'Please call us at (864) 875-7106 for now — online request form is coming soon.';
      formStatus.style.color = '#0FDAF0';
      return;
    }

    formStatus.textContent = 'Sending...';
    formStatus.style.color = '';

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        form.reset();
        formStatus.textContent = "Request sent. We'll get back to you within one business day.";
      } else {
        formStatus.textContent = 'Something went wrong. Email us directly at contact@galltechsystems.com.';
        formStatus.style.color = '#0FDAF0';
      }
    } catch {
      formStatus.textContent = 'Network error. Email us directly at contact@galltechsystems.com.';
      formStatus.style.color = '#0FDAF0';
    }
  });
}

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// Keeps each section's top padding in sync with the actual height of the
// fixed banner + header stack, so content never sits underneath them —
// recalculated on load, on resize, and whenever the banner is dismissed.
const topFixed = document.querySelector('#topFixed');
function syncFixedOffset(){
  if (!topFixed) return;
  document.documentElement.style.setProperty('--fixed-offset', topFixed.offsetHeight + 'px');
}
window.addEventListener('load', syncFixedOffset);
window.addEventListener('resize', syncFixedOffset);
syncFixedOffset();

// Demo disclaimer banner dismiss
const demoBanner = document.querySelector('#demoBanner');
const closeBannerBtn = document.querySelector('#closeBanner');
if (closeBannerBtn && demoBanner) {
  closeBannerBtn.addEventListener('click', () => {
    demoBanner.remove();
    syncFixedOffset();
  });
}

const typed = new Typed('.multiple-text', {
    strings: ['Web Developer', 'Student', 'Baker', 'Frontend Developer.'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
});

// Contact form: sends the message via Formspree instead of doing nothing.
// See the comment in index.html for the one-time setup step (adding your
// real Formspree form ID) that turns this from a demo into a live form.
const contactForm = document.querySelector('#contactForm');
const formStatus = document.querySelector('#formStatus');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = contactForm.querySelector('input[type="submit"]');
    const originalLabel = submitBtn.value;

    if (contactForm.action.includes('YOUR_FORM_ID')) {
      formStatus.textContent = 'This form isn\'t connected yet — add your Formspree form ID in index.html to start receiving messages.';
      formStatus.className = 'form-status error';
      return;
    }

    submitBtn.value = 'Sending...';
    formStatus.textContent = '';
    formStatus.className = 'form-status';

    try {
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        formStatus.textContent = 'Thanks! Your message has been sent — I\'ll get back to you soon.';
        formStatus.className = 'form-status success';
        contactForm.reset();
      } else {
        formStatus.textContent = 'Something went wrong sending your message. Please try again or email me directly.';
        formStatus.className = 'form-status error';
      }
    } catch (err) {
      formStatus.textContent = 'Network error — please check your connection and try again.';
      formStatus.className = 'form-status error';
    } finally {
      submitBtn.value = originalLabel;
    }
  });
}

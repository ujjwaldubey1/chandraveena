/**
 * Chandraveena - Fabrication Company Website
 * Handles: smooth scroll, navbar scroll effect, mobile menu, scroll animations, form submit
 */

document.addEventListener('DOMContentLoaded', function () {
  // ========== NAVBAR - STICKY & SCROLL EFFECT ==========
  const navbar = document.getElementById('navbar');

  function updateNavbar() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', updateNavbar);
  updateNavbar(); // run once on load

  // ========== MOBILE MENU TOGGLE ==========
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.querySelector('.nav-links');

  navToggle.addEventListener('click', function () {
    navLinks.classList.toggle('active');
    // Optional: animate hamburger to X (you can add CSS for this)
  });

  // Close mobile menu when a link is clicked (smooth scroll will happen)
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('active');
    });
  });

  // ========== SMOOTH SCROLL FOR ANCHOR LINKS ==========
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // ========== SCROLL ANIMATIONS - REVEAL ON SCROLL ==========
  const revealElements = document.querySelectorAll(
    '.section-title, .about-content, .service-card, .project-card, .contact-wrapper'
  );

  function revealOnScroll() {
    const windowHeight = window.innerHeight;
    const revealPoint = 150;

    revealElements.forEach(function (el) {
      const elementTop = el.getBoundingClientRect().top;

      if (elementTop < windowHeight - revealPoint) {
        el.classList.add('visible');
      }
    });
  }

  // Add .reveal class to elements we want to animate
  revealElements.forEach(function (el, index) {
    el.classList.add('reveal');
    el.style.transitionDelay = (index % 4) * 0.1 + 's'; // stagger slightly
  });

  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll); // run on load in case section is in view
  revealOnScroll();

  // ========== CONTACT FORM - PROTOTYPE (NO BACKEND) ==========
  const contactForm = document.getElementById('contactForm');

  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }

    // Prototype: just show an alert. In a real site you would send to a server.
    alert('Thank you, ' + name + '! Your message has been received. We will get back to you at ' + email + ' soon.');
    contactForm.reset();
  });
});

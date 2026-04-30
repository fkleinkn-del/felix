/* =========================================================
   Felix Debugger · SPA logic
   ========================================================= */
(() => {
  'use strict';

  /* ---- Sticky header on scroll ---- */
  const nav = document.getElementById('nav');
  if (nav) {
    const onScroll = () => {
      nav.classList.toggle('is-scrolled', window.scrollY > 8);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---- Reveal on scroll (IntersectionObserver) ---- */
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const delay = el.dataset.delay ? `${el.dataset.delay}ms` : '0ms';
          el.style.setProperty('--reveal-delay', delay);
          el.classList.add('is-visible');
          io.unobserve(el);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('is-visible'));
  }

  /* ---- Smooth scroll for in-page anchors (graceful) ---- */
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', id);
    });
  });

  /* ---- Footer year ---- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---- GA4 content_view events ---- */
  function getCurrentLang() {
    return localStorage.getItem('fd-lang') || 'en';
  }

  function pushContentView(section, name) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'content_view',
      page: {
        name: 'extension_home',
        language: getCurrentLang(),
        path: window.location.pathname
      },
      content: {
        content_type: 'marketing',
        section: section,
        name: name
      }
    });
  }

  let gaIO = null;

  function initGAObserver() {
    if (!('IntersectionObserver' in window)) return;
    if (gaIO) gaIO.disconnect();
    gaIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          pushContentView(entry.target.dataset.gaSection, entry.target.dataset.gaName);
          gaIO.unobserve(entry.target);
        });
      },
      { threshold: 0.3 }
    );
    document.querySelectorAll('[data-ga-section]').forEach((el) => gaIO.observe(el));
  }

  initGAObserver();
  window.addEventListener('fd:langchange', initGAObserver);

  /* ---- Chrome Web Store link + extension_download event ---- */
  const STORE_URL = 'https://chromewebstore.google.com/detail/felix-debugger-%E2%80%93-ga4-netw/gkjkeocpbkmlffhcnjlneglkdfaanhhb';
  document.querySelectorAll('[data-store-link]').forEach((el) => {
    el.setAttribute('href', STORE_URL);
    el.setAttribute('target', '_blank');
    el.setAttribute('rel', 'noopener');
    el.addEventListener('click', () => {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'extension_download',
        page: {
          name: 'extension_home',
          language: getCurrentLang(),
          path: window.location.pathname
        }
      });
    });
  });

  /* ---- Community email links + feedback_email_click event ---- */
  document.querySelectorAll('[data-ga-label]').forEach((el) => {
    el.addEventListener('click', () => {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'feedback_email_click',
        page: {
          name: 'extension_home',
          language: getCurrentLang(),
          path: window.location.pathname
        },
        content: {
          label: el.dataset.gaLabel
        }
      });
    });
  });
})();

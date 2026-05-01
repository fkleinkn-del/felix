/* =========================================================
   Felix Debugger · i18n  (EN default / DE)
   ========================================================= */
(() => {
  'use strict';

  const KEY     = 'fd-lang';
  const DEFAULT = 'en';

  const T = {
    en: {
      /* Nav */
      'nav.features'     : 'Features',
      'nav.how'          : 'How it works',
      'nav.privacy'      : 'Privacy',
      'nav.blog'         : 'Blog',
      'nav.cta'          : 'Add to Chrome',
      /* Footer */
      'footer.features'  : 'Features',
      'footer.how'       : 'How it works',
      'footer.privacy'   : 'Privacy',
      'footer.blog'      : 'Blog',
      'footer.impressum' : 'Impressum',
      'footer.policy'    : 'Privacy Policy',
      'footer.tagline'   : 'Made for analysts, developers & QA.',
      'footer.rights'    : 'Felix Debugger. All rights reserved.',
      /* Page titles */
      'page.index'       : 'Felix Debugger - Real-time GA4 debugging.',
      'page.impressum'   : 'Legal Notice - Felix Debugger',
      'page.datenschutz' : 'Privacy Policy - Felix Debugger',
      /* Blog */
      'blog.eyebrow'     : 'Writing',
      'blog.h1'          : 'Thoughts on tracking,<br />debugging & the web.',
      'blog.lede'        : 'Articles about web analytics, data layer architecture, consent and the story behind building Felix Debugger. Published on Medium.',
      'blog.t1'          : 'Web Analytics',
      'blog.t2'          : 'GTM & GA4',
      'blog.t3'          : 'Debugging',
      'blog.t4'          : 'Privacy & Consent',
      'blog.t5'          : 'Product & Story',
      'blog.cta'         : 'Read on Medium',
      'blog.note'        : 'Opens medium.com/@fkleinkn in a new tab.',
      /* Legal */
      'legal.back'       : '← Back to home',
      /* Hero */
      'hero.eyebrow'     : 'GA4 Debugger · Chrome Extension',
      'hero.h1'          : 'See every GA4 event.<br /><span class="text-gradient">Instantly.</span>',
      'hero.lede'        : 'Real-time debugging for Google Analytics 4. Decode, validate and inspect every request, without leaving your browser.',
      'hero.cta.primary' : 'Add to Chrome',
      'hero.cta.ghost'   : 'See it in action ›',
      /* Problem */
      'ps.eyebrow'       : 'The problem',
      'ps.h2'            : 'GA4 debugging is noisy, slow,<br />and scattered across tabs.',
      'ps.lede'          : 'Felix Debugger pulls every event, parameter and consent signal into one calm, readable timeline, right inside your DevTools.',
      /* Features */
      'feat.eyebrow'     : 'Features',
      'feat.h2'          : 'Everything you need.<br /><span class="text-muted">Nothing you don\'t.</span>',
      'feat.1.h3'        : 'Real-time debugging',
      'feat.1.p'         : 'Watch GA4 events stream in the moment they fire. No refresh, no guesswork.',
      'feat.2.h3'        : 'Timeline & insights',
      'feat.2.p'         : 'A clean, chronological view of every interaction with parameters, user properties and context.',
      'feat.3.h3'        : 'Validation & QA',
      'feat.3.p'         : 'Catch missing parameters, broken naming and invalid values before they reach production.',
      'feat.4.h3'        : 'Event comparison',
      'feat.4.p'         : 'Diff two events side-by-side. Spot inconsistencies between staging and production in seconds.',
      'feat.5.h3'        : 'E-commerce ready',
      'feat.5.p'         : 'Inspect items, currencies, transaction IDs and the full purchase funnel, fully expanded.',
      'feat.6.h3'        : 'Advanced tools',
      'feat.6.p'         : 'Filter, search and export. Inspect Consent Mode signals and page performance in the same view.',
      /* Showcase */
      'show.eyebrow'     : 'Built for clarity',
      'show.h2'          : 'Every event.<br /><span class="text-gradient">Decoded beautifully.</span>',
      'show.lede'        : 'Parameters, user properties, consent state and timing, laid out in a way that makes sense at a glance.',
      /* How it works */
      'how.eyebrow'      : 'How it works',
      'how.h2'           : "Three steps. That's it.",
      'how.1.h3'         : 'Install the extension',
      'how.1.p'          : 'One click from the Chrome Web Store. No account, no setup.',
      'how.2.h3'         : 'Open DevTools',
      'how.2.p'          : 'Find the Felix Debugger panel right next to Console and Network.',
      'how.3.h3'         : 'Debug instantly',
      'how.3.p'          : 'Trigger any event and watch it decoded, validated and timestamped. Live.',
      /* Why */
      'why.eyebrow'      : 'Why Felix Debugger',
      'why.h2'           : 'One tool.<br /><span class="text-gradient">Better data.</span>',
      'why.1.label'      : 'Faster debugging',
      'why.2.label'      : 'External tools needed',
      'why.3.label'      : 'Local processing',
      'why.4.label'      : 'QA, validate, export',
      /* Privacy section */
      'priv.eyebrow'     : 'Privacy',
      'priv.h2'          : 'Your data never<br />leaves the browser.',
      'priv.lede'        : "Felix Debugger runs entirely on your machine. We don't collect events, we don't track usage, we don't talk to a server. Ever.",
      'priv.1'           : 'No data collection',
      'priv.2'           : 'No tracking, no analytics',
      'priv.3'           : 'No external servers',
      'priv.4'           : 'Runs 100% locally in your browser',
      /* CTA */
      'cta.h2'           : 'Ready to see<br /><span class="text-gradient">cleaner data?</span>',
      'cta.lede'         : 'Free. No account. One click.',
      'cta.btn'          : 'Add to Chrome',
      /* Community */
      'com.eyebrow'      : 'Community',
      'com.h2'           : 'Made with love<br /><span class="text-gradient">for analytics.</span>',
      'com.lede'         : 'Felix Debugger is a private, non-commercial project. We built it to make GA4 accessible to everyone. No subscriptions, no paywalls. Just a tool, made with care.',
      'com.1.h3'         : 'Shape what comes next.',
      'com.1.p'          : 'Have an idea or spotted something? Every piece of feedback gets read and considered. You help build what\'s next.',
      'com.1.btn'        : 'Share feedback ›',
      'com.2.h3'         : 'Personal onboarding, on us.',
      'com.2.p'          : 'New to Felix Debugger? We\'ll walk you through it — live, together. No slides, no recordings. Just a real conversation.',
      'com.2.btn'        : 'Request onboarding ›',
      'com.love'         : 'With love for the analytics community',
    },

    de: {
      /* Nav */
      'nav.features'     : 'Features',
      'nav.how'          : 'Funktionsweise',
      'nav.privacy'      : 'Datenschutz',
      'nav.blog'         : 'Blog',
      'nav.cta'          : 'Zu Chrome hinzufügen',
      /* Footer */
      'footer.features'  : 'Features',
      'footer.how'       : 'Funktionsweise',
      'footer.privacy'   : 'Datenschutz',
      'footer.blog'      : 'Blog',
      'footer.impressum' : 'Impressum',
      'footer.policy'    : 'Datenschutzerklärung',
      'footer.tagline'   : 'Für Analysten, Entwickler & QA-Teams.',
      'footer.rights'    : 'Felix Debugger. Alle Rechte vorbehalten.',
      /* Page titles */
      'page.index'       : 'Felix Debugger - GA4 Debugging in Echtzeit.',
      'page.impressum'   : 'Impressum - Felix Debugger',
      'page.datenschutz' : 'Datenschutzerklärung - Felix Debugger',
      /* Blog */
      'blog.eyebrow'     : 'Artikel',
      'blog.h1'          : 'Gedanken zu Tracking,<br />Debugging & dem Web.',
      'blog.lede'        : 'Artikel über Web Analytics, Datenschicht-Architektur, Consent und die Geschichte hinter Felix Debugger. Publiziert auf Medium.',
      'blog.t1'          : 'Web Analytics',
      'blog.t2'          : 'GTM & GA4',
      'blog.t3'          : 'Debugging',
      'blog.t4'          : 'Datenschutz & Consent',
      'blog.t5'          : 'Produkt & Story',
      'blog.cta'         : 'Auf Medium lesen',
      'blog.note'        : 'Öffnet medium.com/@fkleinkn in einem neuen Tab.',
      /* Legal */
      'legal.back'       : '← Zurück zur Startseite',
      /* Hero */
      'hero.eyebrow'     : 'GA4 Debugger · Chrome-Erweiterung',
      'hero.h1'          : 'Jedes GA4-Event.<br /><span class="text-gradient">Sofort sichtbar.</span>',
      'hero.lede'        : 'Echtzeit-Debugging für Google Analytics 4. Dekodiere, validiere und analysiere jede Anfrage, ohne den Browser zu verlassen.',
      'hero.cta.primary' : 'Zu Chrome hinzufügen',
      'hero.cta.ghost'   : 'In Aktion sehen ›',
      /* Problem */
      'ps.eyebrow'       : 'Das Problem',
      'ps.h2'            : 'GA4-Debugging ist unübersichtlich,<br />langsam und auf viele Tabs verteilt.',
      'ps.lede'          : 'Felix Debugger bündelt Events, Parameter und Consent-Signale in einer klaren, chronologischen Timeline, direkt in deinen DevTools.',
      /* Features */
      'feat.eyebrow'     : 'Features',
      'feat.h2'          : 'Alles, was du brauchst.<br /><span class="text-muted">Nichts, was du nicht brauchst.</span>',
      'feat.1.h3'        : 'Echtzeit-Debugging',
      'feat.1.p'         : 'Verfolge GA4-Events genau dann, wenn sie ausgelöst werden. Kein Refresh, kein Rätselraten.',
      'feat.2.h3'        : 'Timeline & Einblicke',
      'feat.2.p'         : 'Eine klare, chronologische Übersicht aller Interaktionen mit Parametern, User Properties und Kontext.',
      'feat.3.h3'        : 'Validierung & QA',
      'feat.3.p'         : 'Erkenne fehlende Parameter, falsche Benennungen und ungültige Werte, bevor sie in die Produktion gelangen.',
      'feat.4.h3'        : 'Event-Vergleich',
      'feat.4.p'         : 'Vergleiche zwei Events nebeneinander. Erkenne Inkonsistenzen zwischen Staging und Produktion in Sekunden.',
      'feat.5.h3'        : 'E-Commerce ready',
      'feat.5.p'         : 'Untersuche Artikel, Währungen, Transaktions-IDs und den gesamten Purchase-Funnel, vollständig aufgeklappt.',
      'feat.6.h3'        : 'Erweiterte Tools',
      'feat.6.p'         : 'Filtern, suchen, exportieren. Consent Mode und Performance auf einen Blick.',
      /* Showcase */
      'show.eyebrow'     : 'Gebaut für Klarheit',
      'show.h2'          : 'Jedes Event.<br /><span class="text-gradient">Elegant dekodiert.</span>',
      'show.lede'        : 'Parameter, User Properties, Consent-Status und Timing, übersichtlich auf den ersten Blick.',
      /* How it works */
      'how.eyebrow'      : 'Funktionsweise',
      'how.h2'           : 'Drei Schritte. Fertig.',
      'how.1.h3'         : 'Erweiterung installieren',
      'how.1.p'          : 'Ein Klick im Chrome Web Store. Kein Account, kein Setup.',
      'how.2.h3'         : 'DevTools öffnen',
      'how.2.p'          : 'Das Felix Debugger Panel liegt direkt neben Console und Network.',
      'how.3.h3'         : 'Sofort debuggen',
      'how.3.p'          : 'Löse ein Event aus und sieh es dekodiert, validiert und mit Zeitstempel. Live.',
      /* Why */
      'why.eyebrow'      : 'Warum Felix Debugger',
      'why.h2'           : 'Ein Tool.<br /><span class="text-gradient">Bessere Daten.</span>',
      'why.1.label'      : 'Schnelleres Debugging',
      'why.2.label'      : 'Externe Tools nötig',
      'why.3.label'      : 'Lokale Verarbeitung',
      'why.4.label'      : 'QA, validieren, exportieren',
      /* Privacy section */
      'priv.eyebrow'     : 'Datenschutz',
      'priv.h2'          : 'Deine Daten verlassen<br />niemals den Browser.',
      'priv.lede'        : 'Felix Debugger läuft vollständig auf deinem Gerät. Wir erfassen keine Events, kein Tracking, kein Server. Nie.',
      'priv.1'           : 'Keine Datenerfassung',
      'priv.2'           : 'Kein Tracking, keine Analyse',
      'priv.3'           : 'Keine externen Server',
      'priv.4'           : 'Läuft 100 % lokal in deinem Browser',
      /* CTA */
      'cta.h2'           : 'Bereit für<br /><span class="text-gradient">sauberere Daten?</span>',
      'cta.lede'         : 'Kostenlos. Kein Account. Ein Klick.',
      'cta.btn'          : 'Zu Chrome hinzufügen',
      /* Community */
      'com.eyebrow'      : 'Community',
      'com.h2'           : 'Mit Liebe gemacht<br /><span class="text-gradient">für Analytics.</span>',
      'com.lede'         : 'Felix Debugger ist ein privates, nicht-kommerzielles Projekt. Wir haben es gebaut, um GA4 für alle zugänglich zu machen. Keine Abos, keine Paywalls. Einfach ein Tool, mit Herzblut gemacht.',
      'com.1.h3'         : 'Gestalte, was als Nächstes kommt.',
      'com.1.p'          : 'Hast du eine Idee oder etwas entdeckt? Jedes Feedback wird gelesen und ernst genommen. Du hilfst dabei, das nächste Feature zu bauen.',
      'com.1.btn'        : 'Feedback geben ›',
      'com.2.h3'         : 'Persönliches Onboarding, für dich.',
      'com.2.p'          : 'Neu bei Felix Debugger? Wir zeigen dir alles — live, gemeinsam. Keine Slides, keine Aufzeichnungen. Einfach ein echtes Gespräch.',
      'com.2.btn'        : 'Onboarding anfragen ›',
      'com.love'         : 'Mit Liebe für die Analytics-Community',
    },
  };

  function pageKey() {
    const p = location.pathname;
    if (p.includes('impressum'))   return 'impressum';
    if (p.includes('datenschutz')) return 'datenschutz';
    return 'index';
  }

  function applyLang(lang) {
    const t = T[lang];
    if (!t) return;

    document.documentElement.lang = lang;

    const titleKey = 'page.' + pageKey();
    if (t[titleKey]) document.title = t[titleKey];

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const v = t[el.dataset.i18n];
      if (v !== undefined) el.textContent = v;
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const v = t[el.dataset.i18nHtml];
      if (v !== undefined) el.innerHTML = v;
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const v = t[el.dataset.i18nPlaceholder];
      if (v !== undefined) el.placeholder = v;
    });

    document.querySelectorAll('[data-lang-block]').forEach(el => {
      el.hidden = el.dataset.langBlock !== lang;
    });

    document.querySelectorAll('[data-lang-btn]').forEach(btn => {
      btn.classList.toggle('is-active', btn.dataset.langBtn === lang);
    });
  }

  function init() {
    document.querySelectorAll('[data-lang-btn]').forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.dataset.langBtn;
        localStorage.setItem(KEY, lang);
        applyLang(lang);
        window.dispatchEvent(new CustomEvent('fd:langchange', { detail: { lang } }));
      });
    });
    applyLang(localStorage.getItem(KEY) || DEFAULT);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

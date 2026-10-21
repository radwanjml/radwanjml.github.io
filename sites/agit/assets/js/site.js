/* ===========================================================================
   AGIT V5 — site behaviour. 3 KB, no dependencies, no third-party requests.

   Everything here is an enhancement. With JavaScript off the site is a
   complete, readable, navigable document: the reveal class never activates,
   the nav is a plain list, and every disclosure is a native <details>.
   That is not a courtesy — AGIT's actual intake browses on throttled 4G
   through in-app WebViews, and a page that needs JS to render text is a
   page that sometimes renders nothing.
   =========================================================================== */
(function () {
  'use strict';

  var root = document.documentElement;
  var reduced = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* -------------------------------------------------------------------
     1 · INK SET — the plates, and nothing else on the site.
     ------------------------------------------------------------------- */
  var targets = document.querySelectorAll('.plates');
  var release = function (el) { el.classList.add('is-set'); };

  if (reduced || !('IntersectionObserver' in window)) {
    Array.prototype.forEach.call(targets, release);
  } else if (targets.length) {
    var io = new IntersectionObserver(function (entries) {
      for (var j = 0; j < entries.length; j++) {
        if (entries[j].isIntersecting) {
          release(entries[j].target);
          io.unobserve(entries[j].target);
        }
      }
    }, { rootMargin: '0px 0px -6% 0px', threshold: 0.05 });

    Array.prototype.forEach.call(targets, function (el) { io.observe(el); });

    /* The unconditional release. Whatever the observer did or did not do,
       nothing on this page is still invisible three seconds in. */
    window.setTimeout(function () {
      Array.prototype.forEach.call(targets, release);
    }, 3000);
  }

  /* -------------------------------------------------------------------
     2 · NAV
     ------------------------------------------------------------------- */
  var nav = document.querySelector('.nav');
  var burger = nav && nav.querySelector('.nav__burger');

  if (nav && burger) {
    var setOpen = function (open) {
      nav.classList.toggle('is-open', open);
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      root.style.overflow = open ? 'hidden' : '';
    };

    burger.addEventListener('click', function () {
      setOpen(!nav.classList.contains('is-open'));
    });

    /* A menu you cannot dismiss with Escape is a trap, and on a phone the
       back gesture is not always available inside an in-app browser. */
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        setOpen(false);
        burger.focus();
      }
    });

    nav.addEventListener('click', function (e) {
      if (e.target.closest('.nav__links a, .nav__cta')) setOpen(false);
    });

    /* Resizing past the breakpoint with the panel open would otherwise leave
       the document scroll-locked with no visible menu. */
    window.addEventListener('resize', function () {
      if (window.innerWidth >= 920 && nav.classList.contains('is-open')) setOpen(false);
    });
  }

  /* -------------------------------------------------------------------
     3 · THE ANNOTATION LAYER
     One control, one class on <body>, remembered between pages. Default is
     on, because the notes are the reason this build exists.
     ------------------------------------------------------------------- */
  var toggle = document.querySelector('.notes-toggle');

  if (toggle) {
    var label = toggle.querySelector('b');
    var stored = null;
    try { stored = window.localStorage.getItem('agit-notes'); } catch (e) { /* private mode */ }

    var paint = function (off) {
      document.body.classList.toggle('notes-off', off);
      toggle.setAttribute('aria-pressed', off ? 'false' : 'true');
      toggle.setAttribute('aria-label',
        'Tibr audit notes, currently ' + (off ? 'off' : 'on'));
      if (label) label.textContent = off ? 'Off' : 'On';
      try { window.localStorage.setItem('agit-notes', off ? 'off' : 'on'); } catch (e) {}
    };

    paint(stored === 'off');

    toggle.addEventListener('click', function () {
      paint(!document.body.classList.contains('notes-off'));
    });
  }

  /* -------------------------------------------------------------------
     4 · HORIZONTAL SCROLLERS
     A table that scrolls sideways must be reachable by keyboard, which
     means it needs to be focusable. Only give it a tab stop when it is
     actually overflowing — an unnecessary tab stop is its own defect.
     ------------------------------------------------------------------- */
  var scrollers = document.querySelectorAll('.scroller');
  var syncScrollers = function () {
    for (var n = 0; n < scrollers.length; n++) {
      var el = scrollers[n];
      if (el.scrollWidth > el.clientWidth + 2) {
        el.setAttribute('tabindex', '0');
        el.setAttribute('role', 'region');
      } else {
        el.removeAttribute('tabindex');
        el.removeAttribute('role');
      }
    }
  };
  if (scrollers.length) {
    syncScrollers();
    window.addEventListener('resize', syncScrollers);
  }
}());

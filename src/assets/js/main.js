/* PT. Mahkota Baru Isolasi — site interactions (no dependencies) */
(() => {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let lastFocus = null;

  /* Header shadow on scroll */
  const header = $('.header');
  const onScroll = () => header && header.classList.toggle('is-scrolled', scrollY > 8);
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Overlay helpers (drawer + modals) */
  const openLayer = (el) => {
    lastFocus = document.activeElement;
    el.classList.add('is-open');
    el.setAttribute('aria-hidden', 'false');
    document.body.classList.add('no-scroll');
  };
  const closeLayer = (el) => {
    el.classList.remove('is-open');
    el.setAttribute('aria-hidden', 'true');
    if (!$('.modal.is-open, .drawer.is-open')) document.body.classList.remove('no-scroll');
    if (lastFocus) lastFocus.focus();
  };
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') $$('.modal.is-open, .drawer.is-open').forEach(closeLayer);
    if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || (e.key === '/' && !/input|textarea/i.test(document.activeElement.tagName))) {
      e.preventDefault();
      openSearch();
    }
  });

  /* Mobile drawer */
  const drawer = $('#drawer');
  const drawerBtn = $('[data-drawer-open]');
  if (drawer && drawerBtn) {
    drawerBtn.addEventListener('click', () => { openLayer(drawer); drawerBtn.setAttribute('aria-expanded', 'true'); $('[data-drawer-close].icon-btn', drawer).focus(); });
    $$('[data-drawer-close]', drawer).forEach((b) => b.addEventListener('click', () => { closeLayer(drawer); drawerBtn.setAttribute('aria-expanded', 'false'); }));
    $$('a', drawer).forEach((a) => a.addEventListener('click', () => closeLayer(drawer)));
    $$('.m-nav__toggle', drawer).forEach((t) => t.addEventListener('click', () => {
      const sub = document.getElementById(t.getAttribute('aria-controls'));
      const open = t.getAttribute('aria-expanded') === 'true';
      t.setAttribute('aria-expanded', String(!open));
      sub.hidden = open;
    }));
  }

  /* Hero slideshow */
  const slides = $$('.hero__slide');
  const dots = $$('.hero__dots button');
  if (slides.length > 1) {
    let i = 0, timer;
    const go = (n) => {
      slides[i].classList.remove('is-active'); dots[i] && dots[i].classList.remove('is-active');
      i = (n + slides.length) % slides.length;
      slides[i].classList.add('is-active'); dots[i] && dots[i].classList.add('is-active');
    };
    const start = () => { if (!reduceMotion) timer = setInterval(() => go(i + 1), 6000); };
    dots.forEach((d, n) => d.addEventListener('click', () => { clearInterval(timer); go(n); start(); }));
    start();
  }

  /* Tabs */
  $$('[role="tablist"]').forEach((list) => {
    const tabs = $$('[role="tab"]', list);
    tabs.forEach((tab) => tab.addEventListener('click', () => {
      tabs.forEach((t) => {
        const on = t === tab;
        t.setAttribute('aria-selected', String(on));
        document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
      });
    }));
  });

  /* Reveal on scroll */
  const revealEls = $$('.reveal');
  if ('IntersectionObserver' in window && !reduceMotion) {
    const io = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
    }), { rootMargin: '0px 0px -8% 0px' });
    revealEls.forEach((el) => io.observe(el));
  } else revealEls.forEach((el) => el.classList.add('is-visible'));

  /* Product modal */
  const pm = $('#product-modal');
  if (pm) {
    document.addEventListener('click', (e) => {
      const card = e.target.closest('[data-product]');
      if (!card) return;
      const p = JSON.parse(card.dataset.product);
      $('#pm-img').src = p.img; $('#pm-img').alt = p.name;
      $('#pm-name').textContent = p.name;
      $('#pm-price').textContent = p.price;
      $('#pm-desc').textContent = p.desc;
      $('#pm-tag').textContent = p.tag;
      $('#pm-wa').href = `https://wa.me/${window.WA_NUMBER}?text=${encodeURIComponent(`Halo, saya ingin memesan: ${p.name} (${p.price}). Apakah stok tersedia?`)}`;
      openLayer(pm);
      $('.modal__close', pm).focus();
    });
  }
  $$('.modal [data-modal-close]').forEach((b) => b.addEventListener('click', () => closeLayer(b.closest('.modal'))));

  /* Catalogue: category chips + live filter */
  const filter = $('#product-filter');
  const sections = $$('[data-section]');
  const chips = $$('.chip[data-cat]');
  if (sections.length) {
    const noResults = $('#no-results');
    const apply = () => {
      const q = (filter && filter.value.trim().toLowerCase()) || '';
      let shown = 0;
      sections.forEach((sec) => {
        const cards = $$('[data-search]', sec);
        let visible = 0;
        cards.forEach((c) => { const ok = !q || c.dataset.search.includes(q); c.hidden = !ok; if (ok) { visible++; c.classList.add('is-visible'); } });
        sec.hidden = q ? visible === 0 : false;
        shown += visible;
      });
      if (noResults) noResults.hidden = !q || shown > 0;
    };
    filter && filter.addEventListener('input', apply);

    const setActive = (id) => chips.forEach((c) => c.classList.toggle('is-active', c.dataset.cat === id));
    chips.forEach((c) => c.addEventListener('click', () => { if (filter && filter.value) { filter.value = ''; apply(); } setActive(c.dataset.cat); }));
    if ('IntersectionObserver' in window) {
      const so = new IntersectionObserver((entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          setActive(e.target.dataset.section);
          const chip = chips.find((c) => c.dataset.cat === e.target.dataset.section);
          chip && chip.scrollIntoView({ block: 'nearest', inline: 'center', behavior: reduceMotion ? 'auto' : 'smooth' });
        }
      }), { rootMargin: '-45% 0px -50% 0px' });
      sections.forEach((s) => so.observe(s));
    }
  }

  /* Global search */
  const sm = $('#search-modal');
  const input = $('#global-search');
  const results = $('#search-results');
  const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  function openSearch() { if (!sm) return; openLayer(sm); setTimeout(() => input.focus(), 50); }
  $$('[data-search-open]').forEach((b) => b.addEventListener('click', openSearch));
  if (input) {
    const docIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/></svg>';
    let active = -1;
    const render = () => {
      const q = input.value.trim().toLowerCase();
      active = -1;
      if (!q) { results.innerHTML = '<p class="smodal__empty">Ketik nama produk atau layanan, mis. “rockwool”, “visa”, “3M”.</p>'; return; }
      const terms = q.split(/\s+/);
      const hits = (window.SEARCH_INDEX || []).filter((r) => terms.every((t) => (r.t + ' ' + r.s).toLowerCase().includes(t))).slice(0, 30);
      results.innerHTML = hits.length
        ? hits.map((r) => `<a href="${r.u}">${r.img ? `<img src="${r.img}" alt="" loading="lazy">` : `<span class="ico">${docIcon}</span>`}<span><strong>${esc(r.t)}</strong><small>${esc(r.s)}</small></span></a>`).join('')
        : `<p class="smodal__empty">Tidak ditemukan hasil untuk “${esc(input.value)}”.</p>`;
      $$('a', results).forEach((a) => a.addEventListener('click', () => closeLayer(sm)));
    };
    input.addEventListener('input', render);
    input.addEventListener('keydown', (e) => {
      const links = $$('a', results);
      if (!links.length) return;
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        active = (active + (e.key === 'ArrowDown' ? 1 : -1) + links.length) % links.length;
        links.forEach((l, n) => l.classList.toggle('is-active', n === active));
        links[active].scrollIntoView({ block: 'nearest' });
      } else if (e.key === 'Enter') {
        e.preventDefault();
        (links[active] || links[0]).click();
      }
    });
  }
})();

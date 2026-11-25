// Static site generator for PT. Mahkota Baru Isolasi.
// Usage: node build.mjs   →  writes the finished site into ./dist
import { mkdir, writeFile, cp, rm } from 'node:fs/promises';
import { company, nav, serviceAreas, heroSlides, homeIntro, vision, mission, shippingNote, IMG_BASE } from './src/data/site.mjs';
import { isolasi, insulasi } from './src/data/products.mjs';
import { detailPages, categoryPages } from './src/data/services.mjs';

const OUT = 'dist';
const SITE_URL = 'https://mahkotabaruisolasi.co.id';
const YEAR = new Date().getFullYear();
// Bump OG_VERSION after changing og-image.jpg so Facebook/LinkedIn fetch the new one.
const OG_VERSION = 1;
const OG_IMAGE = `${SITE_URL}/images/brand/og-image.jpg?v=${OG_VERSION}`;

// ---------- helpers ----------
const esc = (s = '') => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const url = (href) => href.replace(/^\//, '');                // relative links → works from file:// and any sub-folder
const img = (p) => (/^https?:/.test(p) ? p : IMG_BASE + p);
const prodImg = (f) => img('/storage/app/public/produk_foto/' + f);
const rupiah = (n) => 'Rp' + n.toLocaleString('id-ID');
const wa = (text) => `https://wa.me/${company.whatsapp}${text ? '?text=' + encodeURIComponent(text) : ''}`;
const excerpt = (s, n = 150) => (s.length > n ? s.slice(0, s.lastIndexOf(' ', n)) + '…' : s);

// ---------- icons (inline SVG, stroke style) ----------
const P = {
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  chevron: '<path d="m6 9 6 6 6-6"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  close: '<path d="M6 6l12 12M18 6 6 18"/>',
  phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  pin: '<path d="M12 22s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  check: '<circle cx="12" cy="12" r="9"/><path d="m8.5 12 2.5 2.5 4.5-5"/>',
  dot: '<path d="m9 6 6 6-6 6"/>',
  doc: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h4"/>',
  store: '<path d="M3 9l1.5-5h15L21 9M3 9v11h18V9M3 9h18M9 20v-6h6v6"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 8h.01M11 12h1v5h1"/>',
  box: '<path d="M21 8 12 3 3 8v8l9 5 9-5z"/><path d="m3 8 9 5 9-5M12 13v8"/>',
  tape: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="M20 12h2"/>',
  layers: '<path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5"/>',
  stamp: '<path d="M9 3h6v5l2 3H7l2-3z"/><path d="M5 14h14v3H5zM7 21h10"/>',
  shield: '<path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"/><path d="m9 12 2 2 4-4"/>',
  chat: '<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/><path d="M8.5 11h.01M12 11h.01M15.5 11h.01"/>',
  chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
  translate: '<path d="M4 5h8M8 3v2M5.5 5c.8 3 2.8 5.6 5.5 7M11 5c-.8 3.6-3.4 6.6-7 8"/><path d="m13 21 4-9 4 9M14.5 18h5"/>',
  users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7M21.5 20a6.5 6.5 0 0 0-4-6"/>',
  star: '<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',
};
const icon = (name, cls = '') => `<svg${cls ? ` class="${cls}"` : ''} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[name] || P.dot}</svg>`;
const waIcon = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.4zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1 1 12 21.8zm8.4-18.2A11.8 11.8 0 0 0 1.8 17.9L.2 24l6.3-1.6A11.8 11.8 0 0 0 24 12a11.7 11.7 0 0 0-3.6-8.4z"/></svg>';

// ---------- layout ----------
const logoBlock = () => `<img src="${img(company.logo)}" alt="Logo ${esc(company.name)}" width="44" height="44">
  <span class="brand__name">Mahkota Baru<small>Isolasi</small></span>`;

const header = (active) => `
<a class="skip-link" href="#main">Langsung ke konten</a>
<div class="topbar"><div class="container">
  <div class="topbar__group">
    <span class="topbar__item topbar__addr">${icon('pin')} ${esc(company.address)}</span>
  </div>
  <div class="topbar__group">
    <a class="topbar__item" href="${wa()}" target="_blank" rel="noopener">${icon('phone')} ${company.phone}</a>
    <a class="topbar__item" href="mailto:${company.email}">${icon('mail')} ${company.email}</a>
  </div>
</div></div>
<header class="header" id="top">
  <div class="container">
    <a class="brand" href="index.html" aria-label="${esc(company.name)} — Beranda">${logoBlock()}</a>
    <nav class="nav" aria-label="Navigasi utama">
      <ul class="nav__list">
        ${nav.map((n) => `<li class="nav__item">
          <a class="nav__link${active === n.href ? ' is-active' : ''}" href="${url(n.href)}"${active === n.href ? ' aria-current="page"' : ''}>${esc(n.label)}${n.children ? icon('chevron') : ''}</a>
          ${n.children ? `<ul class="dropdown">${n.children.map(([l, h]) => `<li><a href="${url(h)}">${esc(l)}</a></li>`).join('')}
            <li class="dropdown__all"><a href="${url(n.href)}">Lihat semua ${esc(n.label)} →</a></li></ul>` : ''}
        </li>`).join('')}
      </ul>
    </nav>
    <div class="header__actions">
      <button class="icon-btn" type="button" data-search-open aria-label="Cari produk atau layanan">${icon('search')}</button>
      <a class="btn btn--primary btn--sm header__cta" href="mailto:${company.email}">${icon('mail')} Kirim Pesan</a>
      <button class="icon-btn menu-toggle" type="button" data-drawer-open aria-label="Buka menu" aria-controls="drawer" aria-expanded="false">${icon('menu')}</button>
    </div>
  </div>
</header>

<div class="drawer" id="drawer" aria-hidden="true">
  <div class="drawer__backdrop" data-drawer-close></div>
  <div class="drawer__panel" role="dialog" aria-modal="true" aria-label="Menu">
    <div class="drawer__head">
      <a class="brand" href="index.html">${logoBlock()}</a>
      <button class="icon-btn" type="button" data-drawer-close aria-label="Tutup menu">${icon('close')}</button>
    </div>
    <div class="drawer__body">
      <ul class="m-nav">
        <li><div class="m-nav__row"><a href="index.html">Beranda</a></div></li>
        ${nav.map((n, i) => `<li>
          <div class="m-nav__row"><a href="${url(n.href)}">${esc(n.label)}</a>
          ${n.children ? `<button class="m-nav__toggle" type="button" aria-expanded="false" aria-controls="msub${i}" aria-label="Submenu ${esc(n.label)}">${icon('chevron')}</button>` : ''}</div>
          ${n.children ? `<ul class="m-nav__sub" id="msub${i}" hidden>${n.children.map(([l, h]) => `<li><a href="${url(h)}">${esc(l)}</a></li>`).join('')}</ul>` : ''}
        </li>`).join('')}
      </ul>
    </div>
    <div class="drawer__foot">
      <a class="btn btn--wa btn--block" href="${wa('Halo PT. Mahkota Baru Isolasi, saya ingin bertanya.')}" target="_blank" rel="noopener">${waIcon} Chat WhatsApp</a>
    </div>
  </div>
</div>`;

const footer = () => `
<footer class="footer">
  <div class="container">
    <div class="footer__grid">
      <div>
        <a class="brand" href="index.html">${logoBlock()}</a>
        <p>${esc(excerpt(homeIntro, 210))}</p>
        <div class="socials">
          <a href="${wa()}" target="_blank" rel="noopener" aria-label="WhatsApp">${waIcon}</a>
          <a href="mailto:${company.email}" aria-label="Email">${icon('mail')}</a>
          <a href="${company.tokopedia}" target="_blank" rel="noopener" aria-label="Tokopedia">${icon('store')}</a>
          <a href="${company.mapsLink}" target="_blank" rel="noopener" aria-label="Google Maps">${icon('pin')}</a>
        </div>
      </div>
      <div>
        <h4>Produk</h4>
        <ul>
          <li><a href="isolasi.html">Isolasi</a></li>
          <li><a href="insulasi.html">Insulasi</a></li>
          <li><a href="isolasi.html#3M">Schotch 3M</a></li>
          <li><a href="insulasi.html#rockwool">Rockwool</a></li>
          <li><a href="insulasi.html#peredam">Peredam</a></li>
          <li><a href="insulasi.html#produkLain">Produk lain</a></li>
        </ul>
      </div>
      <div>
        <h4>Layanan</h4>
        <ul>
          <li><a href="jasa.html">Jasa</a></li>
          <li><a href="asuransi.html">Asuransi</a></li>
          <li><a href="konsultan.html">Konsultan</a></li>
          <li><a href="management.html">Manajemen</a></li>
          <li><a href="konsuler.html">Konsuler</a></li>
          <li><a href="terjemahan.html">Terjemahan Bahasa</a></li>
        </ul>
      </div>
      <div>
        <h4>Kontak</h4>
        <ul class="footer__contact">
          <li>${icon('pin')}<a href="${company.mapsLink}" target="_blank" rel="noopener">${esc(company.address)}</a></li>
          <li>${icon('phone')}<a href="${wa()}" target="_blank" rel="noopener">${company.phone}</a></li>
          <li>${icon('mail')}<a href="mailto:${company.email}">${company.email}</a></li>
          <li>${icon('clock')}<span>${company.hours}</span></li>
        </ul>
      </div>
    </div>
    <div class="footer__bottom">
      <span>© ${YEAR} PT. MAHKOTA BARU ISOLASI. All rights reserved.</span>
      <a href="#top">Kembali ke atas ↑</a>
    </div>
  </div>
</footer>

<div class="fab-group">
  ${company.chatbotUrl
    ? `<a class="fab fab--bot" href="${esc(company.chatbotUrl)}" target="_blank" rel="noopener" aria-label="Chat dengan Asisten AI (dibuka di tab baru)" title="Asisten AI Mahkota Baru Isolasi — tanya produk, harga & layanan">${icon('chat')}<span>Asisten AI</span><i class="fab__dot" aria-hidden="true"></i></a>`
    : `<span class="fab fab--bot is-disabled" role="link" aria-disabled="true" aria-label="Asisten AI — segera hadir" title="Asisten AI — segera hadir">${icon('chat')}<span>Asisten AI</span></span>`}
  <a class="fab" href="${wa('Halo PT. Mahkota Baru Isolasi, saya ingin bertanya.')}" target="_blank" rel="noopener" aria-label="Chat via WhatsApp">${waIcon}<span>Chat WhatsApp</span></a>
</div>

<div class="modal smodal" id="search-modal" aria-hidden="true">
  <div class="modal__backdrop" data-modal-close></div>
  <div class="modal__dialog" role="dialog" aria-modal="true" aria-label="Pencarian">
    <div class="smodal__field">${icon('search')}
      <label class="sr-only" for="global-search">Cari produk atau layanan</label>
      <input id="global-search" type="search" placeholder="Cari apapun yang Anda butuhkan disini…" autocomplete="off">
      <button class="icon-btn modal__close" type="button" data-modal-close aria-label="Tutup">${icon('close')}</button>
    </div>
    <div class="smodal__results" id="search-results"><p class="smodal__empty">Ketik nama produk atau layanan, mis. “rockwool”, “visa”, “3M”.</p></div>
  </div>
</div>`;

const page = ({ title, description, active, body, path, extraHead = '' }) => `<!doctype html>
<html lang="id">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${SITE_URL}/${path === 'index.html' ? '' : path}">
<!-- Social share preview (Facebook, LinkedIn, WhatsApp, X) -->
<meta property="og:type" content="website">
<meta property="og:site_name" content="${esc(company.name)}">
<meta property="og:locale" content="id_ID">
<meta property="og:url" content="${SITE_URL}/${path === 'index.html' ? '' : path}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:image" content="${OG_IMAGE}">
<meta property="og:image:secure_url" content="${OG_IMAGE}">
<meta property="og:image:type" content="image/jpeg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${esc(company.name)} — Isolasi, Insulasi &amp; Layanan Profesional">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(description)}">
<meta name="twitter:image" content="${OG_IMAGE}">
<!-- Icons -->
<link rel="icon" href="favicon.ico" sizes="48x48">
<link rel="icon" type="image/png" sizes="32x32" href="images/brand/favicon-32.png">
<link rel="icon" type="image/png" sizes="16x16" href="images/brand/favicon-16.png">
<link rel="apple-touch-icon" sizes="180x180" href="images/brand/apple-touch-icon.png">
<link rel="manifest" href="site.webmanifest">
<meta name="theme-color" content="#0a1a33">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="assets/css/style.css">
${extraHead}
</head>
<body>
${header(active)}
<main id="main">
${body}
</main>
${footer()}
<script src="assets/js/search-index.js" defer></script>
<script src="assets/js/main.js" defer></script>
</body>
</html>`;

// ---------- reusable sections ----------
const serviceCard = (s) => `
<a class="s-card reveal" href="${url(s.href)}">
  <div class="s-card__media"><img src="${img(s.img)}" alt="${esc(s.title)}" loading="lazy"></div>
  <div class="s-card__body"><span class="s-card__icon">${icon(s.icon)}</span><h3>${esc(s.title)}</h3><p>${esc(s.text)}</p><span class="link-arrow">Selengkapnya ${icon('arrow')}</span></div>
</a>`;

const productCard = (p, tag) => {
  const [file, name, price, desc] = p;
  const data = esc(JSON.stringify({ img: prodImg(file), name, price: rupiah(price), desc, tag }));
  return `<button class="p-card reveal" type="button" data-product="${data}" data-search="${esc((name + ' ' + tag).toLowerCase())}">
  <div class="p-card__media"><img src="${prodImg(file)}" alt="${esc(name)}" loading="lazy"><span class="p-card__tag">${esc(tag)}</span></div>
  <div class="p-card__body"><span class="p-card__name">${esc(name)}</span>
    <div class="p-card__foot"><span class="p-card__price">${rupiah(price)}</span><span class="p-card__cta">Detail ${icon('arrow')}</span></div></div>
</button>`;
};

const productModal = () => `
<div class="modal" id="product-modal" aria-hidden="true">
  <div class="modal__backdrop" data-modal-close></div>
  <div class="modal__dialog" role="dialog" aria-modal="true" aria-labelledby="pm-name">
    <button class="icon-btn modal__close" type="button" data-modal-close aria-label="Tutup">${icon('close')}</button>
    <div class="pmodal">
      <div class="pmodal__media"><img id="pm-img" src="" alt=""></div>
      <div class="pmodal__body">
        <span class="tag" id="pm-tag"></span>
        <h3 id="pm-name"></h3>
        <div class="pmodal__price" id="pm-price"></div>
        <p class="pmodal__desc" id="pm-desc"></p>
        <p class="pmodal__note">${icon('info')}<span>${esc(shippingNote)}</span></p>
        <div class="pmodal__actions">
          <a class="btn btn--wa btn--block" id="pm-wa" href="#" target="_blank" rel="noopener">${waIcon} Pesan via WhatsApp</a>
          <a class="btn btn--outline btn--block" href="${company.tokopedia}" target="_blank" rel="noopener">${icon('store')} Lihat di Tokopedia</a>
        </div>
      </div>
    </div>
  </div>
</div>`;

const ctaBand = (text = 'Halo PT. Mahkota Baru Isolasi, saya ingin bertanya.') => `
<section class="section" style="padding-top:0">
  <div class="container">
    <div class="cta-band reveal">
      <div><h2>Butuh bantuan atau penawaran?</h2><p>Hubungi tim kami melalui WhatsApp atau email — kami siap membantu kebutuhan produk dan layanan Anda.</p></div>
      <div class="hero__actions">
        <a class="btn btn--wa" href="${wa(text)}" target="_blank" rel="noopener">${waIcon} WhatsApp</a>
        <a class="btn btn--ghost" href="mailto:${company.email}">${icon('mail')} Kirim Email</a>
      </div>
    </div>
  </div>
</section>`;

const otherServices = (excludeKey) => `
<section class="section section--soft">
  <div class="container">
    <div class="section-head reveal"><span class="eyebrow">Layanan Lain</span>
      <h2>Kami juga dapat membantu Anda</h2>
      <p>Mahkota Baru Isolasi tidak hanya menyediakan produk berkualitas, tetapi juga menawarkan berbagai layanan lainnya untuk mendukung kebutuhan Anda.</p></div>
    <div class="grid grid--4">${serviceAreas.filter((s) => s.key !== excludeKey).slice(0, 4).map(serviceCard).join('')}</div>
  </div>
</section>`;

const pageHero = ({ crumbs, title, sub, bg, actions = '' }) => `
<section class="page-hero">
  ${bg ? `<div class="page-hero__bg" style="background-image:url('${img(bg)}')"></div>` : ''}
  <div class="container">
    <ol class="crumbs" aria-label="Breadcrumb"><li><a href="index.html">Beranda</a></li>${crumbs.map(([l, h]) => `<li>${h ? `<a href="${url(h)}">${esc(l)}</a>` : `<span aria-current="page">${esc(l)}</span>`}</li>`).join('')}</ol>
    <h1>${esc(title)}</h1>
    ${sub ? `<p>${esc(sub)}</p>` : ''}
    ${actions}
  </div>
</section>`;

// ---------- pages ----------
const pages = [];
const allProducts = [...isolasi, ...insulasi].flatMap((c) => c.items).filter((p, i, a) => a.findIndex((q) => q[0] === p[0]) === i);

// HOME
{
  const tabs = [
    ['isolasi', 'Isolasi', isolasi.filter((c) => c.id !== 'produkLain').flatMap((c) => c.items.map((p) => [p, c.title])).slice(0, 8), 'isolasi.html'],
    ['insulasi', 'Insulasi', insulasi.filter((c) => c.id !== 'produkLain').flatMap((c) => c.items.slice(0, 2).map((p) => [p, c.title])).slice(0, 8), 'insulasi.html'],
    ['lain', 'Produk Lain', isolasi.find((c) => c.id === 'produkLain').items.map((p) => [p, 'Barang dan jasa']).slice(0, 8), 'isolasi.html#produkLain'],
  ];
  const body = `
<section class="hero">
  <div class="hero__slides">${heroSlides.map((s, i) => `<div class="hero__slide${i === 0 ? ' is-active' : ''}" style="background-image:url('${img(s)}')"></div>`).join('')}</div>
  <div class="container">
    <div class="hero__content">
      <span class="hero__badge"><span>Harco Glodok</span> Jakarta Barat</span>
      <h1>PT. Mahkota Baru Isolasi — <em>Isolasi, Insulasi</em> & Layanan Profesional</h1>
      <p class="hero__lead">${esc(homeIntro)}</p>
      <div class="hero__actions">
        <a class="btn btn--primary" href="#layanan">Lihat Layanan ${icon('arrow')}</a>
        <a class="btn btn--ghost" href="#produk">${icon('box')} Katalog Produk</a>
      </div>
    </div>
  </div>
  <div class="hero__dots" role="tablist" aria-label="Pilih slide">${heroSlides.map((_, i) => `<button type="button" aria-label="Slide ${i + 1}"${i === 0 ? ' class="is-active"' : ''}></button>`).join('')}</div>
</section>

<div class="stats"><div class="container"><div class="stats__grid">
  <div class="stat"><span class="stat__icon">${icon('box')}</span><div><strong>${allProducts.length}+ produk</strong><span>Isolasi, insulasi & lainnya</span></div></div>
  <div class="stat"><span class="stat__icon">${icon('layers')}</span><div><strong>${serviceAreas.length} bidang</strong><span>Layanan profesional</span></div></div>
  <div class="stat"><span class="stat__icon">${icon('translate')}</span><div><strong>3 bahasa</strong><span>Indonesia · Inggris · Jerman</span></div></div>
  <div class="stat"><span class="stat__icon">${icon('clock')}</span><div><strong>09–17 WIB</strong><span>Senin–Jumat, Harco Glodok</span></div></div>
</div></div></div>

<section class="section" id="tentang">
  <div class="container about">
    <div class="about__media reveal">
      <img src="${img(heroSlides[0])}" alt="Gudang produk isolasi PT. Mahkota Baru Isolasi">
      <div class="about__card"><img src="${img(company.logo)}" alt=""><div><strong>${esc(company.name)}</strong><span>Solusi terbaik & terpercaya</span></div></div>
    </div>
    <div class="reveal">
      <span class="eyebrow">Layanan Kami</span>
      <h2>Satu mitra untuk produk & layanan profesional Anda</h2>
      <p class="about__text">${esc(homeIntro)}</p>
      <ul class="pill-list">${serviceAreas.map((s) => `<li><a href="${url(s.href)}">${esc(s.title)}</a></li>`).join('')}</ul>
      <div class="hero__actions">
        <a class="btn btn--wa" href="${wa('Halo PT. Mahkota Baru Isolasi, saya ingin bertanya.')}" target="_blank" rel="noopener">${waIcon} Konsultasi via WhatsApp</a>
        <a class="btn btn--outline" href="mailto:${company.email}">${icon('mail')} Kirim Pesan</a>
      </div>
    </div>
  </div>
</section>

<section class="section section--soft" id="layanan">
  <div class="container">
    <div class="section-head center reveal"><span class="eyebrow">Bidang Layanan</span><h2>Apa yang bisa kami bantu?</h2>
      <p>Didukung oleh tenaga ahli berpengalaman dan berkompetensi tinggi, kami berkomitmen untuk memberikan solusi terbaik, terpercaya, dan berorientasi pada kebutuhan pelanggan.</p></div>
    <div class="grid grid--4">${serviceAreas.map(serviceCard).join('')}</div>
  </div>
</section>

<section class="section" id="produk">
  <div class="container">
    <div class="row-head">
      <div class="section-head reveal"><span class="eyebrow">Produk</span><h2>Produk pilihan</h2><p>Harga transparan, stok siap di Harco Glodok. Klik produk untuk detail dan pemesanan.</p></div>
      <a class="btn btn--outline" href="${company.tokopedia}" target="_blank" rel="noopener">${icon('store')} Toko Tokopedia</a>
    </div>
    <div class="tabs" role="tablist" aria-label="Kategori produk">
      ${tabs.map(([id, label], i) => `<button class="tab" role="tab" type="button" id="tab-${id}" aria-controls="panel-${id}" aria-selected="${i === 0}">${label}</button>`).join('')}
    </div>
    ${tabs.map(([id, , items, href], i) => `<div class="tab-panel" role="tabpanel" id="panel-${id}" aria-labelledby="tab-${id}"${i ? ' hidden' : ''}>
      <div class="scroller">${items.map(([p, tag]) => productCard(p, tag)).join('')}</div>
      <p style="margin-top:1.25rem"><a class="link-arrow" href="${href}">Lihat semua produk ${icon('arrow')}</a></p>
    </div>`).join('')}
  </div>
</section>

<section class="section section--soft" id="visi-misi">
  <div class="container vm">
    <div class="vision-card reveal"><span class="eyebrow">Visi</span><h2>Visi Kami</h2><p>${esc(vision)}</p></div>
    <div class="reveal">
      <div class="section-head" style="margin-bottom:1.5rem"><span class="eyebrow">Misi</span><h2>Misi Kami</h2></div>
      <ol class="mission">${mission.map(([t, d]) => `<li><strong>${esc(t)}</strong><p>${esc(d)}</p></li>`).join('')}</ol>
    </div>
  </div>
</section>

<section class="section" id="kontak">
  <div class="container">
    <div class="section-head center reveal"><span class="eyebrow">Kontak</span><h2>Kunjungi atau hubungi kami</h2>
      <p>Pengambilan barang bisa di Harco Glodok dari Senin–Jumat, jam 9–17 WIB.</p></div>
    <div class="contact">
      <div class="contact__cards reveal">
        <a class="c-card" href="${wa()}" target="_blank" rel="noopener"><span class="c-card__icon c-card__icon--wa">${waIcon}</span><div><small>WhatsApp</small><strong>${company.phone}</strong></div></a>
        <a class="c-card" href="mailto:${company.email}"><span class="c-card__icon">${icon('mail')}</span><div><small>Email</small><strong>${company.email}</strong></div></a>
        <a class="c-card" href="${company.mapsLink}" target="_blank" rel="noopener"><span class="c-card__icon c-card__icon--green">${icon('pin')}</span><div><small>Alamat</small><strong>${esc(company.address)}</strong></div></a>
        <a class="c-card" href="${company.tokopedia}" target="_blank" rel="noopener"><span class="c-card__icon">${icon('store')}</span><div><small>Tokopedia</small><strong>${esc(company.name)}</strong></div></a>
      </div>
      <div class="map reveal"><iframe src="${company.mapsEmbed}" title="Lokasi ${esc(company.name)} di Harco Glodok" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe></div>
    </div>
  </div>
</section>
${ctaBand()}
${productModal()}`;
  pages.push({ path: 'index.html', html: page({ title: 'PT. Mahkota Baru Isolasi — Isolasi, Insulasi & Layanan Profesional', description: excerpt(homeIntro, 155), active: '', body, path: 'index.html' }) });
}

// PRODUCT CATALOGUES
const catalogue = (slug, title, lead, cats, svcKey) => {
  const total = cats.reduce((n, c) => n + c.items.length, 0);
  const area = serviceAreas.find((s) => s.key === svcKey);
  const body = `
${pageHero({ crumbs: [[title]], title: `Produk ${title}`, sub: lead, bg: area.img,
    actions: `<div class="hero__actions"><a class="btn btn--wa" href="${wa(`Halo, saya ingin bertanya tentang produk ${title}.`)}" target="_blank" rel="noopener">${waIcon} Tanya Stok via WhatsApp</a><a class="btn btn--ghost" href="${company.tokopedia}" target="_blank" rel="noopener">${icon('store')} Tokopedia</a></div>` })}
<div class="catbar"><div class="container">
  <nav class="catbar__chips" aria-label="Kategori">
    <a class="chip is-active" href="#semua" data-cat="all">Semua <small>${total}</small></a>
    ${cats.map((c) => `<a class="chip" href="#${c.id}" data-cat="${c.id}">${esc(c.title)} <small>${c.items.length}</small></a>`).join('')}
  </nav>
  <div class="search-field">${icon('search')}<label class="sr-only" for="product-filter">Cari produk</label><input id="product-filter" type="search" placeholder="Cari produk ${esc(title.toLowerCase())}…" autocomplete="off"></div>
</div></div>
<section class="section" style="padding-top:2rem" id="semua">
  <div class="container">
    <div class="notice reveal">${icon('info')}<span>${esc(shippingNote)}</span></div>
    ${cats.map((c) => `<section class="cat-section" id="${c.id}" data-section="${c.id}">
      <div class="cat-section__head"><h2>${esc(c.title)}</h2><span>${c.items.length ? `${c.items.length} produk` : ''}</span></div>
      ${c.items.length ? `<div class="p-grid">${c.items.map((p) => productCard(p, c.tag || c.title)).join('')}</div>`
        : `<div class="empty">Produk ${esc(c.title)} tersedia berdasarkan permintaan. Hubungi kami untuk ketersediaan dan harga.<br><a class="btn btn--wa btn--sm" href="${wa(`Halo, apakah produk ${c.title} tersedia?`)}" target="_blank" rel="noopener">${waIcon} Tanya ketersediaan</a></div>`}
    </section>`).join('')}
    <p class="no-results" id="no-results" hidden>Tidak ada produk yang cocok. Coba kata kunci lain atau <a href="${wa()}" target="_blank" rel="noopener">tanya kami via WhatsApp</a>.</p>
  </div>
</section>
${ctaBand(`Halo, saya ingin bertanya tentang produk ${title}.`)}
${otherServices(svcKey)}
${productModal()}`;
  return page({ title: `Produk ${title} — ${company.name}`, description: excerpt(area.text, 155), active: `/${slug}.html`, body, path: `${slug}.html` });
};
pages.push({ path: 'isolasi.html', html: catalogue('isolasi', 'Isolasi', serviceAreas[0].text, isolasi, 'isolasi') });
pages.push({ path: 'insulasi.html', html: catalogue('insulasi', 'Insulasi', serviceAreas[1].text, insulasi, 'insulasi') });

// CATEGORY PAGES
for (const c of categoryPages) {
  const area = serviceAreas.find((s) => s.key === c.slug);
  const details = Object.fromEntries(detailPages.map((d) => [d.slug, d]));
  const body = `
${pageHero({ crumbs: [[c.title]], title: c.title, sub: c.lead, bg: area.img,
    actions: `<div class="hero__actions"><a class="btn btn--wa" href="${wa(`Halo, saya ingin bertanya tentang layanan ${c.title}.`)}" target="_blank" rel="noopener">${waIcon} Hubungi Kami</a></div>` })}
${c.feature ? `<section class="section"><div class="container">
  ${c.feature.img
    ? `<div class="split"><img class="reveal" src="${img(c.feature.img)}" alt="${esc(c.title)}" loading="lazy"><div class="reveal"><span class="eyebrow">${esc(c.title)}</span><h2>${esc(c.feature.title)}</h2>${c.feature.text.map((t) => `<p>${esc(t)}</p>`).join('')}</div></div>`
    : `<div class="quote-box reveal"><h2>${esc(c.feature.title)}</h2>${c.feature.text.map((t) => `<p>${esc(t)}</p>`).join('')}</div>`}
</div></section>` : ''}
<section class="section ${c.feature ? 'section--soft' : ''}">
  <div class="container">
    <div class="section-head reveal"><span class="eyebrow">${esc(c.title)}</span><h2>${esc(c.cardsTitle || 'Pilih layanan')}</h2></div>
    <div class="grid ${c.cards.length === 4 ? 'grid--2' : 'grid--3'}">
      ${c.cards.map(([slug, t, d]) => `<a class="s-card reveal" href="${slug}.html">
        <div class="s-card__media"><img src="${img(details[slug].img)}" alt="${esc(t)}" loading="lazy"></div>
        <div class="s-card__body"><span class="s-card__icon">${icon(area.icon)}</span><h3>${esc(t)}</h3><p>${esc(d)}</p><span class="link-arrow">Pelajari lebih lanjut ${icon('arrow')}</span></div></a>`).join('')}
    </div>
  </div>
</section>
${ctaBand(`Halo, saya ingin bertanya tentang layanan ${c.title}.`)}
${otherServices(c.slug)}`;
  pages.push({ path: `${c.slug}.html`, html: page({ title: `${c.title} — ${company.name}`, description: excerpt(c.lead, 155), active: `/${c.slug}.html`, body, path: `${c.slug}.html` }) });
}

// DETAIL PAGES
const renderItem = (it, ic = 'check') => (Array.isArray(it)
  ? `<li>${icon(ic)}<span><strong>${esc(it[0])}:</strong> ${esc(it[1])}</span></li>`
  : `<li>${icon(ic)}<span>${esc(it)}</span></li>`);
const renderSection = (s) => {
  let inner;
  if (s.groups) {
    inner = `<div class="groups">${s.groups.map((g) => `<div class="group"${g.id ? ` id="${g.id}"` : ''}><h3>${esc(g.label)}</h3><ul>${g.items.map((it) => renderItem(it)).join('')}</ul></div>`).join('')}</div>`;
  } else if (s.style === 'cards') {
    inner = `<div class="grid grid--2">${s.items.map(([t, d], i) => `<div class="f-card"><span class="f-card__num">${String(i + 1).padStart(2, '0')}</span><h3>${esc(t)}</h3><p>${esc(d)}</p></div>`).join('')}</div>`;
  } else if (s.style === 'checks') {
    inner = `<ul class="checks">${s.items.map((t) => `<li>${icon('check')}${esc(t)}</li>`).join('')}</ul>`;
  } else if (s.style === 'chips') {
    inner = `<ul class="chips">${s.items.map((t) => `<li>${icon('doc')}${esc(t)}</li>`).join('')}</ul>`;
  } else if (s.style === 'langs') {
    inner = `<div class="langs">${s.items.map(([t, d]) => `<div class="lang"><strong>${icon('translate')}${esc(t)}</strong><p>${esc(d)}</p></div>`).join('')}</div>`;
  } else {
    inner = `<ul class="list">${s.items.map((it) => renderItem(it, 'dot')).join('')}</ul>`;
  }
  return `<div class="block reveal"><h2>${esc(s.title)}</h2>${inner}</div>`;
};

for (const d of detailPages) {
  const parent = d.parent ? categoryPages.find((c) => c.slug === d.parent) : null;
  const siblings = parent ? detailPages.filter((x) => x.parent === d.parent) : [];
  const areaKey = d.parent || d.slug;
  const crumbs = parent ? [[parent.title, `/${parent.slug}.html`], [d.nav]] : [[d.nav]];
  const body = `
${pageHero({ crumbs, title: d.h1, sub: d.sub, bg: d.img,
    actions: `<div class="hero__actions"><a class="btn btn--wa" href="${wa(d.wa)}" target="_blank" rel="noopener">${waIcon} Konsultasi via WhatsApp</a><a class="btn btn--ghost" href="mailto:${company.email}?subject=${encodeURIComponent(d.nav)}">${icon('mail')} Email</a></div>` })}
<section class="section">
  <div class="container detail">
    <article class="prose">
      <img class="prose__img reveal" src="${img(d.img)}" alt="${esc(d.nav)}">
      ${d.intro.map((p, i) => `<p class="${i === 0 ? 'lead ' : ''}reveal">${esc(p)}</p>`).join('')}
      ${d.sections.map(renderSection).join('')}
      ${d.outro ? `<p class="block reveal">${esc(d.outro)}</p>` : ''}
    </article>
    <aside class="aside">
      <div class="cta-card">
        <h3>Siap membantu Anda</h3>
        <p>Hubungi kami untuk konsultasi ${esc(d.nav)}. Respons cepat melalui WhatsApp.</p>
        <a class="btn btn--wa btn--block" href="${wa(d.wa)}" target="_blank" rel="noopener">${waIcon} WhatsApp</a>
        <a class="btn btn--ghost btn--block" href="mailto:${company.email}?subject=${encodeURIComponent(d.nav)}">${icon('mail')} ${company.email}</a>
      </div>
      ${siblings.length ? `<nav class="side-nav" aria-label="${esc(parent.title)}"><h4>${esc(parent.title)}</h4><ul>
        ${siblings.map((s) => `<li><a href="${s.slug}.html"${s.slug === d.slug ? ' aria-current="page"' : ''}>${esc(s.nav)}${icon('dot')}</a></li>`).join('')}
      </ul></nav>` : ''}
    </aside>
  </div>
</section>
${otherServices(areaKey)}`;
  const activeNav = parent ? `/${parent.slug}.html` : `/${d.slug}.html`;
  pages.push({ path: `${d.slug}.html`, html: page({ title: `${d.nav} — ${company.name}`, description: excerpt(d.intro[0], 155), active: activeNav, body, path: `${d.slug}.html` }) });
}

// ---------- search index ----------
const index = [
  ...serviceAreas.map((s) => ({ t: s.title, s: 'Layanan', u: url(s.href), i: s.icon })),
  ...detailPages.map((d) => ({ t: d.nav, s: d.parent ? `Layanan · ${categoryPages.find((c) => c.slug === d.parent).title}` : 'Layanan', u: `${d.slug}.html`, i: 'doc' })),
  ...isolasi.flatMap((c) => c.items.map((p) => ({ t: p[1], s: `${rupiah(p[2])} · ${c.title}`, u: `isolasi.html#${c.id}`, img: prodImg(p[0]) }))),
  ...insulasi.filter((c) => c.id !== 'produkLain').flatMap((c) => c.items.map((p) => ({ t: p[1], s: `${rupiah(p[2])} · ${c.title}`, u: `insulasi.html#${c.id}`, img: prodImg(p[0]) }))),
];

// ---------- write ----------
await rm(OUT, { recursive: true, force: true });
await mkdir(`${OUT}/assets/js`, { recursive: true });
await cp('src/assets', `${OUT}/assets`, { recursive: true });
await cp('src/images', `${OUT}/images`, { recursive: true });
await writeFile(`${OUT}/assets/js/search-index.js`, `window.SEARCH_INDEX=${JSON.stringify(index)};window.WA_NUMBER=${JSON.stringify(company.whatsapp)};`);
for (const p of pages) await writeFile(`${OUT}/${p.path}`, p.html);
await writeFile(`${OUT}/sitemap.xml`, `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.map((p) => `  <url><loc>${SITE_URL}/${p.path === 'index.html' ? '' : p.path}</loc></url>`).join('\n')}\n</urlset>\n`);
await cp('src/images/brand/favicon.ico', `${OUT}/favicon.ico`);
await cp('src/apache/.htaccess', `${OUT}/.htaccess`);
await writeFile(`${OUT}/site.webmanifest`, JSON.stringify({
  name: company.name,
  short_name: 'Mahkota Baru',
  start_url: './',
  display: 'standalone',
  background_color: '#ffffff',
  theme_color: '#0a1a33',
  icons: [
    { src: 'images/brand/icon-192.png', sizes: '192x192', type: 'image/png' },
    { src: 'images/brand/icon-512.png', sizes: '512x512', type: 'image/png' },
    { src: 'images/brand/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
  ],
}, null, 2));
await writeFile(`${OUT}/robots.txt`, `User-agent: *\nAllow: /\nSitemap: ${SITE_URL}/sitemap.xml\n`);
console.log(`Built ${pages.length} pages and ${index.length} search entries → ${OUT}/`);

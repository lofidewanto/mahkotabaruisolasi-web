// Generates the Company Profile (Bahasa Indonesia, A4, 12 pages) from the website data,
// then prints it to PDF with headless Google Chrome.
//   node company-profile/build-profile.mjs
import { writeFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { company, vision, mission, serviceAreas, homeIntro, shippingNote } from '../src/data/site.mjs';
import { isolasi, insulasi } from '../src/data/products.mjs';
import { detailPages } from '../src/data/services.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const IMG = '../src/images';
const img = (p) => IMG + p;
const prod = (f) => IMG + '/storage/app/public/produk_foto/' + f;
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const rp = (n) => 'Rp ' + n.toLocaleString('id-ID');
const page = (id) => detailPages.find((p) => p.slug === id);
const YEAR = new Date().getFullYear();

// ---------- icons (same stroke set as the website) ----------
const P = {
  phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  pin: '<path d="M12 22s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  check: '<circle cx="12" cy="12" r="9"/><path d="m8.5 12 2.5 2.5 4.5-5"/>',
  doc: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h4"/>',
  store: '<path d="M3 9l1.5-5h15L21 9M3 9v11h18V9M3 9h18M9 20v-6h6v6"/>',
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
  eye: '<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  truck: '<path d="M3 6h11v10H3zM14 9h4l3 3v4h-7"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/>',
  heart: '<path d="M12 20s-7.5-4.6-9.2-9.3A4.9 4.9 0 0 1 12 6.6a4.9 4.9 0 0 1 9.2 4.1C19.5 15.4 12 20 12 20z"/>',
  car: '<path d="M5 16V11l2-5h10l2 5v5M3 16h18v3H3zM5 11h14"/><circle cx="7.5" cy="16" r=".6"/><circle cx="16.5" cy="16" r=".6"/>',
  building: '<path d="M4 21V5l8-2v18M12 8h8v13M2 21h20M7 8h2M7 12h2M7 16h2M15 12h2M15 16h2"/>',
  ring: '<circle cx="9" cy="14" r="6"/><circle cx="15" cy="14" r="6"/><path d="m10 3 2 2 2-2"/>',
  baby: '<circle cx="12" cy="8" r="4"/><path d="M6 21a6 6 0 0 1 12 0M10.5 8h.01M13.5 8h.01"/>',
  cash: '<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="3"/><path d="M6 12h.01M18 12h.01"/>',
  scale: '<path d="M12 3v18M7 21h10M5 7h14M5 7l-3 7a3 3 0 0 0 6 0zM19 7l-3 7a3 3 0 0 0 6 0z"/>',
  percent: '<path d="M19 5 5 19"/><circle cx="7" cy="7" r="2.5"/><circle cx="17" cy="17" r="2.5"/>',
  bolt: '<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',
  fan: '<circle cx="12" cy="12" r="2"/><path d="M12 10c0-4 1-7 4-7s2 5-2 7M14 12c4 0 7 1 7 4s-5 2-7-2M12 14c0 4-1 7-4 7s-2-5 2-7M10 12c-4 0-7-1-7-4s5-2 7 2"/>',
  fuel: '<path d="M4 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16M3 21h12M4 10h10M14 8h2a2 2 0 0 1 2 2v6a1.5 1.5 0 0 0 3 0V8l-3-3"/>',
  pipe: '<path d="M3 8h8a4 4 0 0 1 4 4v9M3 14h5a1 1 0 0 1 1 1v6M2 6v10M13 21h8"/>',
  sound: '<path d="M11 5 6 9H3v6h3l5 4zM15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
};
const ic = (n, cls = '') => `<svg class="ic ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${P[n] || P.arrow}</svg>`;

// ---------- shared page chrome ----------
const TOTAL = 12;
const head = (n, section) => `
  <header class="pg-head">
    <div class="pg-brand"><img src="${img(company.logo)}" alt=""><span>${esc(company.name)}</span></div>
    <div class="pg-sec">${esc(section)}</div>
  </header>`;
const foot = (n) => `
  <footer class="pg-foot">
    <span>Company Profile ${YEAR}</span>
    <span class="pg-site">mahkotabaruisolasi.co.id</span>
    <span class="pg-num">${String(n).padStart(2, '0')} <i>/ ${TOTAL}</i></span>
  </footer>`;
const sectionTitle = (no, eyebrow, title, lead = '') => `
  <div class="stitle">
    <div class="stitle__no">${no}</div>
    <div>
      <div class="eyebrow">${esc(eyebrow)}</div>
      <h2>${title}</h2>
      ${lead ? `<p class="lead">${esc(lead)}</p>` : ''}
    </div>
  </div>`;

// ---------- product helpers ----------
const catSummary = (cat) => {
  const prices = cat.items.map((i) => i[2]);
  return { n: cat.items.length, min: Math.min(...prices), max: Math.max(...prices) };
};
const isoCats = isolasi.filter((c) => c.items.length && c.id !== 'produkLain');
const insCats = insulasi.filter((c) => c.items.length && c.id !== 'produkLain');
const lain = insulasi.find((c) => c.id === 'produkLain');
const allProducts = new Map();
[...isolasi, ...insulasi].forEach((c) => c.items.forEach((i) => allProducts.set(i[1], i)));
const productCount = allProducts.size;

const catIcons = {
  isolasisingletape: 'tape', dobletapekertas: 'layers', isolasisafetywalk: 'shield', barikade: 'stamp',
  '3M': 'star', reflektifLokal: 'eye', rockwool: 'layers', peredam: 'sound', komponenlistrik: 'bolt',
  komponenac: 'fan', tangkibbm: 'fuel', poliken: 'pipe',
};
const catCard = (c) => {
  const s = catSummary(c);
  const pick = c.items[0];
  return `
  <div class="pcat">
    <div class="pcat__img"><img src="${prod(pick[0])}" alt=""></div>
    <div class="pcat__body">
      <div class="pcat__top">${ic(catIcons[c.id] || 'box', 'ic--chip')}<h4>${esc(c.title)}</h4></div>
      <ul>${c.items.slice(0, 3).map((i) => `<li>${esc(i[1])}</li>`).join('')}</ul>
      <div class="pcat__meta"><span>${s.n} produk</span><b>${s.min === s.max ? rp(s.min) : rp(s.min) + ' – ' + rp(s.max)}</b></div>
    </div>
  </div>`;
};

// ---------- pages ----------
const pages = [];

// 1 — COVER
pages.push(`
<section class="page cover">
  <img class="cover__bg" src="${img('/gambarStatis/carousel4.jpg')}" alt="">
  <div class="cover__shade"></div>
  <div class="cover__top">
    <div class="cover__logo"><img src="${img(company.logo)}" alt=""></div>
    <div class="cover__brand">${esc(company.name)}<small>Isolasi · Insulasi · Jasa Profesional</small></div>
  </div>
  <div class="cover__main">
    <div class="badge"><span>${YEAR}</span> Company Profile</div>
    <h1>Solusi <em>terintegrasi</em><br>untuk bisnis &amp; keluarga Anda</h1>
    <p>Dari material isolasi dan insulasi berkualitas hingga layanan dokumen internasional, asuransi, konsultasi, manajemen, dan terjemahan — semua dalam satu mitra tepercaya.</p>
  </div>
  <div class="cover__stats">
    <div><b>8</b><span>Bidang usaha</span></div>
    <div><b>${productCount}+</b><span>Produk katalog</span></div>
    <div><b>3</b><span>Bahasa layanan</span></div>
    <div><b>ID · DE</b><span>Fokus Indonesia–Jerman</span></div>
  </div>
  <div class="cover__foot">
    <span>${ic('pin')} Harco Glodok, Jakarta Barat</span>
    <span>${ic('mail')} ${company.email}</span>
    <span>${ic('phone')} ${company.phoneDisplay}</span>
  </div>
</section>`);

// 2 — DAFTAR ISI + SAMBUTAN
const toc = [
  ['03', 'Tentang Kami'], ['04', 'Visi & Misi'], ['05', 'Bidang Usaha'], ['06', 'Produk Isolasi'],
  ['07', 'Produk Insulasi'], ['08', 'Jasa Dokumen & Imigrasi'], ['09', 'Asuransi'],
  ['10', 'Konsultan & Konsuler'], ['11', 'Manajemen & Terjemahan'], ['12', 'Hubungi Kami'],
];
pages.push(`
<section class="page">
  ${head(2, 'Pengantar')}
  <div class="body two-col intro">
    <div>
      <div class="eyebrow">Daftar Isi</div>
      <h2 class="h-xl">Isi dokumen</h2>
      <ol class="toc">${toc.map(([n, t]) => `<li><span>${esc(t)}</span><i></i><b>${n}</b></li>`).join('')}</ol>
    </div>
    <div class="welcome">
      <div class="eyebrow">Kata Pengantar</div>
      <h2 class="h-lg">Selamat datang di ${esc(company.short)}</h2>
      <p>Terima kasih atas kepercayaan Anda. Dokumen ini memperkenalkan siapa kami, apa yang kami kerjakan, dan bagaimana kami dapat membantu kebutuhan Anda — baik sebagai pelaku usaha, kontraktor, maupun keluarga.</p>
      <p>Berawal dari penyediaan material isolasi dan insulasi di pusat perdagangan Harco Glodok, Jakarta, kami terus berkembang menjadi ekosistem layanan yang lebih luas: pengurusan dokumen internasional, asuransi, konsultasi perkawinan campur Indonesia–Jerman, manajemen bisnis, konsuler, hingga terjemahan bahasa.</p>
      <p>Satu prinsip yang selalu kami pegang: <strong>solusi yang tepat, proses yang cepat, dan layanan yang dapat dipercaya.</strong></p>
      <div class="sign"><b>Manajemen</b><span>${esc(company.name)}</span></div>
      <figure class="welcome__img"><img src="${img('/gambarStatis/carousel.jpg')}" alt=""></figure>
    </div>
  </div>
  ${foot(2)}
</section>`);

// 3 — TENTANG KAMI
pages.push(`
<section class="page">
  ${head(3, 'Tentang Kami')}
  <div class="body">
    ${sectionTitle('01', 'Tentang Kami', 'Satu mitra untuk <span class="hl">banyak kebutuhan</span>')}
    <div class="about">
      <div class="about__text">
        <p class="lead-lg">${esc(homeIntro)}</p>
        <p>Kami melayani pelanggan ritel, kontraktor, industri, hingga keluarga dan individu yang membutuhkan pendampingan administrasi lintas negara. Produk kami juga tersedia secara daring melalui toko resmi di Tokopedia, dengan pengiriman ke seluruh Indonesia.</p>
        <div class="facts">
          <div>${ic('building', 'ic--chip')}<b>Badan usaha</b><span>Perseroan Terbatas (PT)</span></div>
          <div>${ic('pin', 'ic--chip')}<b>Lokasi</b><span>Harco Glodok Lt. 1 Blok C No. 26, Jakarta Barat</span></div>
          <div>${ic('clock', 'ic--chip')}<b>Jam operasional</b><span>${esc(company.hours)}</span></div>
          <div>${ic('store', 'ic--chip')}<b>Kanal penjualan</b><span>Toko fisik · Tokopedia · WhatsApp</span></div>
        </div>
      </div>
      <div class="about__media">
        <img class="m1" src="${img('/gambarStatis/carousel6.jpg')}" alt="">
        <img class="m2" src="${img('/gambarStatis/panelSurya.jpg')}" alt="">
        <div class="m-badge"><b>${productCount}+</b><span>produk siap kirim</span></div>
      </div>
    </div>
    <div class="values">
      ${[
        ['star', 'Kualitas', 'Produk original dan material pilihan dari merek tepercaya seperti 3M, tesa, dan Rockwool.'],
        ['bolt', 'Cepat & Tepat', 'Proses yang efisien — dari pengiriman barang 2–3 hari hingga pengurusan dokumen.'],
        ['shield', 'Tepercaya', 'Harga transparan tanpa biaya tersembunyi, serta pendampingan hingga tuntas.'],
        ['users', 'Berorientasi Pelanggan', 'Tim berpengalaman yang siap memberi konsultasi gratis sesuai kebutuhan Anda.'],
      ].map(([i, t, d]) => `<div class="value">${ic(i, 'ic--chip')}<h4>${t}</h4><p>${d}</p></div>`).join('')}
    </div>
  </div>
  ${foot(3)}
</section>`);

// 4 — VISI & MISI
pages.push(`
<section class="page">
  ${head(4, 'Visi & Misi')}
  <div class="body">
    ${sectionTitle('02', 'Visi & Misi', 'Arah dan komitmen <span class="hl">kami</span>')}
    <div class="vision">
      <div class="vision__icon">${ic('eye')}</div>
      <div>
        <div class="eyebrow eyebrow--light">Visi</div>
        <p>${esc(vision)}</p>
      </div>
    </div>
    <div class="eyebrow mt">Misi</div>
    <div class="missions">
      ${mission.map(([t, d], i) => `
        <div class="mission"><div class="mission__no">${String(i + 1).padStart(2, '0')}</div><div><h4>${esc(t)}</h4><p>${esc(d)}</p></div></div>`).join('')}
    </div>
  </div>
  ${foot(4)}
</section>`);

// 5 — BIDANG USAHA
const areaIcon = { isolasi: 'tape', insulasi: 'layers', jasa: 'stamp', asuransi: 'shield', konsultan: 'chat', management: 'chart', konsuler: 'globe', terjemahan: 'translate' };
const areaShort = {
  isolasi: 'Lakban, double tape, safety walk, barikade, 3M & reflektif.',
  insulasi: 'Rockwool, peredam, komponen listrik & AC, tangki BBM, poliken.',
  jasa: 'Apostille, visa Jerman & Swiss, KITAS/KITAP, legalisasi.',
  asuransi: 'Jiwa, kesehatan anak, istri, suami, keluarga, mobil & karyawan.',
  konsultan: 'Nikah campur, legalitas perkawinan & kelahiran Jerman–Indonesia.',
  management: 'Manajemen cash, risiko, dan pajak untuk bisnis Anda.',
  konsuler: 'Pernikahan, visa Eropa & izin tinggal di Jerman.',
  terjemahan: 'Indonesia ⇄ Jerman, Indonesia ⇄ Inggris.',
};
pages.push(`
<section class="page">
  ${head(5, 'Bidang Usaha')}
  <div class="body">
    ${sectionTitle('03', 'Bidang Usaha', 'Delapan lini layanan, <span class="hl">satu standar</span>', 'Setiap lini usaha kami dikelola oleh tim yang memahami bidangnya — terintegrasi sehingga Anda cukup menghubungi satu pihak untuk berbagai kebutuhan.')}
    <div class="areas">
      ${serviceAreas.map((a, i) => `
      <div class="area">
        <div class="area__img"><img src="${img(a.img)}" alt=""><span class="area__no">${String(i + 1).padStart(2, '0')}</span></div>
        <div class="area__body">
          <div class="area__title">${ic(areaIcon[a.key], 'ic--chip')}<h4>${esc(a.title === 'Insulation' ? 'Insulasi' : a.title === 'Management' ? 'Manajemen' : a.title)}</h4></div>
          <p>${esc(areaShort[a.key])}</p>
        </div>
      </div>`).join('')}
    </div>
  </div>
  ${foot(5)}
</section>`);

// 6 — ISOLASI
pages.push(`
<section class="page">
  ${head(6, 'Produk Isolasi')}
  <div class="body">
    ${sectionTitle('04', 'Produk · Isolasi', 'Isolasi &amp; perekat <span class="hl">berkualitas</span>')}
    <div class="banner">
      <img src="${img(serviceAreas[0].img)}" alt="">
      <div class="banner__text"><p>${esc(serviceAreas[0].text.split('. ').slice(0, 3).join('. '))}.</p></div>
    </div>
    <div class="pcats">${isoCats.map(catCard).join('')}</div>
    <p class="note">${ic('truck')} ${esc(shippingNote)}</p>
  </div>
  ${foot(6)}
</section>`);

// 7 — INSULASI
pages.push(`
<section class="page">
  ${head(7, 'Produk Insulasi')}
  <div class="body">
    ${sectionTitle('05', 'Produk · Insulasi', 'Insulasi untuk bangunan, <span class="hl">industri &amp; energi</span>')}
    <div class="banner">
      <img src="${img(serviceAreas[1].img)}" alt="">
      <div class="banner__text"><p>${esc(serviceAreas[1].text.split('. ').slice(1, 4).join('. '))}.</p></div>
    </div>
    <div class="pcats">${insCats.map(catCard).join('')}</div>
    <div class="other">
      <div class="other__label">${ic('box', 'ic--chip')}<div><b>Produk lain</b><span>${lain.items.length} produk pendukung</span></div></div>
      <div class="chips">${lain.items.slice(0, 7).map((i) => `<span>${esc(i[1].split(' ').slice(0, 4).join(' '))}</span>`).join('')}</div>
    </div>
  </div>
  ${foot(7)}
</section>`);

// 8 — JASA
const jasa = ['apostille', 'visa', 'kitasKitap', 'legalisasi'].map(page);
const jasaPoints = {
  apostille: page('apostille').sections[0].items.slice(0, 6),
  visa: ['Visa Turis & Bisnis (Schengen)', 'Visa Kunjungan Keluarga', 'Visa Kerja & Pelajar', 'Visa Ikut Suami/Istri', 'Visa Sekolah Bahasa'],
  kitasKitap: ['KITAS kerja, pasangan WNI, pelajar, pensiun', 'KITAP pasangan WNI & TKA jangka panjang', 'Anak WNA dari WNI / pemegang KITAP'],
  legalisasi: page('legalisasi').sections[1].items.slice(0, 5),
};
const jasaTitle = { apostille: 'Apostille', visa: 'Visa Jerman & Swiss', kitasKitap: 'KITAS & KITAP', legalisasi: 'Legalisasi Dokumen' };
pages.push(`
<section class="page">
  ${head(8, 'Jasa Dokumen & Imigrasi')}
  <div class="body">
    ${sectionTitle('06', 'Layanan · Jasa', 'Dokumen internasional, <span class="hl">tanpa ribet</span>', 'Kami mengurus dokumen Anda dengan cepat dan tepat, memastikan keabsahannya untuk keperluan internasional maupun domestik.')}
    <div class="svc4">
      ${jasa.map((p) => `
      <div class="svc">
        <div class="svc__img"><img src="${img(p.img)}" alt=""><h3>${esc(jasaTitle[p.slug])}</h3></div>
        <div class="svc__body">
          <p>${esc(p.sub)}</p>
          <ul class="checks">${jasaPoints[p.slug].map((t) => `<li>${ic('check')}${esc(t)}</li>`).join('')}</ul>
        </div>
      </div>`).join('')}
    </div>
    <div class="strip">
      ${['Proses Cepat & Aman', 'Konsultasi Gratis', 'Antar-Jemput Dokumen', 'Harga Transparan', 'Pendampingan hingga Disetujui'].map((t) => `<span>${ic('check')}${t}</span>`).join('')}
    </div>
  </div>
  ${foot(8)}
</section>`);

// 9 — ASURANSI
const asu = [
  ['asuransiJiwa', 'heart', 'Asuransi Jiwa'], ['asuransiAnak', 'baby', 'Kesehatan Anak'],
  ['asuransiIstri', 'users', 'Kesehatan Istri'], ['asuransiSuami', 'users', 'Kesehatan Suami'],
  ['asuransiKeluarga', 'users', 'Kesehatan Keluarga'], ['asuransiKendaraan', 'car', 'Asuransi Mobil'],
  ['asuransiPerusahaan', 'building', 'Kesehatan Karyawan (Kumpulan)'],
];
const asuDesc = {
  asuransiJiwa: 'Uang pertanggungan untuk kebutuhan hidup, pendidikan, atau pelunasan utang keluarga.',
  asuransiAnak: 'Rawat inap, imunisasi, dan perawatan penyakit untuk tumbuh kembang si kecil.',
  asuransiIstri: 'Rawat inap, pemeriksaan, dan penyakit kritis dengan klaim mudah di RS rekanan.',
  asuransiSuami: 'Perlindungan rawat inap, obat-obatan, dan penyakit kritis.',
  asuransiKeluarga: 'Satu polis untuk melindungi seluruh anggota keluarga.',
  asuransiKendaraan: 'Kecelakaan, pencurian, kebakaran, hingga bencana alam.',
  asuransiPerusahaan: 'Perlindungan medis karyawan & keluarga dengan premi lebih terjangkau.',
};
pages.push(`
<section class="page">
  ${head(9, 'Asuransi')}
  <div class="body">
    ${sectionTitle('07', 'Layanan · Asuransi', 'Perlindungan di setiap <span class="hl">tahap kehidupan</span>')}
    <div class="hero-band">
      <img src="${img('/gambarStatis/asuransiKeluarga.jpg')}" alt="">
      <div class="hero-band__text">
        <p>${esc(serviceAreas[3].text)}</p>
      </div>
    </div>
    <div class="ins-grid">
      ${asu.map(([s, i, t]) => `
      <div class="ins">${ic(i, 'ic--chip')}<div><h4>${t}</h4><p>${asuDesc[s]}</p></div></div>`).join('')}
      <div class="ins ins--cta"><div><h4>Konsultasi gratis</h4><p>Kami bantu memilih polis yang paling sesuai dengan kebutuhan dan anggaran Anda.</p></div></div>
    </div>
    <div class="steps">
      ${[
        ['Konsultasi', 'Ceritakan kebutuhan perlindungan Anda kepada tim kami — gratis.'],
        ['Analisis', 'Kami petakan risiko dan anggaran untuk Anda dan keluarga.'],
        ['Pilih Polis', 'Bandingkan manfaat dan premi, lalu pilih yang paling tepat.'],
        ['Pendampingan', 'Kami dampingi proses pendaftaran hingga klaim di RS rekanan.'],
      ].map(([t, d], i) => `<div class="step"><div class="step__no">0${i + 1}</div><h4>${t}</h4><p>${d}</p></div>`).join('')}
    </div>
  </div>
  ${foot(9)}
</section>`);

// 10 — KONSULTAN & KONSULER
const kons = page('konsuler');
pages.push(`
<section class="page">
  ${head(10, 'Konsultan & Konsuler')}
  <div class="body">
    ${sectionTitle('08', 'Layanan · Konsultan', 'Pendamping pasangan <span class="hl">Indonesia–Jerman</span>', 'Dari pengurusan dokumen, legalisasi, penerjemahan, hingga pencatatan pernikahan dan legalitas kelahiran anak — ditangani dengan cepat dan tepat.')}
    <div class="trio">
      ${[
        ['nikahCampur', 'ring', 'Nikah Campur', 'Pengurusan dokumen, legalisasi, hingga pencatatan pernikahan sesuai hukum kedua negara.'],
        ['legalitasPerkawinan', 'scale', 'Legalitas Perkawinan', 'Pencatatan di Standesamt (Jerman) dan KUA/Dukcapil (Indonesia), legalisasi & terjemahan.'],
        ['legalitasKelahiran', 'baby', 'Legalitas Kelahiran', 'Akta kelahiran yang sah di Jerman & Indonesia serta pengurusan status kewarganegaraan anak.'],
      ].map(([s, i, t, d]) => `
      <div class="tcard"><img src="${img(page(s).img)}" alt=""><div class="tcard__body">${ic(i, 'ic--chip')}<h4>${t}</h4><p>${d}</p></div></div>`).join('')}
    </div>
    <div class="split">
      <div class="split__img"><img src="${img(kons.img)}" alt=""><div class="split__tag">${ic('globe')} Konsuler</div></div>
      <div class="split__body">
        <h3>Layanan konsuler untuk WNI di Jerman &amp; Eropa</h3>
        <p>${esc(kons.sub)}</p>
        ${kons.sections[0].items.map(([t, d]) => `<div class="kitem"><b>${esc(t)}</b><span>${esc(d.split('. ')[0])}.</span></div>`).join('')}
      </div>
    </div>
    <div class="reasons">
      <div class="eyebrow">Alasan memilih kami</div>
      <div class="reasons__grid">
        ${[
          ['star', 'Pengalaman & Keahlian', 'Profesional berpengalaman di dokumen & visa.'],
          ['bolt', 'Cepat & Efisien', 'Proses dirancang untuk meminimalkan birokrasi.'],
          ['shield', 'Terpercaya', 'Memahami tantangan WNI di luar negeri.'],
          ['scale', 'Dukungan Hukum', 'Pendampingan administratif dan situasi darurat.'],
          ['globe', 'Holistik', 'Pernikahan, visa & izin tinggal dalam satu layanan.'],
        ].map(([i, t, d]) => `<div class="reason">${ic(i, 'ic--chip')}<h4>${t}</h4><p>${d}</p></div>`).join('')}
      </div>
    </div>
  </div>
  ${foot(10)}
</section>`);

// 11 — MANAJEMEN & TERJEMAHAN
const mg = [
  ['managementCash', 'cash', 'Manajemen Cash', 'Pengendalian arus kas masuk dan keluar agar dana operasional dan investasi selalu tersedia dan optimal.'],
  ['managementRisiko', 'shield', 'Manajemen Risiko', 'Identifikasi, analisis, dan mitigasi risiko untuk melindungi aset dan menjaga stabilitas bisnis.'],
  ['managementPajak', 'percent', 'Manajemen Pajak', 'Perencanaan dan kepatuhan pajak yang tepat waktu, efisien, dan memanfaatkan insentif yang sah.'],
];
const tj = page('terjemahan');
pages.push(`
<section class="page">
  ${head(11, 'Manajemen & Terjemahan')}
  <div class="body">
    ${sectionTitle('09', 'Layanan · Manajemen', 'Bisnis lebih <span class="hl">efisien &amp; tertib</span>', 'Perencanaan strategis, keuangan, operasional, dan pengambilan keputusan berbasis data untuk pertumbuhan yang berkelanjutan.')}
    <div class="mgmt">
      ${mg.map(([s, i, t, d]) => `
      <div class="mcard"><div class="mcard__img"><img src="${img(page(s).img)}" alt=""></div><div class="mcard__body">${ic(i, 'ic--chip')}<h4>${t}</h4><p>${d}</p></div></div>`).join('')}
    </div>
    <div class="translate">
      <div class="translate__head">
        <div class="eyebrow eyebrow--light">${ic('translate')} Layanan · Terjemahan</div>
        <h3>${esc(tj.h1)}</h3>
        <p>${esc(tj.sub)} — kontrak bisnis, dokumen resmi, hingga materi akademik.</p>
      </div>
      <div class="langs">
        ${tj.sections[0].items.map(([t]) => { const [a, b] = t.split(' - '); return `<div class="lang"><b>${a}</b>${ic('arrow')}<b>${b}</b></div>`; }).join('')}
      </div>
      <div class="tj-why">${tj.sections[1].items.map(([t]) => `<span>${ic('check')}${esc(t)}</span>`).join('')}</div>
    </div>
    <div class="cta">
      <div><h3>Siap membantu bisnis Anda tumbuh</h3><p>Diskusikan kebutuhan manajemen atau terjemahan Anda — konsultasi awal tanpa biaya.</p></div>
      <div class="cta__btn">${ic('phone')} ${company.phoneDisplay}</div>
    </div>
  </div>
  ${foot(11)}
</section>`);

// 12 — KONTAK (back cover)
pages.push(`
<section class="page back">
  <img class="cover__bg" src="${img('/gambarStatis/carousel7.jpg')}" alt="">
  <div class="cover__shade back__shade"></div>
  <div class="back__inner">
    <div class="eyebrow eyebrow--light">10 · Hubungi Kami</div>
    <h1>Mari wujudkan <em>solusi terbaik</em><br>untuk kebutuhan Anda.</h1>
    <p class="back__lead">Konsultasikan kebutuhan produk maupun layanan Anda dengan tim kami. Kami siap membantu dengan cepat, ramah, dan profesional.</p>
    <div class="contacts">
      <div class="contact">${ic('phone', 'ic--chip')}<div><span>WhatsApp / Telepon</span><b>${company.phoneDisplay}</b></div></div>
      <div class="contact">${ic('mail', 'ic--chip')}<div><span>Email</span><b>${company.email}</b></div></div>
      <div class="contact">${ic('pin', 'ic--chip')}<div><span>Alamat</span><b>${esc(company.address)}</b></div></div>
      <div class="contact">${ic('clock', 'ic--chip')}<div><span>Jam Operasional</span><b>${esc(company.hours)}</b></div></div>
      <div class="contact">${ic('globe', 'ic--chip')}<div><span>Website</span><b>mahkotabaruisolasi.co.id</b></div></div>
      <div class="contact">${ic('store', 'ic--chip')}<div><span>Toko Online</span><b class="nowrap">tokopedia.com/ptmahkotabaruisolasi</b></div></div>
    </div>
  </div>
  <div class="back__foot">
    <div class="cover__top">
      <div class="cover__logo"><img src="${img(company.logo)}" alt=""></div>
      <div class="cover__brand">${esc(company.name)}<small>Isolasi · Insulasi · Jasa Profesional</small></div>
    </div>
    <span>© ${YEAR} ${esc(company.name)}</span>
  </div>
</section>`);

if (pages.length !== TOTAL) throw new Error(`expected ${TOTAL} pages, got ${pages.length}`);

const html = `<!doctype html>
<html lang="id"><head><meta charset="utf-8">
<title>Company Profile — ${esc(company.name)}</title>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="profile.css">
</head><body>
${pages.join('\n')}
</body></html>`;

const htmlPath = path.join(HERE, 'company-profile.html');
const pdfPath = path.join(HERE, 'Company-Profile-PT-Mahkota-Baru-Isolasi.pdf');
writeFileSync(htmlPath, html);
console.log('HTML →', htmlPath);

const chrome = process.env.CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
execFileSync(chrome, [
  '--headless=new', '--disable-gpu', '--no-pdf-header-footer', '--allow-file-access-from-files',
  '--virtual-time-budget=15000', '--run-all-compositor-stages-before-draw',
  `--print-to-pdf=${pdfPath}`, 'file://' + htmlPath,
], { stdio: 'inherit' });
console.log('PDF  →', pdfPath);

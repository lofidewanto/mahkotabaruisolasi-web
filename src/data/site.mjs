// Global company data — shared by every page.
// Images live in src/images (same folder structure as on the original server)
// and are copied to dist/images by the build.
export const IMG_BASE = 'images';

export const company = {
  name: 'PT. Mahkota Baru Isolasi',
  short: 'Mahkota Baru Isolasi',
  phone: '+6281919669889',
  phoneDisplay: '+62 819 1966 9889',
  whatsapp: '6281919669889',
  email: 'info@mahkotabaruisolasi.co.id',
  address: 'Harco Glodok Lt. 1 Block C No. 26, Jl. Hayam Wuruk Jakarta Barat 11120',
  mapsLink: 'https://maps.app.goo.gl/keXBBBGw4zLx5HCEA',
  mapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6706.276088575062!2d106.81319081075819!3d-6.144174708668132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f76e370c86f9%3A0xc7d2c4d0f9296deb!2sTM%20Harco%20Glodok!5e0!3m2!1sid!2sid!4v1733296555828!5m2!1sid!2sid',
  tokopedia: 'https://www.tokopedia.com/ptmahkotabaruisolasi',
  hours: 'Senin–Jumat, 09.00–17.00 WIB',
  logo: '/gambarStatis/logoptmbibg.png',
  // AI chatbot (mova-ecommerce-mahkotabaruisolasi-chatbot-server). Its web chat UI is served at the server root.
  // Not installed yet: while empty, the "Asisten AI" button is shown greyed out and is not clickable.
  // To enable it, build with the chatbot address, e.g. CHATBOT_URL=https://chat.example.com/ npm run build
  chatbotUrl: process.env.CHATBOT_URL || '',
};

export const shippingNote =
  'Untuk pengiriman biasanya 2-3 hari, biaya kirim ditanggung pembeli. Pengambilan barang bisa di Harco Glodok dari Senin-Jumat dari jam 9 - 17 WIB. Untuk urgensi WhatsApp 081919669889.';

export const vision =
  'Menjadi ekosistem bisnis terintegrasi yang memimpin inovasi di berbagai industri, memberikan nilai lebih bagi pelanggan melalui diversifikasi produk dan layanan, serta memperkuat keberlanjutan pertumbuhan di seluruh cabang usaha kami.';

export const mission = [
  ['Menghadirkan Inovasi yang Relevan', 'Mengembangkan dan menawarkan produk serta layanan yang inovatif di berbagai sektor usaha kami, dengan fokus pada kebutuhan pelanggan yang terus berkembang.'],
  ['Memperluas Jangkauan dan Mengelola Diversifikasi Usaha', 'Membangun jaringan cabang usaha yang solid dan terintegrasi secara efisien, menciptakan sinergi antar lini usaha untuk memperkuat posisi pasar.'],
  ['Memberikan Pengalaman Pelanggan Terbaik', 'Menyediakan pengalaman pelanggan yang luar biasa melalui produk berkualitas, layanan responsif, dan solusi yang sesuai dengan setiap kebutuhan konsumen di berbagai sektor usaha kami.'],
  ['Meningkatkan Kepemimpinan dan Keberlanjutan', 'Mengedepankan prinsip keberlanjutan dan tanggung jawab sosial dalam setiap cabang usaha, dengan berfokus pada dampak positif terhadap masyarakat dan lingkungan.'],
  ['Pengembangan Tim dan Talenta', 'Menyediakan lingkungan yang mendukung pertumbuhan karyawan, mendorong inovasi, kolaborasi, dan pengembangan profesional untuk menciptakan tim yang solid dan produktif di seluruh cabang usaha.'],
  ['Efisiensi Operasional dan Digitalisasi', 'Meningkatkan efisiensi operasional di seluruh cabang usaha dengan memanfaatkan teknologi digital untuk otomatisasi, analisis data, dan pengelolaan sumber daya yang lebih baik.'],
];

// Main navigation (mirrors the original menu structure).
export const nav = [
  {
    label: 'Isolasi', href: '/isolasi.html',
    children: [
      ['Isolasi single tape', '/isolasi.html#isolasisingletape'],
      ['Isolasi kertas', '/isolasi.html#isolasikertas'],
      ['Doble tape', '/isolasi.html#dobletapekertas'],
      ['Isolasi safety walk', '/isolasi.html#isolasisafetywalk'],
      ['Barikade', '/isolasi.html#barikade'],
      ['Schotch 3M', '/isolasi.html#3M'],
      ['Reflektif lokal', '/isolasi.html#reflektifLokal'],
      ['G tape', '/isolasi.html#Gtape'],
      ['Produk lain', '/isolasi.html#produkLain'],
    ],
  },
  {
    label: 'Insulasi', href: '/insulasi.html',
    children: [
      ['Rockwool', '/insulasi.html#rockwool'],
      ['Peredam', '/insulasi.html#peredam'],
      ['Alat (Komponen) Listrik', '/insulasi.html#komponenlistrik'],
      ['Komponen AC', '/insulasi.html#komponenac'],
      ['Tangki BBM', '/insulasi.html#tangkibbm'],
      ['Poliken (Pipe Line Insulation)', '/insulasi.html#poliken'],
    ],
  },
  {
    label: 'Jasa', href: '/jasa.html',
    children: [
      ['Apostille', '/apostille.html'],
      ['Visa Jerman & Swiss', '/visa.html'],
      ['KITAS & KITAP', '/kitasKitap.html'],
      ['Legalisasi', '/legalisasi.html'],
    ],
  },
  {
    label: 'Asuransi', href: '/asuransi.html',
    children: [
      ['Asuransi Jiwa', '/asuransiJiwa.html'],
      ['Asuransi Kesehatan Anak', '/asuransiAnak.html'],
      ['Asuransi Kesehatan Istri', '/asuransiIstri.html'],
      ['Asuransi Kesehatan Suami', '/asuransiSuami.html'],
      ['Asuransi Kesehatan Keluarga', '/asuransiKeluarga.html'],
      ['Asuransi Mobil', '/asuransiKendaraan.html'],
      ['Asuransi Kesehatan Pegawai Perusahaan (Kumpulan)', '/asuransiPerusahaan.html'],
    ],
  },
  {
    label: 'Konsultan', href: '/konsultan.html',
    children: [
      ['Nikah campur (Beda negara)', '/nikahCampur.html'],
      ['Legalitas perkawinan Jerman-Indonesia', '/legalitasPerkawinan.html'],
      ['Legalitas Kelahiran', '/legalitasKelahiran.html'],
    ],
  },
  {
    label: 'Manajemen', href: '/management.html',
    children: [
      ['Manajemen Cash', '/managementCash.html'],
      ['Manajemen Risiko', '/managementRisiko.html'],
      ['Manajemen Pajak', '/managementPajak.html'],
    ],
  },
  { label: 'Konsuler', href: '/konsuler.html' },
  { label: 'Terjemahan', href: '/terjemahan.html' },
];

// The eight service areas shown on the home page and as "Layanan Lain".
export const serviceAreas = [
  {
    key: 'isolasi', title: 'Isolasi', href: '/isolasi.html', icon: 'tape',
    img: '/storage/app/public/mediaFile/QHUrxCLy9SPoTMdqMACAHKNuI5R2fViayMCBXb9Z.jpg',
    text: 'PT Mahkota Baru Isolasi menghadirkan solusi isolasi unggulan yang bukan hanya melindungi, tetapi juga meningkatkan kualitas hidup Anda. Produk kami tidak hanya meredam suhu, tetapi juga memberikan perlindungan terhadap kebisingan, kelembapan, dan korosi, sehingga bangunan Anda tetap aman dan nyaman dalam jangka panjang. Dengan teknologi mutakhir dan bahan ramah lingkungan, isolasi kami membantu mengurangi konsumsi energi, menjaga struktur bangunan tetap awet, dan menciptakan suasana tenang untuk hunian maupun tempat kerja. Percayakan kebutuhan isolasi Anda pada PT Mahkota Baru Isolasi. Pilih solusi terbaik untuk perlindungan total Anda hari ini!',
  },
  {
    key: 'insulasi', title: 'Insulation', href: '/insulasi.html', icon: 'layers',
    img: '/storage/app/public/mediaFile/4WLH68GawVyExOkJzAehEpvdeELCF3aqeOZIkjVn.jpg',
    text: 'Butuh solusi insulasi terbaik? PT Mahkota Baru Isolasi menyediakan produk insulasi berkualitas tinggi untuk memenuhi kebutuhan bangunan Anda. Insulasi kami dirancang untuk melindungi dari panas, dingin, kelembapan, dan kebisingan, memastikan kenyamanan dan efisiensi di setiap sudut. Dengan teknologi canggih, produk kami membantu mengurangi energi terbuang, mencegah kondensasi, serta melindungi sistem perpipaan dan peralatan dari kerusakan akibat suhu ekstrem. Terbuat dari bahan ramah lingkungan, insulasi ini tahan lama, mudah dipasang, dan hemat biaya. Percayakan proyek Anda kepada PT Mahkota Baru Isolasi, solusi insulasi tepercaya untuk kenyamanan maksimal!',
  },
  {
    key: 'jasa', title: 'Jasa', href: '/jasa.html', icon: 'stamp',
    img: '/storage/app/public/mediaFile/q2WmH21Gx29aGzYMiCGAUXjwZZiyuAljb2pQSz2N.jpg',
    text: 'PT Mahkota Baru Isolasi tidak hanya ahli dalam insulasi, tetapi juga menyediakan berbagai layanan administrasi penting seperti apostille, visa, KITAS, KITAP, dan legalisasi. Kami siap membantu mengurus dokumen Anda dengan cepat dan tepat, memastikan keabsahannya baik untuk keperluan internasional maupun domestik. Tim profesional kami siap memberikan solusi terbaik untuk setiap kebutuhan dokumen Anda, mulai dari pengurusan visa hingga legalisasi dokumen resmi. Percayakan segala urusan administrasi Anda kepada PT Mahkota Baru Isolasi, dan nikmati layanan yang efisien serta terpercaya.',
  },
  {
    key: 'asuransi', title: 'Asuransi', href: '/asuransi.html', icon: 'shield',
    img: '/storage/app/public/mediaFile/Ucx7k1nYYYAXj9LiyXZGLvXotQFEedS6GxTQSDUu.jpg',
    text: 'Kami menyediakan berbagai layanan asuransi untuk melindungi Anda dari risiko tak terduga. Layanan kami mencakup asuransi jiwa, kesehatan, kendaraan, properti, perjalanan, dan bisnis, dengan premi yang terjangkau. Kami berkomitmen memberikan perlindungan yang aman dan terpercaya, serta memberikan ketenangan pikiran dalam setiap tahap kehidupan Anda.',
  },
  {
    key: 'konsultan', title: 'Konsultan', href: '/konsultan.html', icon: 'chat',
    img: '/storage/app/public/mediaFile/HukqN3rSw13OcEJt0ccIrwhfEaS6p5nqjZQpysVQ.jpg',
    text: 'Kami menyediakan konsultasi lengkap untuk pasangan beda negara, khususnya Indonesia-Jerman. Dari pengurusan dokumen, legalisasi, penerjemahan, hingga pencatatan pernikahan dan legalitas kelahiran anak, semua kami tangani dengan cepat dan tepat. Percayakan kebutuhan Anda pada kami, solusi praktis dan terpercaya untuk pasangan bahagia!',
  },
  {
    key: 'management', title: 'Management', href: '/management.html', icon: 'chart',
    img: '/storage/app/public/mediaFile/kuSBKoGcQp0dZqRwiiuRoVZY9S6icrtIeSiP83dW.jpg',
    text: 'Kami menyediakan layanan manajemen yang komprehensif untuk membantu bisnis Anda mencapai tujuan secara efisien. Layanan kami meliputi perencanaan strategis, pengelolaan sumber daya manusia, keuangan, operasional, serta pengambilan keputusan yang berbasis data. Dengan pendekatan yang terstruktur, kami siap mendukung pertumbuhan dan kesuksesan bisnis Anda.',
  },
  {
    key: 'konsuler', title: 'Konsuler', href: '/konsuler.html', icon: 'globe',
    img: '/storage/app/public/mediaFile/ziXDo54SWMjVM7JHX2BZFpa2G2fLAhyN79OvgtmN.jpg',
    text: 'Kami menyediakan layanan konsuler untuk membantu Anda dalam berbagai keperluan administratif dan perlindungan di Indonesia. Layanan kami mencakup penerbitan paspor, visa, bantuan darurat, pengurusan dokumen, serta memberikan dukungan hukum dan perlindungan bagi warganegara di luar negeri. Kami siap membantu Anda dengan profesional dan terpercaya.',
  },
  {
    key: 'terjemahan', title: 'Terjemahan Bahasa', href: '/terjemahan.html', icon: 'translate',
    img: '/storage/app/public/mediaFile/nc05vbwbLHZAmZWRS3KxpbISmnCukCRFMif2KHDS.jpg',
    text: 'Kami menyediakan layanan terjemahan profesional untuk berbagai bahasa, memastikan komunikasi yang akurat dan efektif. Layanan kami mencakup terjemahan dokumen, percakapan, dan materi lainnya, dengan kualitas tinggi dan ketepatan dalam setiap detail. Kami siap membantu Anda untuk menjembatani perbedaan bahasa di berbagai konteks, baik untuk kebutuhan pribadi maupun bisnis.',
  },
];

export const heroSlides = [
  '/gambarStatis/carousel4.jpg',
  '/gambarStatis/carousel.jpg',
  '/gambarStatis/panelSurya.jpg',
  '/gambarStatis/carousel6.jpg',
  '/gambarStatis/carousel5.jpg',
  '/gambarStatis/carousel7.jpg',
  '/gambarStatis/carousel8.jpg',
];

export const homeIntro =
  'PT Mahkota Baru Isolasi, Kami menyediakan berbagai layanan profesional untuk memenuhi kebutuhan individu dan bisnis. Layanan kami mencakup isolasi, insulasi, jasa manajemen, konsuler, konsultasi, asuransi, dan terjemahan bahasa. Didukung oleh tenaga ahli berpengalaman dan berkompetensi tinggi, kami berkomitmen untuk memberikan solusi terbaik, terpercaya, dan berorientasi pada kebutuhan pelanggan.';

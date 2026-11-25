// Service detail pages, copied from the original site.
// A section's items are either a string or [boldLabel, text].
// A section may instead contain `groups: [{ label, items }]`.
const G = '/gambarStatis/';

export const detailPages = [
  // ───────────── JASA ─────────────
  {
    slug: 'apostille', parent: 'jasa', nav: 'Apostille', img: G + 'carousel4.jpg',
    h1: 'Layanan Apostille Cepat & Terpercaya untuk Dokumen Anda!',
    sub: 'Solusi mudah untuk Apostille dokumen Indonesia untuk dipakai di internasional cepat dan tanpa ribet!',
    intro: ['Apakah Anda perlu melegalkan dokumen untuk keperluan studi, pekerjaan, atau imigrasi ke luar negeri? Kami menyediakan layanan apostille yang diakui secara internasional, memudahkan proses pengesahan dokumen Anda tanpa repot!'],
    sections: [
      { title: 'Dokumen yang kami layani', style: 'chips', items: ['Akta Lahir', 'Ijazah & Transkrip Nilai', 'Keputusan Pengadilan', 'Surat Dokter', 'Akta Nikah', 'Akta Cerai', 'Akta Kematian', 'Hak Asuh Anak', 'Surat Kuasa & Dokumen Hukum Lainnya'] },
      { title: 'Kelebihan layanan kami', style: 'checks', items: ['Proses Cepat & Aman', 'Pengambilan & Pengantaran Dokumen', 'Harga Terjangkau'] },
    ],
    wa: 'Halo, saya ingin bertanya lebih lanjut tentang layanan Pembuatan Apostille. Bisakah Anda membantu?',
  },
  {
    slug: 'visa', parent: 'jasa', nav: 'Visa Jerman & Swiss', img: G + 'visa.jpg',
    h1: 'Ingin ke Jerman atau Swiss? Urus Visa Anda dengan Cepat & Aman!',
    sub: 'Jadikan perjalanan Anda ke Eropa lebih mudah—kami siap membantu pengurusan visa Jerman dan Swiss tanpa ribet!',
    intro: ['Apakah Anda berencana ke Jerman atau Swiss untuk studi, liburan, pekerjaan, atau kunjungan keluarga? Kami menyediakan layanan pengurusan visa Schengen dan Nasional untuk kedua negara ini, dengan pendampingan lengkap mulai dari konsultasi hingga visa disetujui!'],
    sections: [
      {
        title: 'Layanan pengurusan kami mencakup',
        groups: [
          { label: 'Visa Schengen', id: 'visaSchengen', items: [['Visa Turis', 'Nikmati keindahan kota-kota di Jerman dan Swiss.'], ['Visa Bisnis', 'Hadiri pertemuan atau acara bisnis dengan mudah.'], ['Visa Kunjungan Keluarga', 'Reuni dengan orang-orang tercinta.']] },
          { label: 'Visa Nasional', id: 'visaNasional', items: [['Visa Kerja', 'Dapatkan izin bekerja di Jerman atau Swiss.'], ['Visa Pelajar', 'Untuk studi di universitas terkemuka di Jerman atau Swiss.'], ['Visa Ikut Suami atau Istri', 'Dapatkan izin bekerja di negara impian Anda.'], ['Visa Sekolah Bahasa', 'Untuk studi di universitas terkemuka di Jerman atau Swiss.']] },
        ],
      },
      { title: 'Kelebihan Layanan Kami', style: 'checks', items: ['Proses Cepat & Efisien', 'Dokumen Diperiksa Secara Detail', 'Pendampingan hingga Visa Disetujui', 'Konsultasi Gratis', 'Layanan Terpercaya & Berpengalaman'] },
    ],
    wa: 'Halo, saya ingin bertanya lebih lanjut tentang layanan pembuatan dan pengurusan legalitas Visa Jerman atau Swiss. Bisakah Anda membantu?',
  },
  {
    slug: 'kitasKitap', parent: 'jasa', nav: 'KITAS & KITAP', img: G + 'kitasKitap.jpeg',
    h1: 'Urus KITAS & KITAP Tanpa Ribet! Tinggal di Indonesia Jadi Lebih Mudah!',
    sub: 'Solusi cepat dan terpercaya untuk izin tinggal WNA di Indonesia. Mulai dari KITAS hingga KITAP, kami siap membantu!',
    intro: ['Apakah Anda atau rekan WNA membutuhkan izin tinggal resmi di Indonesia? Kami menyediakan layanan profesional untuk pengurusan KITAS (Kartu Izin Tinggal Terbatas) dan KITAP (Kartu Izin Tinggal Tetap). Kami pastikan proses berjalan lancar dan sesuai regulasi!'],
    sections: [
      {
        title: 'Dokumen yang kami layani',
        groups: [
          { label: 'KITAS', items: ['Pekerjaan (Tenaga Kerja Asing).', 'Pasangan WNI.', 'Pelajar atau Mahasiswa.', 'Pensiun.'] },
          { label: 'KITAP', items: ['Pasangan WNI (setelah menikah 2 tahun).', 'Tenaga Kerja Asing Jangka Panjang.', 'Anak WNA dari WNI atau pemegang KITAP.', 'Pensiunan yang ingin menetap di Indonesia.'] },
        ],
      },
      { title: 'Kelebihan Layanan Kami', style: 'checks', items: ['Proses Cepat & Efisien', 'Konsultasi Gratis untuk Dokumen', 'Pendampingan Langsung Hingga Disetujui', 'Harga Transparan, Tanpa Biaya Tersembunyi', 'Berpengalaman dalam Pengurusan KITAS & KITAP'] },
    ],
    wa: 'Halo, saya ingin bertanya lebih lanjut tentang layanan Pembuatan KITAS dan KITAP. Bisakah Anda membantu?',
  },
  {
    slug: 'legalisasi', parent: 'jasa', nav: 'Legalisasi', img: G + 'legalisasi.jpg',
    h1: 'Butuh Legalisasi Dokumen untuk Keperluan Internasional? Kami Siap Membantu',
    sub: 'Mudah, Cepat, dan Terpercaya - Legalisasi Dokumen Anda dengan Proses Profesional!',
    intro: [
      'Apakah Anda membutuhkan legalisasi dokumen untuk keperluan luar negeri? Kami menyediakan layanan legalisasi dokumen yang diakui secara internasional, mulai dari akta kelahiran, ijazah, hingga dokumen bisnis. Kami memastikan proses berjalan lancar dan dokumen Anda sah secara hukum di negara tujuan.',
      'Legalisasi dokumen adalah proses resmi untuk mengesahkan dokumen agar diakui keabsahannya di negara lain. Legalisasi biasanya dilakukan dengan menambahkan cap, tanda tangan, atau stempel resmi dari otoritas yang berwenang, seperti kementerian, notaris, atau kedutaan, sehingga dokumen tersebut dapat digunakan secara sah di luar negeri.',
    ],
    sections: [
      { title: 'Tujuan Legalisasi', items: [['Mengakui Keabsahan Dokumen', 'Agar dokumen diakui sah dan dapat digunakan di negara lain.'], ['Melindungi dari Pemalsuan', 'Proses legalisasi memastikan dokumen tersebut asli dan diterbitkan oleh lembaga yang sah.'], ['Mendukung Proses Administrasi', 'Misalnya, untuk keperluan studi, bekerja, atau menikah di luar negeri.']] },
      { title: 'Jenis Dokumen yang Dapat Dilegalisasi', style: 'chips', items: ['Akta Kelahiran dan Akta Pernikahan', 'Ijazah dan Transkrip Nilai', 'Surat Perjanjian dan Kontrak', 'Sertifikat Tanah atau Usaha', 'Dokumen Hukum (Surat Kuasa, Pengadilan, dll.)', 'Dan lainnya!'] },
      { title: 'Kelebihan Layanan Kami', style: 'checks', items: ['Proses Cepat & Efisien', 'Legalisasi di Instansi Terkait dan Kedutaan', 'Layanan Terpercaya dengan Harga Transparan', 'Pendampingan Langsung Hingga Dokumen Disahkan', 'Konsultasi Gratis untuk Persyaratan Dokumen'] },
    ],
    wa: 'Halo, saya ingin bertanya lebih lanjut tentang layanan legalisasi dokumen. Bisakah Anda membantu?',
  },

  // ───────────── ASURANSI ─────────────
  {
    slug: 'asuransiJiwa', parent: 'asuransi', nav: 'Asuransi Jiwa', img: G + 'asuransiJiwa.jpg',
    h1: 'Asuransi Jiwa: Perlindungan Finansial untuk Masa Depan Anda dan Keluarga',
    sub: 'Memberikan Keamanan Finansial di Saat yang Tak Terduga, Menjamin Kesejahteraan Keluarga Anda',
    intro: ['Asuransi jiwa adalah solusi yang memberikan perlindungan finansial kepada keluarga Anda jika terjadi risiko yang tak terduga, seperti kecelakaan atau penyakit kritis. Dengan memiliki asuransi jiwa, Anda dapat memastikan bahwa orang-orang terdekat Anda tidak akan terbebani secara finansial jika sesuatu yang tidak diinginkan terjadi. Layanan kami menawarkan produk asuransi jiwa dengan berbagai pilihan, mulai dari proteksi dasar hingga rencana asuransi yang lebih komprehensif. Dapatkan ketenangan pikiran, tahu bahwa keluarga Anda terlindungi dengan manfaat yang luas dan premi yang dapat disesuaikan dengan anggaran Anda.'],
    sections: [
      { title: 'Keunggulan Asuransi Kami', style: 'cards', items: [
        ['Perlindungan Keluarga', 'Memberikan perlindungan keuangan bagi keluarga yang ditinggalkan, membantu mereka menjaga stabilitas finansial.'],
        ['Manfaat yang Luas', 'Termasuk proteksi terhadap risiko hidup seperti kecelakaan, penyakit kritis, atau bahkan meninggal dunia.'],
        ['Premi Fleksibel', 'Dapat disesuaikan dengan kebutuhan dan kemampuan finansial Anda, dengan berbagai pilihan paket asuransi.'],
        ['Proses Klaim yang Cepat', 'Klaim yang mudah dan cepat, membantu keluarga Anda mendapatkan dukungan finansial tepat waktu.'],
        ['Jaminan Keamanan Finansial', 'Menjamin kesejahteraan jangka panjang keluarga, mengurangi beban keuangan yang dapat timbul akibat peristiwa tak terduga.'],
        ['Layanan Pelanggan Profesional', 'Tim kami siap membantu Anda dalam memilih produk asuransi jiwa yang sesuai dengan kebutuhan spesifik Anda.'],
      ] },
    ],
    wa: 'Halo, saya ingin bertanya lebih lanjut tentang layanan Asuransi Jiwa. Bisakah Anda membantu?',
  },
  {
    slug: 'asuransiAnak', parent: 'asuransi', nav: 'Asuransi Kesehatan Anak', img: G + 'asuransiAnak.jpg',
    h1: 'Asuransi Kesehatan Anak: Melindungi Kesehatan dan Masa Depan Si Kecil dengan Perlindungan Terpercaya',
    sub: 'Memberikan Perlindungan Kesehatan Terbaik untuk Anak Anda, Menjamin Perawatan Medis yang Optimal Sejak Dini',
    intro: ['Asuransi kesehatan anak adalah investasi terbaik untuk melindungi si kecil dari berbagai risiko kesehatan. Dengan asuransi ini, Anda dapat memastikan bahwa anak Anda mendapatkan perawatan medis terbaik tanpa harus khawatir tentang biaya yang tinggi. Asuransi kesehatan anak meliputi biaya rawat inap, pemeriksaan kesehatan rutin, imunisasi, dan perawatan untuk penyakit yang mungkin timbul. Kami menawarkan produk asuransi kesehatan anak yang dapat disesuaikan dengan kebutuhan keluarga Anda, memberikan kemudahan klaim di rumah sakit rekanan, serta manfaat yang maksimal untuk kesehatan si buah hati. Lindungi kesehatan anak Anda sejak dini dengan pilihan asuransi yang tepat.'],
    sections: [
      { title: 'Keunggulan Layanan Kami', style: 'cards', items: [
        ['Perlindungan Kesehatan Anak', 'Menjamin biaya rawat inap, pemeriksaan, imunisasi, dan pengobatan untuk penyakit yang timbul.'],
        ['Akses ke Rumah Sakit Terbaik', 'Jaringan rumah sakit rekanan yang luas, memastikan perawatan medis berkualitas bagi anak Anda.'],
        ['Premi Terjangkau', 'Pilihan paket asuransi dengan premi yang fleksibel, sesuai dengan anggaran keluarga.'],
        ['Perawatan Preventif', 'Menyediakan layanan imunisasi dan pemeriksaan kesehatan rutin untuk menjaga kesehatan anak secara menyeluruh.'],
        ['Klaim yang Mudah dan Cepat', 'Proses klaim yang simpel, membantu Anda mendapatkan penggantian biaya medis dengan cepat.'],
        ['Perlindungan Jangka Panjang', 'Memberikan rasa aman bagi orang tua dengan perlindungan jangka panjang untuk kesehatan anak.'],
      ] },
    ],
    wa: 'Halo, saya ingin bertanya lebih lanjut tentang layanan Asuransi Kesehatan Anak. Bisakah Anda membantu?',
  },
  {
    slug: 'asuransiIstri', parent: 'asuransi', nav: 'Asuransi Kesehatan Istri', img: G + 'asuransiIstri.jpg',
    h1: 'Asuransi Kesehatan Istri: Memberikan Perlindungan Kesehatan Optimal untuk Istri Anda dengan Solusi Asuransi yang Tepat',
    sub: 'Perlindungan Kesehatan Istri Anda dari Berbagai Risiko Medis dengan Layanan Asuransi Kesehatan Terpercaya',
    intro: ['Asuransi kesehatan istri adalah solusi perlindungan yang dirancang untuk memberikan rasa aman dan nyaman bagi istri Anda. Dengan produk asuransi ini, segala biaya medis yang timbul akibat sakit, rawat inap, atau perawatan kesehatan lainnya akan tercover, memberikan perlindungan menyeluruh. Asuransi kesehatan istri mencakup pemeriksaan kesehatan rutin, perawatan untuk penyakit umum dan kritis, serta biaya pengobatan lainnya. Kami menawarkan berbagai pilihan asuransi kesehatan dengan premi yang dapat disesuaikan dengan kebutuhan, serta akses ke rumah sakit terbaik melalui jaringan rekanan kami. Lindungi istri Anda dengan perlindungan kesehatan yang terbaik untuk masa depan yang lebih terjamin.'],
    sections: [
      { title: 'Keunggulan Layanan Kami', style: 'cards', items: [
        ['Perlindungan Menyeluruh', 'Menjamin biaya medis seperti rawat inap, pemeriksaan kesehatan, obat-obatan, dan perawatan penyakit kritis.'],
        ['Jaringan Rumah Sakit Terbaik', 'Akses ke rumah sakit dan fasilitas kesehatan berkualitas tinggi yang bekerja sama dengan perusahaan asuransi.'],
        ['Premi Fleksibel', 'Premi yang dapat disesuaikan dengan anggaran Anda dan manfaat yang sesuai dengan kebutuhan kesehatan istri Anda.'],
        ['Perawatan Preventif', 'Menyediakan layanan pemeriksaan kesehatan dan imunisasi untuk menjaga kesehatan istri secara menyeluruh.'],
        ['Klaim Mudah dan Cepat', 'Proses klaim yang cepat dan sederhana untuk memudahkan Anda mendapatkan penggantian biaya medis.'],
        ['Ketentraman Pikiran', 'Memberikan ketenangan pikiran bagi Anda dengan mengetahui istri Anda terlindungi dari risiko medis yang tidak terduga.'],
      ] },
    ],
    wa: 'Halo, saya ingin bertanya lebih lanjut tentang layanan Asuransi Kesehatan Istri. Bisakah Anda membantu?',
  },
  {
    slug: 'asuransiSuami', parent: 'asuransi', nav: 'Asuransi Kesehatan Suami', img: G + 'asuransiSuami.jpg',
    h1: 'Asuransi Kesehatan Suami: Memberikan Perlindungan Kesehatan Maksimal untuk Suami Anda dengan Solusi Asuransi yang Tepat',
    sub: 'Perlindungan Kesehatan Suami Anda dari Berbagai Risiko Medis dengan Asuransi Kesehatan yang Mudah dan Terjangkau',
    intro: ['Asuransi kesehatan suami adalah pilihan tepat untuk melindungi suami Anda dari berbagai risiko kesehatan yang mungkin terjadi. Dengan asuransi ini, biaya medis yang timbul akibat perawatan rumah sakit, penyakit kritis, atau perawatan kesehatan lainnya akan dicover secara menyeluruh. Kami menawarkan berbagai produk asuransi kesehatan suami dengan manfaat yang beragam, mulai dari rawat inap hingga pemeriksaan kesehatan rutin. Asuransi kesehatan suami memberikan perlindungan finansial, memastikan suami Anda mendapatkan perawatan medis terbaik tanpa khawatir akan biaya tinggi. Dengan premi yang fleksibel, Anda dapat memilih plan yang paling sesuai dengan kebutuhan kesehatan dan anggaran keluarga Anda.'],
    sections: [
      { title: 'Keunggulan Asuransi Kami', style: 'cards', items: [
        ['Perlindungan Keluarga', 'Memberikan perlindungan finansial yang signifikan bagi keluarga yang ditinggalkan, membantu mereka menjaga stabilitas finansial.'],
        ['Manfaat yang Luas', 'Termasuk proteksi terhadap berbagai risiko hidup, seperti kecelakaan, penyakit kritis, atau bahkan meninggal dunia.'],
        ['Premi Fleksibel', 'Dapat disesuaikan dengan fleksibilitas penuh sesuai dengan kebutuhan dan kemampuan finansial Anda, dengan berbagai pilihan paket asuransi.'],
        ['Proses Klaim yang Cepat', 'Klaim yang sangat mudah dan cepat, membantu keluarga Anda mendapatkan dukungan finansial dengan tepat waktu.'],
        ['Jaminan Keamanan Finansial', 'Secara efektif menjamin kesejahteraan jangka panjang keluarga, mengurangi beban keuangan yang dapat timbul akibat peristiwa tak terduga.'],
        ['Layanan Pelanggan Profesional', 'Tim kami siap dengan penuh perhatian untuk membantu Anda dalam memilih produk asuransi jiwa yang sesuai dengan kebutuhan spesifik Anda.'],
      ] },
    ],
    wa: 'Halo, saya ingin bertanya lebih lanjut tentang layanan Asuransi Suami. Bisakah Anda membantu?',
  },
  {
    slug: 'asuransiKeluarga', parent: 'asuransi', nav: 'Asuransi Kesehatan Keluarga', img: G + 'asuransiKeluarga.jpg',
    h1: 'Asuransi Kesehatan Keluarga: Perlindungan Kesehatan Menyeluruh untuk Setiap Anggota Keluarga Anda',
    sub: 'Lindungi Kesehatan Keluarga Anda dengan Solusi Asuransi Kesehatan yang Terjangkau dan Fleksibel',
    intro: ['Asuransi kesehatan keluarga adalah solusi perlindungan medis yang dirancang untuk menjaga kesehatan seluruh anggota keluarga. Dengan asuransi ini, biaya medis untuk rawat inap, pemeriksaan kesehatan, imunisasi, dan pengobatan penyakit akan tercover, memberikan rasa aman bagi Anda dan keluarga. Kami menawarkan paket asuransi kesehatan keluarga dengan premi yang fleksibel dan manfaat yang luas, memungkinkan Anda untuk memilih plan yang sesuai dengan kebutuhan dan anggaran keluarga. Lindungi masa depan kesehatan keluarga Anda dan nikmati kemudahan klaim di rumah sakit rekanan terbaik yang bekerja sama dengan kami.'],
    sections: [
      { title: 'Keunggulan Asuransi Kami', style: 'cards', items: [
        ['Perlindungan Keluarga', 'Memberikan perlindungan keuangan bagi keluarga yang ditinggalkan, membantu mereka menjaga stabilitas finansial.'],
        ['Manfaat yang Luas', 'Termasuk proteksi terhadap risiko hidup seperti kecelakaan, penyakit kritis, atau bahkan meninggal dunia.'],
        ['Premi Fleksibel', 'Dapat disesuaikan dengan kebutuhan dan kemampuan finansial Anda, dengan berbagai pilihan paket asuransi.'],
        ['Proses Klaim yang Cepat', 'Klaim yang mudah dan cepat, membantu keluarga Anda mendapatkan dukungan finansial tepat waktu.'],
        ['Jaminan Keamanan Finansial', 'Menjamin kesejahteraan jangka panjang keluarga, mengurangi beban keuangan yang dapat timbul akibat peristiwa tak terduga.'],
        ['Layanan Pelanggan Profesional', 'Tim kami siap membantu Anda dalam memilih produk asuransi jiwa yang sesuai dengan kebutuhan spesifik Anda.'],
      ] },
    ],
    wa: 'Halo, saya ingin bertanya lebih lanjut tentang layanan Asuransi Kesehatan Keluarga. Bisakah Anda membantu?',
  },
  {
    slug: 'asuransiKendaraan', parent: 'asuransi', nav: 'Asuransi Mobil', img: G + 'asuransiMobil.jpg',
    h1: 'Asuransi Mobil: Perlindungan Lengkap untuk Kendaraan dan Pengemudi Anda',
    sub: 'Lindungi Kendaraan dan Pengemudi Anda dengan Solusi Asuransi Mobil yang Fleksibel dan Terjangkau',
    intro: ['Asuransi mobil kami memberikan perlindungan penuh untuk kendaraan Anda dari kerusakan akibat kecelakaan, pencurian, kebakaran, atau bencana alam. Kami juga menawarkan perlindungan untuk biaya hukum dan tanggung jawab jika terjadi kecelakaan yang melibatkan kendaraan Anda. Dengan premi fleksibel dan berbagai pilihan paket, Anda dapat menyesuaikan polis dengan anggaran dan kebutuhan kendaraan Anda. Nikmati kemudahan proses klaim, akses ke bengkel berkualitas tinggi, serta perlindungan untuk pengemudi dan penumpang dalam kendaraan Anda.'],
    sections: [
      { title: 'Keunggulan Layanan Kami', style: 'cards', items: [
        ['Perlindungan Lengkap', 'Menyediakan perlindungan terhadap kerusakan mobil akibat kecelakaan, pencurian, kebakaran, atau bencana alam.'],
        ['Perlindungan Hukum', 'Menjamin biaya hukum dan tanggung jawab hukum jika terjadi kecelakaan atau insiden yang melibatkan kendaraan Anda.'],
        ['Premi Fleksibel', 'Premi yang dapat disesuaikan dengan anggaran dan kebutuhan, serta berbagai pilihan paket yang sesuai dengan tipe mobil Anda.'],
        ['Layanan Klaim Mudah', 'Proses klaim yang cepat dan efisien, memudahkan Anda untuk mendapatkan penggantian biaya perbaikan atau kerugian.'],
        ['Jaringan Bengkel Terpercaya', 'Akses ke bengkel rekanan yang berkualitas tinggi untuk perbaikan mobil Anda.'],
        ['Perlindungan Pengemudi dan Penumpang', 'Menjamin perlindungan tidak hanya untuk kendaraan tetapi juga untuk pengemudi dan penumpang dalam mobil Anda.'],
      ] },
    ],
    wa: 'Halo, saya ingin bertanya lebih lanjut tentang layanan Asuransi Mobil. Bisakah Anda membantu?',
  },
  {
    slug: 'asuransiPerusahaan', parent: 'asuransi', nav: 'Asuransi Kesehatan Pegawai Perusahaan (Kumpulan)', img: G + 'asuransiPerusahaan.jpg',
    h1: 'Asuransi Kesehatan Pegawai Perusahaan (Kumpulan): Solusi Perlindungan Kesehatan untuk Karyawan dan Keluarga',
    sub: 'Perlindungan Kesehatan Komprehensif untuk Pegawai dan Keluarga dengan Premi Terjangkau',
    intro: ['Asuransi kesehatan pegawai perusahaan (kumpulan) adalah program perlindungan medis yang disediakan oleh perusahaan untuk karyawan dan keluarganya. Dengan paket asuransi ini, perusahaan dapat memberikan manfaat kesehatan yang mencakup rawat inap, pemeriksaan rutin, perawatan penyakit, serta biaya obat-obatan. Asuransi kesehatan kumpulan ini dirancang dengan premi yang lebih terjangkau dan cakupan yang lebih luas, memastikan karyawan dan keluarga mereka mendapatkan akses ke perawatan medis terbaik tanpa beban biaya yang tinggi. Selain itu, program ini juga membantu perusahaan meningkatkan kesejahteraan karyawan, yang dapat berpengaruh positif pada produktivitas dan loyalitas.'],
    sections: [
      { title: 'Keunggulan Layanan Kami', style: 'cards', items: [
        ['Perlindungan untuk Pegawai dan Keluarga', 'Menjamin perlindungan medis untuk karyawan dan anggota keluarganya, mencakup rawat inap, pemeriksaan, dan pengobatan penyakit.'],
        ['Premi Terjangkau', 'Dapatkan paket asuransi dengan premi yang lebih hemat karena dibeli secara kolektif oleh perusahaan.'],
        ['Akses ke Fasilitas Kesehatan Terbaik', 'Jaringan rumah sakit dan fasilitas kesehatan terpercaya yang bekerja sama dengan perusahaan asuransi.'],
        ['Manfaat Kesehatan Preventif', 'Menyediakan pemeriksaan kesehatan rutin dan vaksinasi untuk mendeteksi dini penyakit dan menjaga kesehatan karyawan.'],
        ['Perlindungan Jangka Panjang', 'Memberikan rasa aman bagi karyawan karena perlindungan kesehatan yang berkelanjutan selama masa kerja.'],
        ['Kemudahan Klaim', 'Proses klaim yang cepat dan mudah, memastikan karyawan mendapatkan layanan medis tanpa hambatan.'],
      ] },
    ],
    wa: 'Halo, saya ingin bertanya lebih lanjut tentang layanan Asuransi Perusahaan. Bisakah Anda membantu?',
  },

  // ───────────── KONSULTAN ─────────────
  {
    slug: 'nikahCampur', parent: 'konsultan', nav: 'Nikah campur (Beda negara)', img: G + 'nikahCampur.jpg',
    h1: 'Nikah Campur Jerman-Indonesia: Menyatukan Dua Dunia dengan Cinta',
    sub: 'Dokumen Lancar, Tradisi Harmonis, Pernikahan Impian',
    intro: ['Temukan keajaiban cinta yang menyatukan budaya Jerman dan Indonesia dalam momen istimewa pernikahan Anda. Kami hadir untuk membantu setiap langkah proses, mulai dari persiapan dokumen resmi, pengenalan tradisi, hingga penyelenggaraan acara yang berkesan. Nikmati layanan profesional yang memastikan pernikahan Anda berlangsung lancar tanpa hambatan, sekaligus mencerminkan keindahan harmoni budaya Timur dan Barat.'],
    sections: [
      { title: 'Kelebihan Layanan Kami', style: 'checks', items: ['Bantuan pengurusan dokumen hukum untuk pernikahan campur', 'Konsultasi tradisi dan budaya kedua negara'] },
    ],
    wa: 'Halo, saya ingin bertanya tentang layanan Nikah Campur Indonesia Jerman.',
  },
  {
    slug: 'legalitasPerkawinan', parent: 'konsultan', nav: 'Legalitas perkawinan Jerman-Indonesia', img: G + 'legalitasPernikahan.jpg',
    h1: 'Legalitas Perkawinan Campuran Jerman-Indonesia: Resmi Terjamin dan Andal',
    sub: 'Dokumen Lengkap, Proses Lancar, Diakui Secara Hukum di Dua Negara',
    intro: ['Mempersiapkan pernikahan campuran antara Jerman dan Indonesia bisa terasa rumit, terutama terkait prosedur hukum. Kami hadir untuk memastikan semua dokumen resmi diselesaikan dengan teliti dan sepenuhnya sesuai dengan hukum di kedua negara. Dengan bantuan kami, pernikahan Anda akan sah secara hukum dan diakui secara internasional. Layanan kami menangani semua kebutuhan administratif secara efisien, termasuk pendaftaran pernikahan, penerjemahan dokumen dengan akurat, legalisasi di kedutaan atau konsulat, hingga pengurusan visa keluarga tanpa hambatan.'],
    sections: [
      { title: 'Layanan Kami', items: ['Pengurusan dokumen seperti NOC (Surat Keterangan Tidak Ada Halangan untuk Menikah) secara efisien', 'Penerjemahan dokumen resmi yang akurat oleh penerjemah tersumpah', 'Legalitas lengkap di kedutaan dan catatan sipil', 'Konsultasi hukum terkait kewarganegaraan anak secara profesional'] },
      { title: 'Kelebihan Layanan Kami', style: 'checks', items: ['Proses yang sangat cepat dan transparan', 'Panduan dari profesional yang sangat berpengalaman', 'Jaminan legal sepenuhnya di Indonesia dan Jerman'] },
    ],
    wa: 'Halo, saya ingin bertanya tentang layanan Legalitas Perkawinan.',
  },
  {
    slug: 'legalitasKelahiran', parent: 'konsultan', nav: 'Legalitas Kelahiran', img: G + 'legalitasKelahiran.jpg',
    h1: 'Legalitas Kelahiran Anak Campuran Jerman-Indonesia: Sah dan Diakui di Dua Negara',
    sub: 'Pengurusan Akta Kelahiran dan Status Kewarganegaraan dengan Mudah',
    intro: ['Pastikan legalitas kelahiran anak Anda dari pernikahan campuran Jerman-Indonesia diakui secara resmi oleh kedua negara. Kami hadir untuk membantu Anda mengurus dokumen kelahiran, akta kelahiran, dan status kewarganegaraan anak agar sah secara hukum internasional. Dilengkapi dengan pengalaman profesional, kami mendampingi proses mulai dari pencatatan kelahiran hingga legalisasi dokumen, sehingga Anda tidak perlu khawatir menghadapi kerumitan administrasi.'],
    sections: [
      { title: 'Layanan Kami', items: [['Pembuatan akta kelahiran anak', 'Di Indonesia dan Jerman'], ['Pengurusan status kewarganegaraan ganda', 'Sesuai hukum kedua negara'], ['Penerjemahan dokumen tersumpah', 'Surat keterangan lahir, akta kelahiran, dan lainnya'], ['Legalisasi dokumen', 'KBRI, kedutaan, dan lembaga terkait'], ['Konsultasi hukum', 'Hak kewarganegaraan dan imigrasi']] },
      { title: 'Keunggulan', style: 'checks', items: ['Proses cepat, jelas, dan terpercaya', 'Didampingi tim profesional yang memahami regulasi dua negara', 'Dokumen terjamin sah secara hukum internasional'] },
    ],
    wa: 'Halo, saya ingin bertanya tentang layanan Legalitas Kelahiran.',
  },

  // ───────────── MANAGEMENT ─────────────
  {
    slug: 'managementCash', parent: 'management', nav: 'Manajemen Cash', img: G + 'managementCash.jpg',
    h1: 'Solusi Manajemen Cash Profesional untuk Mengoptimalkan Arus Kas dan Meningkatkan Keuntungan Bisnis Anda',
    sub: 'Kelola Keuangan Bisnis Anda dengan Lebih Efisien, Tepat Waktu, dan Menguntungkan melalui Layanan Manajemen Cash Kami yang Terpercaya dan Berpengalaman',
    intro: [
      'Manajemen cash yang baik adalah kunci kesuksesan dalam menjalankan bisnis yang efisien dan menguntungkan. Layanan Manajemen Cash kami dirancang untuk membantu Anda mengelola arus kas secara optimal, memastikan ketersediaan dana yang cukup untuk kebutuhan operasional, serta menghindari masalah keuangan yang dapat menghambat pertumbuhan bisnis Anda.',
      'Kami menawarkan solusi yang terstruktur dengan perencanaan anggaran yang matang, pengelolaan piutang dan pengeluaran yang cermat, serta strategi investasi jangka pendek yang tepat. Dengan dukungan tim ahli dan pengalaman yang luas, kami memberikan layanan yang dapat disesuaikan dengan kebutuhan spesifik bisnis Anda.',
    ],
    sections: [
      { title: 'Mengapa Memilih Layanan Manajemen Cash Kami?', items: [['Proses Efisien dan Terstruktur', 'Kami merancang strategi cash flow yang mengoptimalkan dana Anda.'], ['Meningkatkan Keuntungan', 'Pengelolaan kas yang tepat dapat membantu meningkatkan profitabilitas bisnis.'], ['Konsultasi Gratis', 'Dapatkan panduan gratis dalam merencanakan arus kas Anda.'], ['Pendampingan Profesional', 'Tim ahli kami siap mendampingi Anda dalam setiap langkah.']] },
      { title: 'Keunggulan Layanan Manajemen Cash Kami', style: 'cards', items: [
        ['Proses Cepat dan Efisien', 'Kami memastikan pengelolaan arus kas Anda dilakukan dengan sistematis dan cepat untuk memenuhi kebutuhan bisnis secara real-time.'],
        ['Perencanaan Keuangan yang Tepat Sasaran', 'Kami membantu Anda merancang strategi anggaran yang detail dan terukur untuk mendukung operasional serta investasi bisnis.'],
        ['Pengelolaan Piutang dan Pengeluaran yang Optimal', 'Dengan pengawasan yang ketat, kami memaksimalkan pemasukan dan meminimalkan pengeluaran untuk meningkatkan kestabilan keuangan bisnis Anda.'],
        ['Tim Ahli Berpengalaman', 'Layanan kami didukung oleh tim profesional dengan pengalaman luas dalam membantu berbagai jenis bisnis mengelola arus kas dengan sukses.'],
        ['Pendampingan dan Konsultasi Gratis', 'Kami menyediakan layanan konsultasi tanpa biaya tambahan untuk membantu Anda memahami kebutuhan finansial dan memberikan solusi terbaik.'],
        ['Fleksibilitas dan Personalisasi', 'Layanan kami dapat disesuaikan dengan kebutuhan spesifik bisnis Anda, memastikan solusi yang benar-benar relevan dan efektif.'],
      ] },
    ],
    wa: 'Halo, saya ingin bertanya lebih lanjut tentang layanan Manajemen Cash. Bisakah Anda membantu?',
  },
  {
    slug: 'managementRisiko', parent: 'management', nav: 'Manajemen Risiko', img: G + 'managemntRisiko.jpg',
    h1: 'Manajemen Risiko Terintegrasi: Solusi untuk Perlindungan dan Stabilitas Bisnis Anda',
    sub: 'Kelola Ketidakpastian, Maksimalkan Peluang: Strategi Manajemen Risiko yang Tepat untuk Bisnis Anda',
    intro: ['Manajemen risiko adalah elemen krusial untuk menjaga stabilitas bisnis di tengah ketidakpastian pasar. Dengan pendekatan yang terintegrasi dan berbasis data, layanan kami membantu Anda mengidentifikasi, menganalisis, dan mengelola risiko secara efektif. Kami memberikan solusi strategis untuk memitigasi ancaman, memanfaatkan peluang, dan melindungi aset bisnis Anda, sehingga memastikan operasional yang lancar dan berkelanjutan.'],
    sections: [
      { title: 'Keunggulan Layanan Manajemen Risiko Kami', style: 'cards', items: [
        ['Analisis Risiko Mendalam', 'Kami melakukan penilaian komprehensif untuk mengidentifikasi potensi ancaman yang dapat memengaruhi bisnis Anda.'],
        ['Rencana Mitigasi yang Disesuaikan', 'Setiap solusi dirancang sesuai dengan kebutuhan unik perusahaan Anda, memastikan hasil yang optimal.'],
        ['Pengelolaan Risiko Berbasis Data', 'Dengan memanfaatkan teknologi dan analitik, kami memberikan wawasan yang akurat untuk pengambilan keputusan yang lebih baik.'],
        ['Fokus pada Pencegahan Proaktif', 'Kami membantu Anda mengurangi dampak risiko sebelum terjadi, menjaga kelangsungan operasional bisnis.'],
        ['Pemantauan dan Evaluasi Berkelanjutan', 'Strategi kami mencakup pemantauan terus-menerus untuk memastikan efektivitas langkah mitigasi yang diterapkan.'],
        ['Tim Profesional dan Terpercaya', 'Didukung oleh ahli berpengalaman, layanan kami memberikan keamanan dan stabilitas yang Anda butuhkan.'],
      ] },
      { title: 'Manfaat yang Akan Anda Dapatkan', style: 'checks', items: ['Perlindungan aset dan reputasi bisnis.', 'Meningkatkan kepercayaan investor dan pelanggan.', 'Mengurangi dampak finansial dari risiko tak terduga.', 'Mendukung pertumbuhan bisnis melalui stabilitas operasional.'] },
    ],
    wa: 'Halo, saya ingin bertanya lebih lanjut tentang layanan Manajemen Risiko. Bisakah Anda membantu?',
  },
  {
    slug: 'managementPajak', parent: 'management', nav: 'Manajemen Pajak', img: G + 'managementPajak.jpg',
    h1: 'Manajemen Pajak Profesional: Optimalkan Kepatuhan dan Efisiensi Keuangan Anda',
    sub: 'Solusi Perpajakan Terintegrasi untuk Bisnis yang Lebih Tertib, Efisien, dan Hemat Biaya',
    intro: ['Manajemen pajak yang tepat adalah kunci untuk memastikan kepatuhan terhadap regulasi sekaligus mengoptimalkan efisiensi keuangan perusahaan. Layanan kami membantu Anda mengelola semua aspek perpajakan, mulai dari perencanaan hingga pelaporan, dengan solusi yang disesuaikan untuk kebutuhan bisnis Anda. Dengan pendekatan profesional dan strategi yang tepat, kami membantu Anda meminimalkan risiko pajak, mengelola kewajiban dengan efisien, dan memanfaatkan peluang insentif pajak yang tersedia.'],
    sections: [
      { title: 'Keunggulan Layanan Manajemen Pajak Kami', style: 'cards', items: [
        ['Perencanaan Pajak Strategis', 'Kami dengan efektif membantu merancang strategi perpajakan yang sepenuhnya selaras dengan tujuan bisnis Anda.'],
        ['Kepatuhan yang Terjamin', 'Kami memastikan seluruh kewajiban pajak Anda selalu terpenuhi tepat waktu dan sepenuhnya sesuai dengan regulasi yang berlaku.'],
        ['Analisis dan Optimasi Beban Pajak', 'Kami secara mendalam mengidentifikasi peluang penghematan pajak melalui evaluasi komprehensif terhadap struktur keuangan Anda.'],
        ['Pendampingan Audit Pajak', 'Tim kami selalu siap mendampingi Anda dalam menghadapi audit pajak, memberikan solusi cepat atas masalah yang mungkin timbul.'],
        ['Pemanfaatan Insentif Pajak', 'Kami membantu Anda secara strategis memanfaatkan insentif dan fasilitas perpajakan untuk secara signifikan mengurangi beban biaya perusahaan.'],
        ['Pengelolaan Dokumen yang Efisien', 'Dengan sistem yang terorganisir, kami memastikan bahwa semua dokumen perpajakan Anda disimpan dengan aman dan mudah diakses kapan saja dibutuhkan.'],
      ] },
      { title: 'Manfaat yang Akan Anda Dapatkan', style: 'checks', items: ['Mengurangi risiko denda atau penalti akibat ketidakpatuhan.', 'Mengoptimalkan arus kas dengan manajemen pajak yang efisien.', 'Mendukung stabilitas keuangan dan pengelolaan biaya perusahaan.', 'Meningkatkan reputasi bisnis dengan kepatuhan perpajakan yang baik.'] },
    ],
    wa: 'Halo, saya ingin bertanya lebih lanjut tentang layanan Manajemen Pajak. Bisakah Anda membantu?',
  },

  // ───────────── KONSULER ─────────────
  {
    slug: 'konsuler', parent: null, nav: 'Konsuler', img: G + 'konsuler2.jpg',
    h1: 'Layanan Konsuler Terpercaya untuk Warga Negara Indonesia di Dalam dan Luar Negeri, khususnya Jerman dan negara Eropa lainya.',
    sub: 'Solusi Lengkap untuk Urusan Dokumen Internasional, Visa, dan Izin Tinggal di Jerman dan negara Eropa lainnya.',
    intro: ['Layanan konsuler adalah layanan yang diberikan oleh perwakilan diplomatik suatu negara kepada warga negara mereka yang berada di luar negeri. Di bawah pengawasan konsulat, layanan ini meliputi berbagai kebutuhan administratif, seperti pengurusan dokumen resmi, perlindungan hukum, bantuan dalam situasi darurat, serta informasi mengenai visa dan izin tinggal. Konsuler memainkan peran penting dalam memfasilitasi hubungan internasional dan memberikan dukungan untuk warga negara yang tinggal atau bepergian di luar negeri, memastikan bahwa hak-hak mereka dihormati dan proses administratif berjalan lancar.'],
    sections: [
      { title: 'Jenis Konsuler yang Dilayani', style: 'cards', items: [
        ['Pernikahan Jerman-Indonesia', 'Kami menyediakan layanan pengurusan dokumen pernikahan antar negara, mulai dari pengesahan akta kelahiran, surat izin menikah, hingga legalisasi dan pencatatan pernikahan agar diakui secara sah di Indonesia dan Jerman. Kami membantu memastikan setiap prosedur berjalan sesuai peraturan kedua negara.'],
        ['Visa Eropa', 'Kami menawarkan bantuan untuk pengajuan Visa Schengen bagi mereka yang ingin melakukan perjalanan ke negara-negara Eropa, serta visa jangka panjang untuk studi, pekerjaan, atau reuni keluarga. Kami membantu dalam proses pengisian formulir, pemenuhan dokumen, wawancara, dan memberi informasi lengkap terkait setiap langkah dalam pengajuan visa.'],
        ['Izin tinggal di Jerman', 'Layanan kami membantu proses pengurusan izin tinggal (KITAS/KITAP) bagi warga negara Indonesia yang ingin tinggal di Jerman. Kami juga menyediakan legalisasi dokumen penting seperti ijazah, surat kerja, atau sertifikat keterampilan agar sesuai dengan persyaratan hukum di Jerman. Selain itu, kami memberikan perlindungan hukum serta bantuan dalam situasi darurat atau masalah administratif selama tinggal di Jerman.'],
      ] },
      { title: 'Alasan Kenapa Harus Pakai Layanan Kami', items: [
        ['Pengalaman dan Keahlian', 'Tim kami terdiri dari para profesional yang berpengalaman dalam mengurus dokumen internasional, visa, dan izin tinggal. Kami memberikan solusi tepat untuk setiap kebutuhan konsuler Anda.'],
        ['Proses yang Cepat dan Efisien', 'Kami mengutamakan kelancaran dan kecepatan dalam setiap tahap pengurusan dokumen, visa, dan izin tinggal. Proses kami dirancang untuk meminimalkan birokrasi dan memastikan Anda mendapatkan hasil yang optimal dalam waktu yang singkat.'],
        ['Pelayanan yang Terpercaya', 'Dengan pengalaman bertahun-tahun, kami memahami kebutuhan dan tantangan yang dihadapi warga negara Indonesia di luar negeri, dan kami siap memberikan dukungan penuh.'],
        ['Perlindungan Hukum dan Dukungan Lengkap', 'Selain pengurusan dokumen, kami juga memberikan perlindungan hukum bagi Anda yang tinggal di luar negeri, serta mendukung Anda dalam berbagai masalah administratif atau darurat yang mungkin muncul.'],
        ['Layanan Holistik dan Komprehensif', 'Kami tidak hanya menyediakan layanan untuk satu aspek saja, tetapi memberikan pendekatan menyeluruh yang mencakup segala hal yang berkaitan dengan pernikahan, visa, dan izin tinggal.'],
      ] },
    ],
    wa: 'Halo, saya ingin bertanya lebih lanjut tentang layanan Konsuler. Bisakah Anda membantu?',
  },

  // ───────────── TERJEMAHAN ─────────────
  {
    slug: 'terjemahan', parent: null, nav: 'Terjemahan Bahasa', img: '/storage/app/public/mediaFile/nc05vbwbLHZAmZWRS3KxpbISmnCukCRFMif2KHDS.jpg',
    h1: 'Layanan Penerjemah Profesional untuk Semua Kebutuhan Anda',
    sub: 'Akurasi Tinggi, Cepat, dan Terjangkau',
    intro: ['Kami menawarkan layanan penerjemahan cepat dan akurat untuk berbagai jenis dokumen, mulai dari kontrak bisnis hingga materi akademik. Dengan tim penerjemah berpengalaman dan teknologi terkini, kami memastikan setiap proyek diterjemahkan dengan tepat dan sesuai konteks. Kami menyediakan layanan penerjemahan dalam lebih dari 3 bahasa, termasuk bahasa Inggris, Jerman, dan Indonesia. Apapun kebutuhan terjemahan Anda, kami siap membantu Anda menjangkau audiens global dengan kualitas terjemahan terbaik.'],
    sections: [
      { title: 'Pasangan Bahasa', style: 'langs', items: [
        ['Indonesia - Jerman', 'Layanan terjemahan dari Bahasa Indonesia ke Bahasa Jerman.'],
        ['Indonesia - Inggris', 'Layanan terjemahan dari Bahasa Indonesia ke Bahasa Inggris.'],
        ['Inggris - Indonesia', 'Layanan terjemahan dari Bahasa Inggris ke Bahasa Indonesia.'],
        ['Jerman - Indonesia', 'Layanan terjemahan dari Bahasa Jerman ke Bahasa Indonesia.'],
      ] },
      { title: 'Mengapa Memilih Kami?', style: 'cards', items: [
        ['Akurasi Tinggi', 'Kami hanya menggunakan penerjemah berpengalaman yang ahli di bidangnya, sehingga Anda bisa yakin bahwa setiap terjemahan kami akan akurat dan sesuai dengan konteks.'],
        ['Layanan Multibahasa', 'Kami menyediakan penerjemahan dalam lebih dari tiga bahasa utama, termasuk Bahasa Indonesia, Inggris, dan Jerman. Ini memungkinkan Anda untuk menjangkau audiens global dengan mudah.'],
        ['Proses Cepat dan Tepat Waktu', 'Kami memahami bahwa waktu sangat berharga. Oleh karena itu, kami berkomitmen untuk menyelesaikan setiap proyek dengan cepat tanpa mengurangi kualitas.'],
        ['Harga Terjangkau', 'Kami menawarkan layanan penerjemahan berkualitas dengan harga yang kompetitif dan transparan, tanpa biaya tersembunyi.'],
        ['Tim Penerjemah Profesional', 'Tim kami terdiri dari penerjemah yang berpengalaman, memiliki sertifikasi di berbagai bidang, dan memahami nuansa budaya dalam setiap bahasa yang diterjemahkan.'],
        ['Kepuasan Pelanggan', 'Kepuasan Anda adalah prioritas utama kami. Kami siap membantu Anda dengan segala pertanyaan dan revisi untuk memastikan hasil terjemahan memenuhi standar tinggi Anda.'],
      ] },
    ],
    outro: 'Dengan keunggulan-keunggulan ini, kami percaya bahwa kami adalah pilihan terbaik untuk memenuhi kebutuhan penerjemahan Anda.',
    wa: 'Halo, saya ingin bertanya tentang layanan terjemahan Bahasa Indonesia ke Bahasa Jerman, Inggris, atau sebaliknya.',
  },
];

// Category overview pages (Jasa, Asuransi, Konsultan, Management).
export const categoryPages = [
  {
    slug: 'jasa', title: 'Jasa',
    lead: 'Kami menyediakan layanan Apostille, Visa Jerman dan Swiss, KITAS, KITAP, dan Legalisasi untuk kebutuhan legalisasi dokumen Anda. Dengan pengalaman profesional, kami membantu Anda menyelesaikan proses administrasi dengan cepat dan efisien. Hubungi kami sekarang untuk layanan terpercaya dan harga kompetitif!',
    cards: [
      ['apostille', 'Apostille', 'Butuh legalisasi dokumen untuk digunakan di luar negeri? Kami menyediakan layanan Apostille yang cepat dan terpercaya, memvalidasi dokumen Anda agar sah di negara-negara yang tergabung dalam Konvensi Den Haag. Proses mudah, efisien, dan pastinya hemat waktu. Hubungi kami sekarang dan pastikan dokumen Anda siap digunakan di luar negeri!'],
      ['visa', 'Visa Jerman dan Swiss', 'Kami menyediakan layanan pembuatan Visa Jerman dan Swiss dengan proses yang cepat dan mudah. Baik untuk keperluan wisata, bisnis, atau studi, kami siap membantu Anda menyiapkan semua dokumen yang diperlukan dan mengurus pengajuan visa dengan efisien. Hubungi kami sekarang untuk layanan terpercaya dan pastikan perjalanan Anda berjalan lancar!'],
      ['kitasKitap', 'KITAS dan KITAP', 'Kami menawarkan layanan pengurusan KITAS (Kartu Izin Tinggal Sementara) dan KITAP (Kartu Izin Tinggal Tetap) bagi warga negara asing yang ingin tinggal di Indonesia. Dengan pengalaman yang luas, kami membantu proses aplikasi secara cepat dan mudah, dari dokumen hingga persetujuan. Hubungi kami sekarang untuk layanan terpercaya dan pastikan izin tinggal Anda di Indonesia terurus dengan baik!'],
      ['legalisasi', 'Legalitas', 'Kami menyediakan layanan legalisasi dokumen untuk memastikan keaslian dokumen Anda diakui secara sah, baik di dalam negeri maupun internasional. Kami mengurus legalisasi untuk berbagai jenis dokumen seperti akta, ijazah, dan surat-surat penting lainnya. Proses cepat, mudah, dan terpercaya. Hubungi kami sekarang untuk layanan legalisasi dokumen yang efisien dan terpercaya!'],
    ],
  },
  {
    slug: 'asuransi', title: 'Asuransi',
    lead: 'Kami menyediakan berbagai layanan asuransi untuk melindungi Anda dari risiko tak terduga. Layanan kami mencakup asuransi jiwa, kesehatan, kendaraan, properti, perjalanan, dan bisnis, dengan premi yang terjangkau. Kami berkomitmen memberikan perlindungan yang aman dan terpercaya, serta memberikan ketenangan pikiran dalam setiap tahap kehidupan Anda.',
    feature: {
      title: 'Mengapa Asuransi Sangat Penting dalam Menjamin Keamanan Finansial Anda: Perlindungan dari Risiko Tak Terduga, Membantu Menghadapi Ketidakpastian Kehidupan, dan Menyediakan Jaminan Keuangan untuk Keluarga, Kesehatan, dan Properti Anda',
      text: ['Asuransi adalah bentuk perlindungan yang memberikan rasa aman terhadap risiko yang tidak terduga, seperti kecelakaan, penyakit, atau kehilangan harta benda. Dengan membayar premi secara berkala, pemegang polis dapat mengalihkan beban finansial akibat kejadian yang tidak diinginkan kepada perusahaan asuransi. Terdapat berbagai jenis asuransi, termasuk asuransi kesehatan, jiwa, kendaraan, dan properti, yang dirancang untuk memenuhi berbagai kebutuhan. Asuransi memberikan jaminan keuangan yang dapat membantu keluarga atau individu mengatasi krisis finansial dan mempersiapkan masa depan dengan lebih tenang.'],
    },
    cards: [
      ['asuransiJiwa', 'Asuransi Jiwa', 'Asuransi jiwa memberikan perlindungan finansial bagi keluarga jika tertanggung meninggal dunia. Polis ini memberikan uang pertanggungan yang dapat digunakan untuk memenuhi kebutuhan hidup, pendidikan, atau melunasi utang, membantu meringankan beban keluarga yang ditinggalkan.'],
      ['asuransiAnak', 'Asuransi Kesehatan Anak', 'Asuransi kesehatan anak melindungi biaya medis seperti rawat inap, imunisasi, dan perawatan penyakit. Memberikan perlindungan finansial dan akses ke layanan kesehatan terbaik untuk tumbuh kembang anak.'],
      ['asuransiIstri', 'Asuransi Kesehatan Istri', 'Asuransi kesehatan istri melindungi biaya medis seperti rawat inap, pemeriksaan, dan penyakit kritis. Memberikan perlindungan finansial dan kemudahan klaim di rumah sakit rekanan.'],
      ['asuransiSuami', 'Asuransi Kesehatan Suami', 'Asuransi kesehatan suami melindungi dari biaya medis seperti rawat inap, obat-obatan, dan penyakit kritis. Memberikan perlindungan finansial dan kemudahan klaim di rumah sakit rekanan.'],
      ['asuransiKeluarga', 'Asuransi Kesehatan Keluarga', 'Asuransi kesehatan keluarga melindungi seluruh anggota keluarga dari biaya medis, seperti rawat inap dan pemeriksaan, dengan kemudahan klaim dan akses ke fasilitas kesehatan terbaik.'],
      ['asuransiKendaraan', 'Keunggulan Asuransi Mobil', 'Asuransi mobil kami menawarkan perlindungan lengkap untuk kendaraan dan pengemudi Anda, termasuk perlindungan terhadap kecelakaan, pencurian, kebakaran, dan bencana alam.'],
      ['asuransiPerusahaan', 'Asuransi Kesehatan Pegawai Perusahaan (Kumpulan)', 'Asuransi kesehatan pegawai perusahaan (kumpulan) memberikan perlindungan medis untuk karyawan dan keluarga, mencakup rawat inap, pemeriksaan, dan obat-obatan dengan premi lebih terjangkau.'],
    ],
  },
  {
    slug: 'konsultan', title: 'Konsultan',
    lead: 'Kami menyediakan konsultasi lengkap untuk pasangan beda negara, khususnya Indonesia-Jerman. Dari pengurusan dokumen, legalisasi, penerjemahan, hingga pencatatan pernikahan dan legalitas kelahiran anak, semua kami tangani dengan cepat dan tepat. Percayakan kebutuhan Anda pada kami, solusi praktis dan terpercaya untuk pasangan bahagia!',
    feature: {
      title: 'Konsultan',
      img: '/gambarStatis/konsultan2.jpg',
      text: ['Konsultan adalah seorang profesional yang memberikan saran, panduan, dan solusi terkait masalah atau kebutuhan tertentu dalam bidang keahlian tertentu, seperti hukum, bisnis, teknologi, atau manajemen. Tugas utama konsultan adalah membantu klien untuk memahami situasi mereka, menganalisis masalah, dan merancang strategi atau tindakan yang tepat untuk mencapai tujuan atau memecahkan masalah yang dihadapi. Konsultan bekerja dengan berbagai jenis organisasi atau individu, menawarkan pengetahuan dan pengalaman mereka untuk meningkatkan efisiensi, kinerja, atau kepatuhan terhadap regulasi yang relevan.'],
    },
    cardsTitle: 'Detail Layanan',
    cards: [
      ['nikahCampur', 'Nikah campur (Beda Negara)', 'Kami menyediakan layanan konsultasi profesional untuk pasangan beda negara yang ingin menikah. Mulai dari pengurusan dokumen, legalisasi, hingga pencatatan pernikahan sesuai hukum kedua negara, semua kami tangani dengan cepat dan tepat. Pastikan pernikahan Anda sah secara hukum dan bebas dari kerumitan dengan bantuan kami!'],
      ['legalitasPerkawinan', 'Legalitas perkawinan Jerman-Indonesia', 'Kami membantu pasangan Jerman-Indonesia mengurus legalitas perkawinan sesuai hukum kedua negara. Layanan mencakup pencatatan di Standesamt (Jerman) dan KUA/Dukcapil (Indonesia), legalisasi dokumen, serta penerjemahan. Kami pastikan pernikahan Anda sah dan status hukum anak hasil pernikahan campur terjamin di kedua negara.'],
      ['legalitasKelahiran', 'Legalitas kelahiran', 'Kami membantu mengurus legalitas kelahiran anak dari pernikahan Jerman-Indonesia. Prosesnya melibatkan pencatatan kelahiran di kedua negara, dengan dokumen yang diterjemahkan dan dilegalisasi sesuai hukum masing-masing. Kami memastikan anak mendapatkan akta kelahiran sah yang diakui di Jerman dan Indonesia, serta hak kewarganegaraan ganda (jika berlaku).'],
    ],
  },
  {
    slug: 'management', title: 'Management',
    lead: 'Kami menyediakan layanan manajemen yang komprehensif untuk membantu bisnis Anda mencapai tujuan secara efisien. Layanan kami meliputi perencanaan strategis, pengelolaan sumber daya manusia, keuangan, operasional, serta pengambilan keputusan yang berbasis data. Dengan pendekatan yang terstruktur, kami siap mendukung pertumbuhan dan kesuksesan bisnis Anda.',
    feature: {
      title: 'Solusi Layanan Manajemen Terpercaya yang Membantu Meningkatkan Efisiensi, Mengoptimalkan Kinerja, dan Mempercepat Pertumbuhan Bisnis Anda, Didukung oleh Tim Profesional dengan Pengalaman Luas dalam Mencapai Keberhasilan Bisnis yang Berkelanjutan',
      img: '/gambarStatis/managament1.png',
      text: ['Dengan layanan manajemen yang dirancang khusus untuk kebutuhan bisnis Anda, kami membantu mengoptimalkan proses operasional, meningkatkan kinerja, dan merumuskan strategi pertumbuhan yang efektif. Tim profesional kami yang berpengalaman siap memberikan dukungan penuh untuk memastikan perusahaan Anda dapat bersaing secara efektif dan berkembang pesat di pasar yang semakin kompetitif.'],
    },
    cards: [
      ['managementCash', 'Manajemen Cash', 'Manajemen Cash adalah proses pengelolaan keuangan yang berfokus pada pengendalian arus kas masuk dan keluar dalam suatu organisasi atau perusahaan. Tujuannya adalah untuk memastikan ketersediaan dana yang cukup untuk kebutuhan operasional harian, investasi, dan pengeluaran lainnya, sekaligus mengoptimalkan penggunaan kas agar dapat meningkatkan efisiensi dan keuntungan. Strategi manajemen cash yang efektif mencakup perencanaan anggaran, pengelolaan piutang, pengawasan pengeluaran, serta investasi jangka pendek yang tepat.'],
      ['managementRisiko', 'Manajemen Risiko', 'Manajemen Risiko adalah proses yang bertujuan untuk mengidentifikasi, menganalisis, dan mengelola berbagai risiko yang dapat memengaruhi pencapaian tujuan. Dengan pendekatan ini, organisasi atau individu dapat mengurangi dampak ketidakpastian, melindungi aset, dan meningkatkan stabilitas operasional. Proses ini mencakup penilaian risiko, pengembangan strategi untuk mengatasi risiko, serta pemantauan yang berkelanjutan guna memastikan efektivitas langkah-langkah yang diambil.'],
      ['managementPajak', 'Manajemen Pajak', 'Manajemen Pajak adalah proses perencanaan, pelaksanaan, dan pengawasan kewajiban perpajakan untuk memastikan kepatuhan terhadap peraturan pajak sekaligus mengoptimalkan efisiensi finansial. Tujuannya adalah untuk memenuhi kewajiban perpajakan secara tepat waktu dan benar, mengelola risiko pajak, serta memanfaatkan insentif atau penghematan yang sah sesuai dengan ketentuan yang berlaku. Pendekatan ini membantu individu atau organisasi menjaga kestabilan keuangan dan meminimalkan potensi sengketa dengan otoritas pajak.'],
    ],
  },
];

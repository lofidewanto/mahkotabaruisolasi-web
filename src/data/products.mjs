// Product catalogue, copied from the original site (prices in Rupiah).
// Each item: [image file in /storage/app/public/produk_foto/, name, price, description]
const RW = 'Rockwool pipa adalah material isolasi unggulan yang dirancang untuk melindungi pipa dari kehilangan panas dan mengurangi kebisingan. Terbuat dari serat mineral alami, produk ini tahan panas, tidak mudah terbakar, dan ramah lingkungan, menjadikannya pilihan ideal untuk kebutuhan bangunan dan industri.';

const produkLain = {
  id: 'produkLain', title: 'Produk lain', tag: 'Barang dan jasa',
  items: [
    ['cLjfspQo2dAiN3Hd4kpX2v0TkmC5ZN75dJ1yMP8r.jpg', 'Apar alat pemadam kebakaran 2 kg beserta isi dan Breket', 325000, 'Apar alat pemadam kebakaran 2 kg beserta isi dan Breket.'],
    ['u80uKJcL6VFzmBrR8OPeKuQgn68Svg9OcoCjmFcN.jpg', 'Plastic Wrapping 50cm x 0,017mm x 120m', 45000, 'Plastic Wrapping 50cm x 0,017mm x 120m.'],
    ['eLPhsGCddQPkRBx8JYhlOmdhOke2JUiU992kTyJI.jpg', 'Plastic Wrapping 50cm x 0,017mm x 250m', 100000, 'Plastic Wrapping 50cm x 0,017mm x 250m.'],
    ['Z6yWUh4nfrpvGISiveOMIGDlLaK36aFtWOB7Prz1.jpg', 'Plastic Wrapping 50cm x 0,017mm x 300m', 115000, 'Plastic Wrapping 50cm x 0,017mm x 300m.'],
    ['gUfYnrU2hg6MopTLivnX20BEqYk9YD7XO3rA6eS6.jpg', 'Batu Potong Gerindra MegaWeld 4inch 107x1.2x16mm Harga Grosiran', 2350, 'Batu Potong WD, Uk. 105 x 1.2 x 16mm (4 x 3/64 x 5/8), max speed 80 m/n (15.200 RPM). Tipis dan tajam, bisa dipakai untuk memotong plat, pipa, besi, hollow, aluminium, stainless steel dan lainnya. Hasil potongan sangat rapih. Good quality.'],
    ['CEw9xPYhR3BHeGfN1Wr5InhWC6DYgeR5jz2Zk5NR.jpg', 'HT Alinco dj w10 Baru dan Ori', 1900000, 'Alinco DJ-W10 Singleband. Frequency: [TX/RX] 136.000 - 173.995 MHz, [RX Only] 76-108 MHz. 128 programmable channels, output power approx. 5/2/0.5W, dimensions 59W x 98H x 35D mm.'],
    ['cl2wJUnJrH9ddwfrk3326Tfjrc45ZnkAF3n0iwUC.jpg', 'IGBT Inverter DC Industrial Welding Machine ZX7-500P', 7700000, 'Mesin Las Professional adopting powerful IGBT tube and nanometer crystal transformer, advanced inverter technology, with under voltage and overheating protection, automatic voltage fluctuation compensation.'],
    ['528akYkcXSbx1TnFD9bCYmfKaO12eO7l73a9JPjI.jpg', 'Mesin Las ECL-165Z1 Megaweld, Listrik 450W Bluetooth Speaker USB Plug', 1150000, 'ECL-165Z1 has the invention patent inverter circuit. Output voltage 90A at 156V, able to weld 2.5 electrode normally. At 190V-272V it is very easy to start arc, with good welding experience and beautiful weld.'],
    ['UWqTkNc3mmlxuRmqNXFxqT2eFm7PIHKpMYazWAj1.jpg', 'Walkie talkie Radio Rig Yaesu Garansi 1 Tahun FT-2980 VHF', 3250000, 'Produk: RIG, Merk: Yaesu, Tipe: FT-2980R, Frekuensi: VHF 136-174MHz, Power: 80W. CTCSS and DCS encode/decode built in, extensive memory system, alpha-numeric channel display, large LCD display.'],
    ['8Esl3SeUPDhFpylqUGcM2CbXFSFzIDASGxYxXrxJ.jpg', 'Fire Stop sekali Pakai', 65000, 'Fire Stop sekali pakai nett 500 ml.'],
    ['Hbg8jOTdmzmGfgXTwHWeQ9nIbgBn5tl8AUhp699m.jpg', 'Set top box tv digital matrix Original', 295000, 'Garansi resmi 1 tahun (langsung ke service center). Jika MNC Group tidak muncul pada saat otomatis, silahkan lakukan pencarian manual dengan frekuensi 658.000 kHz.'],
  ],
};

export const isolasi = [
  {
    id: 'isolasisingletape', title: 'Isolasi single tape',
    items: [
      ['LYigULAZdwWX76ld8qpBRKsefGqM1rZX4661Q0oG.jpg', 'Lakban tesa 2inch x 33m (Biru)', 95000, 'Diameter: 2inch x 33m.'],
      ['fSNVIzsIjoavrEiCONonmTfVyEcs9rmT94Jqfc9A.jpg', 'Lakban tesa 2inch x 33m (Merah)', 95000, 'Diameter: 2inch x 33m.'],
      ['dq3IqOu2WN8ZQvGZOnZNJHuGX4tyhhQcqQbegJ1a.jpg', 'Lakban tesa 2inch x 33m (Kuning)', 95000, 'Diameter: 2inch x 33m.'],
      ['zSrmfSC6ODbe4RV7rPbvuxfS6u4bpvTW5t84RvKZ.jpg', 'Seal Tape Onda 1 inch x 10 m', 12000, 'Seal Tape Onda 1 inch x 10 m.'],
      ['tk5lXPVmPFR7MaL5FKWHjFZGpdH0Evagkn9Y3c4T.jpg', 'Lakban bening 24 mm x 90 Yard', 4000, 'Lakban Bening 24 mm x 90 Yard, standart fabrik, qualitas bagus dan lengket.'],
      ['atPtE7b8zZNtSzSQWN8TS2x7dDIARxgG6aov4SBP.jpg', 'Lakban bening 12mm x 90 Yard', 2000, 'Lakban Bening 12 mm x 90 Yard, lengket dan bagus qualitasnya, standart fabrik.'],
      ['eSzh7JGor2v6kqK2tdZZz97qkj5VdqpoAGkhPNim.jpg', 'Pollak lakban anti bocor sangat rekat dan tahan lama Original', 55000, 'Pollak, lakban anti bocor, lem kuat dan tahan lama.'],
    ],
  },
  { id: 'isolasikertas', title: 'Isolasi kertas', items: [] },
  {
    id: 'dobletapekertas', title: 'Doble tape',
    items: [
      ['MBlhLCENCEgLakKG4xDmFm3waviOP3oVtRIG7aAb.jpg', 'Doble tape 3M Original', 120000, 'Diameter: 2inch x 30m.'],
      ['i5YPIs4ltyhmpGjr7sN2OKxVbApAH6Wmwei7zIUM.jpg', 'Double Tape 48mm x 50 meter', 45000, 'Double Tape high quality, standart industri kertas dll, juga untuk produksi penyambung kertas fabrik dan industri automobil.'],
      ['HSxfU7O550r9HCj3JC9ZU7ZEwFEEmoXh4Zvk80Ih.jpg', 'Double Tape Century 48mm x 50 m', 52000, 'Century Double Tape 48mm x 50 m khusus fabrik dan industri.'],
      ['uobqbjqOA9Nm9yAfTmJKdfg7pjFCePpgLNCiEx2q.jpg', 'Double Tape karpet anti slip, Rekat dan Tebal 48mm x 15m', 200000, 'Diameter: 48mm x 15m. Double tape tebal, anti slip untuk karpet dll.'],
      ['FfeAKdAljSQ5qg8Vok9TryclT7aATIElBW4zucet.jpg', 'Seal tape Unnu 12 mm x 10 m', 4750, 'Seal Tape merk Unnu 1/2 inch x 10 m.'],
    ],
  },
  {
    id: 'isolasisafetywalk', title: 'Isolasi safety walk',
    items: [
      ['iueTH9rM2RXGLxV1qBakJwC28Q7AQba5xHLYMVxC.jpg', 'Lakban Fragile Startape 2inch x 90 Yard Tebal dan Lengket', 11000, 'Lakban fragile merah adalah pilihan ideal untuk kebutuhan pengemasan barang yang membutuhkan perlindungan ekstra. Dengan desain warna merah yang mencolok, lakban ini mudah dikenali dan memberi tanda jelas pada kemasan yang berisi barang pecah belah atau mudah rusak.'],
    ],
  },
  {
    id: 'barikade', title: 'Barikade',
    items: [
      ['jMI0pCBJtBu7KWq4Rg4mYXhZUVEQZSYE4eX1vgSq.jpg', 'Police line 2inch x 300m', 50000, 'Diameter: 2inch x 300m. Pilihan warna: Merah, Kuning.'],
      ['uyH1yEuA6s8X2gA7cT31V3PEiRni2yPpURWtCSL7.jpg', 'Police line 2inch x 300m Kuning Hitam', 50000, 'Diameter: 2inch x 300m.'],
      ['i65FRlg3oyKVJaFFKrwDp0JVlfzwuThMHXX8IlFy.jpg', 'Police line 3inch x 300m Kuning Hitam', 75000, 'Diameter: 3inch x 300m.'],
      ['rEQJLKig7heZMV7UgMCTQ4hmJLnI0tbtEzyLe5Ai.jpg', 'Police line 3inch x 30m', 75000, 'Diameter: 3inch x 30m. Warna yang tersedia: Kuning, Merah.'],
    ],
  },
  {
    id: '3M', title: 'Schotch 3M',
    items: [
      ['88FoLJiPqJGRhSByhmuyf0LrV114XvDOlBm21Obr.jpg', '3M Reflektif Diamond Grade Conspicuity Marking (Original)', 2500000, 'Diameter: 50.8 mm x 45.7 m.'],
      ['viTupF5TL68L3iel7w9p94butvaN4kJW3yJL7u6H.jpg', '3M reflektif tawon (original)', 575000, 'Diameter: 2inch x 45m. Pilihan warna: Merah, Kuning, Putih.'],
      ['7WVoGgipoYWSrDbXLAJAwAKR6rdBDBQPvxLWY4mq.jpg', '3M Schotch 23 Original', 90000, 'Schotch 23 (19,0mm x 9,1m x 0,761mm).'],
      ['okFYsq5CqtuJ1k8CWDOzYJQamE0wWUsCNuXEoey3.jpg', '3M Schotch 35 Original', 52000, 'Schotch 35 (19mm x 20,1m x 0,177mm).'],
      ['64WapsvdxhfEarbKFWJ0m4cRnc3flarDKwEsn7rU.jpg', '3M Schotch 35 Original (Biru)', 52000, 'Schotch 35 (19mm x 20,1m x 0,177mm).'],
      ['KzZUyHqizKvpNrHuAMGMfeChOiRP6Ug4TnG2jR4v.jpg', '3M Super 33+ Original', 45000, 'Diameter: 19mm x 20,1m x 0,177mm. Warna: Hitam, Kuning, Biru, Merah.'],
      ['HhIDhIB4RUk8UkbZDuVxCFND1IAZlMOvEca8quwe.jpg', '3M Schotch Doble tape Original', 30000, 'Diameter: 3/4inch x 30m.'],
      ['pwq7gswzOueMC3WtHWw0oJoYGvSTaPBt1L8Snlxy.jpg', '3M Double tape Original', 60000, 'Diameter: 1inch x 30m.'],
      ['ea6ZTyIdiVmbD19a6iB4KQwhOVlvTIQtkEwVYy8K.jpg', 'VHB tape 3M 12mm x 4,5m', 40000, 'Diameter: 12mm x 4,5m. VHB tape untuk banyak kegunaan di mobil, kaca rumah dll, 3M Original.'],
    ],
  },
  {
    id: 'reflektifLokal', title: 'Reflektif lokal',
    items: [
      ['VZVLD0kSxgHVUWnBO20mtEXTwj72FBv1m2D0TW4p.jpg', 'Isolasi Reflektif Local 2inch x 20m', 275000, 'Diameter: 2inch x 20m.'],
      ['HoBf1GnXry68ykk9EV8WdSwJ03JdEgghZb3CZTqy.jpg', 'Reflektif Local 2inch x 33m', 200000, 'Diameter: 2inch x 33m.'],
      ['Fb1yhsuSfQNTW1NNzTCpMjoGT3cJRGUJ7jdI5lMe.jpg', 'Reflektif Local 2inch x 45m', 575000, 'Diameter: 2inch x 45m.'],
      ['A0rCLorlqWTGKXuA3qplrDunKQjUomleUZ2rTqkN.jpg', 'Isolasi reflektif tawon', 575000, 'Diameter: 2inch x 45m.'],
    ],
  },
  { id: 'Gtape', title: 'G tape', items: [] },
  produkLain,
];

export const insulasi = [
  {
    id: 'rockwool', title: 'Rockwool',
    items: [
      ['Dvdv8g7N8WVlg8KXXQc93Cym1rJ65l4A3Ypx8vj3.jpg', 'Rockwool import pipa (diameter 1/2)', 76000, RW],
      ['PvrLpyagNoqYVFW3yf5QvMaSPPmUsiOLnbKHO8yM.jpg', 'Rockwool import pipa (diameter 1/2)', 170000, RW],
      ['Sd2fpcg7DRAM7dyBObbltmSRzFAoEpqMdCrwqMvc.jpg', 'Rockwool import pipa (diameter 3/4)', 160000, RW],
      ['DOMjOOokVLaY8bxb5jGvrODXQVVSGteSFXmnhHS0.jpg', 'Rockwool import pipa (diameter 1)', 87000, RW],
      ['whHyYAOwzISVzjPn4jqF7Vqh841cz8gmub35wAM3.jpg', 'Rockwool Pipa Lebar 1 inch x Tebal 50 mm x Panjang 1 Meter', 190000, RW],
      ['pmRG69ykZYPljXfFhE7pBF0ohA4DGa4by2hhOG9B.jpg', 'Rockwool import pipa (diameter 2)', 104000, RW],
      ['wfqBHccXobClcw9LPvxBssohseBLGQup9rPvbWxg.jpg', 'Rockwool import pipa (diameter 2)', 240000, RW],
      ['NMlZB1L75kW8n45gYWLW3PrKs2vmp3ynNbqhyD6C.jpg', 'Rockwool import pipa (diameter 3)', 130000, RW],
      ['JJ3F3oL6ToRspQKfS1LJAYFAWslVQbTOU8M4lDEs.jpg', 'Rockwool import pipa (diameter 3)', 290000, RW],
      ['jcuhGHXOOllYyLaAFxRbJfA5nqHpDHm6ITcfS2Yu.jpg', 'Rockwool import pipa (diameter 4)', 153000, RW],
      ['rde58fD1YIogZPExnMUv3VwS6uHYTckhNAiwA4wM.jpg', 'Rockwool import pipa (diameter 4)', 320000, RW],
      ['gajR4oaGi2EYYhowpRP5sOddJpH9gRXLZjl7tZfR.jpg', 'Rockwool import pipa (diameter 5)', 390000, RW],
      ['kfrXe8sZrRxQvkne3remGjHUXoANOPnz28kgOpR3.jpg', 'Rockwool import pipa (diameter 6)', 210000, RW],
      ['vB4OZhComH7aGVySUOK4hGjBZWclf4napBFH6X8n.jpg', 'Rockwool import pipa (diameter 6)', 440000, RW],
      ['y2I1GG61Lt2FdXmVM6kQygyCL2m620WUcOUTJvAw.jpg', 'Rockwool import pipa (diameter 8)', 260000, RW],
      ['GKDxlVnWvijJxJd66OUF6JDiT8dZYPcJ9HMSpM0U.jpg', 'Rockwool import pipa (diameter 8)', 520000, RW],
      ['dCclaw0F03EHI97bBiMOfvTJqIRnTBuK5Zq3vQ8f.jpg', 'Rockwool import pipa (Tebal 25mm)', 84000, 'Rockwool Pipa – Isolasi Panas dan Suara Terbaik untuk Pipa Anda. Material isolasi berkualitas tinggi yang dirancang khusus untuk melindungi pipa dari kehilangan panas dan mengurangi kebisingan. Terbuat dari serat mineral alami, tahan panas, tahan api, dan ramah lingkungan.'],
      ['6ReKkx6gzqLsVHqNQVyu2PHBxZXDy8SB9VIBvbWv.jpg', 'Rockwool slab 120cm x 60cm isi 9 Density 60', 750000, 'Rockwool Slab densiti 60 kg/120cm x 60cm x 9, tebal 5 cm.'],
      ['KAo2mujwxNj4Pfr1e58NtT7Ig6vIuSzosUSH0JSD.jpg', 'Rockwool Slab Asli Baru Density 140 kg tebal 5 cm, 120x60x4', 807500, 'Rockwool Slab Import density 140 kg/m3, terbaik dan yang paling tebal di kelasnya, tebal 5 cm ukuran 120x60x4.'],
    ],
  },
  {
    id: 'peredam', title: 'Peredam',
    items: [
      ['CKv6TYrkp4LCi4rGJ89jvjnOrgFAVzneFoSUWbPn.jpg', 'Studio Music paket 700 rb/m2', 700000, 'Anda ingin punya music studio sendiri? Tempat karaoke di rumah tanpa mengganggu tetangga? Hubungi kami, paket dari 300 rb - 1 jt / meter.'],
      ['fR36Esu0BcaTB4XR3F2HgHXFRs280B5izYaiH1OX.jpg', 'Paket peredam suara/panas Ruangan Genset, keamanan Ruangan Genset / M2', 1100000, 'Kami menyediakan jasa dan pembuatan perlindungan ruangan genset dengan bahan peredam suara dan panas hingga 1200 °C, dengan bahan import Rockwool dan Fiber Glass (Glass Cloth), garansi 10 tahun. Ruangan genset menjadi aman dan tidak bising untuk gedung, apartemen, kantor dll.'],
      ['hgfOF22JfS9TFeLuxa8RqiQXCBFY81uiReUT5MTb.jpg', 'Busa Peredam 50cm x 50cm real Black, Hitam', 39000, 'Busa peredam zig zag baru dengan zigzag kecil lebih padat, tebal 5-6 mm, tipe baru dan sangat hitam (bukan abu-abu), ukuran 50 cm x 50 cm x 5mm.'],
      ['upu7L2kfUpyA7oTNqBhvZWizaAz185HKGq8HR5xg.jpg', 'Busa peredam (warna hitam)', 250000, 'Pilihan ideal untuk menciptakan suasana yang tenang dan nyaman di ruangan Anda. Terbuat dari bahan busa akustik berkualitas tinggi, efektif menyerap suara dan mengurangi pantulan, cocok untuk ruang studio, ruang rekaman, dan lainnya.'],
      ['wp7RyHw9YY8pd7IIfkp0mT3mBtr8oZ4G9P7maDNQ.jpg', 'Busa peredam (warna abu-abu)', 250000, 'Solusi efektif untuk mengurangi kebisingan dan meningkatkan kualitas akustik ruangan Anda. Terbuat dari bahan busa akustik premium, dirancang untuk menyerap suara dan mengurangi pantulan.'],
      ['pWBUQEflOrA2jbIKe9ZLbnUN0pyAJJko48w2UbuK.jpg', 'Peredam busa warna warni', 450000, 'Tersedia dalam warna kuning, merah, dan ungu yang cerah. Efektif mengurangi kebisingan, dibuat dari material tahan lama dan mudah dipasang.'],
      ['pA8ouoetYWsLmAXPYsQn31FF8hXz1hDd4ifFpi1c.jpg', 'BassTrepp', 100000, 'BassTrepp pojokan untuk studio musik, peredam suara dan penghilang gaung akustik.'],
      ['eOwhVnGImBlSVsAxMXC8pVzanRN6MmGeTkczwvre.jpg', 'Glass Cloth / Kain Fiber Glass Tahan panas 0,18mm x 1,27 m x 100 m', 2700000, 'Bahan anti panas paling efektif, sering digunakan di pabrik genteng, untuk pembuatan dan pelindung ruang genset gedung dll. Kombinasi dengan pelapis tahan panas Rockwool agar ruang genset aman dari panas, bising, dan meminimalisir terjadinya kebakaran.'],
      ['hR8hZgqpkuxjxob3m3cjAi8oq4u17a95YACEjg8m.jpg', 'Shine Foil Insulation 3mm ukuran 1,2m x 25 m', 1500000, 'Diameter: 3mm x 1,2m x 25 m. Thermal Insulation 3mm.'],
      ['pehH4IiyYwktThjmBQ2T56jduFiFZjUp1x0HPjRJ.jpg', 'Shine Foil Air Radiant Shield 4mm ukuran 1,2m x 25m (30m2) diameter 36', 1500000, 'Shine Foil 4mm 1,2 × 25m Bubble 4 Premium.'],
      ['NVAzx38jie95uFz41aC6ThqI2Kh1NFCo8ypT4z2D.jpg', 'Shine foil thermal Insulation 8mm 1,2 x 25 m (30 m2) diameter 52cm', 2650000, 'Thermal insulation 8 mm, Woven Alum + Foam + Alum.'],
      ['7EkKj2IaqXs2DATi5jb7cj6p9CPBEoT6aOD80bQA.jpg', 'Xp foil peredam panas', 770000, 'Xp Foil size 1,22m x 25m diameter 35.'],
      ['ewed7XPHcvslFye89ggh3UTBlAFG4oeuIRKYspVH.jpg', 'Activfoil 1,2 x 25 m diameter 36 cm', 740000, 'Ready stok Activfoil thermal protection, non toxic, non allergenic, 1,2 x 25m.'],
    ],
  },
  {
    id: 'komponenlistrik', title: 'Alat (Komponen) Listrik',
    items: [
      ['KvFjjg1MjmryOhhM01mV8F5wkjwmTuDkAyYxdOdf.jpg', 'Solar Panel OS-P36-10 Watt Poly 35 x 17 x 1.7 cm', 270000, 'Ukuran: 35 x 17 x 1.7 cm.'],
      ['jwmMSOOpqXMKMAEWvsdk5pkdb6QIWnPpndNV2wDD.jpg', 'Solar Panel OS-P36-20 Watt Poly 46 x 35 x 2 cm', 325000, 'Ukuran: 46 x 35 x 2 cm.'],
      ['ClcFRSfnd9RsTsMXYy49O4tqzjbhpR5A9syBmFHh.jpg', 'Solar Panel OS-P36-50 Watt Poly 67 x 54 x 3 cm', 475000, 'Ukuran: 67 x 54 x 3 cm.'],
      ['uvnJ7rKUVpJDJqf8RUxVnho7EEvt5J6jT3JBI2Qu.jpg', 'Solar Panel OS-36-100 Watt Poly 120 x 54 x 3 cm', 900000, 'Solar Panel Poly 120 x 54 x 3 cm.'],
      ['epNz7jcnJH34Bn6QLbv8x2imtmpzFGmUqtsY004l.jpg', 'Solar Panel OS-P36-160 Watt Poly 148 x 68 x 3,5 cm', 1300000, 'Solar Panel OS-P36-160 Watt Poly 148 x 68 x 3,5 cm.'],
      ['CI8fQPMZwmQf6xh9f6ZiD1tm7kvmgn71xLvXsBir.jpg', 'Solar Panel OS-P72-220 Watt Poly 133 x 99,2 x 3,5 cm', 1695000, 'Solar Panel OS-P72-220 Watt Poly 133 x 99,2 x 3,5 cm.'],
      ['yKm2WvAP1Zm06SyEE1j4KcO9ha2OVR0KpAZ3c9Ld.jpg', 'Genset diesel 5000 watt silent General Power', 14500000, 'Genset diesel 5000 watt silent, General Power.'],
    ],
  },
  {
    id: 'komponenac', title: 'Komponen AC',
    items: [
      ['ZRCYdpyh2QynkANFBG6z6ibQxqDWlYaltrnA8idQ.jpg', 'Flexibel duct 4inch x 10m', 290000, 'Diameter: 4inch x 10m.'],
      ['aFG4JHMKPov9ObIjPSzE7yAyK5FXaLRTAVu6gfD5.jpg', 'Flexibel duct 6inch x 10m', 340000, 'Diameter: 6inch x 10m.'],
      ['yKBDYooBQdmpEtym2lndc5zB7HgE0QMpsjFtbgyS.jpg', 'Flexibel duct 8inch x 10m', 580000, 'Diameter: 8inch x 10m.'],
      ['g1SJdNFYJ5UvWcpd7362oJ6mOoyXhnZ78v6cxTSR.jpg', 'Freon Refrigerant R 32 9,5 Kg', 1850000, 'Freon Refrigerant R 32 untuk 9,5 Kg. Tahun rilis: 2023. Garansi distributor.'],
      ['LKF8jO00jVBWCbNKmI9FXRl4OapWE0KFhJTfXAH2.jpg', 'Freon Refrigerant R 22 13,6 Kg', 1400000, 'Freon Refrigerant R 22 13,6 Kg. Tahun rilis: 2022.'],
      ['QJWIYv507kaeHEDG0bYZUmewlmuZueMQQMoZ9ND0.jpg', 'Freon Refrigerant 404 A 10,9 Kg', 1250000, 'Freon Refrigerant 404 A 10,9 Kg. Tahun rilis: 2022.'],
      ['ECHsVjxvs5mWgJ8mUI33WTxgnbxpL1zPT6Yke81p.jpg', 'Grill AC Gedung 12cm x 70cm second 100 persen Alumunium', 220000, 'Grill AC untuk gedung, kantor, ukuran lubang AC 12 cm x 70 cm. Barang second tapi bagus dan 100 persen alumunium tidak berkarat.'],
    ],
  },
  {
    id: 'tangkibbm', title: 'Tangki BBM',
    items: [
      ['A4pbl1oVKh0nxmO8YMEngKbMhUtO9msdWuOmp4EU.jpg', 'Tangki Bensin/Solar bahan Besi 10 Liter', 575000, 'Tangki bensin 10 liter terbuat dari metal alu dan besi bahan campuran bagus.'],
      ['WvDv79fWgcLbSa9qqOozIzfm9VHGjZQdNPwkD3Ou.jpg', 'Tangki Bensin/Solar untuk Offroad atau Mobil jarak jauh 20 Liter', 825000, 'Tangki cadangan untuk bensin/solar 20 liter, hemat tempat dan kualitas bagus untuk offroad dan berkendara jarak jauh tanpa khawatir kehabisan solar atau bensin.'],
      ['VewWwD61LoBo0IOmbf2c5Uexy4wc7XusxCcO8xBN.jpg', 'Tangki Bensin/Solar 20 liter Jeep dll berkualitas warna Merah', 890000, 'Tangki alu dan metal berkualitas untuk 20 liter bensin/solar.'],
      ['bsDOC5Ng83aQpQqet0q4LDzYaoe3vU6UeSrC6pxc.jpg', 'Tangki Bensin/Solar 20 liter Jeep dll berkualitas warna Hijau army', 890000, 'Tangki alu dan metal 20 liter berkualitas untuk bensin/solar.'],
    ],
  },
  {
    id: 'poliken', title: 'Poliken (Pipe Line Insulation)',
    items: [
      ['LwAW9SL0kaAU843d2UgcfrktNj1wZMh2GBPATfAK.jpg', 'Poliken 2inch x 30m (Putih)', 75000, 'Diameter: 2inch x 30m.'],
      ['pcDQJOOvs6kqNzqnBJO0hIbgm0SgPV9TTCbfICWV.jpg', 'Poliken 2inch x 30m (Hitam)', 75000, 'Diameter: 2inch x 30m.'],
      ['KlBkzJ3ne044JxKF4sIHOPDH6WeTff90BQHiyFFv.jpg', 'Poliken 4inch x 30m (Putih)', 150000, 'Diameter: 4inch x 30m.'],
      ['Ss3evH6JZ1FTpHISQh65Zg98ENNcCi2Dfbuja7cS.jpg', 'Poliken 4inch x 30m (Hitam)', 150000, 'Diameter: 4inch x 30m.'],
      ['irx0eDeeKq97hcnRUASiQiqLyGBUplqqSlF5VI4t.jpg', 'Poliken 6inch x 30m (Putih)', 225000, 'Diameter: 6inch x 30m.'],
      ['gEEXqAHNQo7Zi17LRVIkGIcdBJzNrhGOgJwPcJYz.jpg', 'Poliken 6inch x 30m (Hitam)', 225000, 'Diameter: 6inch x 30m.'],
    ],
  },
  produkLain,
];

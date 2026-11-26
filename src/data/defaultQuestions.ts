import { Question } from '../types';

export const INITIAL_QUESTIONS: Question[] = [
  // =========================================================================
  // A. PILIHAN GANDA (25 SOAL: No. 1 - 25)
  // =========================================================================
  {
    id: 1,
    type: 'pg',
    topic: 'Membilang 1-50',
    difficulty: 'Mudah',
    text: 'Perhatikan gambar kumpulan pensil di bawah ini! Setiap satu ikat berisi 10 batang pensil. Berapakah jumlah seluruh pensil pada gambar?',
    visual: {
      kind: 'tens_ones',
      itemType: 'pencil',
      tens: 3,
      ones: 6,
      caption: '3 ikat pensil (isi 10) dan 6 pensil satuan',
    },
    options: [
      { id: 'A', text: '33 batang' },
      { id: 'B', text: '36 batang' },
      { id: 'C', text: '39 batang' },
      { id: 'D', text: '46 batang' },
    ],
    correctAnswer: 'B',
    explanation:
      'Ada 3 ikat pensil puluhan = 30 batang.\nDitambah 6 pensil satuan = 6 batang.\nTotal pensil = 30 + 6 = 36 batang.',
  },
  {
    id: 2,
    type: 'pg',
    topic: 'Membilang 1-50',
    difficulty: 'Mudah',
    text: 'Lambang bilangan dari "empat puluh tujuh" adalah...',
    options: [
      { id: 'A', text: '40' },
      { id: 'B', text: '45' },
      { id: 'C', text: '47' },
      { id: 'D', text: '74' },
    ],
    correctAnswer: 'C',
    explanation:
      '"Empat puluh" bernilai 40 (angka puluhan 4) dan "tujuh" bernilai 7 (angka satuan 7), sehingga ditulis 47.',
  },
  {
    id: 3,
    type: 'pg',
    topic: 'Membilang 1-50',
    difficulty: 'Mudah',
    text: 'Perhatikan gambar susunan kubus puluhan dan kubus satuan berikut. Bilangan yang ditunjukkan oleh seluruh kubus adalah...',
    visual: {
      kind: 'tens_ones',
      itemType: 'cube',
      tens: 4,
      ones: 3,
      caption: '4 batang puluhan (40) dan 3 kubus satuan',
    },
    options: [
      { id: 'A', text: '34' },
      { id: 'B', text: '40' },
      { id: 'C', text: '43' },
      { id: 'D', text: '48' },
    ],
    correctAnswer: 'C',
    explanation:
      'Setiap batang biru terdiri dari 10 kubus.\n4 batang puluhan = 40.\n3 kubus satuan hijau = 3.\nJadi bilangan yang ditunjukkan adalah 40 + 3 = 43.',
  },
  {
    id: 4,
    type: 'pg',
    topic: 'Membilang 1-50',
    difficulty: 'Mudah',
    text: 'Pada bilangan 39, angka 3 menempati nilai tempat...',
    options: [
      { id: 'A', text: 'Puluhan' },
      { id: 'B', text: 'Satuan' },
      { id: 'C', text: 'Ratusan' },
      { id: 'D', text: 'Ribuan' },
    ],
    correctAnswer: 'A',
    explanation:
      'Pada bilangan dua angka 39, angka di sebelah kiri (3) menempati nilai tempat puluhan (bernilai 30), sedangkan angka 9 menempati nilai tempat satuan.',
  },
  {
    id: 5,
    type: 'pg',
    topic: 'Membilang 1-50',
    difficulty: 'Sedang',
    text: 'Perhatikan gambar buah jeruk dan buah apel berikut! Pernyataan perbandingan yang paling tepat berdasarkan gambar adalah...',
    visual: {
      kind: 'compare_groups',
      left: { label: 'Keranjang Jeruk', tens: 2, ones: 8, item: 'orange' },
      right: { label: 'Keranjang Apel', tens: 3, ones: 2, item: 'apple' },
    },
    options: [
      { id: 'A', text: 'Jeruk lebih banyak daripada apel (28 > 32)' },
      { id: 'B', text: 'Jeruk lebih sedikit daripada apel (28 < 32)' },
      { id: 'C', text: 'Jeruk sama banyak dengan apel (28 = 32)' },
      { id: 'D', text: 'Apel lebih sedikit daripada jeruk (32 < 28)' },
    ],
    correctAnswer: 'B',
    explanation:
      'Banyak jeruk = 2 puluhan + 8 satuan = 28 buah.\nBanyak apel = 3 puluhan + 2 satuan = 32 buah.\nKarena 28 lebih kecil daripada 32, maka jeruk lebih sedikit daripada apel (28 < 32).',
  },
  {
    id: 6,
    type: 'pg',
    topic: 'Membilang 1-50',
    difficulty: 'Sedang',
    text: 'Perhatikan empat kartu angka berikut: 34, 29, 41, 25. Urutan bilangan tersebut dari yang paling kecil ke yang paling besar adalah...',
    options: [
      { id: 'A', text: '25, 34, 29, 41' },
      { id: 'B', text: '41, 34, 29, 25' },
      { id: 'C', text: '29, 25, 34, 41' },
      { id: 'D', text: '25, 29, 34, 41' },
    ],
    correctAnswer: 'D',
    explanation:
      'Bandingkan puluhannya lebih dulu, lalu satuannya.\nUrutan dari yang paling kecil ke terbesar adalah: 25, 29, 34, 41.',
  },
  {
    id: 7,
    type: 'pg',
    topic: 'Penjumlahan 1-50',
    difficulty: 'Mudah',
    text: 'Perhatikan gambar bintang biru dan bintang kuning di bawah ini. Berapakah jumlah seluruh bintang jika digabungkan?',
    visual: {
      kind: 'addition_groups',
      leftCount: 15,
      leftLabel: '15 Bintang Biru',
      rightCount: 12,
      rightLabel: '12 Bintang Kuning',
      icon: 'star',
    },
    options: [
      { id: 'A', text: '25 bintang' },
      { id: 'B', text: '26 bintang' },
      { id: 'C', text: '27 bintang' },
      { id: 'D', text: '28 bintang' },
    ],
    correctAnswer: 'C',
    explanation:
      'Jumlah seluruh bintang = 15 + 12 = 27 bintang.',
  },
  {
    id: 8,
    type: 'pg',
    topic: 'Penjumlahan 1-50',
    difficulty: 'Mudah',
    text: 'Hasil penjumlahan dari 23 + 15 adalah...',
    options: [
      { id: 'A', text: '37' },
      { id: 'B', text: '38' },
      { id: 'C', text: '39' },
      { id: 'D', text: '48' },
    ],
    correctAnswer: 'B',
    explanation:
      'Jumlahkan satuan: 3 + 5 = 8.\nJumlahkan puluhan: 20 + 10 = 30.\nJadi 23 + 15 = 38.',
  },
  {
    id: 9,
    type: 'pg',
    topic: 'Penjumlahan 1-50',
    difficulty: 'Sedang',
    text: 'Di rak perpustakaan kelas II ada 27 buku cerita dan 16 buku bergambar. Berapa jumlah seluruh buku di rak tersebut?',
    options: [
      { id: 'A', text: '33 buku' },
      { id: 'B', text: '41 buku' },
      { id: 'C', text: '42 buku' },
      { id: 'D', text: '43 buku' },
    ],
    correctAnswer: 'D',
    explanation:
      '27 + 16:\nSatuan: 7 + 6 = 13 (tulis 3, simpan 1 puluhan).\nPuluhan: 1 + 2 + 1 = 4.\nJadi jumlah seluruh buku adalah 43 buku.',
  },
  {
    id: 10,
    type: 'pg',
    topic: 'Pengurangan 1-50',
    difficulty: 'Mudah',
    text: 'Ibu membuat 24 kue donat. Sebanyak 9 kue donat sudah dimakan (ditandai silang merah). Berapa sisa kue donat yang belum dimakan?',
    visual: {
      kind: 'subtraction_cross',
      total: 24,
      crossCount: 9,
      itemLabel: '24 Kue Donat',
      icon: 'donut',
    },
    options: [
      { id: 'A', text: '14 kue' },
      { id: 'B', text: '15 kue' },
      { id: 'C', text: '16 kue' },
      { id: 'D', text: '17 kue' },
    ],
    correctAnswer: 'B',
    explanation:
      'Jumlah donat mula-mula = 24.\nDonat yang dimakan (disilang) = 9.\nSisa donat = 24 - 9 = 15 kue.',
  },
  {
    id: 11,
    type: 'pg',
    topic: 'Pengurangan 1-50',
    difficulty: 'Mudah',
    text: 'Hasil pengurangan dari 48 - 16 adalah...',
    options: [
      { id: 'A', text: '32' },
      { id: 'B', text: '34' },
      { id: 'C', text: '22' },
      { id: 'D', text: '33' },
    ],
    correctAnswer: 'A',
    explanation:
      'Kurangkan satuan: 8 - 6 = 2.\nKurangkan puluhan: 4 - 1 = 3.\nJadi 48 - 16 = 32.',
  },
  {
    id: 12,
    type: 'pg',
    topic: 'Pengurangan 1-50',
    difficulty: 'Sedang',
    text: 'Made memiliki 42 kelereng. Ia memberikan 17 kelereng kepada adiknya. Sisa kelereng Made sekarang adalah...',
    options: [
      { id: 'A', text: '23 kelereng' },
      { id: 'B', text: '24 kelereng' },
      { id: 'C', text: '25 kelereng' },
      { id: 'D', text: '35 kelereng' },
    ],
    correctAnswer: 'C',
    explanation:
      '42 - 17:\nPinjam 1 puluhan dari 40 sehingga 12 - 7 = 5.\nSisa puluhan 3 - 1 = 2.\nJadi sisa kelereng Made adalah 25 kelereng.',
  },
  {
    id: 13,
    type: 'pg',
    topic: 'Penjumlahan & Pengurangan 1-50',
    difficulty: 'Sukar',
    text: 'Di dalam keranjang ada 35 buah mangga. Sebanyak 12 buah mangga terjual, lalu Ibu memasukkan lagi 8 buah mangga. Banyak mangga di keranjang sekarang adalah...',
    options: [
      { id: 'A', text: '29 buah' },
      { id: 'B', text: '31 buah' },
      { id: 'C', text: '33 buah' },
      { id: 'D', text: '39 buah' },
    ],
    correctAnswer: 'B',
    explanation:
      'Mula-mula = 35 mangga.\nTerjual 12 -> 35 - 12 = 23 mangga.\nDitambah 8 lagi -> 23 + 8 = 31 buah.',
  },
  {
    id: 14,
    type: 'pg',
    topic: 'Pola Bilangan',
    difficulty: 'Mudah',
    text: 'Perhatikan pola bilangan pada gerbong kereta berikut ini! Bilangan yang tepat untuk mengisi kotak tanda tanya (?) adalah...',
    visual: {
      kind: 'number_pattern',
      items: [4, 8, 12, 16, null],
      style: 'train',
      caption: 'Pola Bilangan Bertambah Teratur',
    },
    options: [
      { id: 'A', text: '18' },
      { id: 'B', text: '19' },
      { id: 'C', text: '20' },
      { id: 'D', text: '24' },
    ],
    correctAnswer: 'C',
    explanation:
      'Dari 4 ke 8 bertambah 4.\nDari 8 ke 12 bertambah 4.\nDari 12 ke 16 bertambah 4.\nMaka bilangan berikutnya = 16 + 4 = 20.',
  },
  {
    id: 15,
    type: 'pg',
    topic: 'Pola Bilangan',
    difficulty: 'Sedang',
    text: 'Perhatikan barisan bilangan berikut: 11, 14, 17, ..., 23. Bilangan yang tepat untuk mengisi titik-titik tersebut adalah...',
    options: [
      { id: 'A', text: '19' },
      { id: 'B', text: '20' },
      { id: 'C', text: '21' },
      { id: 'D', text: '22' },
    ],
    correctAnswer: 'B',
    explanation:
      'Setiap langkah pada barisan bilangan tersebut bertambah 3 (11 + 3 = 14, 14 + 3 = 17).\nMaka setelah 17 adalah 17 + 3 = 20 (dan 20 + 3 = 23).',
  },
  {
    id: 16,
    type: 'pg',
    topic: 'Pola Bilangan',
    difficulty: 'Sedang',
    text: 'Perhatikan barisan bilangan menurun berikut: 45, 40, 35, 30, ... Bilangan selanjutnya pada pola tersebut adalah...',
    options: [
      { id: 'A', text: '25' },
      { id: 'B', text: '26' },
      { id: 'C', text: '20' },
      { id: 'D', text: '35' },
    ],
    correctAnswer: 'A',
    explanation:
      'Setiap langkah berkurang 5 (45 - 5 = 40, 40 - 5 = 35, 35 - 5 = 30).\nJadi bilangan berikutnya = 30 - 5 = 25.',
  },
  {
    id: 17,
    type: 'pg',
    topic: 'Pola Bilangan',
    difficulty: 'Sedang',
    text: 'Diketahui pola bilangan: 21, 23, 25, 27, ..., ... Dua bilangan berikutnya secara berurutan adalah...',
    options: [
      { id: 'A', text: '28 dan 29' },
      { id: 'B', text: '28 dan 30' },
      { id: 'C', text: '30 dan 32' },
      { id: 'D', text: '29 dan 31' },
    ],
    correctAnswer: 'D',
    explanation:
      'Pola bilangan bertambah 2 (loncat 2): 21, 23, 25, 27.\nDua bilangan berikutnya adalah 27 + 2 = 29, lalu 29 + 2 = 31.',
  },
  {
    id: 18,
    type: 'pg',
    topic: 'Pola Suara',
    difficulty: 'Mudah',
    text: 'Perhatikan gambar pola suara tepuk tangan (Prok) dan ketukan meja (Duk) berikut! Bunyi yang tepat untuk mengisi kotak tanda tanya (?) adalah...',
    visual: {
      kind: 'sound_pattern',
      tokens: [
        { type: 'clap', label: 'Prok' },
        { type: 'clap', label: 'Prok' },
        { type: 'drum', label: 'Duk' },
        { type: 'clap', label: 'Prok' },
        { type: 'clap', label: 'Prok' },
        { type: 'drum', label: 'Duk' },
        { type: 'clap', label: 'Prok' },
        { type: 'unknown', label: '?' },
        { type: 'drum', label: 'Duk' },
      ],
      caption: 'Ulangi pola: Prok - Prok - Duk',
    },
    options: [
      { id: 'A', text: 'Prok (tepuk tangan)' },
      { id: 'B', text: 'Duk (ketukan meja)' },
      { id: 'C', text: 'Kring (bunyi bel)' },
      { id: 'D', text: 'Prit (bunyi peluit)' },
    ],
    correctAnswer: 'A',
    explanation:
      'Polanya berulang setiap 3 bunyi yaitu: Prok - Prok - Duk.\nPada kelompok ketiga sudah ada "Prok" dan di akhir ada "Duk", sehingga yang kosong adalah "Prok (tepuk tangan)".',
  },
  {
    id: 19,
    type: 'pg',
    topic: 'Pola Suara',
    difficulty: 'Mudah',
    text: 'Putu menirukan suara hewan secara berulang: "Meong - Guk - Cit - Meong - Guk - Cit - Meong - ..." Suara berikutnya yang diucapkan Putu adalah...',
    options: [
      { id: 'A', text: 'Meong' },
      { id: 'B', text: 'Guk' },
      { id: 'C', text: 'Cit' },
      { id: 'D', text: 'Kukuruyuk' },
    ],
    correctAnswer: 'B',
    explanation:
      'Pola suara berulang: Meong -> Guk -> Cit.\nSetelah "Meong", suara berikutnya adalah "Guk".',
  },
  {
    id: 20,
    type: 'pg',
    topic: 'Pola Suara',
    difficulty: 'Sedang',
    text: 'Dalam latihan musik, siswa membunyikan pola: "Ting - Tong - Tong - Ting - Tong - Tong". Jika pola tersebut dilanjutkan, bunyi ke-7 dan ke-8 secara berurutan adalah...',
    options: [
      { id: 'A', text: 'Tong - Tong' },
      { id: 'B', text: 'Tong - Ting' },
      { id: 'C', text: 'Ting - Tong' },
      { id: 'D', text: 'Ting - Ting' },
    ],
    correctAnswer: 'C',
    explanation:
      'Pola berulang setiap 3 ketukan: (1) Ting, (2) Tong, (3) Tong, (4) Ting, (5) Tong, (6) Tong.\nMaka bunyi ke-7 = Ting dan bunyi ke-8 = Tong.',
  },
  {
    id: 21,
    type: 'pg',
    topic: 'Pola Suara',
    difficulty: 'Sedang',
    text: 'Perhatikan gambar pola suara lonceng (Kring) dan peluit (Prit) di bawah ini! Jika pola dilanjutkan, bunyi yang menggantikan tanda tanya (?) pada urutan ke-7 adalah...',
    visual: {
      kind: 'sound_pattern',
      tokens: [
        { type: 'bell', label: 'Kring' },
        { type: 'whistle', label: 'Prit' },
        { type: 'whistle', label: 'Prit' },
        { type: 'bell', label: 'Kring' },
        { type: 'whistle', label: 'Prit' },
        { type: 'whistle', label: 'Prit' },
        { type: 'unknown', label: '?' },
      ],
      caption: 'Urutan suara ke-1 sampai ke-7',
    },
    options: [
      { id: 'A', text: 'Kring (lonceng)' },
      { id: 'B', text: 'Prit (peluit)' },
      { id: 'C', text: 'Prok (tepuk tangan)' },
      { id: 'D', text: 'Duk (ketukan)' },
    ],
    correctAnswer: 'A',
    explanation:
      'Pola berulang setiap 3 bunyi: Kring - Prit - Prit.\nSetelah urutan ke-6 (Prit), maka urutan ke-7 kembali ke awal pola yaitu "Kring (lonceng)".',
  },
  {
    id: 22,
    type: 'pg',
    topic: 'Pola Bentuk',
    difficulty: 'Mudah',
    text: 'Perhatikan gambar barisan bangun datar berwarna di bawah ini! Bentuk yang tepat untuk mengisi tanda tanya (?) adalah...',
    visual: {
      kind: 'shape_pattern',
      items: [
        { shape: 'triangle', color: '#EF4444' },
        { shape: 'circle', color: '#3B82F6' },
        { shape: 'square', color: '#FACC15' },
        { shape: 'triangle', color: '#EF4444' },
        { shape: 'circle', color: '#3B82F6' },
        { shape: 'unknown', color: '#F59E0B' },
      ],
      caption: 'Lengkapi pola bentuk bangun datar',
    },
    options: [
      { id: 'A', text: 'Segitiga Merah' },
      { id: 'B', text: 'Lingkaran Biru' },
      { id: 'C', text: 'Persegi Kuning' },
      { id: 'D', text: 'Bintang Hijau' },
    ],
    correctAnswer: 'C',
    explanation:
      'Polanya berulang: Segitiga Merah -> Lingkaran Biru -> Persegi Kuning.\nSetelah Lingkaran Biru, bentuk berikutnya adalah Persegi Kuning.',
  },
  {
    id: 23,
    type: 'pg',
    topic: 'Pola Bentuk',
    difficulty: 'Mudah',
    text: 'Perhatikan gambar pola ukuran bintang berikut! Gambar bintang yang tepat untuk mengisi bagian tanda tanya (?) adalah...',
    visual: {
      kind: 'shape_pattern',
      items: [
        { shape: 'star', color: '#FACC15', size: 'large', label: 'Besar' },
        { shape: 'star', color: '#FACC15', size: 'small', label: 'Kecil' },
        { shape: 'star', color: '#FACC15', size: 'large', label: 'Besar' },
        { shape: 'star', color: '#FACC15', size: 'small', label: 'Kecil' },
        { shape: 'star', color: '#FACC15', size: 'large', label: 'Besar' },
        { shape: 'unknown', color: '#F59E0B', label: '?' },
      ],
      caption: 'Pola ukuran Besar dan Kecil',
    },
    options: [
      { id: 'A', text: 'Bintang Besar' },
      { id: 'B', text: 'Bintang Kecil' },
      { id: 'C', text: 'Lingkaran Besar' },
      { id: 'D', text: 'Persegi Kecil' },
    ],
    correctAnswer: 'B',
    explanation:
      'Polanya bergantian antara Bintang Besar dan Bintang Kecil.\nKarena gambar ke-5 adalah Bintang Besar, maka gambar ke-6 adalah Bintang Kecil.',
  },
  {
    id: 24,
    type: 'pg',
    topic: 'Pola Bentuk',
    difficulty: 'Sedang',
    text: 'Perhatikan pola bentuk pada gambar di bawah ini. Bangun yang tepat untuk mengisi kotak tanda tanya (?) adalah...',
    visual: {
      kind: 'shape_pattern',
      items: [
        { shape: 'triangle', color: '#10B981' },
        { shape: 'triangle', color: '#10B981' },
        { shape: 'circle', color: '#EC4899' },
        { shape: 'triangle', color: '#10B981' },
        { shape: 'triangle', color: '#10B981' },
        { shape: 'circle', color: '#EC4899' },
        { shape: 'triangle', color: '#10B981' },
        { shape: 'triangle', color: '#10B981' },
        { shape: 'unknown', color: '#F59E0B' },
      ],
      caption: 'Amati pengulangan dua segitiga lalu satu lingkaran',
    },
    options: [
      { id: 'A', text: 'Segitiga Hijau' },
      { id: 'B', text: 'Persegi Biru' },
      { id: 'C', text: 'Bintang Kuning' },
      { id: 'D', text: 'Lingkaran Merah Muda' },
    ],
    correctAnswer: 'D',
    explanation:
      'Polanya terdiri dari 2 Segitiga Hijau diikuti 1 Lingkaran Merah Muda.\nSetelah 2 Segitiga Hijau, bentuk yang hilang adalah Lingkaran Merah Muda.',
  },
  {
    id: 25,
    type: 'pg',
    topic: 'Pola Bentuk',
    difficulty: 'Sukar',
    text: 'Siswa kelas II menghias kelas dengan rangkaian bendera berbentuk: Segitiga, Persegi, Lingkaran, Segitiga, Persegi, Lingkaran. Jika pola diteruskan, bentuk bendera pada urutan ke-8 adalah...',
    options: [
      { id: 'A', text: 'Segitiga' },
      { id: 'B', text: 'Persegi' },
      { id: 'C', text: 'Lingkaran' },
      { id: 'D', text: 'Bintang' },
    ],
    correctAnswer: 'B',
    explanation:
      'Urutan bendera:\n1: Segitiga, 2: Persegi, 3: Lingkaran,\n4: Segitiga, 5: Persegi, 6: Lingkaran,\n7: Segitiga, 8: Persegi.\nJadi bendera urutan ke-8 berbentuk Persegi.',
  },

  // =========================================================================
  // B. PILIHAN GANDA KOMPLEKS / PGK (3 SOAL: No. 26 - 28)
  // Setiap soal memiliki 3 pilihan jawaban, kemungkinan >1 jawaban benar
  // =========================================================================
  {
    id: 26,
    type: 'pgk',
    topic: 'Membilang 1-50',
    difficulty: 'Sedang',
    text: 'Perhatikan gambar susunan kubus puluhan dan kubus satuan di bawah ini. Pilihlah SEMUA pernyataan yang BENAR mengenai gambar tersebut! (Pilihan benar bisa lebih dari satu)',
    visual: {
      kind: 'tens_ones',
      itemType: 'cube',
      tens: 3,
      ones: 8,
      caption: '3 batang puluhan dan 8 kubus satuan',
    },
    options: [
      { id: 'A', text: 'Banyak seluruh kubus pada gambar adalah 38 buah' },
      { id: 'B', text: 'Angka 3 pada bilangan tersebut bernilai 30 (tiga puluhan)' },
      { id: 'C', text: 'Bilangan yang ditunjukkan gambar lebih besar daripada 40' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      '3 batang puluhan = 30 dan 8 kubus satuan = 8, sehingga jumlah kubus = 38 (A Benar).\nAngka 3 menempati nilai tempat puluhan sehingga bernilai 30 (B Benar).\n38 lebih kecil daripada 40 (C Salah).',
  },
  {
    id: 27,
    type: 'pgk',
    topic: 'Penjumlahan & Pengurangan 1-50',
    difficulty: 'Sedang',
    text: 'Diketahui dua buah bilangan yaitu 28 dan 14. Pilihlah SEMUA pernyataan hitung yang bernilai BENAR! (Pilihan benar bisa lebih dari satu)',
    options: [
      { id: 'A', text: 'Hasil penjumlahan 28 + 14 adalah 42' },
      { id: 'B', text: 'Selisih antara 28 dan 14 adalah 14' },
      { id: 'C', text: 'Hasil penjumlahan 28 + 14 lebih besar daripada 45' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      '1. 28 + 14 = 42 (A Benar).\n2. Selisih 28 - 14 = 14 (B Benar).\n3. 42 lebih kecil dari 45, bukan lebih besar (C Salah).',
  },
  {
    id: 28,
    type: 'pgk',
    topic: 'Pola Bentuk & Pola Suara',
    difficulty: 'Sukar',
    text: 'Perhatikan gambar pola bentuk berikut dan ingat kembali pola suara "Prok - Duk - Prok - Duk". Pilihlah SEMUA pernyataan yang BENAR! (Pilihan benar bisa lebih dari satu)',
    visual: {
      kind: 'shape_pattern',
      items: [
        { shape: 'star', color: '#FACC15' },
        { shape: 'heart', color: '#EF4444' },
        { shape: 'circle', color: '#3B82F6' },
        { shape: 'star', color: '#FACC15' },
        { shape: 'heart', color: '#EF4444' },
        { shape: 'circle', color: '#3B82F6' },
        { shape: 'star', color: '#FACC15' },
        { shape: 'heart', color: '#EF4444' },
        { shape: 'unknown', color: '#F59E0B' },
      ],
      caption: 'Urutan bentuk ke-1 sampai ke-9',
    },
    options: [
      { id: 'A', text: 'Bentuk pada urutan ke-7 pada gambar adalah Bintang' },
      { id: 'B', text: 'Bentuk yang tepat untuk mengisi tanda tanya (?) adalah Lingkaran' },
      { id: 'C', text: 'Pada pola suara "Prok - Duk - Prok - Duk", bunyi urutan ke-6 adalah "Duk"' },
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation:
      '1. Urutan ke-7 pada gambar adalah Bintang (A Benar).\n2. Pola berulang Bintang - Hati - Lingkaran, sehingga urutan ke-9 (?) adalah Lingkaran (B Benar).\n3. Pola suara Prok (1) - Duk (2) - Prok (3) - Duk (4) - Prok (5) - Duk (6), jadi bunyi ke-6 adalah Duk (C Benar).',
  },

  // =========================================================================
  // C. PILIHAN GANDA KOMPLEKS KATEGORI (9 SOAL: No. 29 - 37)
  // Setiap soal memiliki 3 pernyataan yang harus direspons Benar / Salah
  // =========================================================================
  {
    id: 29,
    type: 'pgk_kategori',
    topic: 'Membilang 1-50',
    difficulty: 'Mudah',
    text: 'Perhatikan gambar kumpulan pensil milik Komang di bawah ini! Tentukan kebenaran dari setiap pernyataan berikut (Pilih Benar atau Salah):',
    visual: {
      kind: 'tens_ones',
      itemType: 'pencil',
      tens: 4,
      ones: 5,
      caption: '4 ikat pensil (isi 10) dan 5 pensil satuan',
    },
    statements: [
      {
        id: 's1',
        text: 'Jumlah seluruh pensil pada gambar adalah 45 batang.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Nama bilangan dari jumlah pensil tersebut adalah "empat puluh lima".',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Angka 5 pada bilangan 45 menempati nilai tempat puluhan.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. 4 ikat puluhan (40) + 5 satuan = 45 batang (BENAR).\n2. 45 dibaca "empat puluh lima" (BENAR).\n3. Angka 5 menempati nilai tempat satuan, sedangkan angka 4 menempati puluhan (SALAH).',
  },
  {
    id: 30,
    type: 'pgk_kategori',
    topic: 'Membilang 1-50',
    difficulty: 'Sedang',
    text: 'Diberikan tiga buah kartu bilangan: 29, 44, dan 35. Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Bilangan yang paling besar di antara ketiga kartu tersebut adalah 44.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Bilangan 35 lebih kecil daripada bilangan 29.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Urutan bilangan dari yang paling kecil ke terbesar adalah 29, 35, 44.',
        correctAnswer: true,
      },
    ],
    explanation:
      '1. Di antara 29, 44, dan 35, bilangan terbesar adalah 44 (BENAR).\n2. 35 lebih besar daripada 29, bukan lebih kecil (SALAH).\n3. Urutan dari terkecil ke terbesar adalah 29, 35, 44 (BENAR).',
  },
  {
    id: 31,
    type: 'pgk_kategori',
    topic: 'Penjumlahan 1-50',
    difficulty: 'Sedang',
    text: 'Perhatikan gambar koleksi stiker milik Dayu di bawah ini! Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    visual: {
      kind: 'addition_groups',
      leftCount: 18,
      leftLabel: '18 Stiker Bintang Biru',
      rightCount: 16,
      rightLabel: '16 Stiker Senyum Kuning',
      icon: 'sticker',
    },
    statements: [
      {
        id: 's1',
        text: 'Banyak stiker bintang biru adalah 18 dan stiker senyum kuning adalah 16.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Jumlah seluruh stiker bintang dan stiker senyum adalah 34 buah.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Jumlah seluruh stiker Dayu lebih dari 40 buah.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Sesuai gambar terdapat 18 bintang biru dan 16 stiker senyum kuning (BENAR).\n2. Total stiker = 18 + 16 = 34 buah (BENAR).\n3. 34 kurang dari 40 (SALAH).',
  },
  {
    id: 32,
    type: 'pgk_kategori',
    topic: 'Pengurangan 1-50',
    difficulty: 'Sedang',
    text: 'Ibu guru membawa 46 kue lemper ke kelas. Sebanyak 19 kue lemper dibagikan kepada siswa kelas II. Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Kalimat matematika untuk menghitung sisa kue adalah 46 - 19.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Sisa kue lemper yang belum dibagikan adalah 27 buah.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Sisa kue lemper lebih sedikit daripada kue yang sudah dibagikan.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Menghitung sisa menggunakan pengurangan: 46 - 19 (BENAR).\n2. 46 - 19 = 27 buah (BENAR).\n3. Sisa kue 27 lebih banyak daripada yang dibagikan (19), bukan lebih sedikit (SALAH).',
  },
  {
    id: 33,
    type: 'pgk_kategori',
    topic: 'Penjumlahan & Pengurangan 1-50',
    difficulty: 'Sukar',
    text: 'Di dalam kotak pertama terdapat 18 spidol dan di kotak kedua terdapat 24 spidol. Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Jumlah spidol di kedua kotak seluruhnya adalah 42 spidol.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Selisih banyak spidol di kotak kedua dan kotak pertama adalah 6 spidol.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Jika 10 spidol digunakan, sisa spidol seluruhnya menjadi 30 spidol.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Jumlah spidol = 18 + 24 = 42 spidol (BENAR).\n2. Selisih = 24 - 18 = 6 spidol (BENAR).\n3. Jika 10 digunakan: 42 - 10 = 32 spidol, bukan 30 (SALAH).',
  },
  {
    id: 34,
    type: 'pgk_kategori',
    topic: 'Pola Bilangan',
    difficulty: 'Mudah',
    text: 'Perhatikan gambar urutan kartu bilangan berpola di bawah ini! Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    visual: {
      kind: 'number_pattern',
      items: [5, 10, 15, 20, null, 30, 35],
      style: 'cards',
      caption: 'Kartu pola bilangan berurutan',
    },
    statements: [
      {
        id: 's1',
        text: 'Pola bilangan pada gambar selalu bertambah 5 setiap langkahnya.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Bilangan yang tepat untuk mengisi kartu tanda tanya (?) adalah 25.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Bilangan yang muncul tepat setelah angka 35 adalah 45.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. 5 -> 10 -> 15 -> 20 bertambah 5 tiap langkah (BENAR).\n2. Setelah 20 adalah 20 + 5 = 25 (BENAR).\n3. Setelah 35 adalah 35 + 5 = 40, bukan 45 (SALAH).',
  },
  {
    id: 35,
    type: 'pgk_kategori',
    topic: 'Pola Bilangan',
    difficulty: 'Sedang',
    text: 'Perhatikan barisan pola bilangan menurun berikut: 40, 36, 32, 28, ... Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Bilangan pada pola tersebut selalu berkurang 4.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Bilangan tepat setelah 28 adalah 24.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Bilangan berikutnya setelah 24 adalah 22.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. 40 - 4 = 36, 36 - 4 = 32, 32 - 4 = 28 (BENAR).\n2. Setelah 28 adalah 28 - 4 = 24 (BENAR).\n3. Setelah 24 adalah 24 - 4 = 20, bukan 22 (SALAH).',
  },
  {
    id: 36,
    type: 'pgk_kategori',
    topic: 'Pola Suara',
    difficulty: 'Sedang',
    text: 'Perhatikan gambar pola suara tepuk tangan dan ketukan drum di bawah ini! Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    visual: {
      kind: 'sound_pattern',
      tokens: [
        { type: 'clap', label: 'Prok' },
        { type: 'clap', label: 'Prok' },
        { type: 'drum', label: 'Duk' },
        { type: 'clap', label: 'Prok' },
        { type: 'clap', label: 'Prok' },
        { type: 'drum', label: 'Duk' },
      ],
      caption: 'Pola bunyi musik kelas II',
    },
    statements: [
      {
        id: 's1',
        text: 'Pola suara pada gambar terdiri dari 2 tepuk tangan (Prok) lalu 1 ketukan (Duk).',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Jika pola dilanjutkan, bunyi pada urutan ke-7 adalah Prok.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Bunyi pada urutan ke-9 dalam pola tersebut adalah Prok.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Setiap kelompok berisi Prok, Prok, Duk (BENAR).\n2. Setelah urutan ke-6 (Duk), urutan ke-7 kembali ke Prok (BENAR).\n3. Urutan ke-7=Prok, ke-8=Prok, ke-9=Duk, bukan Prok (SALAH).',
  },
  {
    id: 37,
    type: 'pgk_kategori',
    topic: 'Pola Bentuk',
    difficulty: 'Sedang',
    text: 'Perhatikan gambar rangkaian manik-manik berpola berikut! Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    visual: {
      kind: 'shape_pattern',
      items: [
        { shape: 'circle', color: '#3B82F6', label: '1' },
        { shape: 'triangle', color: '#EF4444', label: '2' },
        { shape: 'square', color: '#10B981', label: '3' },
        { shape: 'circle', color: '#3B82F6', label: '4' },
        { shape: 'triangle', color: '#EF4444', label: '5' },
        { shape: 'square', color: '#10B981', label: '6' },
      ],
      caption: 'Rangkaian manik-manik: Lingkaran Biru, Segitiga Merah, Persegi Hijau',
    },
    statements: [
      {
        id: 's1',
        text: 'Pola bentuk gelang tersebut berulang setiap 3 bentuk (Lingkaran, Segitiga, Persegi).',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Jika pola dilanjutkan, bentuk pada urutan ke-7 adalah Lingkaran Biru.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Jika pola dilanjutkan, bentuk pada urutan ke-8 adalah Persegi Hijau.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Pola berulang setiap 3 bentuk: Lingkaran Biru, Segitiga Merah, Persegi Hijau (BENAR).\n2. Urutan ke-7 memulai siklus baru yaitu Lingkaran Biru (BENAR).\n3. Urutan ke-8 adalah Segitiga Merah, bukan Persegi Hijau (SALAH).',
  },
];

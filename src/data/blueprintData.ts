import { Question, QuestionBlueprint, CognitiveLevel, Difficulty } from '../types';

/**
 * Data Acuan Matriks Kisi-Kisi Penulisan Soal Tes Sumatif
 * Kurikulum Merdeka - Fase A (Kelas II) Mata Pelajaran Matematika
 * SD Negeri 3 Dangintukadaya
 */

export interface BlueprintDefinition {
  elemen: string;
  tujuanPembelajaran: string;
  indikatorSoal: string;
  levelKognitif: CognitiveLevel;
  bobotSkor: number;
}

// Peta acuan default 37 butir soal Kurikulum Merdeka Fase A (Kelas II)
export const DEFAULT_BLUEPRINT_MAP: Record<number, BlueprintDefinition> = {
  1: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat membilang banyak benda sampai dengan 50 menggunakan pengelompokan puluhan dan satuan.',
    indikatorSoal:
      'Disajikan gambar kumpulan ikatan puluhan dan satuan pensil, peserta didik dapat menentukan jumlah seluruh pensil dengan tepat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  2: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat membaca dan menulis lambang bilangan cacah sampai dengan 50.',
    indikatorSoal:
      'Disajikan nama bilangan antara 1 sampai 50 dalam bentuk teks, peserta didik dapat menentukan lambang bilangannya dengan tepat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  3: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat merepresentasikan bilangan cacah 1-50 melalui model konkret kubus puluhan dan satuan.',
    indikatorSoal:
      'Disajikan gambar susunan batang puluhan dan kubus satuan, peserta didik dapat menentukan bilangan yang ditunjukkan oleh gambar.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  4: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menentukan nilai tempat (puluhan dan satuan) pada bilangan dua angka 1-50.',
    indikatorSoal:
      'Disajikan sebuah bilangan dua angka antara 10 sampai 50, peserta didik dapat mengidentifikasi nilai tempat salah satu angkanya.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  5: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat membandingkan dua kelompok bilangan cacah 1-50 menggunakan istilah lebih banyak, lebih sedikit, atau sama banyak.',
    indikatorSoal:
      'Disajikan gambar dua keranjang buah dalam kelompok puluhan dan satuan, peserta didik dapat menentukan pernyataan perbandingan yang benar.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  6: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat mengurutkan sekumpulan bilangan cacah 1-50 dari yang terkecil ke terbesar atau sebaliknya.',
    indikatorSoal:
      'Disajikan empat kartu angka acak antara 1 sampai 50, peserta didik dapat mengurutkannya dari yang paling kecil ke yang paling besar.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  7: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menyelesaikan penjumlahan bilangan cacah sampai 50 berbantuan gambar benda.',
    indikatorSoal:
      'Disajikan gambar dua kelompok bintang berwarna, peserta didik dapat menghitung jumlah seluruh bintang.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  8: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menghitung hasil operasi penjumlahan dua bilangan cacah sampai 50 tanpa teknik menyimpan.',
    indikatorSoal:
      'Disajikan operasi penjumlahan dua bilangan dua angka tanpa menyimpan, peserta didik dapat menentukan hasilnya secara tepat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  9: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menyelesaikan masalah kontekstual penjumlahan bilangan cacah 1-50 dengan teknik menyimpan.',
    indikatorSoal:
      'Disajikan soal cerita tentang jumlah dua jenis buku di perpustakaan, peserta didik dapat menghitung jumlah seluruh buku.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  10: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat memahami konsep pengurangan bilangan cacah 1-50 melalui ilustrasi benda yang dikurangi.',
    indikatorSoal:
      'Disajikan gambar kue donat yang sebagian diberi tanda silang merah, peserta didik dapat menentukan sisa kue donat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  11: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menghitung hasil operasi pengurangan bilangan cacah sampai 50 tanpa teknik meminjam.',
    indikatorSoal:
      'Disajikan operasi pengurangan dua bilangan dua angka tanpa meminjam, peserta didik dapat menentukan hasilnya dengan tepat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  12: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menyelesaikan soal cerita pengurangan bilangan cacah 1-50 dengan teknik meminjam.',
    indikatorSoal:
      'Disajikan cerita pemberian kelereng kepada adik, peserta didik dapat menentukan sisa kelereng menggunakan pengurangan meminjam.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  13: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menyelesaikan masalah operasi hitung campuran penjumlahan dan pengurangan bilangan 1-50.',
    indikatorSoal:
      'Disajikan soal cerita mengenai buah mangga yang dijual lalu ditambah kembali, peserta didik dapat menentukan jumlah mangga akhir.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  14: {
    elemen: 'Aljabar',
    tujuanPembelajaran:
      'Peserta didik dapat mengenali dan melanjutkan pola bilangan bertambah secara teratur (1-50).',
    indikatorSoal:
      'Disajikan gambar rangkaian gerbong kereta dengan pola bilangan loncat 4, peserta didik dapat menentukan bilangan berikutnya.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  15: {
    elemen: 'Aljabar',
    tujuanPembelajaran:
      'Peserta didik dapat melengkapi bagian yang rumpang pada pola bilangan bertambah tetap.',
    indikatorSoal:
      'Disajikan barisan bilangan loncat 3 dengan satu bilangan kosong di tengah, peserta didik dapat menentukan bilangan yang tepat.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  16: {
    elemen: 'Aljabar',
    tujuanPembelajaran:
      'Peserta didik dapat menentukan suku berikutnya pada pola bilangan menurun secara teratur.',
    indikatorSoal:
      'Disajikan barisan bilangan menurun dengan selisih tetap 5, peserta didik dapat menentukan bilangan selanjutnya.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  17: {
    elemen: 'Aljabar',
    tujuanPembelajaran:
      'Peserta didik dapat melanjutkan beberapa suku berikutnya pada pola bilangan loncat 2.',
    indikatorSoal:
      'Disajikan barisan bilangan ganjil bertambah 2, peserta didik dapat menentukan dua bilangan berikutnya secara berurutan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  18: {
    elemen: 'Aljabar',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi dan melengkapi pola suara berulang dalam kehidupan sehari-hari.',
    indikatorSoal:
      'Disajikan gambar pola bunyi tepuk tangan dan ketukan meja dengan satu bagian kosong, peserta didik dapat melengkapi bunyi yang tepat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  19: {
    elemen: 'Aljabar',
    tujuanPembelajaran:
      'Peserta didik dapat mengenali pola suara berulang dari tiruan bunyi di sekitar.',
    indikatorSoal:
      'Disajikan urutan tiruan suara hewan yang berulang 3 jenis, peserta didik dapat menentukan suara berikutnya.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  20: {
    elemen: 'Aljabar',
    tujuanPembelajaran:
      'Peserta didik dapat menentukan dua urutan lanjutan dari pola suara ritmis sederhana.',
    indikatorSoal:
      'Disajikan pola suara alat musik sederhana (Ting - Tong - Tong), peserta didik dapat menentukan bunyi urutan ke-7 dan ke-8.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  21: {
    elemen: 'Aljabar',
    tujuanPembelajaran:
      'Peserta didik dapat memprediksi bunyi pada urutan tertentu berdasarkan pola suara bergambar.',
    indikatorSoal:
      'Disajikan gambar pola bunyi lonceng dan peluit hingga urutan ke-6, peserta didik dapat menentukan bunyi pada urutan ke-7.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  22: {
    elemen: 'Geometri',
    tujuanPembelajaran:
      'Peserta didik dapat melengkapi pola barisan bangun datar berdasarkan bentuk dan warnanya.',
    indikatorSoal:
      'Disajikan gambar pola 3 bangun datar berwarna yang berulang, peserta didik dapat menentukan bangun yang melengkapi tanda tanya.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  23: {
    elemen: 'Geometri',
    tujuanPembelajaran:
      'Peserta didik dapat mengenali dan melanjutkan pola bentuk berdasarkan perbedaan ukuran (besar-kecil).',
    indikatorSoal:
      'Disajikan gambar pola bintang berukuran besar dan kecil secara bergantian, peserta didik dapat menentukan gambar selanjutnya.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  24: {
    elemen: 'Geometri',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi pola pengulangan dua bentuk yang sama dan satu bentuk berbeda.',
    indikatorSoal:
      'Disajikan gambar pola dua segitiga hijau dan satu lingkaran merah muda, peserta didik dapat melengkapi bagian yang hilang.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  25: {
    elemen: 'Geometri',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis urutan bentuk ke-n pada pola bentuk bangun datar kontekstual.',
    indikatorSoal:
      'Disajikan cerita rangkaian bendera hiasan kelas berpola 3 bentuk, peserta didik dapat menentukan bentuk bendera pada urutan ke-8.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  26: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis jumlah benda, nilai tempat puluhan, dan perbandingan bilangan 1-50.',
    indikatorSoal:
      'Disajikan gambar 3 batang puluhan dan 8 kubus satuan, peserta didik dapat memilih semua pernyataan yang benar dari 3 opsi.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  27: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat mengevaluasi kebenaran hasil penjumlahan, pengurangan (selisih), dan perbandingan bilangan 1-50.',
    indikatorSoal:
      'Disajikan dua bilangan (28 dan 14) serta tiga pernyataan hitung, peserta didik dapat memilih semua pernyataan yang bernilai benar.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  28: {
    elemen: 'Aljabar',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis keteraturan pada pola bentuk bergambar dan pola suara berulang.',
    indikatorSoal:
      'Disajikan gambar pola bentuk 3 unsur dan narasi pola suara, peserta didik dapat memilih semua pernyataan yang benar dari 3 opsi.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  29: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menentukan banyak benda, nama bilangan, dan nilai tempat pada bilangan 1-50.',
    indikatorSoal:
      'Disajikan gambar 4 ikat puluhan dan 5 satuan pensil, peserta didik dapat menentukan Benar/Salah untuk 3 pernyataan terkait jumlah, nama bilangan, dan nilai tempat.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  30: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat membandingkan dan mengurutkan beberapa bilangan cacah 1-50.',
    indikatorSoal:
      'Disajikan tiga kartu angka (29, 44, 35), peserta didik dapat menentukan Benar/Salah pada 3 pernyataan perbandingan dan urutan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  31: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menghitung penjumlahan dua kelompok benda bergambar sampai 50 dan membandingkan hasilnya.',
    indikatorSoal:
      'Disajikan gambar 18 stiker bintang biru dan 16 stiker senyum kuning, peserta didik dapat mengevaluasi 3 pernyataan Benar/Salah.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  32: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat memodelkan kalimat matematika pengurangan dan membandingkan sisa benda dengan benda terpakai.',
    indikatorSoal:
      'Disajikan soal cerita 46 kue lemper yang dibagikan 19 buah, peserta didik dapat menilai Benar/Salah dari 3 pernyataan terkait sisa kue.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  33: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat memecahkan masalah gabungan penjumlahan dan pengurangan dua langkah pada bilangan 1-50.',
    indikatorSoal:
      'Disajikan informasi jumlah spidol pada dua kotak (18 dan 24), peserta didik dapat menentukan Benar/Salah terkait jumlah, selisih, dan sisa setelah dipakai.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  34: {
    elemen: 'Aljabar',
    tujuanPembelajaran:
      'Peserta didik dapat menentukan aturan pola bilangan loncat 5 dan melengkapi nilai pada pola tersebut.',
    indikatorSoal:
      'Disajikan gambar kartu pola bilangan kelipatan 5, peserta didik dapat menilai Benar/Salah untuk aturan pola, nilai rumpang, dan suku lanjutan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  35: {
    elemen: 'Aljabar',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis pola bilangan menurun dan menentukan suku-suku lanjutannya.',
    indikatorSoal:
      'Disajikan barisan bilangan menurun berkurang 4 (40, 36, 32, 28), peserta didik dapat menentukan Benar/Salah untuk 3 pernyataan lanjutan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  36: {
    elemen: 'Aljabar',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis pola suara musik berulang dan memprediksi bunyi pada urutan tertentu.',
    indikatorSoal:
      'Disajikan gambar pola suara Prok-Prok-Duk, peserta didik dapat menentukan Benar/Salah mengenai aturan pola serta bunyi urutan ke-7 dan ke-9.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  37: {
    elemen: 'Geometri',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis pola bentuk geometris berulang dan memprediksi bentuk pada urutan lanjutan.',
    indikatorSoal:
      'Disajikan gambar rangkaian manik-manik berpola 3 bentuk, peserta didik dapat menentukan Benar/Salah untuk siklus pola serta bentuk urutan ke-7 dan ke-8.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
};

/**
 * Format label bentuk soal
 */
export function getBentukSoalLabel(type: string): string {
  switch (type) {
    case 'pg':
      return 'Pilihan Ganda (PG)';
    case 'pgk':
      return 'Pilihan Ganda Kompleks (PGK)';
    case 'pgk_kategori':
      return 'Benar / Salah (PGK Kategori)';
    default:
      return 'Pilihan Ganda';
  }
}

/**
 * Format label level kognitif
 */
export function getCognitiveLevelLabel(level: CognitiveLevel): string {
  switch (level) {
    case 'L1':
      return 'L1 (Pemahaman / Mengingat)';
    case 'L2':
      return 'L2 (Aplikasi / Penerapan)';
    case 'L3':
      return 'L3 (Penalaran / Analisis HOTS)';
    default:
      return 'L2 (Aplikasi)';
  }
}

/**
 * Mendapatkan format string ringkas kunci jawaban
 */
export function formatCorrectAnswer(q: Question): string {
  if (q.type === 'pg') {
    return typeof q.correctAnswer === 'string' ? q.correctAnswer : 'A';
  }
  if (q.type === 'pgk') {
    if (Array.isArray(q.correctAnswer)) {
      return q.correctAnswer.join(', ');
    }
    return String(q.correctAnswer || 'A');
  }
  if (q.type === 'pgk_kategori') {
    if (q.statements && q.statements.length > 0) {
      return q.statements
        .map((st, i) => `${i + 1}:${st.correctAnswer ? 'B' : 'S'}`)
        .join(', ');
    }
    return 'B/S';
  }
  return '-';
}

/**
 * Menghasilkan metadata blueprint lengkap untuk butir soal tertentu
 */
export function getQuestionBlueprint(q: Question, index: number): QuestionBlueprint {
  const def = DEFAULT_BLUEPRINT_MAP[q.id];

  // Gunakan data dari definisi atau field internal question, atau inferensi logis
  const elemen =
    q.elemen ||
    (def ? def.elemen : inferElemenFromTopic(q.topic));

  const levelKognitif: CognitiveLevel =
    q.levelKognitif ||
    (def ? def.levelKognitif : inferLevelFromDifficulty(q.difficulty));

  const tujuanPembelajaran =
    q.tujuanPembelajaran ||
    (def
      ? def.tujuanPembelajaran
      : `Peserta didik mampu menerapkan konsep materi ${q.topic} dalam menyelesaikan permasalahan matematika.`);

  const indikatorSoal =
    q.indikatorSoal ||
    (def
      ? def.indikatorSoal
      : `Disajikan stimulus masalah tentang ${q.topic}, peserta didik dapat menentukan jawaban yang tepat.`);

  const bobotSkor = q.bobot || (def ? def.bobotSkor : 1);

  return {
    questionId: q.id,
    noSoal: index + 1,
    elemen,
    tujuanPembelajaran,
    materiPokok: q.topic,
    indikatorSoal,
    levelKognitif,
    levelKognitifLabel: getCognitiveLevelLabel(levelKognitif),
    bentukSoal: getBentukSoalLabel(q.type),
    kunciJawaban: formatCorrectAnswer(q),
    bobotSkor,
    difficulty: q.difficulty,
  };
}

function inferElemenFromTopic(topic: string): string {
  const t = topic.toLowerCase();
  if (t.includes('membilang') || t.includes('penjumlahan') || t.includes('pengurangan') || t.includes('bilangan 1-50')) {
    return 'Bilangan';
  }
  if (t.includes('pola bentuk') || t.includes('bangun') || t.includes('geometri')) {
    return 'Geometri';
  }
  if (t.includes('pola bilangan') || t.includes('pola suara') || t.includes('pola')) {
    return 'Aljabar';
  }
  return 'Bilangan';
}

function inferLevelFromDifficulty(diff: Difficulty): CognitiveLevel {
  if (diff === 'Mudah') return 'L1';
  if (diff === 'Sukar') return 'L3';
  return 'L2';
}

/**
 * Menghitung rekapitulasi distribusi kisi-kisi soal
 */
export function getBlueprintStatistics(questions: Question[]) {
  const total = questions.length;
  const blueprints = questions.map((q, idx) => getQuestionBlueprint(q, idx));

  // Distribusi Elemen
  const elemenCountMap: Record<string, number> = {};
  // Distribusi Level Kognitif
  const levelCountMap: Record<CognitiveLevel, number> = { L1: 0, L2: 0, L3: 0 };
  // Distribusi Tingkat Kesukaran
  const diffCountMap: Record<Difficulty, number> = { Mudah: 0, Sedang: 0, Sukar: 0 };
  // Distribusi Bentuk Soal
  const typeCountMap: Record<string, number> = { pg: 0, pgk: 0, pgk_kategori: 0 };

  blueprints.forEach((bp, idx) => {
    // Elemen
    elemenCountMap[bp.elemen] = (elemenCountMap[bp.elemen] || 0) + 1;
    // Level
    levelCountMap[bp.levelKognitif] = (levelCountMap[bp.levelKognitif] || 0) + 1;
    // Diff
    const q = questions[idx];
    if (q) {
      diffCountMap[q.difficulty] = (diffCountMap[q.difficulty] || 0) + 1;
      typeCountMap[q.type] = (typeCountMap[q.type] || 0) + 1;
    }
  });

  const elemenDistribution = Object.entries(elemenCountMap).map(([elemen, count]) => ({
    elemen,
    count,
    percentage: total > 0 ? Math.round((count / total) * 100) : 0,
  }));

  const levelDistribution = [
    {
      level: 'L1' as const,
      label: 'L1 (Pemahaman / C1-C2)',
      desc: 'Mengingat & Memahami konsep dasar',
      count: levelCountMap.L1,
      percentage: total > 0 ? Math.round((levelCountMap.L1 / total) * 100) : 0,
      color: 'blue',
    },
    {
      level: 'L2' as const,
      label: 'L2 (Aplikasi / C3)',
      desc: 'Menerapkan konsep pada konteks nyata',
      count: levelCountMap.L2,
      percentage: total > 0 ? Math.round((levelCountMap.L2 / total) * 100) : 0,
      color: 'emerald',
    },
    {
      level: 'L3' as const,
      label: 'L3 (Penalaran / C4-C6 HOTS)',
      desc: 'Menganalisis & memecahkan masalah kompleks',
      count: levelCountMap.L3,
      percentage: total > 0 ? Math.round((levelCountMap.L3 / total) * 100) : 0,
      color: 'amber',
    },
  ];

  const difficultyDistribution = [
    {
      difficulty: 'Mudah' as const,
      count: diffCountMap.Mudah,
      percentage: total > 0 ? Math.round((diffCountMap.Mudah / total) * 100) : 0,
      color: 'emerald',
    },
    {
      difficulty: 'Sedang' as const,
      count: diffCountMap.Sedang,
      percentage: total > 0 ? Math.round((diffCountMap.Sedang / total) * 100) : 0,
      color: 'blue',
    },
    {
      difficulty: 'Sukar' as const,
      count: diffCountMap.Sukar,
      percentage: total > 0 ? Math.round((diffCountMap.Sukar / total) * 100) : 0,
      color: 'rose',
    },
  ];

  const typeDistribution = [
    {
      type: 'pg',
      label: 'Pilihan Ganda (PG)',
      count: typeCountMap.pg,
      percentage: total > 0 ? Math.round((typeCountMap.pg / total) * 100) : 0,
    },
    {
      type: 'pgk',
      label: 'Pilihan Ganda Kompleks (PGK)',
      count: typeCountMap.pgk,
      percentage: total > 0 ? Math.round((typeCountMap.pgk / total) * 100) : 0,
    },
    {
      type: 'pgk_kategori',
      label: 'Benar / Salah (PGK Kategori)',
      count: typeCountMap.pgk_kategori,
      percentage: total > 0 ? Math.round((typeCountMap.pgk_kategori / total) * 100) : 0,
    },
  ];

  return {
    total,
    blueprints,
    elemenDistribution,
    levelDistribution,
    difficultyDistribution,
    typeDistribution,
  };
}

export const menus = [
  {
    title: 'Health Score',
    contents: [
      {
        subId: '1',
        subtitle: 'Gambaran Umum',
      },
      {
        subId: '2',
        subtitle: 'Informasi Produk',
      },
      {
        subId: '3',
        subtitle: 'Permasalahan Teknis',
      },
    ],
    isExpanded: true
  },
  {
    title: 'Health Shop',
    contents: [
      {
        subId: '4',
        subtitle: 'Gambaran Umum',
      },
      {
        subId: '5',
        subtitle: 'Pembelian',
      },
      {
        subId: '6',
        subtitle: 'Pembayaran',
      },
      {
        subId: '7',
        subtitle: 'Pengembalian Dana & Pengiriman Ulang',
      },
    ],
    isExpanded: false
  },
  {
    title: 'Home Service',
    contents: [
      {
        subId: '8',
        subtitle: 'Informasi',
      },
      {
        subId: '9',
        subtitle: 'Proses Layanan',
      },
      {
        subId: '10',
        subtitle: 'Penjadwalan Ulang',
      },
      {
        subId: '11',
        subtitle: 'Penilaian',
      },
    ],
    isExpanded: false
  },
  {
    title: 'Informasi Data Diri',
    contents: [
      {
        subId: '12',
        subtitle: 'Informasi',
      },
    ],
    isExpanded: false
  }
]

export const questions = [
    {
      id: 1,
      subId: 1,
      title: 'Apa itu Health Score?',
      contentId: 1,
      content: 'Health Score adalah untuk mengevaluasi dan memahami status kesejahteraan dan kesehatan Anda saat ini. Ada 9 Health Score yang kami tawarkan. 5 Health Score terkait dengan risiko penyakit (jantung, diabetes, hipertensi, hati, ginjal). 4 Health Score terkait dengan gaya hidup Anda (stres, diet, aktivitas fisik, tidur). Dengan mengikuti penilaian Health Score kami, Anda akan memahami risiko Anda terkena penyakit tertentu dan apakah Anda memiliki gaya hidup sehat.',
      isExpanded: false,
    },
    {
      id: 1,
      subId: 1,
      title: 'Bagaimana proses perhitungan Health Score?',
      contentId: 2,
      content: 'Semua Health Score didapatkan dari kalkulasi yang terpublikasi dan berbasis data dan sudah digunakan banyak orang termasuk dokter. ',
      isExpanded: false,
    },
    {
      id: 1,
      subId: 1,
      title: 'Bagaimana saya dapat mengkonsultasikan nilai Health Score saya?',
      contentId: 3,
      content: 'Anda dapat mengkonsultasikan nilai Health Score dengan tiga cara, yaitu: 1. Doctor Live Chat - Anda dapat memilih fitur ini pada Halaman Utama. Namun, Anda tidak bisa mendapatkan rekomendasi yang detail melalui metode ini. 2. Konsultasi Dokter - Anda dapat memesan konsultasi dokter tatap muka dengan dokter umum, dokter ahli gizi, dan dokter ahli olahraga untuk asesmen dan rekomendasi yang lebih detail melalui aplikasi U by Prodia. 3. Konsultasi Online - Anda dapat memesan telekonsultasi online dengan dokter umum, dokter ahli gizi, dan dokter ahli olahraga untuk asesmen dan rekomendasi yang lebih detail melalui aplikasi U by Prodia.',
      isExpanded: false,
    },


    {
      id: 1,
      subId: 2,
      title: 'Mengapa Health Score penting dan bagaimana hal ini dapat membantu saya? Bagaimana rekomendasi ini dapat dipersonalisasi bagi saya?',
      contentId: 4,
      content: 'Dengan hasil Health Score, kami akan berbagi wawasan kesehatan untuk membantu Anda menjaga kesehatan Anda. Kami juga akan memberikan rekomendasi dalam Pemeriksaan Lab, program kesehatan yang dipersonalisasi.',
      isExpanded: false,
    },
    {
      id: 1,
      subId: 2,
      title: 'Apakah Health Score dapat mendiagnosa gejala atau penyakit saya?',
      contentId: 5,
      content: 'Penilaian Health Score ini tidak menyediakan layanan medis dalam bentuk apa pun. Informasi yang terkandung dalam penilaian Health Score hanya untuk penggunaan pribadi Anda dan tidak dimaksudkan untuk mendiagnosis, menyembuhkan, mengurangi, mengobati, atau mencegah penyakit atau kondisi lain dan tidak dimaksudkan untuk memberikan penentuan atau penilaian kondisi kesehatan Anda. Selalu berkonsultasi dengan profesional kesehatan berlisensi seperti dokter atau spesialis Anda. ',
      isExpanded: false,
    },
    {
      id: 1,
      subId: 2,
      title: 'Seberapa sering saya harus mengambil penilaian Health Score?',
      contentId: 6,
      content: 'Health Score bisa berubah seiring waktu. Untuk skor jantung, diabetes, hipertensi, hati dan ginjal, kami sarankan untuk memperbarui setiap 6 bulan. Untuk nilai kualitas tidur, tingkat stres, dan  pola makan, kami sarankan untuk mengikuti kembali penilaian setiap bulan. Untuk nilai aktivitas fisik, kami sarankan Anda untuk menghubungkan perangkat yang dapat dikenakan sehingga Anda dapat melihat kemajuan mingguan.',
      isExpanded: false,
    },


    {
      id: 1,
      subId: 3,
      title: 'Hasil saya tidak dapat muncul',
      contentId: 7,
      content: 'Mohon untuk mencoba membuka kembali aplikasi U by Prodia Anda. Jika kendala masih terjadi, Anda dapat menghubungi Customer Service kami untuk membantu menyelesaikan permasalahan Anda.',
      isExpanded: false,
    },
    {
      id: 1,
      subId: 3,
      title: 'Saya merasa hasil saya tidak sesuai.',
      contentId: 8,
      content: 'Penilaian Health Score merupakan estimasi dari status kesehatan Anda saat ini. Anda dapat melakukan konsultasi dengan dokter pilihan Anda, atau chat bahkan konsultasi dengan dokter kami melalui aplikasi U by Prodia untuk informasi lebih lanjut.',
      isExpanded: false,
    },



]
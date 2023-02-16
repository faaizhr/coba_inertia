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

    // Informasi Produk HEALTH SCORE

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

    // Permasalahan Teknis HEALTH SCORE

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

    // HEALTH SHOP ================================
    // Gambaran Umum 

    {
      id: 2,
      subId: 4,
      title: 'Layanan apa yang diberikan oleh Prodia Health Shop',
      contentId: 9,
      content: 'Saat ini Prodia Health Shop memiliki layanan apotek online yang dapat mengirim produk obat-obatan sesuai kebutuhan Anda melalui apotek yang terdekat dari lokasi Anda dan telah bekerja sama dengan Prodia.',
      isExpanded: false,
    },
    {
      id: 2,
      subId: 4,
      title: 'Obat apa saja yang disediakan oleh Prodia Health Shop?',
      contentId: 10,
      content: 'Saat ini produk obat-obatan yang tersedia di Prodia Health Shop adalah produk golongan bebas atau over-the-counter.',
      isExpanded: false,
    },

    // Pembelian

    {
      id: 2,
      subId: 5,
      title: 'Apakah harga obat dapat berubah sewaktu-waktu?',
      contentId: 11,
      content: 'Harga dan ketersediaan produk dapat berubah tanpa pemberitahuan. Kami berusaha untuk menampilkan harga dan stok yang akurat, namun jika terdapat perubahan harga yang tertera pada produk yang dipesan, Health Consultant kami akan menginformasikan hal tersebut melalui Email, dan Anda akan diberikan pilihan untuk meneruskan pesanan dengan harga yang telah diperbarui atau membatalkan pesanan.',
      isExpanded: false,
    },

    // Pembayaran 

    {
      id: 2,
      subId: 6,
      title: 'Berapa lama waktu tunggu pembayaran untuk pembelian produk Health Shop?',
      contentId: 12,
      content: 'Masa tunggu pembayaran adalah 2,5 jam. Jika Anda melewati 2,5 jam, maka pemesanan Anda akan dibatalkan secara otomatis. ',
      isExpanded: false,
    },

    // Pengembalian Dana & Pengiriman Ulang

    {
      id: 2,
      subId: 7,
      title: 'Apa yang harus saya lakukan jika produk saya terima tidak sesuai atau lengkap?',
      contentId: 13,
      content: 'Anda dapat mengajukan komplain untuk pengiriman ulang atau pengembalian dana. Pengiriman ulang berarti produk akan dikirimkan ulang. Pengembalian dana berarti produk akan dikembalikan dalam bentuk dana. Mohon untuk mengirimkan email ke wellness@prodiadigital.com.',
      isExpanded: false,
    },
    {
      id: 2,
      subId: 7,
      title: 'Apakah yang harus saya lakukan jika produk yang saya terima rusak, cacat atau kadaluarsa?',
      contentId: 14,
      content: 'Kami menjamin kualitas produk kami dan akan menanggung penuh termasuk biaya pengiriman kembali.Jika memang produk yang kami kirim rusak atau cacat dan kami akan menukar sesuai dengan nominal yang anda beli dengan syarat mengirimkan bukti foto produk, email, order ID ke email wellness@prodiadigital.com.',
      isExpanded: false,
    },
    {
      id: 2,
      subId: 7,
      title: 'Berapa lama proses refund?',
      contentId: 15,
      content: 'Untuk pengembalian dana yang diinisiasi oleh K24, akan memakan waktu perkiraan 3 hari kerja jika Anda membayar menggunakan transfer bank/VA atau 11 hari kerja setelah Anda menerima email konfirmasi pengembalian dana. Untuk pengembalian dana yang dilakukan oleh pelanggan, dibutuhkan perkiraan waktu 21 hari kerja setelah Anda menerima email konfirmasi pengembalian dana.',
      isExpanded: false,
    },

    //HOME SERVICE
    //Informasi

    {
      id: 3,
      subId: 8,
      title: 'Bagaimana saya dapat melihat identitas petugas yang akan melakukan Home Service?',
      contentId: 16,
      content: 'Anda dapat melihat identitas petugas Home Service pada laman order Anda apabila status pada Home Service setelah pembayaran Anda berhasil diterima. Anda dapat melihat informasi seperti, nama dan foto profil dari petugas Home Service.',
      isExpanded: false,
    },
    {
      id: 3,
      subId: 8,
      title: 'Apakah saya dapat memesan layanan Home Service melalui aplikasi U by Prodia?',
      contentId: 17,
      content: 'Anda dapat memesan layananan Home Service melalui aplikasi U by Prodia dengan mengakses pada halaman Diagnostik. Pada halaman tersebut Anda dapat memilih Pemeriksaan Lab yang dibutuhkan dan melanjutkan proses pemesanan dan memilih layanan Home Service.',
      isExpanded: false,
    },
    {
      id: 3,
      subId: 8,
      title: 'Siapa yang dapat melihat data pribadi saya?',
      contentId: 18,
      content: 'Data Anda aman bersama kami dan data tersebut digunakan untuk: Pemberian Layanan, Transfer Bisnis, Transfer ke Afiliasi, Proses Penegakan Hukum, dan Penggunaan Layanan Pihak Ketiga.',
      isExpanded: false,
    },

    //Proses Layanan

    {
      id: 3,
      subId: 9,
      title: 'Apakah saya dapat menghubungi petugas Home Service melalui aplikasi U by Prodia?',
      contentId: 19,
      content: 'Tidak. Untuk saat ini Anda belum dapat menghubungi petugas Home Service melalui aplikasi. Anda dapat menghubungi Kontak Prodia 1500 830.',
      isExpanded: false,
    },
    {
      id: 3,
      subId: 9,
      title: 'Bagaimana cara melacak posisi petugas Home Service?',
      contentId: 20,
      content: 'Anda dapat melacak posisi petugas Home Service setelah pembayaran Anda berhasil diterima. Anda dapat melihat status pesanan Home Service Anda melalui tombol lacak pada laman histori pesanan Anda.',
      isExpanded: false,
    },

    //Penjadwalan Ulang

    {
      id: 3,
      subId: 10,
      title: 'Berapa kali saya dapat melakukan perubahan jadwal Home Service?',
      contentId: 21,
      content: 'Anda hanya dapat melakukan satu kali perubahan jadwal Home Service dalam satu transaksi.',
      isExpanded: false,
    },
    {
      id: 3,
      subId: 10,
      title: 'Apa itu pemberitahuan pengingat perubahan jadwal Home Service?',
      contentId: 22,
      content: 'Pengingat perubahan jadwal Home Service adalah pemberitahuan yang akan membantu Anda untuk melakukan perubahan jadwal Home Service, apabila Anda belum melakukan Home Service sesuai jadwal yang telah dipilih sebelumnya. Notifikasi pengingat perubahan jadwal akan muncul pada, 6 jam dari jadwal Home Service Anda, 3 hari setelah jadwal Home Service Anda, 7 hari sebelum tanggal kadaluarsa. Anda dapat melakukan perubahan dengan 2 pilihan, yaitu, Layanan Datang ke Cabang atau Perubahan Jadwal Home Service. Perubahan layanan Home Service menjadi "Datang ke Cabang", tidak akan mengembalikan biaya Home Service Anda sebelumnya.',
      isExpanded: false,
    },

    //Penilaian 

    {
      id: 3,
      subId: 11,
      title: 'Bagaimana saya dapat memberikan penilaian kepada petugas Home Service?',
      contentId: 23,
      content: 'Anda dapat memberikan penilaian kepada petugas setelah melakukan pengambilan sampel. Apabila terdapat 2 pemeriksaan 2 jam perjalanan Pulang-Pergi, maka terdapat dua kali proses penilaian petugas. Penilaian yang sudah dilakukan tidak dapat diubah.',
      isExpanded: false,
    },

    //INFORMASI DATA DIRI
    //Informasi

    {
      id: 4,
      subId: 12,
      title: 'Siapa yang dapat melihat data pribadi saya?',
      contentId: 24,
      content: 'Data Anda aman bersama kami dan data tersebut digunakan untuk: Pemberian Layanan, Transfer Bisnis, Transfer ke Afiliasi, Proses Penegakan Hukum, dan Penggunaan Layanan Pihak Ketiga.',
      isExpanded: false,
    },
    {
      id: 4,
      subId: 12,
      title: 'Bagaimana cara menghapus semua data saya?',
      contentId: 25,
      content: 'Atas permintaan Anda, kecuali ditentukan oleh ketentuan peraturan perundang-undangan yang berlaku, Prodia akan menghapus atau memusnahkan sebagian atau seluruh dokumen yang terkait dengan Informasi Pribadi, termasuk elektronik atau non-elektronik yang dikelola oleh PT. Prodia Digital Indonesia sehingga Informasi Pribadi tersebut tidak dapat ditampilkan lagi di Platform dalam waktu 30 (tiga puluh) hari setelah kami menerima permintaan Anda untuk pemusnahan Informasi Pribadi, kecuali Anda mendaftarkan ulang diri Anda di Platform.',
      isExpanded: false,
    },





]

export const feedback  = [
  {
    id: 1,
    nama: 'Bapak Beni',
    profesi: 'Pensiun PNS',
    layanan: 'Lab Test',
    comment: 'Pemeriksaan Lab di Prodia sudah menjadi rutinitas tahunan saya sejak lama karena pilihan tes nya yang lengkap dan cabang Prodia yang tersebar di berbagai wilayah sangat memudahkan saya. Tak hanya itu, hasil pemeriksaan juga dapat diakses langsung melalui aplikasi U by Prodia. Jadi saya bisa pulang ke rumah langsung setelah menjalani Lab Test.'
  },
  {
    id: 2,
    nama: 'David',
    profesi: 'Karyawan Swasta',
    layanan: 'Health Score',
    comment: 'Saya menjadi sadar akan pentingnya menjalani pola hidup sehat setelah menggunakan fitur Health Score pada aplikasi U by Prodia. Sebelumnya saya kurang olahraga dan perokok berat yang membuat saya berisiko tinggi terkena penyakit hipertensi yang mungkin dapat terjadi 4 tahun ke depan.'
  },
  {
    id: 3,
    nama: 'Bella',
    profesi: 'Mahasiswi',
    layanan: 'Health Score',
    comment: 'Penilaian risiko penyakit jantung dalam fitur Health Score di aplikasi U by Prodia membuat saya menyadari faktor risiko yang mungkin saya alami 6 tahun ke depan. Namun, saya jadi bersyukur karena hal ini justru mengubah pola hidup saya menjadi lebih sehat, serta membuat saya semakin bijak dalam memilih makanan yang akan dikonsumsi.'
  },
]
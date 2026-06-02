/**
 * Mock UMKM Desa Bojongkulur — 10 toko × 10 produk.
 * Setiap produk: nama, deskripsi, harga, dan gambar selaras dengan jenis toko.
 * Copy: spesifik, manfaat jelas, bahasa warga desa (bukan jargon marketing).
 */

export type UmkmToko = {
  id: string;
  namaToko: string;
  kategori: string;
  tagline: string;
  whatsapp: string;
  bukaJam: string;
  tutupJam: string;
};

export type UmkmProduk = {
  id: string;
  tokoId: string;
  namaToko: string;
  namaProduk: string;
  deskripsi: string;
  kategori: string;
  harga: number;
  gambar: string;
  whatsapp: string;
  bukaJam: string;
  tutupJam: string;
};

export const UMKM_KATEGORI = [
  "Semua",
  "Makanan & Minuman",
  "Kerajinan",
  "Pertanian",
  "Jasa",
  "Lainnya",
] as const;

export const UMKM_PAGE_SIZE = 20;

/** Gambar Unsplash per jenis produk — dipetakan ke item yang relevan */
const IMG = {
  nasiUduk: "https://images.unsplash.com/photo-1512058564368-7c0384237040?w=400&h=400&fit=crop",
  lontong: "https://images.unsplash.com/photo-1563245372-f21724dffd5e?w=400&h=400&fit=crop",
  soto: "https://images.unsplash.com/photo-1617098999827-295923228212?w=400&h=400&fit=crop",
  bubur: "https://images.unsplash.com/photo-1589301760010-67450082076d?w=400&h=400&fit=crop",
  gorengan: "https://images.unsplash.com/photo-1588137377875-077e50865332?w=400&h=400&fit=crop",
  sambal: "https://images.unsplash.com/photo-1606491956689-2ea866884177?w=400&h=400&fit=crop",
  kerupuk: "https://images.unsplash.com/photo-1619886549634-3a0a4c62846a?w=400&h=400&fit=crop",
  kueBasah: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=400&fit=crop",
  tumisSayur: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop",
  paketNasi: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=400&fit=crop",
  esTeh: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=400&fit=crop",
  esJeruk: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=400&h=400&fit=crop",
  esCampur: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=400&fit=crop",
  jusAlpukat: "https://images.unsplash.com/photo-1525385133512-2f3bdd039054?w=400&h=400&fit=crop",
  wedangJahe: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=400&fit=crop",
  kopiTubruk: "https://images.unsplash.com/photo-1495474472287-4d89bcfe2f85?w=400&h=400&fit=crop",
  airKelapa: "https://images.unsplash.com/photo-1585109649139-366815a0d889?w=400&h=400&fit=crop",
  esCincau: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=400&fit=crop",
  minumanHerbal: "https://images.unsplash.com/photo-1546173159-315724a31696?w=400&h=400&fit=crop",
  botolMinuman: "https://images.unsplash.com/photo-1523365287347-d0d2b1e7a0c9?w=400&h=400&fit=crop",
  anyamanBambu: "https://images.unsplash.com/photo-1599643478518-a784e690ae45?w=400&h=400&fit=crop",
  keranjangRotan: "https://images.unsplash.com/photo-1610701596007-De0e3a2e8c49?w=400&h=400&fit=crop",
  vasBambu: "https://images.unsplash.com/photo-1578749556568-bc2636250a4a?w=400&h=400&fit=crop",
  miniaturPerahu: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
  lampuBambu: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400&h=400&fit=crop",
  tasAnyaman: "https://images.unsplash.com/photo-1590875120379-c825d2a4749a?w=400&h=400&fit=crop",
  hiasanDinding: "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=400&h=400&fit=crop",
  topiAnyaman: "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=400&h=400&fit=crop",
  nampanBambu: "https://images.unsplash.com/photo-1603560349628-0c2e298480e5?w=400&h=400&fit=crop",
  kotakPenyimpanan: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop",
  ecengGondok: "https://images.unsplash.com/photo-1582794543130-ac1034e4a43a?w=400&h=400&fit=crop",
  tasEceng: "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=400&h=400&fit=crop",
  tikarAnyaman: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&h=400&fit=crop",
  gelangRotan: "https://images.unsplash.com/photo-1611591437281-460bfaa2553a?w=400&h=400&fit=crop",
  tempatTissue: "https://images.unsplash.com/photo-1615876230916-845f12cbfe17?w=400&h=400&fit=crop",
  bungaKering: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=400&fit=crop",
  tasBelanja: "https://images.unsplash.com/photo-1594223274512-ad4803739299?w=400&h=400&fit=crop",
  hiasanPintu: "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=400&h=400&fit=crop",
  setSewing: "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=400&h=400&fit=crop",
  dompetAnyaman: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
  sayurSegar: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=400&fit=crop",
  cabai: "https://images.unsplash.com/photo-1563565375-f4135817304a?w=400&h=400&fit=crop",
  tomat: "https://images.unsplash.com/photo-1592924353638-8e2f2620d780?w=400&h=400&fit=crop",
  kangkung: "https://images.unsplash.com/photo-1622206151226-18ca2c9e500f?w=400&h=400&fit=crop",
  terong: "https://images.unsplash.com/photo-1659261209836-7397a7a4a27a?w=400&h=400&fit=crop",
  beras: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop",
  telur: "https://images.unsplash.com/photo-1582722659769-35c09842f9a5?w=400&h=400&fit=crop",
  ubi: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=400&fit=crop",
  jagung: "https://images.unsplash.com/photo-1551759740-4a7f2a4d5739?w=400&h=400&fit=crop",
  pisang: "https://images.unsplash.com/photo-1571771896341-f02a90e774df?w=400&h=400&fit=crop",
  sayurOrganik: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&h=400&fit=crop",
  madu: "https://images.unsplash.com/photo-1587049352846-4a222782369e?w=400&h=400&fit=crop",
  kompos: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop",
  bibit: "https://images.unsplash.com/photo-1466692476860-aef1dfb1e735?w=400&h=400&fit=crop",
  jamur: "https://images.unsplash.com/photo-1506976785307-8732c8e741ad?w=400&h=400&fit=crop",
  selada: "https://images.unsplash.com/photo-1622206151226-18ca2c9e500f?w=400&h=400&fit=crop",
  microgreens: "https://images.unsplash.com/photo-1592419044046-281c14f09469?w=400&h=400&fit=crop",
  pupukCair: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop",
  buahNaga: "https://images.unsplash.com/photo-1527325241044-dfa948dae644?w=400&h=400&fit=crop",
  servisTv: "https://images.unsplash.com/photo-1593359677877-a4bb8921786a?w=400&h=400&fit=crop",
  servisKulkas: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=400&fit=crop",
  servisAc: "https://images.unsplash.com/photo-1631545914517-d2b903344598?w=400&h=400&fit=crop",
  servisMesinCuci: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=400&h=400&fit=crop",
  instalasiListrik: "https://images.unsplash.com/photo-1621905251189-08d45d8d2694?w=400&h=400&fit=crop",
  servisKipas: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=400&fit=crop",
  servisRiceCooker: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=400&h=400&fit=crop",
  servisBlender: "https://images.unsplash.com/photo-1570222094114-d0544f1341fa?w=400&h=400&fit=crop",
  servisSetrika: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=400&fit=crop",
  cekListrik: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=400&fit=crop",
  servisMotor: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=400&h=400&fit=crop",
  gantiOli: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=400&fit=crop",
  servisRem: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=400&h=400&fit=crop",
  tuneUp: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
  banBocor: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=400&fit=crop",
  akiMotor: "https://images.unsplash.com/photo-1558980664-769d59546b3d?w=400&h=400&fit=crop",
  cuciMotor: "https://images.unsplash.com/photo-1558980664-769d59546b3d?w=400&h=400&fit=crop",
  gantiKampas: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=400&h=400&fit=crop",
  servisVespa: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=400&h=400&fit=crop",
  stikerMotor: "https://images.unsplash.com/photo-1558980664-769d59546b3d?w=400&h=400&fit=crop",
  dodol: "https://images.unsplash.com/photo-1606313564200-e75d5e30476e?w=400&h=400&fit=crop",
  keripik: "https://images.unsplash.com/photo-1619886549634-3a0a4c62846a?w=400&h=400&fit=crop",
  selimutBayi: "https://images.unsplash.com/photo-1515488042361-ee00e017e171?w=400&h=400&fit=crop",
  brosHandmade: "https://images.unsplash.com/photo-1611591437281-460bfaa2553a?w=400&h=400&fit=crop",
  kueKering: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=400&fit=crop",
  taplakMeja: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&h=400&fit=crop",
  maskerKain: "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=400&h=400&fit=crop",
  tasKain: "https://images.unsplash.com/photo-1594223274512-ad4803739299?w=400&h=400&fit=crop",
  lilinAroma: "https://images.unsplash.com/photo-1602607894116-8f8e8b8e8b8e?w=400&h=400&fit=crop",
  souvenirKayu: "https://images.unsplash.com/photo-1513885535751-96a37383b689?w=400&h=400&fit=crop",
  kaosDesa: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
  mugDesa: "https://images.unsplash.com/photo-1514228742589-6df155070440?w=400&h=400&fit=crop",
  gantunganKunci: "https://images.unsplash.com/photo-1607083206869-4c7672f72a8a?w=400&h=400&fit=crop",
  paketWisata: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=400&fit=crop",
  postCard: "https://images.unsplash.com/photo-1513885535751-96a37383b689?w=400&h=400&fit=crop",
  toteBag: "https://images.unsplash.com/photo-1594223274512-ad4803739299?w=400&h=400&fit=crop",
  miniaturSungai: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=400&fit=crop",
  sticker: "https://images.unsplash.com/photo-1607083206869-4c7672f72a8a?w=400&h=400&fit=crop",
  olehOleh: "https://images.unsplash.com/photo-1513885535751-96a37383b689?w=400&h=400&fit=crop",
} as const;

type ProdukInput = {
  namaProduk: string;
  deskripsi: string;
  harga: number;
  gambar: string;
};

type TokoInput = Omit<UmkmToko, "id"> & { produk: ProdukInput[] };

const KATALOG: TokoInput[] = [
  {
    namaToko: "Warung Bu Siti",
    kategori: "Makanan & Minuman",
    tagline: "Sarapan hangat langsung dari dapur Ibu Siti sejak 1998",
    whatsapp: "6281234567001",
    bukaJam: "06:00",
    tutupJam: "21:00",
    produk: [
      {
        namaProduk: "Nasi Uduk Bojongkulur",
        deskripsi: "Nasi uduk pulen dengan sambal terasi, telur rebus, dan kerupuk. Porsi cukup untuk sarapan sebelum beraktivitas.",
        harga: 12000,
        gambar: IMG.nasiUduk,
      },
      {
        namaProduk: "Lontong Sayur Betawi",
        deskripsi: "Lontong lembut dengan kuah santan, labu siam, dan tahu goreng. Dibuat fresh setiap pagi.",
        harga: 15000,
        gambar: IMG.lontong,
      },
      {
        namaProduk: "Soto Ayam Kampung",
        deskripsi: "Kuah soto bening dengan suwiran ayam kampung, soun, dan telur. Hangat dan tidak terlalu berminyak.",
        harga: 18000,
        gambar: IMG.soto,
      },
      {
        namaProduk: "Bubur Ayam Komplit",
        deskripsi: "Bubur ayam dengan cakwe, kacang, telur, dan kuah kuning. Cocok untuk anak sekolah dan lansia.",
        harga: 14000,
        gambar: IMG.bubur,
      },
      {
        namaProduk: "Paket Gorengan Mix",
        deskripsi: "Tahu, tempe, pisang, dan bakwan goreng. Renyah di luar, empuk di dalam — ideal untuk teman ngopi.",
        harga: 10000,
        gambar: IMG.gorengan,
      },
      {
        namaProduk: "Sambal Terasi Bu Siti",
        deskripsi: "Sambal terasi pedas level sedang, tanpa pengawet. Tahan 3 hari di kulkas.",
        harga: 25000,
        gambar: IMG.sambal,
      },
      {
        namaProduk: "Kerupuk Udang Homemade",
        deskripsi: "Kerupuk udang buatan sendiri, digoreng tanpa minyak berulang. Isi 250 gram.",
        harga: 22000,
        gambar: IMG.kerupuk,
      },
      {
        namaProduk: "Kue Basah Campur",
        deskripsi: "Lapis, nagasari, dan klepon dalam satu box. Pesan H-1 untuk acara arisan atau pengajian.",
        harga: 35000,
        gambar: IMG.kueBasah,
      },
      {
        namaProduk: "Sayur Asem + Nasi Putih",
        deskripsi: "Sayur asem segar dengan kacang panjang, melinjo, dan jagung muda. Menu favorit warga setelah berkebun.",
        harga: 13000,
        gambar: IMG.tumisSayur,
      },
      {
        namaProduk: "Paket Nasi Bungkus 5 Porsi",
        deskripsi: "Nasi, ayam suwir, sambal, dan sayur tumis untuk acara pengajian atau gotong royong di RT.",
        harga: 55000,
        gambar: IMG.paketNasi,
      },
    ],
  },
  {
    namaToko: "Depot Es Teh Manis",
    kategori: "Makanan & Minuman",
    tagline: "Minuman segar untuk menemani perjalanan ke kantor desa",
    whatsapp: "6281234567006",
    bukaJam: "07:00",
    tutupJam: "22:00",
    produk: [
      {
        namaProduk: "Es Teh Manis Jumbo",
        deskripsi: "Teh melati diseduh fresh, manis pas, es batu full. Ukuran 700 ml — cukup untuk seharian di sawah.",
        harga: 8000,
        gambar: IMG.esTeh,
      },
      {
        namaProduk: "Es Jeruk Peras",
        deskripsi: "Jeruk lokal diperas saat pesanan datang. Asam manis alami, tanpa sirup buatan.",
        harga: 12000,
        gambar: IMG.esJeruk,
      },
      {
        namaProduk: "Es Campur Desa",
        deskripsi: "Campuran alpukat, nata de coco, kelapa muda, dan sirup. Minuman andalan anak-anak setelah pulang sekolah.",
        harga: 15000,
        gambar: IMG.esCampur,
      },
      {
        namaProduk: "Jus Alpukat Kental",
        deskripsi: "Alpukat mentega blended dengan susu cokelat. Creamy dan mengenyangkan.",
        harga: 18000,
        gambar: IMG.jusAlpukat,
      },
      {
        namaProduk: "Wedang Jahe Hangat",
        deskripsi: "Jahe merah, serai, dan gula merah. Hangatkan badan saat musim hujan di Bogor.",
        harga: 10000,
        gambar: IMG.wedangJahe,
      },
      {
        namaProduk: "Kopi Tubruk Desa",
        deskripsi: "Kopi robusta sangrai lokal. Tubruk asli dengan gula secukupnya — untuk bapak-bapak di pos ronda.",
        harga: 8000,
        gambar: IMG.kopiTubruk,
      },
      {
        namaProduk: "Es Kelapa Muda",
        deskripsi: "Kelapa muda segar, daging kelapa lembut, es serut. Segar setelah susur sungai atau olahraga.",
        harga: 15000,
        gambar: IMG.airKelapa,
      },
      {
        namaProduk: "Es Cincau Hitam",
        deskripsi: "Cincau hitam khas, gula merah, dan santan. Manis ringan, cocok untuk buka puasa.",
        harga: 10000,
        gambar: IMG.esCincau,
      },
      {
        namaProduk: "Infus Jahe-Kunyit",
        deskripsi: "Minuman herbal jahe dan kunyit tanpa gula. Untuk jaga daya tahan tubuh, disarankan hangat.",
        harga: 12000,
        gambar: IMG.minumanHerbal,
      },
      {
        namaProduk: "Paket Galon Isi Ulang 19 L",
        deskripsi: "Air minum isi ulang untuk warung dan rumah tangga. Antar gratis radius 2 km dari depot.",
        harga: 15000,
        gambar: IMG.botolMinuman,
      },
    ],
  },
  {
    namaToko: "Kerajinan Bambu Pak Joko",
    kategori: "Kerajinan",
    tagline: "Anyaman bambu tangan para pengrajin Dusun II",
    whatsapp: "6281234567002",
    bukaJam: "08:00",
    tutupJam: "17:00",
    produk: [
      {
        namaProduk: "Keranjang Bambu Medium",
        deskripsi: "Keranjang anyaman bambu untuk bawa sayur ke pasar. Kuat, ringan, dan tahan air.",
        harga: 45000,
        gambar: IMG.anyamanBambu,
      },
      {
        namaProduk: "Nampan Bambu Servis",
        deskripsi: "Nampan bulat untuk hidangan saat selamatan atau arisan. Finishing halus tanpa duri.",
        harga: 65000,
        gambar: IMG.nampanBambu,
      },
      {
        namaProduk: "Vas Bunga Bambu",
        deskripsi: "Vas dekoratif anyaman bambu untuk ruang tamu atau teras. Ukuran tinggi 30 cm.",
        harga: 55000,
        gambar: IMG.vasBambu,
      },
      {
        namaProduk: "Miniatur Perahu Sungai",
        deskripsi: "Souvenir mini perahu kayu — cocok untuk kado wisatawan Susur Sungai Cikeas.",
        harga: 75000,
        gambar: IMG.miniaturPerahu,
      },
      {
        namaProduk: "Lampu Hias Bambu",
        deskripsi: "Lampion bambu dengan lampu LED. Aman untuk teras cafe atau gazebo di halaman.",
        harga: 120000,
        gambar: IMG.lampuBambu,
      },
      {
        namaProduk: "Tas Anyaman Bambu",
        deskripsi: "Tas tangan anyaman bambu dengan tali kain. Ramah lingkungan, kuat untuk belanja harian.",
        harga: 85000,
        gambar: IMG.tasAnyaman,
      },
      {
        namaProduk: "Hiasan Dinding Rotan",
        deskripsi: "Panel hias dinding dari rotan alami. Memberi kesan rustic pada ruang keluarga.",
        harga: 95000,
        gambar: IMG.hiasanDinding,
      },
      {
        namaProduk: "Topi Anyaman Custom",
        deskripsi: "Topi anyaman untuk petani dan pekebun. Pesan ukuran kepala saat checkout via WhatsApp.",
        harga: 35000,
        gambar: IMG.topiAnyaman,
      },
      {
        namaProduk: "Kotak Penyimpanan Bambu",
        deskripsi: "Kotak berpenutup untuk menyimpan beras atau bumbu dapur. Tahan lembap.",
        harga: 70000,
        gambar: IMG.kotakPenyimpanan,
      },
      {
        namaProduk: "Set Tempat Piring Bambu",
        deskripsi: "Tatakan piring anyaman isi 6. Melindungi meja makan dan mempercantik sajian.",
        harga: 90000,
        gambar: IMG.keranjangRotan,
      },
    ],
  },
  {
    namaToko: "Anyaman Tradisional Ibu Yati",
    kategori: "Kerajinan",
    tagline: "Kerajinan perempuan desa — eceng gondok dan rotan asli Bogor",
    whatsapp: "6281234567007",
    bukaJam: "08:00",
    tutupJam: "16:00",
    produk: [
      {
        namaProduk: "Tas Eceng Gondok",
        deskripsi: "Tas eceng gondok buatan tangan Ibu Yati. Kuat untuk belanja pasar, motif tradisional Bogor.",
        harga: 95000,
        gambar: IMG.tasEceng,
      },
      {
        namaProduk: "Tikar Anyaman Eceng",
        deskripsi: "Tikar lipat untuk piknik atau sholat jamaah. Anyaman rapat, mudah dibersihkan.",
        harga: 120000,
        gambar: IMG.tikarAnyaman,
      },
      {
        namaProduk: "Gelang Rotan Handmade",
        deskripsi: "Gelang rotan alami dengan finishing halus. Aksesoris ramah lingkungan untuk kado.",
        harga: 25000,
        gambar: IMG.gelangRotan,
      },
      {
        namaProduk: "Tempat Tissue Anyaman",
        deskripsi: "Sarung tissue eceng gondok untuk meja ruang tamu. Tersedia warna natural dan cokelat.",
        harga: 45000,
        gambar: IMG.tempatTissue,
      },
      {
        namaProduk: "Bouquet Bunga Kering",
        deskripsi: "Rangkaian bunga kering anyaman — dekorasi meja untuk pernikahan adat desa.",
        harga: 85000,
        gambar: IMG.bungaKering,
      },
      {
        namaProduk: "Tas Belanja Lipat",
        deskripsi: "Tas lipat eceng gondok muat hingga 5 kg sayur. Ringkas masuk tas saat tidak dipakai.",
        harga: 55000,
        gambar: IMG.tasBelanja,
      },
      {
        namaProduk: "Hiasan Pintu Anyaman",
        deskripsi: "Hiasan gantung pintu dengan motif daun. Menyambut tamu dengan nuansa alami.",
        harga: 65000,
        gambar: IMG.hiasanPintu,
      },
      {
        namaProduk: "Set Alat Jahit Anyaman",
        deskripsi: "Kotak anyaman berisi jarum, benang, dan gunting — hadiah untuk ibu PKK.",
        harga: 75000,
        gambar: IMG.setSewing,
      },
      {
        namaProduk: "Dompet Anyaman Kecil",
        deskripsi: "Dompet eceng gondok untuk uang receh dan kartu. Resleting dalam, ukuran genggam.",
        harga: 35000,
        gambar: IMG.dompetAnyaman,
      },
      {
        namaProduk: "Keranjang Buah Eceng",
        deskripsi: "Keranjang bulat untuk pajangan buah di meja makan. Ventilasi alami menjaga buah tetap segar.",
        harga: 80000,
        gambar: IMG.ecengGondok,
      },
    ],
  },
  {
    namaToko: "Tani Sejahtera",
    kategori: "Pertanian",
    tagline: "Sayur segar panen pagi dari kebun warga Dusun I",
    whatsapp: "6281234567003",
    bukaJam: "06:00",
    tutupJam: "16:00",
    produk: [
      {
        namaProduk: "Paket Sayur Segar Mix",
        deskripsi: "Bayam, kangkung, cabai, dan tomat — panen pagi, siap masak untuk 1 hari keluarga.",
        harga: 18000,
        gambar: IMG.sayurSegar,
      },
      {
        namaProduk: "Cabai Merah Keriting 500g",
        deskripsi: "Cabai merah segar dari kebun lokal. Pedas sedang, cocok untuk sambal dan tumisan.",
        harga: 22000,
        gambar: IMG.cabai,
      },
      {
        namaProduk: "Tomat Merah 1 kg",
        deskripsi: "Tomat merah matang pohon. Segar untuk sambal, sup, atau salad.",
        harga: 15000,
        gambar: IMG.tomat,
      },
      {
        namaProduk: "Kangkung Batang 3 Ikat",
        deskripsi: "Kangkung segar batang tipis. Ideal untuk tumis terasi atau pepes.",
        harga: 12000,
        gambar: IMG.kangkung,
      },
      {
        namaProduk: "Terong Ungu 1 kg",
        deskripsi: "Terong ungu ukuran sedang, kulit mulus. Siap untuk lalapan atau balado.",
        harga: 14000,
        gambar: IMG.terong,
      },
      {
        namaProduk: "Beras Pulen Lokal 5 kg",
        deskripsi: "Beras hasil gabah petani desa. Pulen, bebas campuran — langsung dari kumbung.",
        harga: 65000,
        gambar: IMG.beras,
      },
      {
        namaProduk: "Telur Ayam Kampung 10 Butir",
        deskripsi: "Telur ayam kampung free-range. Kuning lebih pekat, cocok untuk MPASI dan kue.",
        harga: 35000,
        gambar: IMG.telur,
      },
      {
        namaProduk: "Ubi Jalar Ungu 2 kg",
        deskripsi: "Ubi jalar ungu manis alami. Bisa rebus, goreng, atau olahan kolak.",
        harga: 20000,
        gambar: IMG.ubi,
      },
      {
        namaProduk: "Jagung Manis 5 Batang",
        deskripsi: "Jagung manis segar, pipil mudah. Panggang atau rebus untuk camilan keluarga.",
        harga: 25000,
        gambar: IMG.jagung,
      },
      {
        namaProduk: "Pisang Ambon 1 Sisir",
        deskripsi: "Pisang ambon matang pohon. Manis, tanpa karbit — langsung dari kebun belakang.",
        harga: 18000,
        gambar: IMG.pisang,
      },
    ],
  },
  {
    namaToko: "Kebun Organik Pak Rudi",
    kategori: "Pertanian",
    tagline: "Tanaman organik tanpa pestisida — untuk keluarga yang peduli kesehatan",
    whatsapp: "6281234567008",
    bukaJam: "05:30",
    tutupJam: "15:00",
    produk: [
      {
        namaProduk: "Sayur Organik Weekly Box",
        deskripsi: "Selada, selada keriting, bayam, dan mint — dipanen pagi, bebas pestisida kimia.",
        harga: 35000,
        gambar: IMG.sayurOrganik,
      },
      {
        namaProduk: "Madu Hutan Bogor 250 ml",
        deskripsi: "Madu murni dari lebah hutan sekitar Gunung Putri. Tanpa campuran gula.",
        harga: 85000,
        gambar: IMG.madu,
      },
      {
        namaProduk: "Kompos Padat 5 kg",
        deskripsi: "Pupuk kompos dari daun dan sisa kebun. Perkaya tanah pot di pekarangan rumah.",
        harga: 25000,
        gambar: IMG.kompos,
      },
      {
        namaProduk: "Bibit Cabai Rawit 50 Batang",
        deskripsi: "Bibit cabai rawit unggul, siap tanam. Cocok untuk kebun pekarangan warga desa.",
        harga: 30000,
        gambar: IMG.bibit,
      },
      {
        namaProduk: "Jamur Tiram Segar 500g",
        deskripsi: "Jamur tiram hasil budidaya Pak Rudi. Segar, bersih, siap tumis atau bakar.",
        harga: 18000,
        gambar: IMG.jamur,
      },
      {
        namaProduk: "Selada Hidroponik 3 Pot",
        deskripsi: "Selada hidroponik hidup dalam pot. Petik sendiri saat mau masak — selalu segar.",
        harga: 22000,
        gambar: IMG.selada,
      },
      {
        namaProduk: "Microgreens Mix",
        deskripsi: "Campuran microgreens untuk topping salad dan sandwich. Nutrisi padat, panen muda.",
        harga: 28000,
        gambar: IMG.microgreens,
      },
      {
        namaProduk: "Pupuk Cair Organik 1 L",
        deskripsi: "Pupuk cair fermentasi untuk tanaman hias dan sayuran. Aplikasi semprot 1x seminggu.",
        harga: 32000,
        gambar: IMG.pupukCair,
      },
      {
        namaProduk: "Buah Naga Merah 1 kg",
        deskripsi: "Buah naga merah manis, kulit tipis. Hasil kebun organik Pak Rudi.",
        harga: 45000,
        gambar: IMG.buahNaga,
      },
      {
        namaProduk: "Paket Benih Sayur RT",
        deskripsi: "Benih kangkung, bayam, dan kacang panjang untuk program kebun bersama RT.",
        harga: 40000,
        gambar: IMG.bibit,
      },
    ],
  },
  {
    namaToko: "Jasa Servis Elektronik Andi",
    kategori: "Jasa",
    tagline: "Teknisi desa yang datang ke rumah — TV, kulkas, AC, dan mesin cuci",
    whatsapp: "6281234567004",
    bukaJam: "09:00",
    tutupJam: "18:00",
    produk: [
      {
        namaProduk: "Servis TV LED/LCD",
        deskripsi: "Perbaikan TV mati total, bergaris, atau tanpa suara. Cek kerusakan gratis, bayar jika setuju servis.",
        harga: 150000,
        gambar: IMG.servisTv,
      },
      {
        namaProduk: "Servis Kulkas Tidak Dingin",
        deskripsi: "Isi freon, ganti kompresor, atau bersihkan kondensor. Hemat listrik setelah servis.",
        harga: 200000,
        gambar: IMG.servisKulkas,
      },
      {
        namaProduk: "Cuci AC Split 1 Unit",
        deskripsi: "Bongkar, cuci evaporator dan blower, cek freon. Ruangan lebih sejuk, alergi berkurang.",
        harga: 120000,
        gambar: IMG.servisAc,
      },
      {
        namaProduk: "Servis Mesin Cuci",
        deskripsi: "Perbaikan mesin cuci bocor, tidak mutar, atau error code. Spare part original atau setara.",
        harga: 175000,
        gambar: IMG.servisMesinCuci,
      },
      {
        namaProduk: "Instalasi Listrik Rumah",
        deskripsi: "Pasang stop kontak, MCB, atau perbaiki korsleting. Sertifikat teknisi resmi desa.",
        harga: 250000,
        gambar: IMG.instalasiListrik,
      },
      {
        namaProduk: "Servis Kipas Angin",
        deskripsi: "Bersihkan debu, ganti bearing, atau perbaiki motor. Kipas kembali halus tanpa bunyi berisik.",
        harga: 75000,
        gambar: IMG.servisKipas,
      },
      {
        namaProduk: "Servis Rice Cooker",
        deskripsi: "Perbaiki magic com tidak panas atau tombol rusak. Nasi kembali matang merata.",
        harga: 85000,
        gambar: IMG.servisRiceCooker,
      },
      {
        namaProduk: "Servis Blender & Mixer",
        deskripsi: "Ganti pisau tumpul atau motor lemah. Bantu ibu-ibu PKK olahan dapur lebih cepat.",
        harga: 90000,
        gambar: IMG.servisBlender,
      },
      {
        namaProduk: "Servis Setrika Listrik",
        deskripsi: "Perbaiki setrika tidak panas atau bocor uap. Aman dipakai untuk setrika pakaian sekolah.",
        harga: 65000,
        gambar: IMG.servisSetrika,
      },
      {
        namaProduk: "Cek Instalasi Listrik Gratis",
        deskripsi: "Kunjungan cek tegangan dan grounding rumah warga desa. Gratis — bayar hanya jika ada perbaikan.",
        harga: 0,
        gambar: IMG.cekListrik,
      },
    ],
  },
  {
    namaToko: "Bengkel Motor Jaya",
    kategori: "Jasa",
    tagline: "Servis motor harian warga — dari ganti oli sampai tune-up",
    whatsapp: "6281234567009",
    bukaJam: "08:00",
    tutupJam: "19:00",
    produk: [
      {
        namaProduk: "Servis Motor Ringan",
        deskripsi: "Cek busi, filter udara, dan rantai. Motor lebih enteng untuk antar anak sekolah.",
        harga: 75000,
        gambar: IMG.servisMotor,
      },
      {
        namaProduk: "Ganti Oli Mesin + Filter",
        deskripsi: "Oli mesin merek pilihan dan filter oli baru. Disarankan tiap 2.000 km atau 2 bulan.",
        harga: 85000,
        gambar: IMG.gantiOli,
      },
      {
        namaProduk: "Servis Rem Depan & Belakang",
        deskripsi: "Ganti kampas rem dan cek cakram. Rem lebih pakem untuk jalan menurun Bogor.",
        harga: 120000,
        gambar: IMG.servisRem,
      },
      {
        namaProduk: "Tune-Up Mesin Lengkap",
        deskripsi: "Bersihkan karburator/injector, setel mesin, cek kelistrikan. Konsumsi BBM lebih irit.",
        harga: 200000,
        gambar: IMG.tuneUp,
      },
      {
        namaProduk: "Tambal Ban Tubeless",
        deskripsi: "Tambal ban bocor di lokasi — datang ke bengkel atau panggil ke rumah (radius 3 km).",
        harga: 25000,
        gambar: IMG.banBocor,
      },
      {
        namaProduk: "Ganti Aki Motor",
        deskripsi: "Aki baru dengan garansi 6 bulan. Pemasangan gratis di bengkel.",
        harga: 250000,
        gambar: IMG.akiMotor,
      },
      {
        namaProduk: "Cuci Motor Express",
        deskripsi: "Cuci body, semir ban, dan lap interior jok. Motor bersih dalam 30 menit.",
        harga: 20000,
        gambar: IMG.cuciMotor,
      },
      {
        namaProduk: "Ganti Kampas Rem Cakram",
        deskripsi: "Kampas rem original atau aftermarket. Cek cakram sekalian tanpa biaya tambahan.",
        harga: 95000,
        gambar: IMG.gantiKampas,
      },
      {
        namaProduk: "Servis Vespa/Matic Premium",
        deskripsi: "Perawatan khusus Vespa dan matic premium. Oli khusus dan diagnosa ECU.",
        harga: 350000,
        gambar: IMG.servisVespa,
      },
      {
        namaProduk: "Pasang Sticker & Aksesoris",
        deskripsi: "Pasang stiker body, footstep, atau spion aftermarket. Konsultasi desain via WhatsApp.",
        harga: 150000,
        gambar: IMG.stikerMotor,
      },
    ],
  },
  {
    namaToko: "Kreasi Ibu Desa",
    kategori: "Lainnya",
    tagline: "Produk tangan PKK Desa Bojongkulur — dari dapur hingga kerajinan",
    whatsapp: "6281234567005",
    bukaJam: "10:00",
    tutupJam: "20:00",
    produk: [
      {
        namaProduk: "Dodol Garut Homemade",
        deskripsi: "Dodol ketan legit buatan Ibu-ibu PKK. Manis kenyal, tanpa pewarna buatan.",
        harga: 35000,
        gambar: IMG.dodol,
      },
      {
        namaProduk: "Keripik Singkong Balado",
        deskripsi: "Keripik singkong renyah bumbu balado pedas. Isi 200 gram — stok terbatas tiap minggu.",
        harga: 18000,
        gambar: IMG.keripik,
      },
      {
        namaProduk: "Selimut Bayi Rajut",
        deskripsi: "Selimut bayi rajut tangan, halus dan hangat. Hadiah populer untuk aqiqah warga desa.",
        harga: 125000,
        gambar: IMG.selimutBayi,
      },
      {
        namaProduk: "Bros Sutra Handmade",
        deskripsi: "Bros sutra untuk hijab dan kemeja. Motif bunga lokal, dibuat di arisan PKK.",
        harga: 25000,
        gambar: IMG.brosHandmade,
      },
      {
        namaProduk: "Kue Kering Lebaran Mix",
        deskripsi: "Nastar, kastengel, dan putri salju dalam toples 500g. Pesan H-7 saat musim Lebaran.",
        harga: 85000,
        gambar: IMG.kueKering,
      },
      {
        namaProduk: "Taplak Meja Tenun",
        deskripsi: "Taplak meja tenun motif tradisional. Menambah nuansa hangat di ruang tamu.",
        harga: 95000,
        gambar: IMG.taplakMeja,
      },
      {
        namaProduk: "Masker Kain Motif Batik",
        deskripsi: "Masker kain 3 lapis, motif batik Bogor. Dapat dicuci ulang, ergonomis di hidung.",
        harga: 15000,
        gambar: IMG.maskerKain,
      },
      {
        namaProduk: "Tas Kain Batik Desa",
        deskripsi: "Tas tote batik dengan label Desa Bojongkulur. Cocok untuk belanja pasar tanpa plastik.",
        harga: 65000,
        gambar: IMG.tasKain,
      },
      {
        namaProduk: "Lilin Aroma Lavender",
        deskripsi: "Lilin leleh aroma lavender buatan rumahan. Relaksasi setelah berkebun seharian.",
        harga: 45000,
        gambar: IMG.souvenirKayu,
      },
      {
        namaProduk: "Paket Hampers PKK",
        deskripsi: "Kombinasi dodol, keripik, dan kue kering dalam box hampers. Siap hadiah ulang tahun.",
        harga: 150000,
        gambar: IMG.olehOleh,
      },
    ],
  },
  {
    namaToko: "Souvenir Desa Bojongkulur",
    kategori: "Lainnya",
    tagline: "Oleh-oleh khas wisata desa — dari Susur Sungai Cikeas ke tangan Anda",
    whatsapp: "6281234567010",
    bukaJam: "09:00",
    tutupJam: "17:30",
    produk: [
      {
        namaProduk: "Kaos Desa Bojongkulur",
        deskripsi: "Kaos cotton combed dengan logo SIGAP DESA. Ukuran S–XXL, cocok untuk oleh-oleh wisatawan.",
        harga: 85000,
        gambar: IMG.kaosDesa,
      },
      {
        namaProduk: "Mug Keramik SIGAP DESA",
        deskripsi: "Mug keramik 350 ml bergambar Susur Sungai Cikeas. Tahan panas, aman dishwasher.",
        harga: 55000,
        gambar: IMG.mugDesa,
      },
      {
        namaProduk: "Gantungan Kunci Kayu Ukir",
        deskripsi: "Gantungan kunci kayu ukir manual pengrajin lokal. Motif perahu dan sawah.",
        harga: 25000,
        gambar: IMG.gantunganKunci,
      },
      {
        namaProduk: "Paket Wisata Susur Sungai",
        deskripsi: "Voucher susur Sungai Cikeas + snack lokal. Booking via WhatsApp, konfirmasi 1x24 jam.",
        harga: 175000,
        gambar: IMG.paketWisata,
      },
      {
        namaProduk: "Kartu Pos Desa Bojongkulur",
        deskripsi: "Set 5 kartu pos bergambar panorama desa. Tulis kenangan wisata untuk keluarga di kota.",
        harga: 35000,
        gambar: IMG.postCard,
      },
      {
        namaProduk: "Tote Bag Kanvas SIGAP",
        deskripsi: "Tote bag kanvas tebal bertuliskan Desa Bojongkulur. Muat oleh-oleh pasar desa dengan aman.",
        harga: 75000,
        gambar: IMG.toteBag,
      },
      {
        namaProduk: "Miniatur Perahu Cikeas",
        deskripsi: "Miniatur perahu susur sungai dari kayu jati lokal. Ukuran 20 cm, finishing natural.",
        harga: 95000,
        gambar: IMG.miniaturSungai,
      },
      {
        namaProduk: "Stiker Pack SIGAP DESA",
        deskripsi: "10 stiker vinyl tahan air — logo desa, pemandangan, dan ikon layanan publik.",
        harga: 20000,
        gambar: IMG.sticker,
      },
      {
        namaProduk: "Box Oleh-oleh Desa",
        deskripsi: "Paket keripik, madu mini, dan keychain dalam box kayu. Hadiah corporate retreat.",
        harga: 125000,
        gambar: IMG.olehOleh,
      },
      {
        namaProduk: "Peta Desa Frame Kayu",
        deskripsi: "Peta Desa Bojongkulur dalam bingkai kayu. Dekorasi kantor atau ruang keluarga.",
        harga: 110000,
        gambar: IMG.souvenirKayu,
      },
    ],
  },
];

function buildCatalog(): { toko: UmkmToko[]; produk: UmkmProduk[] } {
  const toko: UmkmToko[] = [];
  const produk: UmkmProduk[] = [];

  KATALOG.forEach((entry, ti) => {
    const tokoId = String(ti + 1);
    const { produk: items, ...tokoData } = entry;

    toko.push({ id: tokoId, ...tokoData });

    items.forEach((item, pi) => {
      produk.push({
        id: `${tokoId}-${pi + 1}`,
        tokoId,
        namaToko: entry.namaToko,
        namaProduk: item.namaProduk,
        deskripsi: item.deskripsi,
        kategori: entry.kategori,
        harga: item.harga,
        gambar: item.gambar,
        whatsapp: entry.whatsapp,
        bukaJam: entry.bukaJam,
        tutupJam: entry.tutupJam,
      });
    });
  });

  return { toko, produk };
}

const catalog = buildCatalog();

export const umkmTokoList: UmkmToko[] = catalog.toko;
export const umkmProdukList: UmkmProduk[] = catalog.produk;

/** @deprecated gunakan umkmProdukList */
export const umkmList = umkmProdukList;

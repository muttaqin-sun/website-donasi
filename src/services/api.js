// This is a placeholder for the actual API service
// that will connect to the Node.js/Express backend later

export const fetchCampaigns = async (page = 1, limit = 6, category = "Semua Kategori", sort = "newest") => {
    // Simulating an API call
    return new Promise((resolve) => {
        setTimeout(() => {
            let campaigns = [
                // PAGE 1
                { id: 1, title: "Bantu kumpulkan donasi berharga untuk Anak-anak", category: "Anak-anak", tags: ["Anak-anak", "Kesehatan"], image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", authorName: "Kevin Jhonson", authorAvatar: "https://i.pravatar.cc/100?img=11", daysLeft: 245, description: "Bantu anak-anak mendapatkan masa depan yang lebih baik melalui pendidikan.", raised: 420000, goal: 1000000 },
                { id: 2, title: "Bantuan Biaya Pengobatan Kanker Darah (Leukemia)", category: "Medis", tags: ["Medis", "Kesehatan"], image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", authorName: "Sarah M.", authorAvatar: "https://i.pravatar.cc/100?img=5", daysLeft: 30, description: "Mari bersama bantu kesembuhan penderita kanker darah yang tidak mampu.", raised: 257500, goal: 1000000 },
                { id: 3, title: "Sumbangan terkecil dapat membantu mengubah hidup", category: "Yayasan", tags: ["Yayasan", "Kesehatan"], image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", authorName: "Budi Santoso", authorAvatar: "https://i.pravatar.cc/100?img=13", daysLeft: 252, description: "Dukungan untuk yayasan panti asuhan di pedalaman desa.", raised: 10000, goal: 1000000 },
                { id: 4, title: "Cek Kesehatan Gratis Untuk Lansia", category: "Kesehatan", tags: ["Kesehatan", "Medis"], image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", authorName: "Dr. Andi", authorAvatar: "https://i.pravatar.cc/100?img=14", daysLeft: 12, description: "Program pemeriksaan kesehatan gratis bagi lansia kurang mampu.", raised: 150000, goal: 500000 },
                { id: 5, title: "Manfaat yang Diperoleh Dari Donasi Amal", category: "Amal", tags: ["Amal", "Yayasan"], image: "https://picsum.photos/seed/amal5/800/600", authorName: "Ibu Siti", authorAvatar: "https://i.pravatar.cc/100?img=9", daysLeft: 222, description: "Bantuan pangan untuk warga yang terdampak bencana alam.", raised: 50000, goal: 1000000 },
                { id: 6, title: "Bantuan Operasi Katarak Gratis", category: "Medis", tags: ["Medis", "Yayasan"], image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", authorName: "Yayasan Peduli", authorAvatar: "https://i.pravatar.cc/100?img=1", daysLeft: 45, description: "Memulihkan penglihatan ratusan lansia melalui operasi katarak.", raised: 800000, goal: 1000000 },

                // PAGE 2
                { id: 7, title: "Pembangunan Klinik Kesehatan Desa", category: "Kesehatan", tags: ["Kesehatan", "Yayasan"], image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", authorName: "Desa Sejahtera", authorAvatar: "https://i.pravatar.cc/100?img=2", daysLeft: 120, description: "Membangun fasilitas klinik yang layak untuk warga pelosok.", raised: 420000000, goal: 500000000 },
                { id: 8, title: "Buku dan Seragam untuk Anak-anak Yatim", category: "Anak-anak", tags: ["Anak-anak", "Amal"], image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", authorName: "Kak Seto", authorAvatar: "https://i.pravatar.cc/100?img=3", daysLeft: 60, description: "Mendukung pendidikan anak yatim dengan perlengkapan sekolah.", raised: 3000000, goal: 15000000 },
                { id: 9, title: "Bantuan Gizi Buruk Anak Balita", category: "Medis", tags: ["Anak-anak", "Medis"], image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", authorName: "Klinik Harapan", authorAvatar: "https://i.pravatar.cc/100?img=4", daysLeft: 15, description: "Penyediaan susu dan makanan bergizi untuk balita penderita gizi buruk.", raised: 4500000, goal: 10000000 },
                { id: 10, title: "Patungan Beli Ambulans Gratis", category: "Yayasan", tags: ["Kesehatan", "Yayasan"], image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", authorName: "Relawan Cepat", authorAvatar: "https://i.pravatar.cc/100?img=6", daysLeft: 80, description: "Pengadaan mobil ambulans untuk melayani warga miskin secara gratis.", raised: 25000000, goal: 100000000 },
                { id: 11, title: "Berbagi Nasi Kotak Tiap Jumat", category: "Amal", tags: ["Amal", "Sosial"], image: "https://picsum.photos/seed/nasi11/800/600", authorName: "Komunitas Jumat", authorAvatar: "https://i.pravatar.cc/100?img=7", daysLeft: 365, description: "Gerakan rutin berbagi makanan bagi pekerja jalanan dan dhuafa.", raised: 1000000, goal: 5000000 },
                { id: 12, title: "Bantu Adik Bayi Prematur", category: "Medis", tags: ["Medis", "Anak-anak"], image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", authorName: "Ibu Kartini", authorAvatar: "https://i.pravatar.cc/100?img=8", daysLeft: 22, description: "Biaya inkubator dan NICU untuk bayi lahir prematur keluarga tak mampu.", raised: 15000000, goal: 50000000 },

                // PAGE 3
                { id: 13, title: "Renovasi Panti Asuhan Kasih Bunda", category: "Yayasan", tags: ["Yayasan", "Anak-anak"], image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", authorName: "Panti Kasih Bunda", authorAvatar: "https://i.pravatar.cc/100?img=10", daysLeft: 90, description: "Membangun kembali atap asrama panti asuhan yang hampir rubuh.", raised: 90000000, goal: 750000000 },
                { id: 14, title: "Operasi Jantung Bocor Adik Rayyan", category: "Medis", tags: ["Medis", "Anak-anak"], image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", authorName: "Bapak Rahmat", authorAvatar: "https://i.pravatar.cc/100?img=12", daysLeft: 40, description: "Biaya operasi mendesak untuk Rayyan yang menderita kelainan jantung.", raised: 40000000, goal: 120000000 },
                { id: 15, title: "Vaksinasi Gratis untuk Anabul Terlantar", category: "Kesehatan", tags: ["Kesehatan", "Amal"], image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", authorName: "Pecinta Hewan", authorAvatar: "https://i.pravatar.cc/100?img=15", daysLeft: 20, description: "Program kesehatan hewan peliharaan gratis demi mencegah penyebaran rabies.", raised: 30000000, goal: 80000000 },
                { id: 16, title: "Sembako untuk Janda Tua Dhuafa", category: "Amal", tags: ["Amal", "Amal"], image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", authorName: "Yayasan Berkah", authorAvatar: "https://i.pravatar.cc/100?img=16", daysLeft: 10, description: "Membagikan bantuan bahan pokok menjelang bulan suci Ramadhan.", raised: 550000, goal: 1800000 },
                { id: 17, title: "Bantu Beli Alat Bantu Dengar", category: "Kesehatan", tags: ["Kesehatan", "Yayasan"], image: "https://picsum.photos/seed/dengar17/800/600", authorName: "Sekolah Inklusi", authorAvatar: "https://i.pravatar.cc/100?img=17", daysLeft: 60, description: "Penyediaan alat bantu dengar bagi puluhan siswa tuna rungu dari keluarga kurang mampu.", raised: 9000000, goal: 25000000 },
                { id: 18, title: "Pembangunan Sumur Bor Air Bersih", category: "Yayasan", tags: ["Yayasan", "Kesehatan"], image: "https://images.unsplash.com/photo-1516216628859-9bccecab13ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", authorName: "Relawan Air", authorAvatar: "https://i.pravatar.cc/100?img=18", daysLeft: 150, description: "Menyediakan akses air bersih untuk desa terpencil yang selalu kekeringan panjang.", raised: 18000000, goal: 40000000 }
            ];

            if (category !== "Semua Kategori") {
                campaigns = campaigns.filter(c => c.category === category);
            }

            if (sort === 'newest') {
                campaigns.sort((a, b) => a.id - b.id); //a.id - b.id = ID terkecil ke ID terbesar
            } else if (sort === 'popular') {
                campaigns.sort((a, b) => b.raised - a.raised);
            } else if (sort === 'ending_soon') {
                campaigns = campaigns.filter(c => c.daysLeft <= 30).sort((a, b) => a.daysLeft - b.daysLeft);
            }

            const startIndex = (page - 1) * limit;
            const endIndex = startIndex + limit;

            const results = {
                data: campaigns.slice(startIndex, endIndex),
                totalItems: campaigns.length,
                totalPages: Math.ceil(campaigns.length / limit),
                currentPage: page
            };

            resolve(results);
        }, 300);
    });
};

// --- BLOG MOCK API ---

export const fetchBlogs = async (page = 1, limit = 5, category = "Semua Kategori") => {
    return new Promise((resolve) => {
        setTimeout(() => {
            let blogs = [
                { id: 1, title: "Sepuluh Rahasia Ahli Amal yang Tidak Anda Ketahui", category: "Tips Donasi", image: "https://images.unsplash.com/photo-1593113589914-07599c182dd5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", authorName: "Admin", date: "5 Oktober 2023", excerpt: "Pahami strategi terbaik untuk menyalurkan donasi Anda agar tepat sasaran dan memberikan dampak yang paling maksimal bagi mereka yang membutuhkan.", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..." },
                { id: 2, title: "Lima Tanda Anda Sedang Menderita Kesehatan Mental", category: "Edukasi Sosial", image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", authorName: "Dr. psikolog", date: "12 Oktober 2023", excerpt: "Kesehatan mental sama pentingnya dengan kesehatan fisik. Kenali tanda-tanda awal depresi dan kecemasan agar dapat segera ditangani.", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..." },
                { id: 3, title: "Laporan Penyaluran Donasi Gempa Bumi Cianjur", category: "Laporan Donasi", image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", authorName: "Tim Relawan", date: "20 November 2023", excerpt: "Berkat donasi Anda, ratusan paket sembako dan tenda darurat telah berhasil didistribusikan ke lokasi-lokasi terdampak gempa terdalam.", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..." },
                { id: 4, title: "Perjuangan Adik Rani Melawan Kanker Tulang", category: "Kisah Inspiratif", image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", authorName: "Relawan Akcel", date: "5 Desember 2023", excerpt: "Meskipun harus kehilangan kakinya, semangat juang Rani untuk sembuh dan bersekolah lagi patut menjadi inspirasi kita bersama.", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..." },
                { id: 5, title: "Peresmian Sekolah Dasar Harapan Bangsa di Papua", category: "Update Program", image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", authorName: "Humas", date: "10 Januari 2024", excerpt: "Gedung sekolah permanen akhirnya berdiri kokoh di desa terpencil Papua berkat dana kerohanian dari ratusan donatur dermawan seluruh Indonesia.", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..." },
                { id: 6, title: "Cara Membedakan Penggalangan Dana Resmi dan Penipuan", category: "Edukasi Sosial", image: "https://images.unsplash.com/photo-1530834316109-173ee0ff0977?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", authorName: "Admin", date: "15 Januari 2024", excerpt: "Di era digital ini, sangat penting untuk memverifikasi entitas kampanye sebelum melakukan transfer uang untuk memastikan keamanan beramal.", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..." },
                { id: 7, title: "Kisah Mantan Preman yang Kini Mengelola Panti Asuhan", category: "Kisah Inspiratif", image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", authorName: "Penulis Lepas", date: "20 Februari 2024", excerpt: "Meninggalkan dunia kelam, Bang Jali kini mendedikasikan hidupnya merawat puluhan anak terlantar di pinggiran ibu kota.", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..." },
                { id: 8, title: "Suksesnya Pengadaan Ambulans Gratis Desa Suka Makmur", category: "Update Program", image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", authorName: "Kepala Desa", date: "1 Maret 2024", excerpt: "Warga kini tidak perlu khawatir lagi tentang transportasi medis berkat ambulans gratis hasil patungan ribuan #OrangBaik.", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..." }
            ];

            if (category !== "Semua Kategori") {
                blogs = blogs.filter(b => b.category === category);
            }

            const startIndex = (page - 1) * limit;
            const endIndex = startIndex + limit;

            const results = {
                data: blogs.slice(startIndex, endIndex),
                totalItems: blogs.length,
                totalPages: Math.ceil(blogs.length / limit),
                currentPage: page
            };

            resolve(results);
        }, 300);
    });
};

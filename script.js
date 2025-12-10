 // 1. DATA TRANSLATION (Dictionary)
        const translations = {
            id: {
                nav_home: "Beranda",
                nav_about: "Tentang Kami",
                nav_services: "Layanan",
                nav_workflow: "Alur Kerja",
                nav_contact: "Hubungi Kami",
                hero_badge: "Pabrik Garmen Profesional",
                hero_title_1: "Solusi Produksi Fashion",
                hero_title_2: "Berkualitas Tinggi",
                hero_desc: "Hana Fashion menghadirkan standar manufaktur modern dengan presisi tinggi untuk kebutuhan brand fashion lokal maupun ekspor.",
                btn_start: "Mulai Produksi",
                btn_process: "Lihat Proses",
                about_title: "Tentang Hana Fashion",
                about_subtitle: "Dedikasi kami terhadap kualitas jahitan dan ketepatan waktu pengiriman.",
                stat_1_title: "Tahun Pengalaman",
                stat_1_desc: "Berpengalaman menangani berbagai jenis garmen dari kaos hingga kemeja formal.",
                stat_2_title: "Mesin Modern",
                stat_2_desc: "Menggunakan mesin high-speed dan teknologi terkini untuk hasil presisi.",
                stat_3_title: "Quality Control",
                stat_3_desc: "Sistem pengecekan berlapis (QC End-line) untuk meminimalisir produk reject.",
                services_title: "Layanan Kami",
                svc_1_title: "Pola & Cutting",
                svc_1_desc: "Pembuatan pola digital dan pemotongan bahan yang akurat.",
                svc_2_title: "Mass Sewing",
                svc_2_desc: "Penjahitan massal dengan kapasitas produksi tinggi per hari.",
                svc_3_title: "Quality Control",
                svc_3_desc: "Pembersihan sisa benang dan pengecekan ukuran (measurement).",
                svc_4_title: "Steam & Packing",
                svc_4_desc: "Setrika uap dan pengemasan standar retail siap jual.",
                why_title: "Mengapa Partner Memilih Kami?",
                why_desc: "Kami mengerti bahwa di industri fashion, ketepatan waktu adalah segalanya. Sistem manajemen pabrik kami dirancang untuk meminimalisir bottleneck.",
                why_point_1: "Harga kompetitif (Direct Factory)",
                why_point_2: "Laporan progres produksi real-time",
                why_point_3: "Bahan baku berkualitas (Grade A)",
                quote: "\"Saya membuat website ini sebagai bentuk inisiatif digitalisasi untuk Hana Fashion, agar workflow kita bisa dikenal lebih luas oleh klien potensial.\"",
                flow_title: "Alur Produksi",
                flow_subtitle: "Sistematis dan Terukur",
                step_1_title: "Konsultasi",
                step_1_desc: "Diskusi desain & pemilihan bahan.",
                step_2_title: "Sampling",
                step_2_desc: "Pembuatan sampel untuk approval.",
                step_3_title: "Produksi",
                step_3_desc: "Cutting, Sewing, Finishing massal.",
                step_4_title: "Pengiriman",
                step_4_desc: "Distribusi ke gudang klien.",
                contact_title: "Hubungi Kami",
                contact_subtitle: "Siap berdiskusi untuk project produksi Anda selanjutnya.",
                addr_title: "Alamat Pabrik",
                form_company: "Nama Perusahaan",
                form_msg: "Pesan",
                btn_send: "Kirim Pesan"
            },
            en: {
                nav_home: "Home",
                nav_about: "About Us",
                nav_services: "Services",
                nav_workflow: "Workflow",
                nav_contact: "Contact Us",
                hero_badge: "Professional Garment Factory",
                hero_title_1: "High Quality Fashion",
                hero_title_2: "Production Solution",
                hero_desc: "Hana Fashion delivers modern manufacturing standards with high precision for local and export fashion brand needs.",
                btn_start: "Start Production",
                btn_process: "See Process",
                about_title: "About Hana Fashion",
                about_subtitle: "Our dedication to stitching quality and on-time delivery.",
                stat_1_title: "Years Experience",
                stat_1_desc: "Experienced in handling various garments from t-shirts to formal shirts.",
                stat_2_title: "Modern Machines",
                stat_2_desc: "Using high-speed machines and latest technology for precise results.",
                stat_3_title: "Quality Control",
                stat_3_desc: "Multi-layered checking system (QC End-line) to minimize reject products.",
                services_title: "Our Services",
                svc_1_title: "Pattern & Cutting",
                svc_1_desc: "Digital pattern making and accurate fabric cutting.",
                svc_2_title: "Mass Sewing",
                svc_2_desc: "Mass sewing with high daily production capacity.",
                svc_3_title: "Quality Control",
                svc_3_desc: "Thread trimming and measurement checking.",
                svc_4_title: "Steam & Packing",
                svc_4_desc: "Steam ironing and retail-standard packaging.",
                why_title: "Why Partners Choose Us?",
                why_desc: "We understand that in fashion, timing is everything. Our factory management system is designed to minimize bottlenecks.",
                why_point_1: "Competitive Price (Direct Factory)",
                why_point_2: "Real-time production progress report",
                why_point_3: "Quality Raw Materials (Grade A)",
                quote: "\"I built this website as a digitalization initiative for Hana Fashion, so our workflow can be widely known by potential clients.\"",
                flow_title: "Production Workflow",
                flow_subtitle: "Systematic and Measured",
                step_1_title: "Consultation",
                step_1_desc: "Design discussion & material selection.",
                step_2_title: "Sampling",
                step_2_desc: "Sample creation for approval.",
                step_3_title: "Production",
                step_3_desc: "Mass Cutting, Sewing, Finishing.",
                step_4_title: "Delivery",
                step_4_desc: "Distribution to client warehouse.",
                contact_title: "Contact Us",
                contact_subtitle: "Ready to discuss your next production project.",
                addr_title: "Factory Address",
                form_company: "Company Name",
                form_msg: "Message",
                btn_send: "Send Message"
            }
        };

        // 2. LOGIC LANGUAGE SWITCHER
        let currentLang = 'id';

        function updateLanguageUI(lang) {
            // Ubah teks berdasarkan data-i18n
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (translations[lang][key]) {
                    el.innerText = translations[lang][key];
                }
            });

            // Ubah Icon Bendera & Teks di Navbar
            const flagUrl = lang === 'id' ? 'https://flagcdn.com/w20/id.png' : 'https://flagcdn.com/w20/us.png';
            const langLabel = lang === 'id' ? 'ID' : 'EN';
            
            // Desktop
            document.getElementById('flag-icon').src = flagUrl;
            document.getElementById('lang-text').innerText = langLabel;
            
            // Mobile
            document.getElementById('flag-icon-mobile').src = flagUrl;
            document.getElementById('lang-text-mobile').innerText = langLabel;

            // Update URL tanpa reload halaman (Best Practice!)
            const newUrl = new URL(window.location);
            newUrl.searchParams.set('lang', lang);
            window.history.pushState({}, '', newUrl);

            currentLang = lang;
        }

        function toggleLanguage() {
            const newLang = currentLang === 'id' ? 'en' : 'id';
            updateLanguageUI(newLang);
        }

        // --- INIT SAAT HALAMAN DILOAD ---
        window.addEventListener('DOMContentLoaded', () => {
            // Cek URL parameter (contoh: ?lang=en)
            const urlParams = new URLSearchParams(window.location.search);
            const langParam = urlParams.get('lang');

            // Jika ada param lang=en, pakai en. Jika tidak, default id.
            if (langParam === 'en') {
                updateLanguageUI('en');
            } else {
                updateLanguageUI('id');
            }

            // Init AOS Animation
            AOS.init({
                once: true,
                offset: 100,
                duration: 800,
                easing: 'ease-out-cubic',
            });
        });

        // --- Mobile Menu Logic ---
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });

        // --- Axios Form Submit ---
        const form = document.getElementById('contactForm');
        const submitBtn = document.getElementById('submitBtn');

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const originalText = submitBtn.innerText;
            submitBtn.innerText = currentLang === 'id' ? 'Mengirim...' : 'Sending...';
            submitBtn.disabled = true;
            submitBtn.classList.add('opacity-75');

            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value,
                userId: 1 
            };

            try {
                const response = await axios.post('https://jsonplaceholder.typicode.com/posts', formData);
                const successMsg = currentLang === 'id' ? 'Pesan terkirim!' : 'Message sent!';
                alert(`${successMsg} (Status: ${response.status})`);
                form.reset();
            } catch (error) {
                console.error('Error:', error);
                const errorMsg = currentLang === 'id' ? 'Gagal mengirim pesan.' : 'Failed to send message.';
                alert(errorMsg);
            } finally {
                submitBtn.innerText = originalText;
                submitBtn.disabled = false;
                submitBtn.classList.remove('opacity-75');
            }
        });
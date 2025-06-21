// Impor modul dan dependensi yang diperlukan
const {
    monospace,
    italic,
    quote
} = require("@itsreimau/ckptw-mod");

// Konfigurasi
global.config = {
    // Informasi bot dasar
    bot: {
        name: "Neu-WaBot", // Nama bot
        prefix: /^[°•π÷×¶∆£¢€¥®™+✓_=|/~!?@#%^&.©^]/i, // Karakter awalan perintah yang diizinkan
        phoneNumber: "6283839203081", // Nomor telepon bot (tidak perlu diisi jika menggunakan QR code)
        thumbnail: "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text=Neu-WaBot", // Gambar thumbnail bot
        groupJid: "120363391379200206@g.us", // JID untuk group bot (opsional jika tidak menggunakan requireBotGroupMembership)
        newsletterJid: "120363370002595070@newsletter", // JID untuk saluran bot

        // Konfigurasi autentikasi sesi bot
        authAdapter: {
            adapter: "default", // Adapter untuk menyimpan sesi (Pilihan adapter: default, mysql, mongo, firebase)

            // Konfigurasi default
            default: {
                authDir: "state"
            },

            // Konfigurasi MySQL
            mysql: {
                host: "localhost:3306", // Nama host
                user: "root", // Nama pengguna
                password: "admin123", // Kata sandi
                database: "Neu-WaBot" // Nama database
            },

            // Konfigurasi MongoDB
            mongodb: {
                url: "mongodb://localhost:27017/Neu-WaBot" // URL
            },

            // Konfigurasi Firebase
            firebase: {
                tableName: "Neu-WaBot", // Nama tabel
                session: "state" // Nama sesi
            }
        }
    },

    // Pesan bot yang disesuaikan untuk situasi tertentu
    msg: {
        admin: quote("⛔ Perintah hanya dapat diakses oleh admin grup!"), // Pesan saat perintah hanya untuk admin
        banned: quote("⛔ Tidak dapat memproses karena kamu telah dibanned oleh Owner!"), // Pesan untuk pengguna yang dibanned
        botAdmin: quote("⛔ Tidak dapat memproses karena bot bukan admin grup ini!"), // Pesan jika bot bukan admin di grup
        botGroupMembership: quote(`⛔ Tidak dapat memproses karena kamu tidak bergabung dengan grup bot! Ketik ${monospace("/botgroup")} untuk mendapatkan link grup bot.`), // Pesan jika pengguna tidak bergabung dengan grup bot
        coin: quote("⛔ Tidak dapat memproses karena koin-mu tidak cukup!"), // Pesan saat koin tidak cukup
        cooldown: quote("🔄 Perintah ini sedang dalam cooldown, tunggu..."), // Pesan saat cooldown perintah
        gamerestrict: quote("⛔ Tidak dapat memproses karena grup ini membatasi game!"),
        group: quote("⛔ Perintah hanya dapat diakses dalam grup!"), // Pesan untuk perintah grup
        owner: quote("⛔ Perintah hanya dapat diakses Owner!"), // Pesan untuk perintah yang hanya owner bisa akses
        premium: quote("⛔ Tidak dapat memproses karena kamu bukan pengguna Premium!"), // Pesan jika pengguna bukan Premium
        private: quote("⛔ Perintah hanya dapat diakses dalam obrolan pribadi!"), // Pesan untuk perintah obrolan pribadi
        restrict: quote("⛔ Perintah ini telah dibatasi karena alasan keamanan!"), // Pesan pembatasan perintah

        readmore: "\u200E".repeat(4001), // String read more
        note: "“Lorem ipsum dolor sit amet, tenebris in umbra, vitae ad mortem.”", // Catatan
        footer: italic("Developed by ItsReimau"), // Footer di pesan bot

        wait: quote("🔄 Tunggu sebentar..."), // Pesan loading
        notFound: quote("❎ Tidak ada yang ditemukan! Coba lagi nanti."), // Pesan item tidak ditemukan
        urlInvalid: quote("❎ URL tidak valid!") // Pesan jika URL tidak valid
    },

    // Informasi owner bot
    owner: {
        name: "Ariff [U.C]", // Nama owner bot
        organization: "Unity Central", // Nama organisasi owner bot
        id: "6281313918102", // Nomor telepon owner bot
        co: ["6283879175089"] // Nomor co-owner bot
    },

    // Stiker bot
    sticker: {
        packname: "", // Nama paket stiker
        author: "Neu-WaBot <github.com/AzRyCb/ckptw-wabot>" // Pembuat stiker
    },

    // Sistem bot
    system: {
        alwaysOnline: false, // Bot selalu berstatus "online"
        antiCall: true, // Bot secara otomatis membanned orang yang menelepon
        autoMention: true, // Bot otomatis mention seseorang dalam pesan yang dikirim
        autoAiLabel: true, // Bot otomatis memamaki label AI dalam pesan yang dikirim (hanya berfungsi di chat private)
        autoRead: false, // Bot baca pesan otomatis
        autoTypingOnCmd: true, // Tampilkan status "sedang mengetik" saat memproses perintah
        cooldown: 10 * 1000, // Jeda antar perintah (ms)
        maxListeners: 50, // Max listeners untuk events
        port: 3000, // Port (jika pakai server)
        reportErrorToOwner: true, // Laporkan kesalahan ke owner bot
        restrict: false, // Batasi akses perintah
        requireBotGroupMembership: true, // Harus gabung grup bot
        requireGroupSewa: false, // Harus sewa bot untuk bisa dipakai di grup
        selfOwner: false, // Bot jadi owner sendiri
        selfReply: true, // Bot bisa balas pesan bot sendiri
        timeZone: "Asia/Jakarta", // Zona waktu bot
        uploaderHost: "FastUrl", // Host uploader untuk menyimpan media (Tersedia: Catbox, Cloudku, Erhabot, FastUrl, IDNet, Litterbox, Nyxs, Pomf, Quax, Ryzen, Shojib, TmpErhabot, Uguu, Videy)
        useCoin: false, // Pakai koin
        usePairingCode: true, // Pakai kode pairing untuk koneksi
        customPairingCode: "PAIRCODE", // Kode pairing kustom untuk koneksi (tidak perlu diisi jika menggunakan QR code, jika kosong kode pairing akan random)
        useServer: false // Jalankan bot dengan server
    }
};

// Modul dan dependensi yang diperlukan
const pkg = require("./package.json");
const {
    monospace,
    italic,
    quote
} = require("@mengkodingan/ckptw");

// Konfigurasi
global.config = {
    // Informasi bot dasar
    bot: {
        name: "NeuBot", // Nama bot
        prefix: /^[°•π÷×¶∆£¢€¥®™+✓_=|/~!?@#%^&.©^]/i, // Karakter awalan perintah yang diizinkan
        phoneNumber: "", // Nomor telepon bot (opsional jika menggunakan QR code)
        thumbnail: "https://img.freepik.com/premium-vector/robot-icon-chat-bot-sign-support-service-concept-chatbot-character-flat-style_41737-796.jpg?w=1060", // Gambar thumbnail bot
        website: "https://chat.whatsapp.com/GQ6RHr5jPy920dPVTpq4uC", // Website untuk WhatsApp bot
        groupJid: "120363391379200206@g.us" // JID untuk group bot (opsional jika tidak menggunakan requireBotGroupMembership)
    },

    // Pesan bot yang disesuaikan untuk situasi tertentu
    msg: {
        admin: quote("⛔ Perintah hanya dapat diakses oleh admin grup!"), // Pesan ketika perintah hanya untuk admin
        banned: quote("⛔ Tidak dapat memproses karena Anda telah dibanned oleh Owner!"), // Pesan untuk pengguna yang dibanned
        botAdmin: quote("⛔ Tidak dapat memproses karena bot bukan admin grup ini!"), // Pesan jika bot bukan admin di grup
        botGroupMembership: quote("⛔ Tidak dapat memproses karena Anda tidak bergabung dengan grup bot!"), // Pesan untuk pengguna yang tidak ada dalam grup
        cooldown: quote("🔄 Perintah ini sedang dalam cooldown, tunggu..."), // Pesan saat cooldown perintah
        coin: quote("⛔ Tidak dapat memproses karena koin Anda tidak cukup!"), // Pesan ketika koin tidak cukup
        group: quote("⛔ Perintah hanya dapat diakses dalam grup!"), // Pesan untuk perintah grup
        owner: quote("⛔ Perintah hanya dapat diakses Owner!"), // Pesan untuk perintah yang hanya owner bisa akses
        premium: quote("⛔ Tidak dapat memproses karena Anda bukan pengguna Premium!"), // Pesan jika pengguna bukan Premium
        private: quote("⛔ Perintah hanya dapat diakses dalam obrolan pribadi!"), // Pesan untuk perintah obrolan pribadi
        restrict: quote("⛔ Perintah ini telah dibatasi karena alasan keamanan!"), // Pesan pembatasan perintah

        watermark: `@${pkg.name} / v${pkg.version}`, // Watermark nama dan versi pada bot
        footer: italic("Developed by ItsReimau"), // Footer di pesan bot
        readmore: "\u200E".repeat(4001), // String read more
        note: "“Lorem ipsum dolor sit amet, tenebris in umbra, vitae ad mortem.”", // Catatan

        wait: quote("🔄 Tunggu sebentar..."), // Pesan loading
        notFound: quote("❎ Tidak ada yang ditemukan! Coba lagi nanti."), // Pesan item tidak ditemukan
        urlInvalid: quote("❎ URL tidak valid!") // Pesan jika URL tidak valid
    },

    // Informasi owner bot
    owner: {
        name: "z_ryyw", // Nama owner bot
        organization: "Npm Community", // Nama organisasi owner bot
        id: "6283879175089", // Nomor telepon owner bot
        co: ["6285211425532"] // Nomor co-owner bot
    },

    // Kunci API
    APIKey: {
        gifted: "gifted", // APIKey disediakan oleh Gifted Tech
        nexoracle: "free_key@maher_apis", // APIKey disediakan oleh Maher Zubair
        ssateam: "root" // APIKey disediakan oleh Fainshe
    },

    // Stiker bot
    sticker: {
        packname: "Created By NeuBot", // Nama paket stiker
        author: "https://instagram.com/z_ryyw" // Pembuat stiker
    },

    // Sistem bot
    system: {
        alwaysOnline: falss, // Bot selalu berstatus "online"
        autoMention: false, // Bot otomatis mention seseorang dalam pesan yang dikirim
        autoRead: false, // Bot baca pesan otomatis
        autoTypingOnCmd: true, // Tampilkan status "sedang mengetik" saat memproses perintah
        cooldown: 10 * 1000, // Jeda antar perintah (ms)
        port: 3000, // Port (jika pakai server)
        restrict: false, // Batasi akses perintah
        requireBotGroupMembership: true, // Harus gabung grup bot
        selfOwner: false, // Bot jadi owner sendiri
        selfReply: true, // Bot balas pesan bot sendiri
        timeZone: "Asia/Jakarta", // Zona waktu bot
        useCoin: true, // Pakai koin
        usePairingCode: true, // Pakai kode pairing untuk koneksi
        useServer: false // Jalankan bot dengan server
    }
};
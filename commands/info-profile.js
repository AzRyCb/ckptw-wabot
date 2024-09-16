const {
    quote
} = require("@mengkodingan/ckptw");
const mime = require("mime-types");

module.exports = {
    name: "profile",
    category: "info",
    code: async (ctx) => {
        const {
            status,
            message
        } = await global.handler(ctx, {
            banned: true,
            cooldown: true
        });
        if (status) return ctx.reply(message);

        try {
            const senderNumber = ctx.sender.jid.split("@")[0];
            const [energy, premium, onCharger] = await Promise.all([
                global.db.get(`user.${senderNumber}.energy`) || "-",
                global.db.get(`user.${senderNumber}.isPremium`) ? "Ya" : "Tidak",
                global.db.get(`user.${senderNumber}.onCharger`) ? "Ya" : "Tidak",
            ]);

            let profileUrl;
            try {
                profileUrl = await bot.core.profilePictureUrl(jid, "image");
            } catch (error) {
                profileUrl = "https://i.ibb.co/3Fh9V6p/avatar-contact.png";
            }

            return await ctx.reply({
                image: {
                    url: profileUrl,
                },
                mimetype: mime.contentType("png"),
                caption: `${quote(`Nama: ${ctx.sender.pushName}`)}\n` +
                    `${quote(`Premium: ${premium}`)}\n` +
                    `${quote(`Energi: ${energy}`)}\n` +
                    `${quote(`Pengisian energi: ${onCharger}`)}\n` +
                    "\n" +
                    global.config.msg.footer,
            });
        } catch (error) {
            console.error("[ckptw-wabot] Kesalahan:", error);
            return ctx.reply(quote(`⚠ Terjadi kesalahan: ${error.message}`));
        }
    }
};
const {
    quote
} = require("@itsreimau/ckptw-mod");

module.exports = {
    name: "addcoinuser",
    aliases: ["addcoin", "acu"],
    category: "owner",
    permissions: {
        owner: true
    },
    code: async (ctx) => {
        const mentionedJid = ctx.msg.message.extendedTextMessage?.contextInfo?.mentionedJid?.[0];
        const userJid = ctx.quoted.senderJid || mentionedJid || (ctx.args[0] ? `${ctx.args[0].replace(/[^\d]/g, "")}@s.whatsapp.net` : null);
        const coinAmount = parseInt(ctx.args[mentionedJid ? 1 : 0], 10) || null;

        if (!userJid && !coinAmount) return await ctx.reply({
            text: `${quote(tools.msg.generateInstruction(["send"], ["text"]))}\n` +
                `${quote(tools.msg.generateCmdExample(ctx.used, `@${ctx.getId(ctx.sender.jid)} 8`))}\n` +
                quote(tools.msg.generateNotes(["Balas atau kutip pesan untuk menjadikan pengirim sebagai akun target."])),
            mentions: [ctx.sender.jid]
        });

        const isOnWhatsApp = await ctx.core.onWhatsApp(userJid);
        if (isOnWhatsApp.length === 0) return await ctx.reply(quote("❎ Akun tidak ada di WhatsApp!"));

        try {
            await db.add(`user.${ctx.getId(userJid)}.coin`, coinAmount);

            await ctx.sendMessage(userJid, {
                text: quote(`🎉 Kamu telah menerima ${coinAmount} koin dari Owner!`)
            });
            return await ctx.reply(quote(`✅ Berhasil menambahkan ${coinAmount} koin kepada pengguna!`));
        } catch (error) {
            return await tools.cmd.handleError(ctx, error);
        }
    }
};
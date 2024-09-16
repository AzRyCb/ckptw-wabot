const {
    bold,
    quote
} = require("@mengkodingan/ckptw");
const axios = require("axios");
const mime = require("mime-types");

module.exports = {
    name: "lyrics",
    aliases: ["lirik", "lyric"],
    category: "internet",
    code: async (ctx) => {
        const {
            status,
            message
        } = await global.handler(ctx, {
            banned: true,
            charger: true,
            cooldown: true,
            energy: 10
        });
        if (status) return ctx.reply(message);

        const input = ctx.args.join(" ") || null;

        if (!input) return ctx.reply(
            `${quote(global.tools.msg.generateInstruction(["send"], ["text"]))}\n` +
            global.tools.msg.generateCommandExample(ctx._used.prefix + ctx._used.command, "hikaru utada - one last kiss")
        );

        try {
            const apiUrl = await global.tools.api.createUrl("ngodingaja", "/api/lirik", {
                search: input
            });
            const {
                data
            } = await axios.get(apiUrl);

            return ctx.reply(
                `${quote(`Judul: ${data.hasil.judul}`)}\n` +
                `${quote(`Artis: ${data.hasil.artis}`)}\n` +
                `${quote("─────")}\n`
                `${data.hasil.lirik}\n` +
                "\n" +
                global.config.msg.footer
            );
        } catch (error) {
            console.error("[ckptw-wabot] Kesalahan:", error);
            if (error.status !== 200) return ctx.reply(global.config.msg.notFound);
            return ctx.reply(`${bold("[ ! ]")} Terjadi kesalahan: ${error.message}`);
        }
    }
};
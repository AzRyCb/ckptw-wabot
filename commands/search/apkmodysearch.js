const {
    quote
} = require("@itsreimau/ckptw-mod");
const axios = require("axios");

module.exports = {
    name: "apkmodysearch",
    aliases: ["apkmody", "apkmodys"],
    category: "search",
    permissions: {
        coin: 10
    },
    code: async (ctx) => {
        const input = ctx.args.join(" ") || null;

        if (!input) return await ctx.reply(
            `${quote(tools.cmd.generateInstruction(["send"], ["text"]))}\n` +
            quote(tools.cmd.generateCommandExample(ctx.used, "evangelion"))
        );

        try {
            const apiUrl = tools.api.createUrl("siputzx", "/api/apk/apkmody", {
                search: input
            });
            const result = (await axios.get(apiUrl)).data.data;

            const resultText = result.map(r =>
                `${quote(`Nama: ${r.title}`)}\n` +
                `${quote(`Versi: ${r.version}`)}\n` +
                `${quote(`Genre: ${r.genre}`)}\n` +
                `${quote(`URL: ${r.url}`)}`
            ).join(
                "\n" +
                `${quote("─────")}\n`
            );
            return await ctx.reply(
                `${resultText}\n` +
                "\n" +
                config.msg.footer
            );
        } catch (error) {
            return await tools.cmd.handleError(ctx, error, true);
        }
    }
};
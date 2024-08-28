const {
    createAPIUrl
} = require("../tools/api.js");
const {
    getMediaQuotedMessage
} = require("../tools/general.js");
const {
    monospace,
    quote
} = require("@mengkodingan/ckptw");
const {
    MessageType
} = require("@mengkodingan/ckptw/lib/Constant");
const axios = require("axios");
const mime = require("mime-types");
const {
    uploadByBuffer
} = require("telegraph-uploader");

module.exports = {
    name: "ocr",
    category: "tools",
    code: async (ctx) => {
        const {
            status,
            message
        } = await global.handler(ctx, {
            banned: true,
            coin: 3
        });
        if (status) return ctx.reply(message);

        const msgType = ctx.getMessageType();
        const quotedMessage = ctx.quoted;

        if (msgType !== MessageType.imageMessage && !quotedMessage) return ctx.reply(quote(`📌 Berikan atau balas media berupa gambar!`));

        try {
            const type = quotedMessage ? ctx.getContentType(quotedMessage) : null;
            const object = type ? quotedMessage[type] : null;
            const buffer = type === "imageMessage" ?
                await getMediaQuotedMessage(object, type.slice(0, -7)) :
                await ctx.getMediaMessage(ctx.msg, "buffer");
            const uplRes = await uploadByBuffer(buffer, mime.contentType("png"));
            const apiUrl = createAPIUrl("fasturl", "/tool/ocr", {
                imageUrl: uplRes.link
            });
            const {
                data
            } = await axios.get(apiUrl, {
                headers: {
                    "User-Agent": global.system.userAgent
                }
            });

            const resultText = data.segments.map((segment, index) => {
                return `${quote(`Teks: ${segment.text}`)}\n` +
                    `${quote(`Posisi: (X: ${segment.boundingBox.pixelCoords.x}, Y: ${segment.boundingBox.pixelCoords.y})`)}\n` +
                    `${quote(`Ukuran: ${segment.boundingBox.pixelCoords.width}x${segment.boundingBox.pixelCoords.height}`)}\n` +
                    `${quote(`Center: (${segment.boundingBox.centerPerX * 100}%, ${segment.boundingBox.centerPerY * 100}%)`)}`
            }).join(
                "\n" +
                `${quote("─────")}\n`
            );
            return await ctx.reply(
                `${resultText}\n` +
                "\n" +
                global.msg.footer
            );
        } catch (error) {
            console.error("Error", error);
            if (error.status !== 200) return ctx.reply(global.msg.notFound);
            return ctx.reply(quote(`⚠ Terjadi kesalahan: ${error.message}`));
        }
    }
};
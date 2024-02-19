const {
    tebakkata
} = require('@bochilteam/scraper');
const similarity = require('similarity');

const session = new Map();

module.exports = {
    name: 'tebakkata',
    aliases: ['guessword', 'whatword'],
    category: 'game',
    code: async (ctx) => {
        if (session.has(ctx.id)) return ctx.reply('Sesi permainan sedang berjalan!');

        let timeout = 120000;
        let threshold = 0.72;
        let question = await tebakkata();
        let col = ctx.MessageCollector({
            time: timeout
        });

        session.set(ctx.id, true);

        ctx.reply(
            `• Soal: ${question.soal}\n` +
            '\n' +
            `Batas waktu ${(timeout / 1000).toFixed(2)} detik.\n` +
            `Ketik 'hint' untuk bantuan.`
        );

        col.on('collect', (m) => {
            if (m.content.toLowerCase().trim() === question.jawaban.toLowerCase().trim()) {
                session.delete(ctx.id);

                ctx.reply(
                    `${ctx._sender.pushName} telah berhasil menjawab!\n` +
                    `Jawabannya adalah ${question.jawaban}.`
                );
                col.stop();
            } else if (m.content.toLowerCase() === 'hint') {
                let clue = question.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/g, '_');
                ctx.reply(clue);
            } else if (similarity(m.content.toLowerCase(), question.jawaban.toLowerCase().trim()) >= threshold) {
                if (m.content.toLowerCase().trim() !== question.jawaban.toLowerCase().trim()) {
                    ctx.reply('Sedikit lagi!');
                }
            }
        });

        col.on('end', async (collector, r) => {
            session.delete(ctx.id);

            await ctx.reply(
                `Waktu habis!\n` +
                `Jawabannya adalah ${question.jawaban}.`
            );
        });
    }
};
let handler = async (m, { conn, command, text }) => {
let stupidity = `*🤡 نسبة غباء الاعضاء 🤡*
*نسبة غباء ${text} 🤡هي* *${Math.floor(Math.random() * 100)}%* *من 100%*
*ربنا يشفيه ويبقى ذكي😂❤*
`.trim()
m.reply(stupidity, null, { mentions: conn.parseMention(stupidity) })}
handler.help = ['stupidity']
handler.tags = ['fun']
handler.command = /^(غباء)$/i
export default handler
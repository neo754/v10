//let { MessageType } = require('@adiwajshing/baileys')
let { MessageType } = (await import('@adiwajshing/baileys')).default
let handler = async (m, { conn, text, participants }) => {
  let users = participants.map(u => u.jid)
  m.reply(text + '\n Hai Saya 𝙉𝘼𝙔𝙇𝘼-𝙈𝘿 Jangan Lupa follow ig 𝙉𝘼𝙔𝙇𝘼-𝙈𝘿\n\nDengan klik link ig : https://instagram.com/neohihin21 ', null, {
    contextInfo: { mentionedJid: users }
  })
}
handler.command = ['zyko-md']

handler.admin = false
handler.group = false

export default handler

//let { MessageType } = require('@adiwajshing/baileys')
let { MessageType } = (await import('@adiwajshing/baileys')).default
let handler = async (m, { conn, text, participants }) => {
  let users = participants.map(u => u.jid)
  m.reply(text + '\n Hai Saya ππΌπππΌ-ππΏ Jangan Lupa follow ig ππΌπππΌ-ππΏ\n\nDengan klik link ig : https://instagram.com/neohihin21 ', null, {
    contextInfo: { mentionedJid: users }
  })
}
handler.command = ['zyko-md']

handler.admin = false
handler.group = false

export default handler

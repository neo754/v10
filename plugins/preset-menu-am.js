let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()

//------- NOMOR
  let nowner = `${nomorown.split`@`[0]}@s.whatsapp.net`
  let teksnomor = `${htki} *OWNER* ${htka}
â¦ @${nomorown.split`@`[0]} â¦
------- ${nameown} -------

ð® *Note:*
â¢ Owner tidak menerima save contact
â¢ Owner berhak blockir tanpa alasan
â¢ Berbicaralah yang sopan & tidak spam
â¢ Owner Hanya merespon yang berkaitan dengan BOT
â¢ No Telp`
const sections = [
   {
	title: `${htjava} *PRESET MENU* âââââââââÂ·â¢`,
	rows: [
	{title: "â¢ Preset 1", rowId: ".p1"},
    {title: "â¢ Preset 2", rowId: ".p2"},
	{title: "â¢ Preset 3", rowId: ".p3"},
	{title: "â¢ Preset 4", rowId: ".p4"},
	{title: "â¢ Preset 5", rowId: ".p5"},
	{title: "â¢ Preset 6", rowId: ".p6"},
	{title: "â¢ Preset 7", rowId: ".p7"},
	{title: "â¢ Preset 8", rowId: ".p8"},
	{title: "â¢ Preset 9", rowId: ".p9"},
	{title: "â¢ Preset 10", rowId: ".p10"},
]
    },{
	title: `${htjava} SUPPORT ME âââââââÂ·â¢`,
	rows: [
	    {title: "ð¹ â¢ Donasi", rowId: ".owner nomor"},
	{title: "ð â¢ Sewa", rowId: ".sewa"},
	{title: "ð â¢ Buy Premium", rowId: ".premium"},
	]
  },
]
const listMessage = {
  text: 'á´ÊÉªá´á´ Êá´á´á´á´É´ É´á´á´¡!',
  footer: 'ã ÊÉªsá´ á´Êá´sá´á´ á´á´É´á´ ã',
  title: ' ',
  buttonText: "Preset Alight Motion",
  sections
}

  try {
    if (/(presetmenu)/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'nomor':
          conn.reply(m.chat, teksnomor, m, { contextInfo: { mentionedJid: [nowner] }})
            break
          default:
            return await conn.sendMessage(m.chat, listMessage, m, { contextInfo: { mentionedJid: [m.sender] }})
        }
    } else if (/enchant|enchan/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.sendButton( m.chat, caption, wm, null, [`â®â° Menu`, `.menu`], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['presetmenu']
handler.tags = ['preset']
handler.command = /^(presetmenu)/i


export default handler

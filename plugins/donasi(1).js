import fetch from 'node-fetch'

//Plugin By Rull!!
let handler = async (m, { conn, usedPrefix }) => {
	let url = 'https://telegra.ph/file/ffb01fd01cf4ba25e029d.jpg'
	conn.sendButton(m.chat, '〔 Dᴏɴᴛ ғᴏʀɢᴇᴛ Dᴏɴᴀᴛɪᴏɴ 〕                    \n╭─「_• *Dana Only* •_」\n│ • *Dana* [085710677726]\n│ • *Saweria* https://saweria.co/Hihin\n╰────\n\n◛˖ ```Yuk Bang Donasi Seikhlasnya, Buat Beli Apikey Supaya Fitur No Eror☺🙏```', wm, await(await fetch(url)).buffer(), [['Owner',`/owner`]],m)
}
handler.command = /^(donetlol)$/i
handler.tags = ['info']
handler.help = ['don']
handler.premium = false
handler.limit = false

export default handler

// 📮 Made In Rull
// Subscribe YouTube RullZY!
// Tq To Jangan Di Hpus!!
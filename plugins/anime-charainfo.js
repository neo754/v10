import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
  if (!text) throw `Masukkan query!`
  let res = await fetch(global.API('https://api.jikan.moe', '/v3/search/character', { q: text }))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  let { name, alternative_names, url, image_url, type } = json.results[0]
let charaingfo = `π¬ *Name:* ${name}
π­ *Nickname:* ${alternative_names}
π *Link*: ${url}
π€ *Character Type*: ${type}`
  const ftroli = {
    key : {
    remoteJid: '6283136505591-1614953337@g.us',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 2022,
    status: 1,
    surface : 1,
    message: `Character ${name}`, 
    orderTitle: `ππΌπππΌ-ππΏ`,
    thumbnail: 'https://telegra.ph/file/ce5401bd0ab16c645372c.jpg', 
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
  conn.sendFile(m.chat, image_url, '', charaingfo, ftroli)
}
handler.help = ['character <nama>']
handler.tags = ['anime']
handler.command = /^(chara|character)$/i
//kyaa jangan biarkan wabot-aq terbengkalai sampai nurutomo kembali
// Command - Re Edited -- TOXIC-DEVIL == || Character Type ||
export default handler 

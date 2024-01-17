let media = './media/menus/Menu7.jpg'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let str = `🪁Grupos Del Bot BrolyBot-MD :D🌻

_GRUPO l BROLY_
https://chat.whatsapp.com/JUFI96ESVoYLEBmImN28o6

_GRUPO ll BROLY_
https://chat.whatsapp.com/EcMl1FK9sgx8tnhE91cTmF

_GRUPO lll BROLY_
https://chat.whatsapp.com/JUFI96ESVoYLEBmImN28o6

_GRUPO STAFF BROLY_
https://chat.whatsapp.com/CtuZulsXYaf25B6D8OLBgU

_CANAL BROLY_
https://whatsapp.com/channel/0029Va98AwkISTkJMjfZtZ1T

_CANAL SAKURABOT_
https://whatsapp.com/channel/0029VaHYnwaKQuJIlTFuS22l

_CANAL SAKURABOT 2_
https://whatsapp.com/channel/0029VaIg4lxInlqUNkN7A53w`
await conn.sendFile(m.chat, media, 'gata.mp4', str, fkontak)}
/*conn.sendHydrated(m.chat, str, `𝙂𝘼𝙏𝘼 𝘿𝙄𝙊𝙎 - 𝘼𝙎𝙄𝙎𝙏𝙀𝙉𝘾𝙄𝘼\n\n\n` + wm, media, 'https://github.com/diegojadibot/SakuraBotLite-MD', 'SakuraBotLite-MD', null, null, [
['𝘾𝙪𝙚𝙣𝙩𝙖𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 | 𝘼𝙘𝙘𝙤𝙪𝙣𝙩𝙨 ✅', '.cuentassb'],
['🎁 𝘿𝙤𝙣𝙖𝙧 | 𝘿𝙤𝙣𝙖𝙩𝙚', '.donar'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)}*/

handler.command = /^linkgc|grupos|gruposbrolyt|sakurabotgrupos|gruposdebrolybot|groupofc|grupossb|gruposb|groupsb$/i
handler.exp = 33

export default handler
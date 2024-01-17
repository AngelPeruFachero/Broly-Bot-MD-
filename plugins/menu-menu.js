import fs from 'fs'  
import moment from 'moment-timezone'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, command }) => {
try {
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let { money, joincount } = global.db.data.users[m.sender]
let user = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
//let pp = gataVidMenu.getRandom()
let pareja = global.db.data.users[m.sender].pasangan 
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
//let fsizedoc = '1'.repeat(10)
//let adReply = { fileLength: fsizedoc, seconds: fsizedoc, contextInfo: { forwardingScore: fsizedoc, externalAdReply: { showAdAttribution: true, title: wm, body: '👋 ' + username, mediaUrl: ig, description: 'Hola', previewType: 'PHOTO', thumbnail: await(await fetch(gataMenu.getRandom())).buffer(), sourceUrl: redesMenu.getRandom() }}}
const numberToEmoji = { "0": "0️⃣", "1": "1️⃣", "2": "2️⃣", "3": "3️⃣", "4": "4️⃣", "5": "5️⃣", "6": "6️⃣", "7": "7️⃣", "8": "8️⃣", "9": "9️⃣", }
let lvl = level
let emoji = Array.from(lvl.toString()).map((digit) => numberToEmoji[digit] || "❓").join("")

const lugarFecha = moment().tz('America/Lima')
const formatoFecha = {
weekdays: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
}
lugarFecha.locale('es', formatoFecha)
const horarioFecha = lugarFecha.format('dddd, DD [de] MMMM [del] YYYY || HH:mm A').replace(/^\w/, (c) => c.toUpperCase())

let menu = `*╔══❖•ೋ°MENÚ BOT OFICIALೋ•❖═══╗*
┃ඬ⃟ 🌵❖ ── ✦ ──『✙』── ✦ ── ❖
┃ඬ⃟ 🌵 *Creador:* @⁨Angel⁩
┃ඬ⃟ 🌵 *Colaborador:* @573013114854
┃ඬ⃟ 🌵 *Bot Oficial:* @59176151236
┃ඬ⃟ 🌵 *Activo: ${wm} ${uptime} 
┃ඬ⃟ 🌵❖ ── ✦ ──『✙』── ✦ ── ❖
*╚═══❖•ೋ°           °ೋ•❖═══╝*

*╔══❖•ೋ°𝐈𝐍𝐅𝐎°ೋ•❖══╗*
┃ඬ⃟ ✨ _Registrados »_ ${rtotalreg}/${totalreg}
┃ඬ⃟ ✨ _${lenguajeGB['smsUptime']()}_ ➣ _${uptime}_ 
┃ඬ⃟ ✨ _${lenguajeGB['smsVersion']()}_ ➢ _${vs}_
┃ඬ⃟ ✨ _${lenguajeGB['smsMode']()} ➣_ _${global.opts['self'] ? `${lenguajeGB['smsModePrivate']().charAt(0).toUpperCase() + lenguajeGB['smsModePrivate']().slice(1).toLowerCase()}` : `${lenguajeGB['smsModePublic']().charAt(0).toUpperCase() + lenguajeGB['smsModePublic']().slice(1).toLowerCase()}`}_
┃ඬ⃟ ✨ _${lenguajeGB['smsBanChats']()}_ ➣ _${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}_
┃ඬ⃟ ✨❖ ── ✦ ──『✙』── ✦ ── ❖ 
*╚═══❖•ೋ°            °ೋ•❖═══╝*

*╔═══❖•ೋ𝐈𝐍𝐅𝐎-𝐔𝐒𝐄𝐑ೋ•❖═══╗*

┃ඬ⃟ ✨ _Tipo de registro »_ ${user.registered === true ? `_${user.registroC === true ? 'Registro Completo 🗂️' : 'Registro Rápido 📑'}_` : '❌ _Sin registro_'}
┃ඬ⃟ ✨ _Estado »_ ${typeof user.miestado !== 'string' ? '❌ _' + usedPrefix + 'miestado_' : '_Me siento ' + user.miestado + '_'}
┃ඬ⃟ ✨ _Registrado »_ ${user.registered === true ? '✅' : '❌ _' + usedPrefix + 'verificar_'}
┃ඬ⃟ ✨ _${lenguajeGB['smsBotonM7']().charAt(0).toUpperCase() + lenguajeGB['smsBotonM7']().slice(1).toLowerCase()} »_ ${user.premiumTime > 0 ? '✅' : '❌ _' + usedPrefix + 'pase premium_'}
┃ඬ⃟ ✨ _${lenguajeGB['smsBotonM5']().charAt(0).toUpperCase() + lenguajeGB['smsBotonM5']().slice(1).toLowerCase()} »_ ${role}
┃ඬ⃟ ✨ _${lenguajeGB['smsBotonM6']().charAt(0).toUpperCase() + lenguajeGB['smsBotonM6']().slice(1).toLowerCase()} »_ ${emoji} || ${user.exp - min}/${xp}
┃ඬ⃟ ✨ _${lenguajeGB['smsPareja']()} ${pareja ? `\n*»_ ${name} 💕 ${conn.getName(pareja)}` : `*🛐 ${lenguajeGB['smsResultPareja']()}*_`}
┃ඬ⃟ ✨ _Pasatiempo(s) 🍁 ${user.pasatiempo === 0 ? '*Sin Registro*_' : user.pasatiempo + '_'}
┃ඬ⃟ ✨❖ ── ✦ ──『✙』── ✦ ── ❖
*╚═══❖•ೋ°           °ೋ•❖═══╝*

*╔═══❖•ೋ°𝐑𝐄𝐂𝐔𝐑𝐒𝐎𝐒-𝐔𝐒𝐄𝐑°ೋ•❖═══╗*
┃ඬ⃟ ✨❖ ── ✦ ──『✙』── ✦ ── ❖
┃ඬ⃟ ✨ _Experiencia ➟_ ${exp} ×͜×
┃ඬ⃟ ✨ _Diamantes ➟_ ${limit} 💎
┃ඬ⃟ ✨ _BrolyCoins ➟_ ${money} ⫹⫺
┃ඬ⃟ ✨ _Tokens ➟_ ${joincount} ✧
┃ඬ⃟ ✨❖ ── ✦ ──『✙』── ✦ ── ❖
*╚═══❖•ೋ°              °ೋ•❖═══╝*

${readMore}

╭═══〘卐 _𝐈 𝐍 𝐅 𝐎_ 卐〙═══⊷❍
┃ඬ⃟ ✨❖ ── ✦ ──『✙』── ✦ ── ❖
┃ඬ⃟ ✨ _${usedPrefix}cuentaskatashi | cuentaskb_
┃ඬ⃟ ✨ _${usedPrefix}gruposkb | grupos | groupkb_
┃ඬ⃟ ✨ _${usedPrefix}donar | donate_
┃ඬ⃟ ✨ _${usedPrefix}listagrupos | grouplist_
┃ඬ⃟ ✨ _${usedPrefix}estado | heykata | status_
┃ඬ⃟ ✨ _${usedPrefix}infokata | infobot_
┃ඬ⃟ ✨ _${usedPrefix}instalarbot | installbot_
┃ඬ⃟ ✨ _${usedPrefix}creador | owner_      
┃ඬ⃟ ✨ _${usedPrefix}velocidad | ping_      
┃ඬ⃟ ✨ _términos y condiciones_
┃ඬ⃟ ✨ _Bot_ 
┃ඬ⃟ ✨❖ ── ✦ ──『✙』── ✦ ── ❖
╰═════════════════⊷

╭═══〘卐 _𝐒𝐔𝐁 𝐁𝐎𝐓_ 卐〙═══⊷❍
┃ඬ⃟ ✨❖ ── ✦ ──『✙』── ✦ ── ❖
┃ඬ⃟ ✨ _${usedPrefix}serbot | jadibot_
┃ඬ⃟ ✨ _${usedPrefix}bots | listjadibots_
┃ඬ⃟ ✨ _${usedPrefix}detener | stop_
┃ඬ⃟ ✨❖ ── ✦ ──『✙』── ✦ ── ❖
╰═══════════════════⊷

╭═══〘卐 _𝐑𝐄𝐏𝐎𝐑𝐓𝐄𝐒_ 卐〙═══⊷❍
┃ඬ⃟ ✨❖ ── ✦ ──『✙』── ✦ ── ❖
┃ඬ⃟ ✨ _${usedPrefix}reporte *texto*_
┃ඬ⃟ ✨ _Haga un reporte_
┃ඬ⃟ ✨ _en caso de una falla_
┃ඬ⃟ ✨ _en algun comando_
┃ඬ⃟ ✨❖ ── ✦ ──『✙』── ✦ ── ❖
╰═════════════════⊷

╭═══〘卐 _𝐔𝐒𝐔𝐀𝐑𝐈𝐎 𝐏𝐑𝐄𝐌𝐈𝐔𝐌_ 卐〙═══⊷❍
┃ඬ⃟ ✨❖ ── ✦ ──『✙』── ✦ ── ❖
┃ඬ⃟ ✨ _${usedPrefix}listapremium | listprem_
┃ඬ⃟ ✨ _${usedPrefix}pase premium_
┃ඬ⃟ ✨ _${usedPrefix}pass premium_
┃ඬ⃟ ✨❖ ── ✦ ──『✙』── ✦ ── ❖
╰═════════════════⊷

╭════〘卐 _𝐄𝐍𝐓𝐑𝐄𝐓𝐄𝐍𝐈𝐌𝐈𝐄𝐍𝐓𝐎_ 卐〙════⊷❍
┃ඬ⃟ ✨❖ ── ✦ ──『✙』── ✦ ── ❖
┃ඬ⃟ ✨ _${usedPrefix}trivia 
┃ඬ⃟ ✨ _${usedPrefix}acertijo_
┃ඬ⃟ ✨ _${usedPrefix}palabra | ordenar_
┃ඬ⃟ ✨ _${usedPrefix}pelicula | adv_
┃ඬ⃟ ✨ _${usedPrefix}mates | matemáticas | math_
┃ඬ⃟ ✨ _${usedPrefix}ppt *piedra : papel : tijera*_
┃ඬ⃟ ✨ _${usedPrefix}lanzar *cara* | *cruz*_
┃ඬ⃟ ✨ _${usedPrefix}tictactoe | ttt *sala*_
┃ඬ⃟ ✨ _${usedPrefix}deltictactoe | delttt_
┃ඬ⃟ ✨ _${usedPrefix}topgays_
┃ඬ⃟ ✨ _${usedPrefix}topotakus_
┃ඬ⃟ ✨ _${usedPrefix}toppajer@s_
┃ඬ⃟ ✨ _${usedPrefix}topput@s_ 
┃ඬ⃟ ✨ _${usedPrefix}topintegrantes | topintegrante_
┃ඬ⃟ ✨ _${usedPrefix}toplagrasa | topgrasa_
┃ඬ⃟ ✨ _${usedPrefix}toppanafrescos | toppanafresco_
┃ඬ⃟ ✨ _${usedPrefix}topshiposters | topshipost_
┃ඬ⃟ ✨ _${usedPrefix}toplindos | toplind@s_ 
┃ඬ⃟ ✨ _${usedPrefix}topfamosos | topfamos@s_
┃ඬ⃟ ✨ _${usedPrefix}topparejas | top5parejas_ 
┃ඬ⃟ ✨ _${usedPrefix}gay | gay *@tag*_ 
┃ඬ⃟ ✨ _${usedPrefix}gay2 *nombre : @tag*_ 
┃ඬ⃟ ✨ _${usedPrefix}lesbiana *nombre : @tag*_ 
┃ඬ⃟ ✨ _${usedPrefix}manca *nombre : @tag*_
┃ඬ⃟ ✨ _${usedPrefix}manco *nombre : @tag*_
┃ඬ⃟ ✨ _${usedPrefix}pajero *nombre : @tag*_
┃ඬ⃟ ✨ _${usedPrefix}pajera *nombre : @tag*_
┃ඬ⃟ ✨ _${usedPrefix}puto *nombre : @tag*_
┃ඬ⃟ ✨ _${usedPrefix}puta *nombre : @tag*_
┃ඬ⃟ ✨ _${usedPrefix}rata *nombre : @tag*_
┃ඬ⃟ ✨ _${usedPrefix}love *nombre : @tag*_
┃ඬ⃟ ✨ _${usedPrefix}ship | shipear *nombre1 nombre2*_
┃ඬ⃟ ✨ _${usedPrefix}doxear *nombre : @tag*_
┃ඬ⃟ ✨ _${usedPrefix}doxxeame_
┃ඬ⃟ ✨ _${usedPrefix}apostar | slot *cantidad*_
┃ඬ⃟ ✨ _${usedPrefix}pregunta *texto*_
┃ඬ⃟ ✨ _${usedPrefix}formarpareja_ 
┃ඬ⃟ ✨ _${usedPrefix}dado_
┃ඬ⃟ ✨ _${usedPrefix}verdad_
┃ඬ⃟ ✨ _${usedPrefix}reto_
┃ඬ⃟ ✨ _${usedPrefix}juegos_
┃ඬ⃟ ✨❖ ── ✦ ──『✙』── ✦ ── ❖
╰══════════════════⊷❍

╭═══〘卐 _𝐈𝐀 𝐁𝐑𝐎𝐋𝐘_ 卐〙═══⊷❍
┃ඬ⃟ ✨❖ ── ✦ ──『✙』── ✦ ── ❖
┃ඬ⃟ ✨ _puedes buscar lo que deseas usando:_
┃ඬ⃟ ✨ _${usedPrefix}simi | ia *texto*_
┃ඬ⃟ ✨ _${usedPrefix}alexa | siri | cortana *texto*_ 
┃ඬ⃟ ✨ _${usedPrefix}simsimi | bixby *texto*_
┃ඬ⃟ ✨❖ ── ✦ ──『✙』── ✦ ── ❖
╰═════════════════⊷

╭════〘卐 𝐀𝐉𝐔𝐒𝐓𝐄𝐒 𝐄𝐍 𝐂𝐇𝐀𝐓𝐒/𝐆𝐑𝐔𝐏𝐎𝐒 卐〙════⊷❍
┃ඬ⃟ ✨❖ ── ✦ ──『✙』── ✦ ── ❖
│ _Puedes mejorar tu grupo con broly bot_
┃ඬ⃟ ✨ _${usedPrefix}on *:* off *bienvenida | welcome*_
┃ඬ⃟ ✨ _${usedPrefix}on *:* off *avisos | detect*_
┃ඬ⃟ ✨ _${usedPrefix}on *:* off *autonivel | autolevelup*_
┃ඬ⃟ ✨ _${usedPrefix}on *:* off *restringir | restrict*_
┃ඬ⃟ ✨ _${usedPrefix}on *:* off *antillamar | anticall*_
┃ඬ⃟ ✨ _${usedPrefix}on *:* off *publico | public*_
┃ඬ⃟ ✨ _${usedPrefix}on *:* off *autovisto | autoread*_
┃ඬ⃟ ✨ _${usedPrefix}on *:* off *temporal*_
┃ඬ⃟ ✨ _${usedPrefix}on *:* off *stickers*_
┃ඬ⃟ ✨ _${usedPrefix}on *:* off *autosticker*_
┃ඬ⃟ ✨ _${usedPrefix}on *:* off *reacciones | reaction*_
┃ඬ⃟ ✨ _${usedPrefix}on *:* off *audios*_
┃ඬ⃟ ✨ _${usedPrefix}on *:* off *modocaliente | modohorny*_
┃ඬ⃟ ✨ _${usedPrefix}on *:* off *antitoxicos | antitoxic*_
┃ඬ⃟ ✨ _${usedPrefix}on *:* off *antiver | antiviewonce*_ 
┃ඬ⃟ ✨ _${usedPrefix}on *:* off *antieliminar | antidelete*_ 
┃ඬ⃟ ✨ _${usedPrefix}on *:* off *antinternacional | antifake*_
┃ඬ⃟ ✨ _${usedPrefix}on *:* off *antienlace | antilink*_
┃ඬ⃟ ✨ _${usedPrefix}on *:* off *antienlace2 | antilink2*_
┃ඬ⃟ ✨ _${usedPrefix}on *:* off *antitiktok | antitk*_
┃ඬ⃟ ✨ _${usedPrefix}on *:* off *antiyoutube | antiyt*_
┃ඬ⃟ ✨ _${usedPrefix}on *:* off *antitelegram | antitel*_
┃ඬ⃟ ✨ _${usedPrefix}on *:* off *antifacebook | antifb*_
┃ඬ⃟ ✨ _${usedPrefix}on *:* off *antinstagram | antig*_
┃ඬ⃟ ✨ _${usedPrefix}on *:* off *antitwitter | antitw*_
┃ඬ⃟ ✨ _${usedPrefix}on *:* off *soloprivados | pconly*_
┃ඬ⃟ ✨ _${usedPrefix}on *:* off *sologrupos | gconly*_
┃ඬ⃟ ✨❖ ── ✦ ──『✙』── ✦ ── ❖
╰══════════════════════════⊷

╭════〘卐 _𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐒_ 卐〙════⊷❍
┃ඬ⃟ ✨❖ ── ✦ ──『✙』── ✦ ── ❖
┃ඬ⃟ ✨ _${usedPrefix}imagen | image *texto*_
┃ඬ⃟ ✨ _${usedPrefix}pinterest | dlpinterest *texto*_
┃ඬ⃟ ✨ _${usedPrefix}wallpaper|wp *texto*_
┃ඬ⃟ ✨ _${usedPrefix}play | play2 *texto o link*_
┃ඬ⃟ ✨ _${usedPrefix}play.1 *texto o link*_
┃ඬ⃟ ✨ _${usedPrefix}play.2 *texto o link*_ 
┃ඬ⃟ ✨ _${usedPrefix}ytmp3 | yta *link*_ 
┃ඬ⃟ ✨ _${usedPrefix}ytmp4 | ytv *link*_
┃ඬ⃟ ✨ _${usedPrefix}pdocaudio | ytadoc *link*_
┃ඬ⃟ ✨ _${usedPrefix}pdocvieo | ytvdoc *link*_
┃ඬ⃟ ✨ _${usedPrefix}tw |twdl | twitter *link*_
┃ඬ⃟ ✨ _${usedPrefix}facebook | fb *link*_
┃ඬ⃟ ✨ _${usedPrefix}instagram *link video o imagen*_
┃ඬ⃟ ✨ _${usedPrefix}verig | igstalk *usuario(a)*_
┃ඬ⃟ ✨ _${usedPrefix}ighistoria | igstory *usuario(a)*_
┃ඬ⃟ ✨ _${usedPrefix}tiktok *link*_
┃ඬ⃟ ✨ _${usedPrefix}tiktokimagen | ttimagen *link*_
┃ඬ⃟ ✨ _${usedPrefix}tiktokfoto | tiktokphoto *usuario(a)*_
┃ඬ⃟ ✨ _${usedPrefix}vertiktok | tiktokstalk *usuario(a)*_
┃ඬ⃟ ✨ _${usedPrefix}mediafire | dlmediafire *link*_
┃ඬ⃟ ✨ _${usedPrefix}clonarepo | gitclone *link*_
┃ඬ⃟ ✨ _${usedPrefix}clima *país ciudad*_
┃ඬ⃟ ✨ _${usedPrefix}consejo_
┃ඬ⃟ ✨ _${usedPrefix}morse codificar *texto*_
┃ඬ⃟ ✨ _${usedPrefix}morse decodificar *morse*_
┃ඬ⃟ ✨ _${usedPrefix}fraseromantica_
┃ඬ⃟ ✨ _${usedPrefix}historia_
┃ඬ⃟ ✨❖ ── ✦ ──『✙』── ✦ ── ❖
╰══════════════════⊷❍

╭═══〘卐 _𝐂𝐡𝐚𝐭 𝐀𝐧𝐨𝐧𝐢𝐦𝐨_ 卐〙═══⊷❍
┃ඬ⃟ ✨❖ ── ✦ ──『✙』── ✦ ── ❖
┃ඬ⃟ ✨ _podras enviar mensajes a otra
┃ඬ⃟ ✨ _persona usando a Broly bot_
┃ඬ⃟ ✨
┃ඬ⃟ ✨ _${usedPrefix}chatanonimo | anonimochat_
┃ඬ⃟ ✨ _${usedPrefix}anonimoch_
┃ඬ⃟ ✨ _${usedPrefix}start_
┃ඬ⃟ ✨ _${usedPrefix}next_
┃ඬ⃟ ✨ _${usedPrefix}leave_
┃ඬ⃟ ✨❖ ── ✦ ──『✙』── ✦ ── ❖
╰═════════════════════⊷
 
╭════〘卐 _𝐆𝐫𝐮𝐩𝐨𝐬_ 卐〙════⊷❍
┃ඬ⃟ ✨❖ ── ✦ ──『✙』── ✦ ── ❖
┃ඬ⃟ ✨ _${usedPrefix}add *numero*_
┃ඬ⃟ ✨ _${usedPrefix}sacar | ban | kick  *@tag*_
┃ඬ⃟ ✨ _${usedPrefix}grupo *abrir : cerrar*_
┃ඬ⃟ ✨ _${usedPrefix}group *open : close*_
┃ඬ⃟ ✨ _${usedPrefix}daradmin | promote *@tag*_
┃ඬ⃟ ✨ _${usedPrefix}quitar | demote *@tag*_
┃ඬ⃟ ✨ _${usedPrefix}banchat_
┃ඬ⃟ ✨ _${usedPrefix}unbanchat_
┃ඬ⃟ ✨ _${usedPrefix}banuser *@tag*_
┃ඬ⃟ ✨ _${usedPrefix}unbanuser *@tag*_
┃ඬ⃟ ✨ _${usedPrefix}admins *texto*_
┃ඬ⃟ ✨ _${usedPrefix}invocar *texto*_ 
┃ඬ⃟ ✨ _${usedPrefix}tagall *texto*_
┃ඬ⃟ ✨ _${usedPrefix}hidetag *texto*_
┃ඬ⃟ ✨ _${usedPrefix}infogrupo | infogroup_
┃ඬ⃟ ✨ _${usedPrefix}grupotiempo | grouptime *Cantidad*_ 
┃ඬ⃟ ✨ _${usedPrefix}advertencia *@tag*_ 
┃ඬ⃟ ✨ _${usedPrefix}deladvertencia *@tag*_
┃ඬ⃟ ✨ _${usedPrefix}delwarn *@tag*_
┃ඬ⃟ ✨ _${usedPrefix}crearvoto | startvoto *texto*_ 
┃ඬ⃟ ✨ _${usedPrefix}sivotar | upvote_
┃ඬ⃟ ✨ _${usedPrefix}novotar | devote_
┃ඬ⃟ ✨ _${usedPrefix}vervotos | cekvoto_
┃ඬ⃟ ✨ _${usedPrefix}delvoto | deletevoto_
┃ඬ⃟ ✨ _${usedPrefix}enlace | link_
┃ඬ⃟ ✨ _${usedPrefix}newnombre | nuevonombre *texto*_
┃ඬ⃟ ✨ _${usedPrefix}newdesc | descripcion *texto*_   
┃ඬ⃟ ✨ _${usedPrefix}setwelcome | bienvenida *texto*_   
┃ඬ⃟ ✨ _${usedPrefix}setbye | despedida *texto*_  
┃ඬ⃟ ✨ _${usedPrefix}nuevoenlace | resetlink_
┃ඬ⃟ ✨ _${usedPrefix}on_
┃ඬ⃟ ✨ _${usedPrefix}off_   
┃ඬ⃟ ✨❖ ── ✦ ──『✙』── ✦ ── ❖
╰══════════════════⊷❍
 
╭════〘卐 _𝐏𝐚𝐫𝐞𝐣𝐚𝐬_ 卐〙════⊷❍
┃ඬ⃟ ✨❖ ── ✦ ──『✙』── ✦ ── ❖
┃ඬ⃟ ✨ _${usedPrefix}listaparejas | listship_
┃ඬ⃟ ✨ _${usedPrefix}mipareja | mylove_
┃ඬ⃟ ✨ _${usedPrefix}pareja | couple *@tag*_
┃ඬ⃟ ✨ _${usedPrefix}aceptar | accept *@tag*_
┃ඬ⃟ ✨ _${usedPrefix}rechazar | decline *@tag*_
┃ඬ⃟ ✨ _${usedPrefix}terminar | finish *@tag*_
┃ඬ⃟ ✨❖ ── ✦ ──『✙』── ✦ ── ❖
╰══════════════════⊷❍
 
╭════〘卐 _𝐕𝐨𝐭𝐚𝐜𝐢𝐨𝐧𝐞𝐬 𝐄𝐧 𝐆𝐫𝐮𝐩𝐨𝐬_ 卐〙════⊷❍
┃ඬ⃟ ✨❖ ── ✦ ──『✙』── ✦ ── ❖
┃ඬ⃟ ✨ _${usedPrefix}crearvoto | startvoto *texto*_ 
┃ඬ⃟ ✨ _${usedPrefix}sivotar | upvote_ 
┃ඬ⃟ ✨ _${usedPrefix}novotar | devote_ 
┃ඬ⃟ ✨ _${usedPrefix}vervotos | cekvoto_
┃ඬ⃟ ✨ _${usedPrefix}delvoto | deletevoto_ 
┃ඬ⃟ ✨❖ ── ✦ ──『✙』── ✦ ── ❖
╰══════════════════⊷❍ 
 
╭════〘卐 _𝐂𝐨𝐦𝐚𝐧𝐝𝐨𝐬 +18_ 卐〙════⊷❍
┃ඬ⃟ ✨❖ ── ✦ ──『✙』── ✦ ── ❖
│┃ඬ⃟ ✨ _${usedPrefix}hornymenu_ 
┃ඬ⃟ ✨❖ ── ✦ ──『✙』── ✦ ── ❖
╰══════════════════⊷❍
 
╭════〘卐 _𝐂𝐨𝐧𝐯𝐞𝐫𝐭𝐢𝐝𝐨𝐫𝐞𝐬_ 卐〙════⊷❍
│
┃ඬ⃟ ✨ _${usedPrefix}toimg | img | jpg *sticker*_ 
┃ඬ⃟ ✨ _${usedPrefix}toanime | jadianime *foto*_
┃ඬ⃟ ✨ _${usedPrefix}tomp3 | mp3 *video o nota de voz*_
┃ඬ⃟ ✨ _${usedPrefix}tovn | vn *video o audio*_
┃ඬ⃟ ✨ _${usedPrefix}tovideo *audio*_
┃ඬ⃟ ✨ _${usedPrefix}tourl *video, imagen*_
┃ඬ⃟ ✨ _${usedPrefix}toenlace  *video, imagen o audio*_
┃ඬ⃟ ✨ _${usedPrefix}tts es *texto*_
┃☭╰─────────────────❍
╰══════════════════⊷❍ 
 
╭════〘卐 *_𝐎𝐓𝐇𝐄𝐑𝐒_* 卐〙════⊷❍
│☭╭─────────────────
┃ඬ⃟ ✨ _${usedPrefix}logos *efecto texto*_
┃ඬ⃟ ✨ _${usedPrefix}menulogos2_
┃☭╰─────────────────
╰══════════════════⊷❍

╭════〘卐 *_𝐎𝐓𝐇𝐄𝐑𝐒_* 卐〙════⊷❍
│☭╭─────────────────❍
┃ඬ⃟ ✨ _${usedPrefix}simpcard *@tag*_
┃ඬ⃟ ✨ _${usedPrefix}hornycard *@tag*_
┃ඬ⃟ ✨ _${usedPrefix}lolice *@tag*_
┃ඬ⃟ ✨ _${usedPrefix}ytcomment *texto*_
┃ඬ⃟ ✨ _${usedPrefix}itssostupid_
┃ඬ⃟ ✨ _${usedPrefix}pixelar_
┃ඬ⃟ ✨ _${usedPrefix}blur_
┃☭╰─────────────────❍
╰══════════════════⊷❍

╭════〘卐 _𝐈𝐌𝐆𝐍𝐒 𝐀𝐍𝐈𝐌𝐄 𝐘 𝐌𝐀𝐒_ 卐〙════⊷❍
│
┃ඬ⃟ ✨ _${usedPrefix}chica_ 
┃ඬ⃟ ✨ _${usedPrefix}chico_
┃ඬ⃟ ✨ _${usedPrefix}cristianoronaldo_
┃ඬ⃟ ✨ _${usedPrefix}messi_
┃ඬ⃟ ✨ _${usedPrefix}meme_
┃ඬ⃟ ✨ _${usedPrefix}meme2_
┃ඬ⃟ ✨ _${usedPrefix}itzy_
┃ඬ⃟ ✨ _${usedPrefix}blackpink_
┃ඬ⃟ ✨ _${usedPrefix}kpop *blackpink : exo : bts*_
┃ඬ⃟ ✨ _${usedPrefix}lolivid_
┃ඬ⃟ ✨ _${usedPrefix}loli_
┃ඬ⃟ ✨ _${usedPrefix}navidad_
┃ඬ⃟ ✨ _${usedPrefix}ppcouple_
┃ඬ⃟ ✨ _${usedPrefix}neko_
┃ඬ⃟ ✨ _${usedPrefix}waifu_
┃ඬ⃟ ✨ _${usedPrefix}akira_
┃ඬ⃟ ✨ _${usedPrefix}akiyama_
┃ඬ⃟ ✨ _${usedPrefix}anna_
┃ඬ⃟ ✨ _${usedPrefix}asuna_
┃ඬ⃟ ✨ _${usedPrefix}ayuzawa_
┃ඬ⃟ ✨ _${usedPrefix}boruto_
┃ඬ⃟ ✨ _${usedPrefix}chiho_
┃ඬ⃟ ✨ _${usedPrefix}chitoge_
┃ඬ⃟ ✨ _${usedPrefix}deidara_
┃ඬ⃟ ✨ _${usedPrefix}erza_
┃ඬ⃟ ✨ _${usedPrefix}elaina_
┃ඬ⃟ ✨ _${usedPrefix}eba_
┃ඬ⃟ ✨ _${usedPrefix}emilia_
┃ඬ⃟ ✨ _${usedPrefix}hestia_
┃ඬ⃟ ✨ _${usedPrefix}hinata_
┃ඬ⃟ ✨ _${usedPrefix}inori_
┃ඬ⃟ ✨ _${usedPrefix}isuzu_
┃ඬ⃟ ✨ _${usedPrefix}itachi_
┃ඬ⃟ ✨ _${usedPrefix}itori_
┃ඬ⃟ ✨ _${usedPrefix}kaga_
┃ඬ⃟ ✨ _${usedPrefix}kagura_
┃ඬ⃟ ✨ _${usedPrefix}kaori_
┃ඬ⃟ ✨ _${usedPrefix}keneki_
┃ඬ⃟ ✨ _${usedPrefix}kotori_
┃ඬ⃟ ✨ _${usedPrefix}kurumi_
┃ඬ⃟ ✨ _${usedPrefix}madara_
┃ඬ⃟ ✨ _${usedPrefix}mikasa_
┃ඬ⃟ ✨ _${usedPrefix}miku_
┃ඬ⃟ ✨ _${usedPrefix}minato_
┃ඬ⃟ ✨ _${usedPrefix}naruto_
┃ඬ⃟ ✨ _${usedPrefix}nezuko_
┃ඬ⃟ ✨ _${usedPrefix}sagiri_
┃ඬ⃟ ✨ _${usedPrefix}sasuke_
┃ඬ⃟ ✨ _${usedPrefix}sakura_
┃ඬ⃟ ✨ _${usedPrefix}cosplay_
┃☭╰─────────────────❍
╰══════════════════⊷❍

╭════〘卐 _𝐌𝐨𝐝𝐢𝐟𝐢𝐜𝐚𝐫 𝐚𝐮𝐝𝐢𝐨𝐬_ 卐〙════⊷❍
│☭╭──────────────❍
┃ඬ⃟ ✨ _${usedPrefix}bass_
┃ඬ⃟ ✨ _${usedPrefix}blown_
┃ඬ⃟ ✨ _${usedPrefix}deep_
┃ඬ⃟ ✨ _${usedPrefix}earrape_
┃ඬ⃟ ✨ _${usedPrefix}fat_
┃ඬ⃟ ✨ _${usedPrefix}fast_
┃ඬ⃟ ✨ _${usedPrefix}nightcore_
┃ඬ⃟ ✨ _${usedPrefix}reverse_
┃ඬ⃟ ✨ _${usedPrefix}robot_
┃ඬ⃟ ✨ _${usedPrefix}slow_
┃ඬ⃟ ✨ _${usedPrefix}smooth_
┃ඬ⃟ ✨ _${usedPrefix}tupai_
┃☭╰─────────────────❍
╰══════════════════⊷❍

╭════〘卐 _🍁𝐁𝐮𝐬𝐪𝐮𝐞𝐝𝐚𝐬 🍁_ 卐〙════⊷❍
│☭╭──────────────❍
┃ඬ⃟ ✨ _${usedPrefix}animeinfo *texto*_
┃ඬ⃟ ✨ _${usedPrefix}mangainfo *texto*_
┃ඬ⃟ ✨ _${usedPrefix}google *texto*_
┃ඬ⃟ ✨ _${usedPrefix}letra | lirik *texto*_
┃ඬ⃟ ✨ _${usedPrefix}ytsearch | yts *texto*_
┃ඬ⃟ ✨ _${usedPrefix}wiki | wikipedia *texto*_
┃☭╰─────────────────❍
╰══════════════════⊷❍

╭════〘卐 _𝐌𝐞𝐧𝐮 𝐀𝐮𝐝𝐢𝐨𝐬_ 卐〙════⊷❍
┃ඬ⃟ ✨ _Solicita el menu de audios_
┃ඬ⃟ ✨ _usando:_
┃ඬ⃟ ✨ _${usedPrefix}audios_
┃☭╰─────────────────❍
╰══════════════════⊷❍

╭════〘卐 _🍁𝐇𝐞𝐫𝐫𝐚𝐦𝐢𝐞𝐧𝐭𝐚𝐬 🍁_ 卐〙════⊷❍
│☭╭──────────────❍
┃ඬ⃟ ✨ _${usedPrefix}afk *motivo*_
┃ඬ⃟ ✨ _${usedPrefix}acortar *url*_
┃ඬ⃟ ✨ _${usedPrefix}calculadora *operacion math*_
┃ඬ⃟ ✨ _${usedPrefix}del *respondre a mensaje del Bot*_
┃ඬ⃟ ✨ _${usedPrefix}qrcode *texto*_
┃ඬ⃟ ✨ _${usedPrefix}readmore *texto1|texto2*_
┃ඬ⃟ ✨ _${usedPrefix}spamwa *numero|texto|cantidad*_
┃ඬ⃟ ✨ _${usedPrefix}styletext *texto*_
┃ඬ⃟ ✨ _${usedPrefix}traducir *texto*_
┃ඬ⃟ ✨ _${usedPrefix}morse codificar *texto*_
┃ඬ⃟ ✨ _${usedPrefix}morse decodificar *morse*_
┃ඬ⃟ ✨ _${usedPrefix}encuesta | poll *Motivo*_
┃ඬ⃟ ✨ _${usedPrefix}horario_
┃☭╰─────────────────❍
╰══════════════════⊷❍

╭════〘卐 _𝐒𝐔𝐁𝐈𝐑 𝐃𝐄 𝐍𝐈𝐕𝐄𝐋_ 卐〙════⊷❍
┃☭╭─────────────────────────❍
┃ඬ⃟ ✨ _${usedPrefix}botemporal *enlace* *cantidad*_
┃ඬ⃟ ✨ _${usedPrefix}addbot *enlace* *cantidad*_
┃ඬ⃟ ✨ _${usedPrefix}pase premium_
┃ඬ⃟ ✨ _${usedPrefix}pass premium_
┃ඬ⃟ ✨ _${usedPrefix}listapremium | listprem_
┃ඬ⃟ ✨ _${usedPrefix}transfer *tipo cantidad @tag*_
┃ඬ⃟ ✨ _${usedPrefix}dar *tipo cantidad @tag*_
┃ඬ⃟ ✨ _${usedPrefix}enviar *tipo cantidad @tag*_
┃ඬ⃟ ✨ _${usedPrefix}balance_
┃ඬ⃟ ✨ _${usedPrefix}cartera | wallet_ 
┃ඬ⃟ ✨ _${usedPrefix}experiencia | exp_
┃ඬ⃟ ✨ _${usedPrefix}top | lb | leaderboard_
┃ඬ⃟ ✨ _${usedPrefix}nivel | level | lvl_
┃ඬ⃟ ✨ _${usedPrefix}rol | rango_
┃ඬ⃟ ✨ _${usedPrefix}inventario | inventory_ 
┃ඬ⃟ ✨ _${usedPrefix}aventura | adventure_ 
┃ඬ⃟ ✨ _${usedPrefix}caza | cazar | hunt_
┃ඬ⃟ ✨ _${usedPrefix}pescar | fishing_
┃ඬ⃟ ✨ _${usedPrefix}animales_ 
┃ඬ⃟ ✨ _${usedPrefix}alimentos_
┃ඬ⃟ ✨ _${usedPrefix}curar | heal_
┃ඬ⃟ ✨ _${usedPrefix}buy_
┃ඬ⃟ ✨ _${usedPrefix}sell_
┃ඬ⃟ ✨ _${usedPrefix}verificar | registrar_
┃ඬ⃟ ✨ _${usedPrefix}perfil | profile_
┃ඬ⃟ ✨ _${usedPrefix}myns_
┃ඬ⃟ ✨ _${usedPrefix}unreg *numero de serie*_
┃ඬ⃟ ✨ _${usedPrefix}minardiamantes | minargemas_
┃ඬ⃟ ✨ _${usedPrefix}minargatacoins | minarcoins_
┃ඬ⃟ ✨ _${usedPrefix}minarexperiencia | minarexp_
┃ඬ⃟ ✨ _${usedPrefix}minar *:* minar2 *:* minar3_
┃ඬ⃟ ✨ _${usedPrefix}reclamar | regalo | claim_
┃ඬ⃟ ✨ _${usedPrefix}cadahora | hourly_
┃ඬ⃟ ✨ _${usedPrefix}cadasemana | semanal | weekly_
┃ඬ⃟ ✨ _${usedPrefix}cadames | mes | monthly_
┃ඬ⃟ ✨ _${usedPrefix}cofre | abrircofre | coffer_
┃ඬ⃟ ✨ _${usedPrefix}trabajar | work_
┃☭╰─────────────────❍
╰══════════════════⊷❍

╭══〘卐 _𝐓𝐚𝐛𝐥𝐚 𝐃𝐞 𝐂𝐥𝐚𝐬𝐢𝐟𝐢𝐜𝐚𝐜𝐢𝐨́𝐧_ 卐〙═⊷❍
┃☭╭─────────────────❍
┃ඬ⃟ ✨ _${usedPrefix}top | lb | leaderboard_
┃☭╰─────────────────❍
╰══════════════════⊷❍

╭════〘卐 _𝐒𝐭𝐢𝐤𝐞𝐫𝐬_ 卐〙════⊷❍
┃☭╭──────────────❍
┃ඬ⃟ ✨ _${usedPrefix}sticker | s *imagen o video*_
┃ඬ⃟ ✨ _${usedPrefix}sticker | s *url de tipo jpg*_
┃ඬ⃟ ✨ _${usedPrefix}emojimix *卐+😐*_
┃ඬ⃟ ✨ _${usedPrefix}scircle | círculo *imagen*_
┃ඬ⃟ ✨ _${usedPrefix}semoji | emoji *tipo emoji*_
┃ඬ⃟ ✨ _${usedPrefix}attp *texto*_
┃ඬ⃟ ✨ _${usedPrefix}attp2 *texto*_
┃ඬ⃟ ✨ _${usedPrefix}ttp *texto*_
┃ඬ⃟ ✨ _${usedPrefix}ttp2 *texto*_
┃ඬ⃟ ✨ _${usedPrefix}ttp3 *texto*_
┃ඬ⃟ ✨ _${usedPrefix}ttp4 *texto*_
┃ඬ⃟ ✨ _${usedPrefix}ttp5 *texto*_
┃ඬ⃟ ✨ _${usedPrefix}ttp6 *texto*_
┃ඬ⃟ ✨ _${usedPrefix}dado_
┃ඬ⃟ ✨ _${usedPrefix}stickermarker *efecto : responder a imagen*_ 
┃ඬ⃟ ✨ _${usedPrefix}stickerfilter *efecto : responder a imagen*_ 
┃ඬ⃟ ✨  _${usedPrefix}cs *:* cs2_
┃☭╰─────────────────❍
╰══════════════════⊷❍

╭══〘卐 _𝐄𝐝𝐢𝐭𝐚𝐫 𝐒𝐭𝐢𝐜𝐤𝐞𝐫𝐬_ 卐〙═══⊷❍
┃☭╭─────────────────❍
┃ඬ⃟ ✨ _${usedPrefix}wm *packname|author*_
┃ඬ⃟ ✨ _${usedPrefix}wm *texto1|texto2*_
┃☭╰─────────────────❍
╰══════════════════⊷❍

╭════〘卐 _𝐀𝐜𝐜𝐢𝐨́𝐧𝐞𝐬 𝐂𝐨𝐧 𝐒𝐭𝐢𝐜𝐤𝐞𝐫𝐬_ 卐〙════⊷❍
┃☭╭────────────────────❍
┃ඬ⃟ ✨ _${usedPrefix}palmaditas | pat *@tag*_
┃ඬ⃟ ✨ _${usedPrefix}bofetada | slap *@tag*_
┃ඬ⃟ ✨ _${usedPrefix}golpear *@tag*_
┃ඬ⃟ ✨ _${usedPrefix}besar | kiss *@tag*_ 
┃ඬ⃟ ✨ _${usedPrefix}alimentar | food *@tag*_
┃☭╰─────────────────❍
╰══════════════════⊷❍

╭════〘卐 _𝐏𝐚𝐫𝐚 𝐄𝐥 𝐏𝐫𝐨𝐩𝐢𝐞𝐭𝐚𝐫𝐢𝐨_ 卐〙════⊷❍
┃☭╭─────────────────────────❍
┃ඬ⃟ ✨ _${usedPrefix}join *enlace*_
┃ඬ⃟ ✨ _${usedPrefix}unete *enlace*_
┃ඬ⃟ ✨ _${usedPrefix}dardiamantes *cantidad*_
┃ඬ⃟ ✨ _${usedPrefix}darxp *cantidad*_
┃ඬ⃟ ✨ _${usedPrefix}darkatacoins *cantidad*_ 
┃ඬ⃟ ✨ _${usedPrefix}addprem | userpremium *@tag* *cantidad*_
┃ඬ⃟ ✨ _${usedPrefix}addprem2 | userpremium2 *@tag* *cantidad*_
┃ඬ⃟ ✨ _${usedPrefix}addprem3 | userpremium3 *@tag* *cantidad*_
┃ඬ⃟ ✨ _${usedPrefix}addprem4 | userpremium4 *@tag* *cantidad*_
┃ඬ⃟ ✨ _${usedPrefix}idioma | language_
┃ඬ⃟ ✨ _${usedPrefix}cajafuerte_
┃ඬ⃟ ✨ _${usedPrefix}comunicar | broadcastall | bc *texto*_
┃ඬ⃟ ✨ _${usedPrefix}broadcastchats | bcc *texto*_
┃ඬ⃟ ✨ _${usedPrefix}comunicarpv *texto*_
┃ඬ⃟ ✨ _${usedPrefix}broadcastgc *texto*_ 
┃ඬ⃟ ✨ _${usedPrefix}comunicargrupos *texto*_
┃ඬ⃟ ✨ _${usedPrefix}borrartmp | cleartmp_
┃ඬ⃟ ✨ _${usedPrefix}delexp *@tag*_
┃ඬ⃟ ✨ _${usedPrefix}delkatacoins *@tag*_
┃ඬ⃟ ✨ _${usedPrefix}deldiamantes *@tag*_
┃ඬ⃟ ✨ _${usedPrefix}reiniciar | restart_
┃ඬ⃟ ✨ _${usedPrefix}ctualizar | update_
┃ඬ⃟ ✨ _${usedPrefix}addprem | +prem *@tag*_
┃ඬ⃟ ✨ _${usedPrefix}delprem | -prem *@tag*_
┃ඬ⃟ ✨ _${usedPrefix}listapremium | listprem_
┃ඬ⃟ ✨ _${usedPrefix}añadirdiamantes *@tag cantidad*_
┃ඬ⃟ ✨ _${usedPrefix}añadirxp *@tag cantidad*_
┃ඬ⃟ ✨ _${usedPrefix}añadirbrolycoins *@tag cantidad*_
┃☭╰─────────────────❍
╰══════════════════⊷❍`.trim()
const vi = ['https://telegra.ph/file/3674872ba3b00cf75b6c3.mp4',
'https://telegra.ph/file/3674872ba3b00cf75b6c3.mp4',
'https://telegra.ph/file/3674872ba3b00cf75b6c3.mp4']
await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, global.conn.user.jid] }, { quoted: fkontak })

} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}}

handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|menucompleto|allmenu|allm|m|\?)$/i
//handler.register = true
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}  
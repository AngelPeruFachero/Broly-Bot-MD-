export async function before(m) {

const username = conn.getName(m.sender)

if (m.chat.endsWith('broadcast') || m.fromMe || m.isGroup) return
  
let user = global.db.data.users[m.sender]

if (new Date() - user.pc < 21600000) return
await m.reply(`🌟 *Hola ${username}, bienvenido Broly-Bot-MD* 🥷🏻
📲 _Ejecute el comando .menu para visualizar los comandos que dispongo_ 🫡

📌 *Cualquier duda o sugerencia puede contactar a mi creador:* 🎉
📩 wa.me/51982110760 y es.me/51967278040📭
🙏❣️ *Si desea apoyar el proyecto Broly Bot puede donar a esta cuenta por PayPal* ✅📈
🌟 no tengo Paypal pero si quieren donar solo escríbame ✨`) 
user.pc = new Date * 1
}

import fetch from 'node-fetch'

var handler = async (m, { text,  usedPrefix, command }) => {

    throw `_*< CICI />*_\n\n*[ ℹ️ ] Proporciona un texto.*\n\n*[ 💡 ] Ejemplo:* _${usedPrefix + command} Hola, ¿cómo estás soy cici tu ia personal?_`;

try {

await m.reply(wait)
var apii = await fetch(`https://aemt.me/bard?text=${text}`)
var res = await apii.json()
await m.reply(res.result)

} catch (error) {
console.error(error)
throw 'OCURRIÓ UN ERROR'
}

}
handler.command = ['cici']
handler.help = ['cici']
handler.tags = ['herramientas']

handler.premium = false

export default handler
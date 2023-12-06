let handler = async(m, { conn, text, command }) => {
let yh = global.broly
let url = yh[Math.floor(Math.random() * yh.length)]
conn.sendMessage(m.chat, { image: { url: url }, caption: "*_Aqui tienes la imagen_*" }, { quoted: m });
}
handler.command = /^(imgbroly)$/i
handler.tags = ['anime']
handler.help = ['broly']
export default handler

global.broly = [
"https://telegra.ph/file/e5701261e2036defb0825.jpg","https://telegra.ph/file/db69211ab7fed6deffbde.jpg","https://telegra.ph/file/5c31ce0b403bb3e94a74f.jpg","https://telegra.ph/file/7ee6d1aa7b654043b9c61.jpg","https://telegra.ph/file/4dae68afece92007b595c.jpg","https://telegra.ph/file/8eaccc8ad809579807b55.jpg","https://telegra.ph/file/1bc2ccd3dc7cdbf5cd9ac.jpg","https://telegra.ph/file/cfe782edd49050a9d47b8.jpg","https://telegra.ph/file/2c48c009782ccbe38e3f9.jpg","https://telegra.ph/file/22b0e96ea0409d782a5dc.jpg","https://telegra.ph/file/8902a411d3683504f8ae9.jpg","https://telegra.ph/file/46f94c84055da05ec8b54.jpg","https://telegra.ph/file/81b0155f89d99ca0bf6a1.jpg","https://telegra.ph/file/51b823767eecbeb93b2f3.jpg","https://telegra.ph/file/835344b9765dc5c06a769.jpg","https://telegra.ph/file/c38cc64e40c6513b68316.jpg","https://telegra.ph/file/cf26bbb6f84b131433292.jpg","https://telegra.ph/file/826118cb688f406fe0f5b.jpg","https://telegra.ph/file/8e4ebb3d3421a39905be6.jpg"
]
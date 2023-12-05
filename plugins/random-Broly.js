let handler = async(m, { conn, text, command }) => {
let yh = global.ibroly
let url = yh[Math.floor(Math.random() * yh.length)]
conn.sendMessage(m.chat, { image: { url: url }, caption: "*_AQUI ESTÁ LA IMAGEN_*" }, { quoted: m });
}
handler.command = /^(ibroly)$/i
handler.tags = ['anime']
handler.help = ['ibroly']
export default handler

global.ibroly = [
"./media/menus/Broly1.jpg","./media/menus/Broly2.jpg","./media/menus/Broly3.jpg","./media/menus/Broly4.jpg","./media/menus/Broly5.jpg","./media/menus/Broly6.jpg","./media/menus/Broly7.jpg","./media/menus/Broly8.jpg","./media/menus/Broly9.jpg","./media/menus/Broly10.jpg","./media/menus/Broly11.jpg","./media/menus/Broly12.jpg","./media/menus/Broly13.jpg","./media/menus/Broly14.jpg","./media/menus/Broly15.jpg","./media/menus/Broly16.jpg","./media/menus/Broly17.jpg","./media/menus/Broly18.jpg","./media/menus/Broly19.jpg"
]
import { watchFile, unwatchFile } from "fs"   
 import chalk from "chalk" 
 import { fileURLToPath } from "url" 
 import fs from "fs" 
 import cheerio from "cheerio" 
 import fetch from "node-fetch" 
 import axios from "axios" 
 import moment from "moment-timezone" 
 import { en, es, id, ar, pt, fr, hi } from "./lib/idiomas/total-idiomas.js" 
     
 //Numeros De Los Propietarios 
 global.owner = [  
 ["51967278040", 'Angel Creador', true],    
 ["573013482814", 'Diego Owner', true]]
  
  
 global.mods = [] 
 global.prems = ["528451003894"] 
 //key de violetics 
 global.Key360 = ["964f-0c75-7afc"] 
  
  
 global.lenguajeGB = es //lenguje de brolybot-md 
  
 
 global.openai_key = 'sk-0' 
 
  
 global.openai_org_id = 'org-3' 
 
 global.keysZens = ["LuOlangNgentot", "c2459db922", "37CC845916", "6fb0eff124", "hdiiofficial", "fiktod", "BF39D349845E", "675e34de8a", "0b917b905e6f"] 
 global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())] 
 global.keysxteammm = ["29d4b59a4aa687ca", "5LTV57azwaid7dXfz5fzJu", "cb15ed422c71a2fb", "5bd33b276d41d6b4", "HIRO", "kurrxd09", "ebb6251cc00f9c63"] 
 global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())] 
 global.keysneoxrrr = ["5VC9rvNx", "cfALv5"] 
 global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())] 
 global.lolkeysapi = "GataDios" 
 global.itsrose = ["4b146102c4d500809da9d1ff"] 
 global.baileys = "@whiskeysockets/baileys" 
 
//apis 
 global.APIs = {  
   xteam: 'https://api.xteam.xyz', 
   dzx: 'https://api.dhamzxploit.my.id', 
   lol: 'https://api.lolhuman.xyz', 
   violetics: 'https://violetics.pw', 
   neoxr: 'https://api.neoxr.my.id', 
   zenzapis: 'https://api.zahwazein.xyz', 
   akuari: 'https://api.akuari.my.id', 
   akuari2: 'https://apimu.my.id',         
   fgmods: 'https://api-fgmods.ddns.net', 
   botcahx: 'https://api.botcahx.biz.id', 
   ibeng: 'https://api.ibeng.tech/docs',         
   rose: 'https://api.itsrose.site', 
   popcat : 'https://api.popcat.xyz', 
   xcoders : 'https://api-xcoders.site' 
 }, 
 global.APIKeys = {  
   'https://api.xteam.xyz': `${keysxteam}`, 
   'https://api.lolhuman.xyz': `${lolkeysapi}`, 
   'https://api.neoxr.my.id': `${keysneoxr}`,         
   'https://violetics.pw': 'beta', 
   'https://api.zahwazein.xyz': `${keysxxx}`, 
   'https://api-fgmods.ddns.net': 'fg-dylux', 
   'https://api.botcahx.biz.id': 'Admin', 
   'https://api.ibeng.tech/docs': 'tamvan', 
   'https://api.itsrose.site': 'Rs-Zeltoria', 
   'https://api-xcoders.site': 'Frieren' 
 }; 
  
 global.mods = [] 
  
  
 /*************************/ 
 global.cheerio = cheerio 
 global.fs = fs 
 global.fetch = fetch 
 global.axios = axios 
 global.moment = moment


global.nnnttt = 'TEXTO'
global.official = [ // Agregate si eres Owner
["573013482814", 'Diego Ofc 💻', 1], 
["51967278040", 'Broly Two', 1]]

global.mail = '' //agrega tú correo
global.desc = '' //agrega una descripción corta
global.desc2 = '' //agrega una descripción larga (Solo se aplicará si su whasapp no tiene descripción)
global.country = '' //agrega tú país ejemplo: 🇵🇪

//nombres
global.packname = "☆𝑩𝒓𝒐𝒍𝒚-𝑩𝒐𝒕☆"
global.author = "✥𝑨𝒏𝒈𝒆𝒍✥"


//versión
global.vs = "0.2.3"
global.vsJB = "1.0 (Beta)"

//enlaces
global.gt = "☆𝑩𝒓𝒐𝒍𝒚-𝑩𝒐𝒕☆"
global.yt = "https://youtube.com/@AngelPeruFachero"
global.yt2 = "https://www.youtube.com/shorts/ZLJYDUM6vSY"
global.ig = "https://www.instagram.com/gAngelPeruFachero"
global.md = "https://github.com/AngelPeruFachero/Broly-Bot-MD"
global.fb = "https://www.facebook.com/AngelPeruFachero"

global.cnl = 'https://whatsapp.com/channel/0029Va98AwkISTkJMjfZtZ1T' //CANAL BROLYBOT
global.nna = 'https://whatsapp.com/channel/0029Va98AwkISTkJMjfZtZ1T' //UPDATE BROLYBOT
global.nn2 = 'https://whatsapp.com/channel/https://whatsapp.com/channel/0029Va98AwkISTkJMjfZtZ1T' //UPDATE 2
global.nna2 = 'https://chat.whatsapp.com/GOMZkMih9onHg80KsQfIFA' //Help
global.nn = 'https://chat.whatsapp.com/EcMl1FK9sgx8tnhE91cTmF' //Grupo 1 - Broly-Bot-MD (OFC)
global.nnn = 'https://chat.whatsapp.com/CtuZulsXYaf25B6D8OLBgU' //Grupo 2 - Broly-Bot-MD (OFC) ||
global.nnnt = 
global.paypal = 'https://paypal.me/BrolyF'
global.asistencia = 'Wa.me/51982110760' //Dudas? escríbeme...


//resultados
global.rg = '╰⊱✅⊱ *𝙍𝙀𝙎𝙐𝙇𝙏𝘼𝘿𝙊 | 𝙍𝙀𝙎𝙐𝙇𝙏* ⊱✅⊱╮\n\n'
global.resultado = rg

global.ag = '╰⊱⚠️⊱ *𝘼𝘿𝙑𝙀𝙍𝙏𝙀𝙉𝘾𝙄𝘼 | 𝙒𝘼𝙍𝙉𝙄𝙉𝙂* ⊱⚠️⊱╮\n\n'
global.advertencia = ag

global.iig = '╰⊱❕⊱ *𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝘾𝙄𝙊́𝙉 | 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝙏𝙄𝙊𝙉* ⊱⊱╮\n\n'
global.informacion = iig

global.fg = '╰⊱❌⊱ *𝙁𝘼𝙇𝙇𝙊́ | 𝙀𝙍𝙍𝙊𝙍* ⊱❌⊱╮\n\n'
global.fallo = fg

global.mg = '╰⊱❗️⊱ *𝙇𝙊 𝙐𝙎𝙊́ 𝙈𝘼𝙇 | 𝙐𝙎𝙀𝘿 𝙄𝙏 𝙒𝙍𝙊𝙉𝙂* ⊱❗️⊱╮\n\n'
global.mal = mg

global.eeg = '╰⊱📩⊱ *𝙍𝙀𝙋𝙊𝙍𝙏𝙀 | 𝙍𝙀𝙋𝙊𝙍𝙏* ⊱📩⊱╮\n\n'
global.envio = eeg

global.eg = '╰⊱💚⊱ *𝙀́𝙓𝙄𝙏𝙊 | 𝙎𝙐𝘾𝘾𝙀𝙎𝙎* ⊱💚⊱╮\n\n'
global.exito = eg


//cargando
global.wm = "☆𝑩𝒓𝒐𝒍𝒚-𝑩𝒐𝒕☆ : ✥𝑨𝒏𝒈𝒆𝒍𝑷𝒆𝒓𝒖𝑭𝒂𝒄𝒉𝒆𝒓𝒐✥"
global.igfg = "☆𝔹𝕣𝕠𝕝𝕪-𝔹𝕠𝕥☆"
global.wait = "*⌛ _Cargando | Charging..._ ▬▭▭▭▭▭▭*"
global.waitt = "*⌛ _Cargando | Charging..._ ▬▬▭▭▭*"
global.waittt = "*⌛ _Cargando | Charging..._ ▬▬▬▬▭▭*"
global.waitttt = "*⌛ _Cargando | Charging..._ ▬▬▬▬▬▬▭*"
global.nomorown = "51948273587"
global.pdoc = ["application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/vnd.ms-excel", "application/msword", "application/pdf", "text/rtf"];



//imagenes
global.imagen1 = fs.readFileSync("./media/menus/Menu1.jpg")
global.imagen2 = fs.readFileSync("./media/menus/Menu2.jpg")
global.imagen3 = fs.readFileSync("./media/menus/Menu3.jpg")
global.imagen4 = fs.readFileSync("./media/menus/Menu4.jpg")
global.imagen5 = fs.readFileSync("./media/menus/Menu5.jpg")
global.imagen6 = fs.readFileSync("./media/menus/Menu6.jpg")
global.imagen7 = fs.readFileSync("./media/menus/Menu7.jpg")
global.imagen8 = fs.readFileSync("./media/menus/Menu8.jpg")
global.imagen9 = fs.readFileSync("./media/menus/Menu9.jpg")
global.imagen10 = fs.readFileSync("./media/menus/Menu10.jpg")
global.imagen11 = fs.readFileSync("./media/menus/Menu11.jpg")
/*global.imagen12 = fs.readFileSync("./media/menus/img11.jpg")
global.imagen13 = fs.readFileSync("./media/menus/img12.jpg")*/


//imagenes
global.img = 'https://telegra.ph/file/0e0d7e656359d160eb4cf.jpg'
global.img2 = 'https://telegra.ph/file/0e0d7e656359d160eb4cf.jpg'

global.img3 = 'https://telegra.ph/file/0e0d7e656359d160eb4cf.jpg' //prem
global.img4 = 'https://telegra.ph/file/0e0d7e656359d160eb4cf.jpg' //prem

global.img5 = 'https://telegra.ph/file/0e0d7e656359d160eb4cf.jpg'
global.img6 = 'https://telegra.ph/file/0e0d7e656359d160eb4cf.jpg'
global.img7 = 'http'
global.img8 = 'httpspg'
global.img9 = 'httpg'

global.img10 = 'https://telegra.ph/file/0df6a83da84452a5e6570.jpg'
global.img11 = 'https://telegra.ph/file/0df6a83da84452a5e6570.jpg'
global.img12 = 'https://telegra.ph/file/0df6a83da84452a5e6570.jpg'
global.img13 = 'https://telegra.ph/file/49a9163ef57ae307d6392.jpg'
global.img14 = 'https://telegra.ph/file/49a9163ef57ae307d6392.jpg'
global.img15 = 'https://telegra.ph/file/49a9163ef57ae307d6392.jpg'

global.img16 = 'https://telegra.ph/file/c314943b11806b25803f3.jpg' //+18

global.img17 = 'https://telegra.ph/file/49a9163ef57ae307d6392.jpg'
global.img18 = 'https://telegra.ph/file/49a9163ef57ae307d6392.jpg'

global.logogit = 'https://telegra.ph/file/75bbb5686e0dff952e79c.jpg'

global.welgata = [ig, yt2, yt2, ig, md, ig, yt, paypal, yt2, yt2, ig, fb]
global.redesMenu = [cnl, nna, nn, md, ig, paypal, yt, asistencia, fb]
global.gataMenu = [img, img2, img6, img7, img8, img9, img13, img14, img15, img17, img18]
//global.gataVidMenu = ['./media/menus/Menuvid1.mp4', './media/menus/Menuvid2.mp4', './media/menus/Menuvid3.mp4']
global.gataImg = [imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7, imagen8, imagen9, imagen10, imagen11]



global.flaaa = [
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='];

global.cmenut = "❖––––––『"
global.cmenub = "┊✦ "
global.cmenuf = "╰━═┅═━––––––๑\n"
global.cmenua = "\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     "
 
global.dmenut = "*❖─┅──┅〈*"
global.dmenub = "*┊»*"
global.dmenub2 = "*┊*"
global.dmenuf = "*╰┅────────┅✦*"
global.htjava = "⫹⫺"

global.htki = "*⭑•̩̩͙⊱•••• ☪*"
global.htka = "*☪ ••••̩̩͙⊰•⭑*"

global.comienzo = "• • ◕◕════"
global.fin = " • •"

global.botdate = `⫹⫺ Date :  ${moment.tz('America/Los_Angeles').format('DD/MM/YY')}`; //Asia/Jakarta
global.bottime = `𝗧 𝗜 𝗠 𝗘 : ${moment.tz('America/Los_Angeles').format('HH:mm:ss')}`;//America/Los_Angeles
global.fgif = {
            key: {
                 participant : '0@s.whatsapp.net'},
            message: { 
                        "videoMessage": { 
                        "title": wm,
                        "h": `Hmm`,
                        'seconds': '999999999', 
                        'gifPlayback': 'true', 
                        'caption': bottime,
                        'jpegThumbnail': fs.readFileSync('./media/menus/Menu3.jpg')
                               }
                              }
                             };




global.multiplier = 60 // Cuanto más alto, más difícil subir de nivel | The higher, The harder levelup 

//Emojis RPG - Referencias
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase();
    let emot = {
      level: '🧬 Nivel : Level',
      limit: lenguajeGB.eDiamante(),
      exp: lenguajeGB.eExp(),
      bank: '🏦 Banco : Bank',
      diamond: lenguajeGB.eDiamantePlus(),
      health: '❤️ Salud : Health',
      kyubi: lenguajeGB.eMagia(),
      joincount: lenguajeGB.eToken(),
      emerald: lenguajeGB.eEsmeralda(),
      stamina: lenguajeGB.eEnergia(),
      role: '💪 Rango | Role',
      premium: '🎟️ Premium',
      pointxp: '📧 Puntos Exp : Point Xp',
      gold: lenguajeGB.eOro(),
      
      trash: lenguajeGB.eBasura(),
      crystal: '🔮 Cristal : Crystal',
      intelligence: '🧠 Inteligencia : Intelligence',
      string: lenguajeGB.eCuerda(),
      keygold: '🔑 Llave de Oro : Key Gold',
      keyiron: '🗝️ Llave de Hierro : Key Iron',
      emas: lenguajeGB.ePinata(),
      fishingrod: '🎣 Caña de Pescar : Fishing Rod',
      gems: '🍀 Gemas : Gemas',
      magicwand: '⚕️ Varita Mágica : Magic Wand',
      mana: '🪄 Hechizo : Spell',
      agility: '🤸‍♂️ Agilidad : Agility',
      darkcrystal: '♠️ Cristal Oscuro : Dark Glass',
      iron: lenguajeGB.eHierro(),
      rock: lenguajeGB.eRoca(),
      potion: lenguajeGB.ePocion(),
      superior: '💼 Superior : Superior',
      robo: '🚔 Robo : Robo',
      upgrader: '🧰 Aumentar Mejora : Upgrade',
      wood: lenguajeGB.eMadera(),
      
      strength: '🦹‍ ♀️ Fuerza : Strength',
      arc: '🏹 Arco : Arc',
      armor: '🥼 Armadura : Armor',
      bow: '🏹 Super Arco : Super Bow',
      pickaxe: '⛏️ Pico : Peak',
      sword: lenguajeGB.eEspada(),
      
      common: lenguajeGB.eCComun(),
      uncoommon: lenguajeGB.ePComun(),
      mythic: lenguajeGB.eCMistica(),
      legendary: lenguajeGB.eClegendaria(),
      petFood: lenguajeGB.eAMascots(), //?
      pet: lenguajeGB.eCMascota(),//?
      
      bibitanggur: lenguajeGB.eSUva(), bibitapel: lenguajeGB.eSManzana(), bibitjeruk: lenguajeGB.eSNaranja(), bibitmangga: lenguajeGB.eSMango(), bibitpisang: lenguajeGB.eSPlatano(),
      
      ayam: '🐓 Pollo : Chicken',
      babi: '🐖 Puerco : Pig',
      Jabali: '🐗 Jabalí : Wild Boar',
      bull: '🐃 Toro : Bull',    
      buaya: '🐊 Cocodrilo : Alligator',    
      cat: lenguajeGB.eGato(),    
      centaur: lenguajeGB.eCentauro(),
      chicken: '🐓 Pollo : Chicken',
      cow: '🐄 Vaca : Cow', 
      dog: lenguajeGB.ePerro(),
      dragon: lenguajeGB.eDragon(),
      elephant: '🐘 Elefante : Elephant',
      fox: lenguajeGB.eZorro(),
      giraffe: '🦒 Jirafa : Giraffe',
      griffin: lenguajeGB.eAve(), //Mascota : Griffin',
      horse: lenguajeGB.eCaballo(),
      kambing: '🐐 Cabra : Goat',
      kerbau: '🐃 Búfalo : Buffalo',
      lion: '🦁 León : Lion',
      money: lenguajeGB.eGataCoins(),
      monyet: '🐒 Mono : Monkey',
      panda: '🐼 Panda',
      snake: '🐍 Serpiente : Snake',
      phonix: '🕊️ Fénix : Phoenix',
      rhinoceros: '🦏 Rinoceronte : Rhinoceros',
      wolf: lenguajeGB.eLobo(),
      tiger: '🐅 Tigre : Tiger',
      cumi: '🦑 Calamar : Squid',
      udang: '🦐 Camarón : Shrimp',
      ikan: '🐟 Pez : Fish',
      
      fideos: '🍝 Fideos : Noodles',
      ramuan: '🧪 Ingrediente NOVA : Ingredients',
      knife: '🔪 Cuchillo : Knife'
    };
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string));
    if (!results.length) return '';
    else return emot[results[0][0]];
  }
};

global.rpgg = { //Solo emojis 
  emoticon(string) {
    string = string.toLowerCase();
    let emott = {
      level: '🧬', limit: '💎', exp: '⚡', bank: '🏦',
      diamond: '💎+', health: '❤️', kyubi: '🌀', joincount: '🪙',
      emerald: '💚', stamina: '✨', role: '💪', premium: '🎟️',
      pointxp: '📧', gold: '👑',
      
      trash: '🗑', crystal: '🔮', intelligence: '🧠', string: '🕸️', keygold: '🔑',
      keyiron: '🗝️', emas: '🪅', fishingrod: '🎣', gems: '🍀', magicwand: '⚕️',
      mana: '🪄', agility: '🤸‍♂️', darkcrystal: '♠️', iron: '⛓️', rock: '🪨',
      potion: '🥤', superior: '💼', robo: '🚔', upgrader: '🧰', wood: '🪵',
      
      strength: '🦹‍ ♀️', arc: '🏹', armor: '🥼', bow: '🏹', pickaxe: '⛏️', sword: '⚔️',
      
      common: '📦', uncoommon: '🥡', mythic: '🗳️', legendary: '🎁', petFood: '🍖', pet: '🍱',
      
      bibitanggur: '🍇', bibitapel: '🍎', bibitjeruk: '🍊', bibitmangga: '🥭', bibitpisang: '🍌',
      
      ayam: '🐓', babi: '🐖', Jabali: '🐗', bull: '🐃', buaya: '🐊', cat: '🐈',      
      centaur: '🐐', chicken: '🐓', cow: '🐄', dog: '🐕', dragon: '🐉', elephant: '🐘',
      fox: '🦊', giraffe: '🦒', griffin: '🦅', //Mascota : Griffin',
      horse: '🐎', kambing: '🐐', kerbau: '🐃', lion: '🦁', money: '🐱', monyet: '🐒', panda: '🐼',
      snake: '🐍', phonix: '🕊️', rhinoceros: '🦏',
      wolf: '🐺', tiger: '🐅', cumi: '🦑', udang: '🦐', ikan: '🐟',
      
      fideos: '🍝', ramuan: '🧪', knife: '🔪'
    };
    let results = Object.keys(emott).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string));
    if (!results.length) return '';
    else return emott[results[0][0]];
  }
};


global.rpgshop = { //Tienda
  emoticon(string) {
    string = string.toLowerCase();
    let emottt = {
      exp: lenguajeGB.eExp(), limit: lenguajeGB.eDiamante(), diamond: lenguajeGB.eDiamantePlus(), joincount: lenguajeGB.eToken(),
      emerald: lenguajeGB.eEsmeralda(), berlian: lenguajeGB.eJoya(), kyubi: lenguajeGB.eMagia(), gold: lenguajeGB.eOro(),
      money: lenguajeGB.eGataCoins(), tiketcoin: lenguajeGB.eGataTickers(), stamina: lenguajeGB.eEnergia(),
            
      potion: lenguajeGB.ePocion(), aqua: lenguajeGB.eAgua(), trash: lenguajeGB.eBasura(), wood: lenguajeGB.eMadera(),
      rock: lenguajeGB.eRoca(), batu: lenguajeGB.ePiedra(), string: lenguajeGB.eCuerda(), iron: lenguajeGB.eHierro(),
      coal: lenguajeGB.eCarbon(), botol: lenguajeGB.eBotella(), kaleng: lenguajeGB.eLata(), kardus: lenguajeGB.eCarton(),
      
      eleksirb: lenguajeGB.eEletric(), emasbatang: lenguajeGB.eBarraOro(), emasbiasa: lenguajeGB.eOroComun(), rubah: lenguajeGB.eZorroG(),
      sampah: lenguajeGB.eBasuraG(), serigala: lenguajeGB.eLoboG(), kayu: lenguajeGB.eMaderaG(), sword: lenguajeGB.eEspada(),
      umpan: lenguajeGB.eCarnada(), healtmonster: lenguajeGB.eBillete(), emas: lenguajeGB.ePinata(), pancingan: lenguajeGB.eGancho(),
      pancing: lenguajeGB.eCanaPescar(),
       
      common: lenguajeGB.eCComun(), uncoommon: lenguajeGB.ePComun(), mythic: lenguajeGB.eCMistica(),
      pet: lenguajeGB.eCMascota(),//?
      gardenboxs: lenguajeGB.eCJardineria(),//?
      legendary: lenguajeGB.eClegendaria(),
      
      anggur: lenguajeGB.eUva(), apel: lenguajeGB.eManzana(), jeruk: lenguajeGB.eNaranja(), mangga: lenguajeGB.eMango(), pisang: lenguajeGB.ePlatano(),
      
      bibitanggur: lenguajeGB.eSUva(), bibitapel: lenguajeGB.eSManzana(), bibitjeruk: lenguajeGB.eSNaranja(), bibitmangga: lenguajeGB.eSMango(), bibitpisang: lenguajeGB.eSPlatano(),
      
      centaur: lenguajeGB.eCentauro(), griffin: lenguajeGB.eAve(), kucing: lenguajeGB.eGato(), naga: lenguajeGB.eDragon(),
      fox: lenguajeGB.eZorro(), kuda: lenguajeGB.eCaballo(), phonix: lenguajeGB.eFenix(), wolf: lenguajeGB.eLobo(),
      anjing: lenguajeGB.ePerro(),
 
      petFood: lenguajeGB.eAMascots(), //?
      makanancentaur: lenguajeGB.eCCentauro(), makanangriffin: lenguajeGB.eCAve(),
      makanankyubi: lenguajeGB.eCMagica(), makanannaga: lenguajeGB.eCDragon(), makananpet: lenguajeGB.eACaballo(), makananphonix: lenguajeGB.eCFenix()
    }
    let results = Object.keys(emottt).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string));
    if (!results.length) return '';
    else return emottt[results[0][0]];
  }
};

global.rpgshopp = { //Tienda
  emoticon(string) {
    string = string.toLowerCase();
    let emotttt = {
      exp: '⚡', limit: '💎', diamond: '💎+', joincount: '🪙',
      emerald: '💚', berlian: '♦️', kyubi: '🌀', gold: '👑',
      money: '🐱', tiketcoin: '🎫', stamina: '✨',
            
      potion: '🥤', aqua: '💧', trash: '🗑', wood: '🪵',
      rock: '🪨', batu: '🥌', string: '🕸️', iron: '⛓️',
      coal: '⚱️', botol: '🍶', kaleng: '🥫', kardus: '🪧',
      
      eleksirb: '💡', emasbatang: '〽️', emasbiasa: '🧭', rubah: '🦊🌫️',
      sampah: '🗑🌫️', serigala: '🐺🌫️', kayu: '🛷', sword: '⚔️',
      umpan: '🪱', healtmonster: '💵', emas: '🪅', pancingan: '🪝',
      pancing: '🎣',
       
      common: '📦', uncoommon: '🥡', mythic: '🗳️',
      pet: '📫',//?
      gardenboxs: '💐',//?
      legendary: '🎁',
      
      anggur: '🍇', apel: '🍎', jeruk: '🍊', mangga: '🥭', pisang: '🍌',
      
      bibitanggur: '🌾🍇', bibitapel: '🌾🍎', bibitjeruk: '🌾🍊', bibitmangga: '🌾🥭', bibitpisang: '🌾🍌',
      
      centaur: '🐐', griffin: '🦅', kucing: '🐈', naga: '🐉', fox: '🦊', kuda: '🐎', phonix: '🕊️', wolf: '🐺', anjing: '🐶',
       
      petFood: '🍖', //?
      makanancentaur: '🐐🥩', makanangriffin: '🦅🥩', makanankyubi: '🌀🥩', makanannaga: '🐉🥩',
      makananpet: '🍱🥩', makananphonix: '🕊️🥩'  
    }
    let results = Object.keys(emotttt).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string));
    if (!results.length) return '';
    else return emotttt[results[0][0]];
  }
};

let file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright("Update 'config.js'"));
  import(`${file}?update=${Date.now()}`);
});

const moment = require("moment-timezone");
const fs = require("fs");

moment.tz.setDefault("Asia/Jakarta").locale("id");

let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
let setting = JSON.parse(fs.readFileSync('./config.json'))
const { getLimit, getBalance, cekGLimit } = require("../lib/limit")

const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

function toCommas(x) {
	x = x.toString()
	var pattern = /(-?\d+)(\d{3})/;
     while (pattern.test(x))
	   x = x.replace(pattern, "$1,$2");
	return x;
}

angka = 0
let HB = '⊳'
let SB = '•'
let SK = '❏'
let K1 = '『'
let K2 = '』'
let YR = '⇒'
let BF = '_'
let P4 = '```'
let GK = '➛'

let monospace = '_'
let stripkiri = ' ⊳ *_'
let stripknan = '_*'
let formatText = ' <text>'
let formatPesan = ' <reply pesan>'
let formatPesann = ' <key@response>'
let formatNya = ' <key>'
let TextKiri = '⭓ *'
let textKanan = '*'

let teks1= 'MENU SIMPLE'
let teks2 = 'NULIS MENU'
let teks3 = 'DOWNLOADER'
let teks4 = 'ISLAMIC MENU'
let teks5 = 'GROUP MENU'
let teks6 = 'OWNER MENU'
let teks7 = 'WALLPAPER RANDOM'
let teks8 = 'KERANG AJAIB'
let teks9 = 'PAYMENT/BANK'
let teks10 = 'CONVERT/TOOLS'
let teks11 = 'SEARCH MENU'
let teks12 = 'STORE MENU'
let teks13 = 'RANDOM MENU'
let teks14 = 'GAMES MENU'
let teks15 = 'PREMIUM MENU'
let teks16 = 'TEXTPRO MENU'
let teks17 = 'AUEOTEXT MENU'
let teks18 = 'MAGER NULIS'

let textMenu1 =`${TextKiri}${teks1}${textKanan}`
let textMenu2 =`${TextKiri}${teks2}${textKanan}`
let textMenu3 =`${TextKiri}${teks3}${textKanan}`
let textMenu4 =`${TextKiri}${teks4}${textKanan}`
let textMenu5 =`${TextKiri}${teks5}${textKanan}`
let textMenu6 =`${TextKiri}${teks6}${textKanan}`
let textMenu7 =`${TextKiri}${teks7}${textKanan}`
let textMenu8 =`${TextKiri}${teks8}${textKanan}`
let textMenu9 =`${TextKiri}${teks9}${textKanan}`
let textMenu10 =`${TextKiri}${teks10}${textKanan}`
let textMenu11 =`${TextKiri}${teks11}${textKanan}`
let textMenu12 =`${TextKiri}${teks12}${textKanan}`
let textMenu13 =`${TextKiri}${teks13}${textKanan}`
let textMenu14 =`${TextKiri}${teks14}${textKanan}`
let textMenu15 =`${TextKiri}${teks15}${textKanan}`
let textMenu16 =`${TextKiri}${teks16}${textKanan}`
let textMenu17 =`${TextKiri}${teks17}${textKanan}`
let textMenu18 =`${TextKiri}${teks18}${textKanan}`

let J1 =`▬▭▬▭▬▭▬▭▬▭▬▭▬▭
╔━══━══━══━══━══━══━
┃╭──────────────────
║╞═[`
let J4 =`]`
let J3 =`┃╰──────────────────
╚━══━══━══━══━══━══━`
let J2 =`┃│⭓ `
let TT1 =`▬▭▬▭▬▭▬▭▬▭▬▭▬▭
╔━══━══━══━══━══━══━
┃╭──────────────────
║╞═➤`
let TT2 =`⌟`
let TT3 =`┃│➢`
let DR =`*──────────────────*`
let H4 =`└───⭓`

exports.allmenu = (sender, prefix, pushname, isOwner, isPremium, balance, limit, limitCount, glimit, gcount) => {
	return `*───•「 ${setting.botName} - MD 」•───*
	
 _*${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'}*_

 ❑ *INFO SERVER*
 ➢ _Library : Baileys-MD._
 ➢ _Prefix : Multi Prefix_
 ➢ _Author : Venn Ngtd_
 ➢ _Tanggal : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}_
 ➢ _Waktu : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}_
 
 ❑ *INFO USERS*
 ➢ _Name : ${pushname}_
 ➢ _Status : ${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Free'}_
 ➢ _Limit Harian : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}_
 ➢ _Limit Game : ${isOwner ? '-' : cekGLimit(sender, gcount, glimit)}_
 ➢ _Saldo : Rp.${toCommas(getBalance(sender, balance))}_
 

${textMenu12}
${stripkiri}${prefix}kali${stripknan}
${stripkiri}${prefix}bagi${stripknan}
${stripkiri}${prefix}kurang${stripknan}
${stripkiri}${prefix}tambah${stripknan}
${stripkiri}${prefix}buysc${stripknan}
${stripkiri}${prefix}jasarun${stripknan}
${stripkiri}${prefix}store${stripknan}
${stripkiri}${prefix}ceklist${stripknan}
${stripkiri}${prefix}topupff${stripknan}
${stripkiri}${prefix}dellist${formatNya}${stripknan}
${stripkiri}${prefix}addlist${formatPesann}${stripknan}
${stripkiri}${prefix}updatelist${formatPesann}${stripknan}
${stripkiri}done${formatPesan}${stripknan}
${stripkiri}proses${formatPesan}${stripknan}

`
}

exports.rulesnya = (sender, prefix) => {
   return `
   ≻ *RULES BOT*
   
1. Jangan spam bot. 🙅
Sanksi: *❎ WARN/SOFT BLOCK*

2. Jangan telepon bot. ☎️
Sanksi: *❎ SOFT BLOCK*

3. Jangan mengeksploitasi bot.😖
Sanksi: *PERMANENT BLOCK*

🗯️ Bot tidak atau lambat merespon ?
➡️ Mungkin dipengaruhi oleh jaringan, signal, banned oleh Whatsapp dan beberapa asalan. Tetap patuhi rules‼️

🗯️ Dimana saya bisa mendapatkan Script dari bot ini ?
➡️ Script ini di jual oleh Venn Jika Minat Chat Wa.me/6282138899290

🗯️ Boleh saya menambah ke grup?
➡️ Untuk sementara bot dalam status free to add group.

🗯️ Prefixnya apa ya?
➡️ Bot ini menggunakan multi prefix. Berarti anda bisa menggunakan prefix #, . , Dan prefix wajar lainnya.

🗯️ Kak, kok syaa chat owner tidak direspon?
➡️ Owner hanya merespon pertanyaan seputar bot Dan kendala eror, tidak untuk kenalan ataupun mengemis script.


Jika sudah dipahami rules-nya, silakan ketik *#menu* untuk memulai!

⚠️ Segala kebijakan dan ketentuan Neobot di pegang oleh owner dan segala perubahan kebijakan, sewaktu waktu owner berhak mencabut, memblokir user(*﹏*) 

Arigatou Gozaimasu! Untuk kalian user ramah dan Beberapa orang yg ikut membantu juga dalam project pembuatan Neobot
😖🙏`
}

exports.sewabot = (sender, prefix) => {
   return `
☞ *LIST HARGA SEWABOT*
 ➢ _2 Hari : Rp3.000_
 ➢ _5 Hari : Rp5.000_
 ➢ _1 Minggu : Rp7.000_
 ➢ _2 Minggu : Rp12.000_
 ➢ _1 Bulan : Rp15.000_
 ➢ _2 Bulan : Rp25.000_
 ➢ _3 Bulan : Rp45.000_

_Hai Kak Mau Sewa Bot ??_
_Untuk Fiturnya Bisa Di Cek #allmenu_
_Jika Minat Chat Owner Ketik #owner_

*───•「 ${setting.botName} - MD 」•───*
`
}

exports.donasibot = (sender, prefix) => {
   return `
  ‣ *DONASI BOT*
 ➢ DANA = 082138899290
 ➢ OVO = 082138899290
 ➢ PULSA = 082138899290
 ➢ QRIS = 
 
Hallo Kak ${ucapanWaktu}
Beneran Mau Donasi Bot ??
Silahkan Pilih Payment Di Atas

Terimakasih untuk kamu yang sudah donasi untuk perkembangan bot ini
`
}
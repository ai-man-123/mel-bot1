let fs = require('fs')
let chalk = require('chalk')
global.owner = ['60102810046', '436507776335335'] // Nomor Owner
global.autoread = true // false untuk menonaktifkan autoread, true untuk menyalakan autoread
global.selfmode = false // false = Mode Publik, true = Mode Self
global.thumb = './thumb/itsuki.jpg'
global.fakereplyt = 'Mel-bot1 WhatsApp' // Teks Untuk Fake Reply
global.mess = {
group : {
welcome : `Welcome @user\n\nSelamat datang di grup @subject`, // Teks Untuk Welcome
bye : `Bye '@user`, // Teks Untuk Bye
promote: '@user Sekarang admin!', // Teks Untuk Detect Promote
demote: '@user Sekarang bukan admin!' // Teks Untuk Detect Demote
},
error : 'Terjadi Kesalahan', // Error
success: 'Sukses...' // Sukses
}
global.server = false // true = Manyalakan server Localhost, false = menonaktifkan server Localhost
global.prefix = '🐤' // Skip, Ga Terlalu Berguna
global.author = '@Aiman*͘⁴̅⁰͍⁴̵〆*' // Nama Author Sticker
global.packname = 'WhatsApp Bot' // Nama Packname Sticker


// LIST APIKEY

global.APIs = { // APIKey Here
  nrtm: 'https://nurutomo.herokuapp.com',
  zeks: 'https://api.zeks.me',
  mel: 'https://melcanz.com'
}

global.APIKeys = { // 4ef1b11287339c1b10699ece
  'https://api.zeks.me': 'rikkabotwa', // Free Ampikey :v
  'https://melcanz.com': '4ef1b11287339c1b10699ece', // Buy Apikey On https://wa.me/6287755080455 Or Register On https://melcanz.com
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})

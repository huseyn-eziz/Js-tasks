// 7.İstifadəçidən tam adı «AD SOYAD» formatında daxil etməyi xahiş edin. Tam adını konsola fərqli qaydada yəni «SOYAD AD» formatında çıxarın,

const adsoyad = prompt('adı «AD SOYAD» formatında daxil')

const ad = adsoyad.substring(0, adsoyad.indexOf(' '))
const soyad = adsoyad.substring(adsoyad.indexOf(' '), adsoyad.length)


console.log(soyad + " " + ad);
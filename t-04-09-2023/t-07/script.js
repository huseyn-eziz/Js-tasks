// 7.İstifadəçidən tam adı «AD SOYAD» formatında daxil etməyi xahiş edin. Tam adını konsola fərqli qaydada yəni «SOYAD AD» formatında çıxarın,

let user = prompt("Ad ve Soyadini Daxil edin");

console.log(user.split(' ').reverse().join(' '));
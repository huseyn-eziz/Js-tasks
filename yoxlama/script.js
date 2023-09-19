//! 1. object  
// Bir nece seyi bir hissede vermek ucun meselen. deyerleri acar sozle vermek ucundur.birinci hisse key ikinci hisse value dir
//meselen
//  let obj = {
//     ad: eziz,
//     familya: huseyn
//  }
//burada ad ve familya key, eziz ve huseyn value.dir

//! 2. function her hansi bir seyi cagirmaq ucundur icinde parametr verilir. sonra cagiririq .bir nece novu var
// meselen:
// function cagir(paramt) {
//     console.log(paramt);
// }
//arrow functionlar
//meselen
// function adsoyad(ad, soyad) {
//     this.ad = ad;
//     this.soyad = soyad;
//   }
//   var kisi = new adsoyad("eziz", "huseyn");

// cagir('meni cagirdilar geldim')

//!! 3 heap / stack  stack muveqqeti olarak ozunde saxliyir. verilenler stackdan cagirildigi zaman cixarilir
// heap ise daha boyuk verilerin meselen objectlerin saxlanildigi yerdir.bunu objectlerde bele izah edim:

// let obj = {
//     ad: ehmed
// }

// let obj1 = {
//     ad:ehmed
// }

//meselen obj - obj1 yazsam bunlarin adresi referanslari heap-da oldugu ucun beraber deyil

// amma 
// let obj3 = obj //yazsam bunlarin stackda olgu ucun adresleri eynidir

//!! 4 Font Case Defination 
// kebab case - aralarinda defisle olan kodlar
// user-name
// snake case altdan xetle yazilan kodlar
// user_name
// camel case 2ci sozun herfleri boyuk olan kodlar
// favePhrase = "Hello World"
// her sozun bas herfi boyuk olan
// FavePhrase = "Hello World"

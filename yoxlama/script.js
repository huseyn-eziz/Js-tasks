const sayılar = [10, 20, 30, 40, 50];
const hedefSayı = 30;
const bulunanSayı = sayılar.findIndex(function(sayı) {
  return sayı === hedefSayı;
});
console.log(bulunanSayı);

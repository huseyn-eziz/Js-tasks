// A: proud of you 🤠
//! 2. Funksiya yazin ki, massivde olan butun elementlerin hasilini ekrana cixarsin. 
let massiv =[1,2,3,4,5]

function hasili(massiv) {
  let massiv2 = 1
  for (let i = 0; i < massiv.length; i++) {
    massiv2 = massiv[i] * 2
    console.log(massiv2);
  }
}

hasili(massiv)

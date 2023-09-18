// 3. removeCharacterFromString("Alion","A") -> "lion" . bele bir funksiya yazin, sozden character silme. Alion sozu verdik ve A characteri verdik, sozden A-ni sildi. 
// A: live legend 🐱‍💻
function removeCharacterFromString(soz,herf) {

    return  soz.substring(0,soz.indexOf(herf)) + soz.substring(soz.indexOf(herf)+1,soz.length)
    
}

console.log(removeCharacterFromString("Alion","o"));

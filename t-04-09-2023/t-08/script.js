// 8.Telefon nömrəsini parametr kimi qəbul edən isvalidnumber() funksiyasını yazın. Telefon nömrəsi 11 rəqəmdən ibarət olduqda və +7 ilə başladıqda, funksiya true qaytarır.

function isvalidnumber(nomre) {
    return (nomre.length == 12 && nomre.startsWith("+7")) ? "nomre duzgundur" : 'nomre yanlisdir'
    
}

const nomr = prompt('+7 ilə başlayan nomre daxil et')
console.log(isvalidnumber(nomr));
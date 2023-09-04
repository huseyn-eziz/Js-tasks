// 6.İstifadəçidən 1 ilə 99 arasında rəqəm daxil etməsini tələb edən və onu mətn şəklində konsola çıxaran numberToText funksiyası tərtib edin.

function numberToText(reqem) {
    const sozdekiteklikler = [
        "Sıfır", "Bir", "İki", "Üç", "Dört", "Beş", "Altı", "Yeddi", "Sekkiz", "Doqquz"
    ]
    if (reqem < 10) {
        console.log(sozdekiteklikler[reqem]);
    } else {
        const onluqlar = parseInt(reqem / 10);
        const teklikler = reqem % 10;
        const sozdekionluqlar = [
            "", "On", "Yirmi", "Otuz", "Qirx", "Elli", "Altmış", "Yetmiş", "Seksen", "Doxsan"
        ]
        if (teklikler!=0) {
            
            console.log(sozdekionluqlar[onluqlar] +' '+ sozdekiteklikler[teklikler].toLowerCase());
        } else{
            console.log(sozdekionluqlar[onluqlar])
        }

    }
}

const eded = prompt('Eded daxil et')

numberToText(eded);

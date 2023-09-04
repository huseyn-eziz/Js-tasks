// 4.Biletin şanslı olub olmadığını yoxlayan funksiya yazın.
// Altı rəqəmli ədəd qəbul edən və ilk üç rəqəminin cəminin ikinci üç rəqəminin cəminə bərabər olduğunu yoxlayan isLucky(123321) funksiyasını yazın.
// Bilet uğurlu olarsa, funksiya true, uğursuz olarsa, false qaytarmalıdır.

function isLucky(number) {
    if (number < 100000 && number > 1000000) {
        return false
    }
    const numberstr = number.toString();
    const ilkucu = parseInt(numberstr[0]) + parseInt(numberstr[1]) + parseInt(numberstr[2])
    const sonucu = parseInt(numberstr[3]) + parseInt(numberstr[4]) + parseInt(numberstr[5])




    return (ilkucu == sonucu) ? console.log('Biletiniz ugurludur') : console.log('biletiniz ugursuzdur');;
}


isLucky(110011)


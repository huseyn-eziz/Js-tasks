// 5.İstifadəçidən tarixi «YYYY.MM.DD» formatında daxil etməyi xahiş edin. Tarixin təsvirini «12 may 2019-cu il» formatında çıxarın. İstifadəçi səhv formatda dəyər daxil edərsə, «Yanlış dəyər daxil edilib» bildirişi göstərin.


// A: best killer 🗡
// const tarix = prompt('Tarixi «YYYY.MM.DD» formatında daxil edin');
function tarixyaz(tarix) {
    const split = tarix.split(".")
    const il = split[0]
    const ay = split[1]
    const gun = split[2]
    if (tarix.length > 10 || il.length > 4 || ay.length != 2 || gun.length != 2 || ay > 12 || gun > 31) {
        return ("Yanlış dəyər daxil edilib")
    } else {
        switch (ay) {
            case "01":
                return `${gun} yanvar ${il}-ci il`;
            case "02":
                return `${gun} fevral ${il}-ci il`;
            case "03":
                return `${gun} mart ${il}-ci il`;
            case "04":
                return `${gun} aprel ${il}-ci il`;
            case "05":
                return `${gun} may ${il}-ci il`;
            case "06":
                return `${gun} iyun ${il}-ci il`;
            case "07":
                return `${gun} iyul ${il}-ci il`;
            case "08":
                return `${gun} avqust ${il}-ci il`;
            case "09":
                return `${gun} sentyabr ${il}-ci il`;
            case "10":
                return `${gun} oktaybr ${il}-ci il`;
            case "11":
                return `${gun} noyabr ${il}-ci il`;
            case "12":
                return `${gun} dekabr ${il}-ci il`;
        }
    }
}
const tarix = prompt('Tarixi «YYYY.MM.DD» formatında daxil edin');
console.log(tarixyaz(tarix));


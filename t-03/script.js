let km = prompt("Km daxil edin");
let mil = km * 0.6214;

function miliyuvarla(mil) {
    return Math.floor(mil * 100) / 100;
}


let yuvarlanmismil = miliyuvarla(mil);


console.log(km + " km " + yuvarlanmismil + " mildir");

// A: best killer 🗡
function ededler(eded1,eded2,eded3) {
    if (eded1 > eded2 && eded1>eded3){
        console.log(`${eded1} en boyukdur`);
    } else if (eded2 > eded1 && eded2>eded3){
        console.log(`${eded2} en boyukdur`);
    } else if(eded3 > eded2 && eded3>eded1){
        console.log(`${eded3} en boyukdur`);
    }
    else {
       console.log(`hamisi beraberdir`);
    }
}

ededler(5,6,7)
ededler(5,8,7)
ededler(9,6,7)
ededler(7,7,7)

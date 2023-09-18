// A: cool 😎
const meyveler = ['elma', 'armut', 'muz', 'çilek'];


let lazimlimeyve = 'arsmut'


const bulunanMeyve = meyveler.find((meyve) => meyve == lazimlimeyve)

if (bulunanMeyve !== undefined ){
    console.log('arrayda armut var');
} else{
    console.log('arrayda '  +lazimlimeyve+ ' yoxdu');
    
}

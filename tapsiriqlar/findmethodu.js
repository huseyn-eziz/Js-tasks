const meyveler = ['elma', 'armut', 'muz', 'çilek'];


let lazimlimeyve = 'armut'


const bulunanMeyve = meyveler.find((meyve) => meyve == lazimlimeyve)

if (bulunanMeyve !== undefined ){
    console.log('arrayda armut var');
}

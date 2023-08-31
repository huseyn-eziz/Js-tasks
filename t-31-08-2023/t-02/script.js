let obj = {
    city : '',
    country : ''
}


function prop2Taker(prop1,prop2) {
    prop2 = prompt("Seher adi daxil et")
    prop1 =  prompt('Olke adi daxil et')
    obj.continent = prop1
    obj.country = prop2
    const prop3 = Object.keys(obj)

    console.log(`
    Olke: ${prop1} 
    Seher: ${prop2} 
    1ci deyer :${prop3[0]}`)
}

prop2Taker( )
const users = [
    {
        id: 1,
        username: "Ali",
        img: 'ali',
        job: 'developer'
    },
    {
        id: 2,
        username: 'bedbext_developer',
        img: 'bedbext_developer',
        job: 'test2',
    },
    {
        id: 3,
        username: 'duman',
        img: 'duman',
        job: 'test3',
    },
    {
        id: 4,
        username: 'js_oyrenen_shexs',
        img: 'js_oyrenen_shexs',
        job: 'test4',
    },
    {
        id: 5,
        username: 'qarli_daglar',
        img: 'qarli_daglar',
        job: 'test5',
    },
    {
        id: 6,
        username: 'qoca_cinar',
        img: 'qoca_cinar',
        job: 'test6',
    },
    {
        id: 7,
        username: 'visselka',
        img: 'visselka',
        job: 'test7',
    },
    {
        id: 8,
        username: 'novxani',
        img: 'novxani',
        job: 'test8',
    },
]
const root = document.getElementById('root')
const sumbit = document.getElementById('sumbit')
const cevre = document.getElementById('cevre')
const text = document.getElementById('text')
const uzunluq = document.getElementById('uzunluq')


//! #task2. Bir input yaradin. Hemin input-a 10px ile 100px araliginda bir deyer yaza bilim ve goster button-una clickleyenden sonra yazdigim deyer, asagida olan cevrenin width ve height-i olsun.
//! Ve en asagida yazilan sahede  bu cevrenin olcusu haqqinda melumatlar verilsin. Sahesi uzunlugu ve s. 
//! pi = 3 goturun. ya da Math.PI ile isleyin. 

//! Dustur: cevrenin uzunlugu: 2*pi*r
//! Cevrenin sahesi: pi*r*r



submit.onclick = () => {
    if (parseInt(text.value) < 10 || parseInt(text.value) > 100) {
        alert('Duzgun deyer daxil et')

    } else {

        cevre.style.width = text.value
        cevre.style.height = text.value
        let r = text.value
        let pi = 3
        let uzunlugu = 2 * pi * parseInt(r)
        let sahe = pi * parseInt(r) * parseInt(r) 
        uzunluq.innerHTML = `
        <h1>Cevrenin uzunlugu ${uzunlugu} sm-dir </h1>
       <h1>Cevrenin uzunlugu: ${sahe} sm-dir </h1>`
    }
}
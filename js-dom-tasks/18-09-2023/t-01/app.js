const users=[
    {
        id:1, 
        username:"Ali",
        img:'ali',
        job:'developer'
    },
    {
        id:2,
        username:'bedbext_developer',
        img:'bedbext_developer',
        job:'test2',
    },
    {
        id:3,
        username:'duman',
        img:'duman',
        job:'test3',
    },
    {
        id:4,
        username:'js_oyrenen_shexs',
        img:'js_oyrenen_shexs',
        job:'test4',
    },
    {
        id:5,
        username:'qarli_daglar',
        img:'qarli_daglar',
        job:'test5',
    },
    {
        id:6,
        username:'qoca_cinar',
        img:'qoca_cinar',
        job:'test6',
    },
    {
        id:7,
        username:'visselka',
        img:'visselka',
        job:'test7',
    },
    {
        id:8,
        username:'novxani',
        img:'novxani',
        job:'test8',
    },
]
const root = document.getElementById('root')
const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const btn4 = document.getElementById('btn4')
//   your code goes here
//! Task.1 4 ədəd button olsun. Hansına clickləsəm bodynin rəngi o rəngdə olsun. 
//! elementi querySelector ile alin. Ve onun onclick propertysinden istifade edin. onClick property-si bir funksiya alir

btn1.onclick = () =>{
    root.style.backgroundColor = 'gray'
}
btn2.onclick = () =>{
    root.style.backgroundColor = 'red'
}
btn3.onclick = () =>{
    root.style.backgroundColor = 'blue'
}
btn4.onclick = () =>{
    root.style.backgroundColor = 'yellow'
}



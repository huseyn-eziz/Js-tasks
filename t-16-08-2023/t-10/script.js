// A: variable adlarini dogru yazaq
let e1 = +prompt(`Eded1 daxil edin:`)
let e2 = +prompt(`Eded2 daxil edin:`)
let e3 = prompt(`Operatoru daxil edin(+-*/):`)


if (e3 === "+") {

    alert(e1 + e2)

} else if (e3 === "-") {

    alert(e1 - e2)

} else if (e3 === "*") {

    alert(e1 * e2)

} else {

    alert(e1 / e2)

}

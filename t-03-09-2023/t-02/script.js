// 2. Write a JavaScript function to convert a string in abbreviated form. (Alion GreenHeart -> Alion G.) 


function qisalt(verilen) {
    return verilen.substring(0,verilen.indexOf(' ')) + ' G.' 
    
}


console.log(qisalt('ALION greenhart'));


// A: cool 😎
const reqemler = [10, 15, 20, 25, 30];

function cemihesabla(reqemler) {
  let umumi = 0;
  
  reqemler.forEach((say) => umumi += say)

  return umumi;
}

const cem = cemihesabla(reqemler);


console.log("cem:", cem);

//! 3. multiply(a,b,c) funksiyasi yaradin. Men ona istediyim sayda argument versem bele islemelidir, hasilini geri qaytarmalidir.
// A: live legend 🐱‍💻
function multiply(...ehmed) {
 
  let mult = 1;
  for (let i = 0; i < ehmed.length; i++) {
    mult *= ehmed[i];
  }

  console.log("Mult is", mult);
}

multiply(1);
multiply(2, 3);
multiply(2, 5, 9);
multiply(5, 6, 2, 3);

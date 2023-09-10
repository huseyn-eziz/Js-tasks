function myFunction(a,b) {
    let sum = ''
    for (let i = 0; i < b.length; i++) {
      if (b[i] == a){
        sum += a
      }
    } 
    return sum.length
  }
  
  console.log( myFunction('h', 'how many times does the character occur in this sentence?'));
  
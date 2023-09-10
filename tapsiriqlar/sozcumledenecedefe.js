function myFunction(a,b) {
    let sum = 0
    for (let i = 0; i < b.length; i++) {
      if (b[i] == a){
        sum += a.length
      }
    } 
    return sum
  }
  
  console.log(myFunction('h', 'how many times does the character occur in this sentence?')
  );
  
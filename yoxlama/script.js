// function myFunction(a) {
  
//   return sum
// }

// console.log( myFunction([10, 100, 12000, 1]));

//! myFunction([1,-2,2,-4])
//! Expected
//! 2
//! myFunction([0,9,1])
//! Expected
//! 0
//! myFunction([4,-3,2,1,0])
//! Expected
//! 1


// function myFunction(a) {

//   let nese = a.filter((eded)=> eded<0).length

//   return nese
// }

// console.log(myFunction([0,9,1]))

//! Write a function that takes an array of numbers as argument. It should return the sum of the numbers.


// function myFunction(a) {
//   let sum = 0
//   a.forEach(element => {
//     sum += element
//   });
//   return sum
// }

// console.log( myFunction([10, 100, 12000, 1]));

//! Write a function that takes an array of numbers as argument. It should return the average of the numbers.

// function myFunction(arr) {
//     let sum = 0
//     arr.forEach(element => sum += element)
//     return sum/arr.length
// }
function myFunction( arr ) {
  return arr.reduce((acc, cur) => acc + cur, 0) / arr.length
  }
  
console.log( myFunction([-50,0,50,200]));
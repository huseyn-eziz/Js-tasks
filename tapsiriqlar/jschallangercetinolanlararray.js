// A: cool 😎
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

//! 2 usul
// function myFunction( arr ) {
//   return arr.reduce((acc, cur) => acc + cur) / arr.length
//   }

// console.log( myFunction([-50,0,50,200]));

//! Write a function that takes an array of strings as argument. Return the longest string.

// function myFunction(a) {

//   return a.reduce((uzun,qisa) => uzun.length > qisa.length ? uzun : qisa )
//   }

// console.log( myFunction(['I', 'need', 'candy']));

//!Write a function that takes an array as argument. It should return true if all elements in the array are equal. It should return false otherwise.

//! 1ci
// function myFunction(arr) {

//   let el =arr[0]
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== el) {
//       return false
//     }
//   };
//   return true
// }

// console.log(myFunction([1,1,1,1]));

//! 2ci usul

// function myFunction(arr) {
//   return new Set(arr).size === 1
// }
// console.log(myFunction([32,32,32,32]));

//!Write a function that takes an array of objects as argument. Sort the array by property b in ascending order. Return the sorted array


// function myFunction(arr) {

//      return arr.sort((az,bz) => az.b - bz.b)
// }

// console.log(myFunction([{a:2,b:10},{a:5,b:4}]));


//! Birlesdir sirala eyni deyerleri cixart

// function myFunction(a,b) {
    

//          return a.concat(b).sort((c,z) => c - z).filter((value, index, self) => self.indexOf(value) === index)

// }


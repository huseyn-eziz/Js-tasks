// A: cool 😎
//! Write a function that takes an object with two properties as argument. It should return the value of the property with key 'prop-2'. Hint: you might want to use the square brackets property accessor

// function myFunction(obj) {

// return obj['prop-2']


// }

// console.log(myFunction({  one: 1,  'prop-2': 2}));
// console.log(myFunction({  'prop-2': 'two',  prop: 'test'}));

//!Write a function that takes an object (a) and a string (b) as argument. Return true if the object has a property with key 'b'. Return false otherwise. Hint: test case 3 is a bit tricky because the value of property 'z' is undefined. But the property itself exists.

// function myFunction(a,b) {

//     console.log(a.hasOwnProperty(b)); 
// }


// myFunction({x:'a',y:'b',z:'c'},'a')
// myFunction({a:1,b:2,c:3},'b')
// myFunction({x:'a',y:'b',z:undefined},'z')

//!Write a function that takes an object (a) and a string (b) as argument. Return true if the object has a property with key 'b', but only if it has a truthy value. In other words, it should not be null or undefined or false. Return false otherwise.


// function myFunction(a, b) {
//     return Boolean(a[b])
// }

// console.log(myFunction({ a: 1, b: 2, c: 3 }, 'b'));
// console.log(myFunction({ x: 'a', y: null, z: 'c' }, 'y'));
// console.log(myFunction({ x: 'a', b: 'b', z: undefined }, 'z'));

//! myFunction(['a','b','c'],[1,2,3]) Expected {a:1,b:2,c:3}

//! usul 1
// function myFunction(a,b) {
//     const result = {};

//     for (let i = 0; i < a.length; i++) {
//       result[a[i]] = b[i];
//     }

//     return result;

// }

// console.log(myFunction(['a','b','c'],[1,2,3]));

//! usul2

// function myFunction(a,b) {

//     return a.reduce((ilk,son,i)=> ({...ilk, [son]:b[i] }) ,{})

//   }

//   console.log(myFunction(['a','b','c'],[1,2,3]));

//!Write a function that takes an object (a) as argument. Return an array with all object keys. myFunction({j:9,i:2,x:3,z:4}) ['j','i','x','z']

// function myFunction(a) {

//     return Object.keys(a) 

// }

// console.log(myFunction({j:9,i:2,x:3,z:4}));

//! Write a function that takes an object as argument. In some cases the object contains other objects with some deeply nested properties. Return the property 'b' of object 'a' inside the original object if it exists. If not, return undefined   myFunction({a:{b:{c:3}}}) {c:3}


// function myFunction(obj) {
//     if (obj.hasOwnProperty('a') && typeof obj.a === 'object' && obj.a.hasOwnProperty('b')) {
//         return obj.a.b;
//       }
//       return undefined;
//     }

// console.log(myFunction({a:{b:{c:3}}}));


//! keylerinin cemi

// function myFunction(obj) {

//     return Object.values(obj).reduce((a, b) => a + b)

// }

// console.log(myFunction({ j: 9, i: 2, x: 3, z: 4 }));

//! obyektden element sil

//!usul1

// function myFunction(obj,sil){
//   if (obj.hasOwnProperty(sil)){
//     delete obj[sil]
//   } 
//     return obj
  
    
// }

// console.log( myFunction({ e: 6, f: 4, b: 5, a: 3 },'b'))


//! usul2

// function myFunction(obj){
//   if (obj.hasOwnProperty('b')){
//     delete obj['b']
//   } 
//     return obj
  
    
// }

// console.log( myFunction({ e: 6, f: 4, b: 5, a: 3 }))

//!Write a function that takes two objects as arguments. Unfortunately, the property 'b' in the second object has the wrong key. It should be named 'd' instead. Merge both objects and correct the wrong property name. Return the resulting object. It should have the properties 'a', 'b', 'c', 'd', and 'e'


// function myFunction(x, y) {
//     const { b, ...rest } = y;
//     return { ...x, ...rest, d: b };
//   }


//   console.log(myFunction({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 }));



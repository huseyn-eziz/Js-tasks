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

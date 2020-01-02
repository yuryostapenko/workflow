/**
 * In mathematics, the look-and-say sequence is the sequence of integers beginning as follows:
 * 1, 11, 21, 1211, 111221, 312211, 13112221, 1113213211, ...
 */

// solution 76 chars
a=(n,p='1')=>n?a(n-1,p.match(/(.)\1*/g).reduce((c,i)=>c+i.length+i[0],'')):p

// test
console.log('test', a(7) === '1113213211');

// result
console.log('answer', a(8));
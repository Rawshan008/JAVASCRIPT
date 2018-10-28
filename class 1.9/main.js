var a = Boolean('');
console.log(a); // false
var a = Boolean('rawshan');
console.log(a); // true
var a = Boolean(0);
console.log(a); // false
var a = Boolean(5555);
console.log(a); // true
var a = Boolean(-5555);
console.log(a); // true
var a = Boolean(undefined);
console.log(a); // false
var a = Boolean(5555);
console.log(a); // true
var a = Boolean(NaN);
console.log(a); // false
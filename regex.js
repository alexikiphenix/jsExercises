"use strict";
/*
/w => mots, lettres : a-zA-Z_  (le tiret bas est inclu)

*/
const str = "Lo4 lor12 _3";
const regex = /_3$/gi;  
console.log(str.match(regex));
console.log(regex.test(str));
 //Strings
 let str = "Harshad";
 console.log(str);
 console.log(str.length);
 console.log(str[0]);


 //Template literals
 let obj = {
    item: "pen",
    price: 10,
};

let output = `the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);
//the cost of pen is 10 rupees


//string methods
//uppercase
let str = "harshad";
str = str.toUpperCase();
console.log(str);
    
//Lowercase
let str = "HARSHAD";
str = str.toLowerCase();
console.log(str);

//trim
let str = "  HARSHAD BADNALE  ";
str = str.trim();
console.log(str);

//slice
let str = "HARSHAD";
str = str.slice(0,5);
console.log(str);

//concat
let str1 = "HARSHAD";
let str2 = "BADNALE";
let res = str1.concat(str2);
console.log(res);

//replace
let str = "hello";
console.log(str.replace("lo","p"));

//charAt
let str = "javascript";
console.log(str.charAt(4));    
    
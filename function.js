 //function
 function myFunction() {
    console.log("Harshad");
}
myFunction();


//funtion parameter
function myFunction(msg) {
    console.log(msg);
}
myFunction("I Love JS"); //argument


//function 2 num sum
function sum (x , y) {
    s = x + y;
    return s;
}
let val = sum(3,4);
console.log(val);

//Arrow Function
const countVow = (str) => {
    let count = 0;
    for (const char of str) {
      if (
         char === "a" ||
         char === "e" ||
         char === "i" ||
         char === "o" ||
         char === "u" 
        ){
            count++;
        }
    }
    return count;
};
console.log(countVow("Harshad"));
//2



//foreach loop
let arr = [1, 2, 3, 4, 5];
arr.forEach((val) => {
   console.log(val);
});

 
//Array map method
let num = [57,85,27];
let newArr = num.map((val) => {
   return val;
});
console.log(newArr);
//57,85,27
 

//Array filter method
let arr=[1,2,3,4,5,6,7];

let evenArr = arr.filter((val) => {
    return val % 2 === 0;
});
console.log(evenArr);
//2,4,6


//Reduce
let arr =[1,2,3,4];

const output = arr.reduce((res, curr) => {
    return res + curr;
});

console.log(output);
//10
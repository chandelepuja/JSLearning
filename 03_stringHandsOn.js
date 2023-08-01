



function stringHandsOn(){
    var str = "     Hey you are doing good,keep it up       ";
    console.log(`---------------------------  Step 1  ------------------------`);
    console.log(`Given String is : ${str}`);

console.log(`---------------------------  Step 2  ------------------------`);
var lenghtStr = str. length;
console.log(`The length of string is : ${lenghtStr}`);

console.log(`---------------------------  Step 3  ------------------------`);
var newStr= str. trim();
var lengthNewStr = newStr. length;
console.log(`After trimming the string become : ${newStr}   and   now it's length become : ${lengthNewStr}`);

console.log(`---------------------------  Step 4  ------------------------`)
var resultTrim = str. length - lengthNewStr;
console.log(`Total number of extra spaces count that removed in Step 3 is : ${resultTrim}`);

console.log(`---------------------------  Step 5  ------------------------`)
var firstChar = newStr.charAt(0);
var lastChar = newStr.charAt(newStr.length - 1); 
console.log(`First character after trim is : ${firstChar} and Last character after trim is : ${lastChar}`);

console.log(`---------------------------  Step 6  ------------------------`)
var result = newStr.split('');
var words = result.length;
console.log(`Total number of words available in the string after Step 3 is : ${words}`);

console.log(`---------------------------  Step 7  ------------------------`)
var newIndex = newStr.indexOf('good');
console.log(`The index of word good is : ${newIndex}`);

console.log(`---------------------------  Step 8  ------------------------`)
var newNum = newStr.slice(22);
console.log(`Substring from index 22 is : ${newNum}`);

console.log(`---------------------------  Step 9  ------------------------`)
var check = newStr.endsWith('up');
console.log(`String ends with word "up" is : ${check}`);

console.log(`---------------------------  Step 10  ------------------------`)
var check1 = newStr.startsWith('Hey');
console.log(`String start with word "Hey" is : ${check1}`);
}
stringHandsOn();




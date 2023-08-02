





var num = 10;
var num2 = num++; // num2 = num + 1

console.log(`Value of num: ${num}`);
console.log(`Value of num2: ${num2}`);

console.log(`-----------------------------------`);
var num4 = 10;
var num5 = ++num4; // num4 = num4 + 1

console.log(`Value of num: ${num4}`);
console.log(`Value of num2: ${num5}`);

console.log(`------------------------------------`);
var num6 = 5;
var num7 = num6--; // num7 = num6 - 1

console.log(`Value of num6: ${num6}`);
console.log(`Value of num7: ${num7}`);

console.log(`-------------------------------------`);
var num6 = 5;
var num7 = --num6; // num7 = num6 - 1

console.log(`Value of num6: ${num6}`);
console.log(`Value of num7: ${num7}`);

console.log(`=================================`);


//WAP to print numbers from 0 to 10
// Start index = 0
//Condition: <=10;
//increment = 1

console.log(`==========WAP to print numbers from 0 to 10============`);
for (let index = 0; index <= 10; index++) {
    console.log(index);
    
}

//Log numbers from 5 to 20
console.log(`==========Log numbers from 5 to 20=================`);
for (let index = 5; index <= 20; index++) {
    console.log(index);
    
}

// log numbers from 10 to 1
console.log(`=========log numbers from 10 to 1================`);
for (let index = 10; index >= 1; index--) {
    console.log(index);
    
}

// 5 table
console.log(`=========5 Table=============`);
for (let index = 5; index <=50; index=index+5) {
    console.log(index);
    
}

// 7 table in reverse order
// 70 63 56 ------------- 7
console.log(`============7 table in reverse order============`);
for (let index = 70; index >=7; index=index-7) {
    console.log(index);
    
}

//First 5 odd numbers
console.log(`============First 5 odd numbers============`);
for (let index = 1; index < 10; index=index+2) {
    console.log(index);
    
}


//Frist 15 even numbers 
console.log(`===========Frist 15 even numbers=============`);
var result = " ";
for (let index = 0; index < 30; index=index+2) {
    console.log(index);
    
}

//Frist 15 even numbers in one line
console.log(`===========Frist 15 even numbers in one line=============`);
var result = " ";
for (let index = 0; index < 30; index=index+2) {
    result = result.concat(index).concat("  ")
    
}
console.log(result);

console.log(`============infinite loop code============`);
console.log(`for (let index = 10; index > 0; index++) {
     console.log(index);
    }`);
//infinite loop
//for (let index = 10; index > 0; index++) {
    //  console.log(index);
    
//}





console.log(`======================Step 1======================`);
const arrayNumber = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
let length = arrayNumber.length
console.log(`Length of arrayNumber : ${length}`);

console.log(`======================Step 2======================`);
let firstElement = arrayNumber[0];
let lastElement = arrayNumber[arrayNumber.length-1];
console.log(`First element : ${firstElement}`);
console.log(`Last element : ${lastElement}`);

console.log(`======================Step 3======================`);
let lastThirdElement = arrayNumber[arrayNumber.length-3];
console.log(`Third last element : ${lastThirdElement}`);

console.log(`======================Step 4======================`);
for (let index = 0; index < arrayNumber.length; index++) {
    if (arrayNumber[index] % 2 == 0)
     console.log(`All even number in an arrray are ${arrayNumber[index]}`);
    }

console.log(`======================Step 5======================`);
for (let index = 1; index < arrayNumber.length; index++) {
    if (arrayNumber[index] % 2!==0) 
    console.log(`Odd number in an array are ${arrayNumber[index]}`);
}

console.log(`======================Step 6======================`);
let sum = 0;
let evenPositionedNum = [];

for (let index = 0; index < arrayNumber.length; index++) {
    if (index % 2 == 0) {
        evenPositionedNum = evenPositionedNum.concat(arrayNumber[index]);
        sum += arrayNumber[index];
        }
    }

    console.log(`All even positioned numbers in given array [${arrayNumber}]):`, evenPositionedNum);

    console.log(`Sum of even positioned number in given array :`, sum);

console.log(`======================Step 7======================`);
let sum1 = 0;
let oddPositionedNum = [];

for (let index = 1; index < arrayNumber.length; index++) {
    if (index % 2!= 0) {
        oddPositionedNum = oddPositionedNum.concat(arrayNumber[index]);
        sum1 += arrayNumber[index];
        }
    }
    console.log(`All odd positioned numbers in given array [${arrayNumber}]`, oddPositionedNum );
    console.log(`Sum of odd positioned number in given array :`, sum1);


console.log(`======================Step 8======================`);
let allSum = 0;
for (let index = 0; index < arrayNumber.length; index++) {
    allSum += arrayNumber[index];
    
}
console.log(`Sum of all numbers in an array is : ${allSum}`);

console.log(`======================Step 9======================`);
let multipleOf = [];
for (let index = 0; index < arrayNumber.length; index++) {
    if (arrayNumber[index] %5==0) {
multipleOf += arrayNumber[index];
    }
}
console.log(`multiple of 5 are ${multipleOf}`);   

console.log(`======================Step 10======================`);
let check1 = arrayNumber.includes(115);
console.log(`Is number 115 available : ${check1}`);

console.log(`======================Step 11======================`);
let check2 = arrayNumber.includes(23);
console.log(`Is number 23 available : ${check2}`);

console.log(`======================Step 12======================`);
arrayNumber.splice(3,0,55,66);
console.log(arrayNumber);

console.log(`======================Step 13======================`);
arrayNumber.splice(4,3);
console.log(arrayNumber);


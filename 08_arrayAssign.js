








console.log(`---------------------Step 1--------------------`);
const arrayFruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(arrayFruits);
let firstElement = arrayFruits[0];
console.log(`First element is : ${firstElement}`);

let lastElement = arrayFruits[arrayFruits.length-1];
console.log(`Last element is : ${lastElement}`);


console.log(`---------------------Step 2--------------------`);
arrayFruits.unshift("Papaya");
console.log(arrayFruits);


console.log(`---------------------Step 3--------------------`);
let removeMango = arrayFruits.splice(4,1);
console.log(arrayFruits);
console.log(removeMango);


console.log(`---------------------Step 4--------------------`);
arrayFruits.push("Pineapple");
console.log(arrayFruits);


console.log(`---------------------Step 5--------------------`);
arrayFruits.splice(4, 0, "Dragon Fruit");
console.log(arrayFruits);


console.log(`---------------------Step 6--------------------`);
arrayFruits.splice(2, 1,"Kiwi");
console.log(arrayFruits);

console.log(`---------------------Step 7--------------------`);
for (let index = 0; index <= 3; index++) {
    const element = arrayFruits[index];
    console.log(element);
    
}

console.log(`---------------------Step 8--------------------`);
console.log(arrayFruits.slice(0,3));










const arrayFruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(arrayFruits);
let firstElement = arrayFruits[0];
console.log(`First element is : ${firstElement}`);

let lastElement = arrayFruits[arrayFruits.length-1];
console.log(`Last element is : ${lastElement}`);

arrayFruits.unshift("Papaya");
console.log(arrayFruits);

let removeMango = arrayFruits.splice(4,1);
console.log(arrayFruits);
console.log(removeMango);

arrayFruits.push("Pineapple");
console.log(arrayFruits);

arrayFruits.splice(4, 0, "Dragon Fruit");
console.log(arrayFruits);

arrayFruits.splice(2, 1,"Kiwi");
console.log(arrayFruits);

for (let index = 0; index <= 3; index++) {
    const element = arrayFruits[index];
    console.log(element);
    
}

console.log(arrayFruits.slice(0,3));
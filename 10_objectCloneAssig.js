

console.log(`---------------------------Step 1-------------------------`);
let personalDetails = {
    fullName : "Pooja Chandele",
    education : "M.Sc in Mathematics",
    age : 25,
    city : "Pune",
    isMarried : "yes",
    mobNo : 1234567890,
}

let collegeDetails = {
    collegeName : "Jagdamba Mahavidyalaya",
    faculty : " Arts, Commerce, Science",
    university : "Sant Gadge Baba Amravati University",

}

let mergedObject = Object.assign({} , personalDetails, collegeDetails);
console.table(mergedObject);


console.log(`---------------------------Step 2-------------------------`);
let array = ["Pooja", "Kajal", "Anjali", "Damini", "Manisha"];
Object.freeze(array);
console.log(array);


console.log(`---------------------------Step 3-------------------------`);
for (const element of array) {
    console.log(element);
    
}

console.log(`---------------------------Step 4-------------------------`);

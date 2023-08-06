




console.log('------------------Step 1: Function with no arg and no return value-----------------');

function message(){
    console.log('1. I Love My India');
    console.log('2. Proud To Be Indian');
}
message()

console.log('-------------------Step 2: Function with argument and no return value-------------');

function personalDetails(firstName, lastName, collegeName){
    console.log('First Name=', firstName,'Last Name=', lastName,'College Name=', collegeName)
}
personalDetails('Pooja', 'Chandele', 'Jagdamba Mahavidhyalaya');

console.log('--------------Step 3: swap value: Function with argument and no return value-------------');

function swapValues(arg1,arg2){
    console.log('Before swap==>', 'value 1 is:', arg1, '    and   value 2 is:',arg2);

    var temp = arg1;
    arg1 = arg2;
    arg2 = temp;
    console.log('After swap==>', 'value 1 is:', arg1, '   and   value 2 is:',arg2);

}
var name1 = "Virat";
var name2 = "Anushka";
swapValues(name1, name2);

console.log('**********************************************************');

var num1 = 1000;
var num2 = 2000;
swapValues(num1,num2);

console.log('---------------Step 4: Addition----------------');

  function addThreeValues(arg1, arg2, arg3,){
    console.log('Values are : ', arg1, arg2, arg3);
    
    var add = arg1 + arg2 + arg3;
    return add;
   
  }
  var plus1 = addThreeValues(10.23,600,40);
  console.log('Addition is: ', plus1);

  console.log('***********************************************************');

  var plus2 = addThreeValues('Hello', 'Good', 'Morning')
  console.log('Addition is: ', plus2);
  
  
  console.log('---------------------------Step 5: Bank Details-------------------');

  function bankDetails(bankName, accountName, location, pinCode){
    console.log("Bank Name: ",bankName, "   Account No .:" , accountName, "   Location:", location, "     Pin Code:", pinCode);

  }
bankDetails("CITI Bank", 3456782345, 'Pune', 431202);
bankDetails("Axis Bank", 7856782345, "Mumbai", 441202);
bankDetails("HDFC Bank", 8956782345, "Pune", 631202, "open");
console.log('*************************************************************************************************');
  



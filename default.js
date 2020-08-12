// document.getElementById("btn").onclick =
// document.getElementById("text").innerHTML = "This is a dynamic text";
//   document.write("This is a test on JS");
//   var aim;
//   aim = null;
//   console.log(typeof aim) ;

// var fruits = ["Mango", "Apple", "Orange", "Paw-Paw"];
// fruits[4] = "Strawberry";
// fruits[5]="Tomato";
// document.write(fruits[(parseInt(1*3))]);

// document.write(fruits.length);
// var num1 = 5;
// var num2 = num1 + 5;
// console.log(num2);
// var num3 = num2 + "11";

// console.log(num3);
// console.log(typeof(num3));
// console.log(parseInt(num3) +  4);

// var index = prompt("Enter Age");
// console.log(parseInt(index) + 3);
// alert("Your input was " + index);
// alert("In three years time, you would be " + index + " years old ");

// var math = 2 + 11;
// document.write("The sum is " + math);
// math +=5;
// document.write(math);

/* var num1 = prompt('Enter your dad\'s age');
  var num2 = prompt('Enter your age');
  var num3 = parseInt(num1 - num2);
  document.write('Your Dad is ' +num3+ ' years older than you');
  num3++;
  console.log(num3);*/
//  var score = prompt('Input Your Grade.');
//  score = parseInt(score);
// if (isNaN(score)) {
//   document.write('Wrong Input');
// } else if(score = ""){
//   document.write('Empty Input');
// } else if(score >= 70 || score <= 100){
//   document.write('Excellent');
// }else if(score >= 50 ){
//   document.write('Pass');
// }else if(score >= 0){
//   document.write('Fail');
// }else{
//   document.write('Input is invalid');
// }

// document.write(parseInt(score) >= 100 ? true : false);

// var weight = parseInt(prompt('Enter your weight from a scale of 1 - 10'));
// switch (weight) {
//   case 10:
//     document.write('You need to watch your diet')
//     break;
//   case 5:
//     document.write('You\'re doing well');
//     break;
//   default:
//     document.write('You\'re good to go');
//     break;
// }

//  var sub = ["Math", "English", "Social-Studies"];
//  marks = [];
// for(var i = 0; i < sub.length; i++){
//   other = prompt("Enter marks in the subject " + sub[i]);
//   marks[i] = parseInt(other);
// }
// msg ="";
// for(var i = 0; i < sub.length; i++){
//   msg+= sub[i] + " Marks:== " + marks[i] + "\n";
//   alert(msg);
// }

// var sub = new Array("Math", "English", "Science");
// var marks = [];
// for(i in sub){
//   marks[i] = parseInt('prompt("Enter Score for " + sub[i])');
// }
// msg = "";
// for( i in sub){
//   msg+= sub[i] + " score: " + marks[i] + "\n";
//   'alert(marks[i])';
// }

// function area(length, breadth) {
//   solve = length * breadth;
//   return solve;
// }

// document.getElementById("text").innerHTML = area(2 ,4);

// function toSolve(a, b, c) {
//   a = 1;
//   b = 2;
//   c = 1;
//   sum = -b + (-(b * b - 4 * a * c) / 2) * a;
//   return parseInt(input) + 273;
// }
// document.write(toKelvin());

// console.log(sqt(4));
// function gbas(){
//   console.log("Think Quality... Think STGEI");
// }
// setTimeout(gbas, 1000);

// (
//   function(length, breadth){
//     sum = parseInt(length * breadth);
//     console.log("The area is equal to: " +sum+"cmsquared");
//   }(12, 5)
// );

var age = 0;

function myFunction() {
age+=5;
document.getElementById("demo").innerHTML = "The age is equals: " + age;
}
myFunction();
myFunction();
myFunction();
myFunction();
// function perimeter(l , b) {
//   console.log("We're solving for the perimeter of the shape" )
//   return l*b;
// }
// console.log(perimeter(6,2));

//why it's better to declare i inside a for loop

//=====================while loop

//Syntax:

// while (condition) {
// // code block
// }

// let i = 0
// while (i < 3) {
//   console.log(i);
//   i++
// }

// let i = 7
// while (i != 0) {
//   console.log(i);
//    i--
// }



//  const fruits = ['apple', 'pears', 'plums', 'grape']

// let i = 0
// while (i > fruits.length){
//     console.log(fruits[i])
//     i++
// }

// ================= do ... while

// do {
//   // code block
// }
//while (condition);


// let k = 0;
//  do {
//   console.log( k );
//   k++; //k=1
// } while (k < 3)

// if (k < 3) {
//   console.log("if "+ k);
// }
// else console.log('Do something')




//===================== break;  continue

// Директива break ==> полностью прекращает выполнение цикла

// continue ==> прерывает текущую итерацию циклов и
// продолжает выполнение цикла со следующей итерации

// for (let i = 0; i <= 10; i++) {
 
//   if (i == 7) {
//     break
//   } 
//   console.log(i)
// // }
// let fruits = ['apple', 'pears', 'plums', 'grape', 'watermelone']

// for (let i = 0; i < fruits.length; i++) {

//   if (fruits[i] == 'plums') {
//     console.log('haker attack')
//     break
//   } 

//   if (fruits[i]=='grape') {
//     continue 
//   } 
//   console.log(fruits[i]);
 
// }





// Нельзя использовать break/continue справа от оператора „?“ (тернарный оператор - ternary operator)
// syntax:
// условие ? выражение1 : выражение2


// for (let i = 0; i < 10; i++) {

//   (i < 5) ? console.log(i) : console.log("Hello");
// }
// let a = 7;
// (a < 5) ? console.log(a) : console.log("Hi");


//================== FOR IN =============
/**
 * for (key in object) {
  // code block to be executed
}
 */
// const numbers = [45, 4, 9, 16, 25];
// let str = 'Hello'
// let txt = "";
// for (let i = 3; i < str.length; i++) {
 
//  // txt += numbers[el];
//   console.log(str[i])
// }
// console.log(txt)

// const cars = "BMW, Volvo, Mini";

// let text = "";
// for (let x of cars) {
//  // text += x;
//   console.log(x)
// }







//==================== inner loops

// 1        // line == 1
// 12       // line == 2
// 123      // line == 3
// 1234     // line == 4
// 12345    // line == 5

// console.log(1)
// console.log(1)
// console.log(1)
// console.log(1)
// for(let i = 1; i <= 5; i++){
//     console.log(i)
// }

// for (let line = 1; line <= 5; line ++) {
//     let str = "";
//   for (let numInLine = 1; numInLine <= line ; numInLine++) {
//     str += numInLine

//   }

//     console.log(str);
// }

// for (let i = 5; i >= 1; i--) { //отвечает за количество строк
//   let str = "";
//   for (let j = i; j >= 1; j--) { //отвечает за наполнение строки

//     str = str + j;
//   }

//   console.log(str);
// }
//  if (i == 2) continue;
//как достать элемент из вложенного массива


//
 let arr = [1, ["a", 'b', [5, 4]], 3, "Herro ok"]
// //        0   ________________   2     3
// //                  1
// //                       ______
// //            0    1      2
// //                      0  1
// console.log(typeof arr[3])
// //let str =
arr[1][1] = 'R'
console.log(arr[1][1])
     

//как проверить пустой массив

// let arr2 = [1, 3]
// console.log(typeof arr2)

// if (arr2.length == 0){
//     console.log("it's empty")
// }



// ============= изменение элемента в массиве

// const trees = ["maple", "pine", "oak", "aspen"];

// console.log(trees);
// trees[1] = "ash";
// console.log(trees);


// trees[5] = "birch";
// console.log(trees, trees.length);











//From replit
//=========================================
// ============= Functions =================================
// https://learn.javascript.ru/function-basics

// console.log("Hello World!");
//alert("Hello!");

// ============ Option 1:  function declaration ====

// function name(param1, param2...) {
//    statements
// return expression;
// }

// ============ Option 2:  function expression ====

// let name = function(param1, ...) {
//      statements
// return expression;
// };

// ============ Option 3: arrow functions ======

// let name = (arg1, arg2, ...) => expression;

//  ==========================================================
//  =================== function declaration

//1. Слово function,
//2. Имя функции
//3. Список парометров в круглых скобках через запятую
//4. Код функции («тело функции»), внутри фигурных скобок.
//Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).
//Function Invocation
//The code inside the function will execute when "something"  invokes(calls) the function:

//  When an event occurs(when a user clicks a button)
//  When it is invoked(called) from JavaScript code
//  Automatically(self invoked)

//print("Hi");
// function sum(a, b) {
//     let result = a + b
//    return print(result)

// }
// function sum(a, b) {
//     return a + b
//sum(1, 4)
// }
// let result = sum(1, 3) + 5
// console.log(result)
//console.log(a) /
// function print(arg) {
//   console.log(arg);
// }

// // // print([1, 2, 3]);

// // print("abcde");
// // print([1, 2, 3]);
// // print(7);

// // когда код читается, то при такой декларации первыми он будет
// // "искать" функции

// let result
// /a is not defined
// sum(6, 9);
// console.log(sum(-7,1))
// let c = sum(5, 5)
// console.log(result)

// можно помещать функцию в другую функцию


// void function ===>  возвращает undefined  /нет "return", 
// но выполняет вложенные в тело функции действия

// "return" может находиться в любом месте тела функции.
// Как только выполнение доходит до этого места, функция 
// останавливается, и значение возвращается в вызвавший её код

// console.log(a + b);  // a is not defined

// Переменные, объявленные внутри функции, видны только внутри этой функции 
// console.log(a, b);

// Но у функции есть доступ к внешним переменным:

//console.log(showMessage("John"));
//console.log(showMessage("Anna"));

// let name1 = 'Anna';//global
// let greet = "Hi"
// //console.log(name1);

// function showMessage(name1) { //local
//   return name1 ;

// }
// console.log(showMessage());

//console.log(showMessage("John"));
//console.log(name1);
// function showHi(){
//     return "Hi"
// }
// function showName(name){
//     return name + "!"
// }
// function showMessage2(){
//     console.log("Hi ")
// }
// let a = 6
// let c = a
// console.log(showMessage2("Olya"))



// let name = 'Anna';

// function showMessage() {
//   let name = "Bill";
//   return name = 'Hi ' + name;
// }
// console.log(showMessage());
// console.log(name);

// function sum2(a, b) {  
//     return a + b

// }

//  console.log(sum2(9,7))

//  ===================  function expression
// https://learn.javascript.ru/function-expressions

//  в Function Expression ставится точка с запятой ; на конце, 
// а в Function Declaration нет

//  Вы НЕ можете использовать function expression до того, 
// как вы её объявили

//hello("Anna");   // Cannot access 'hello' before initialization

// let hello = function  (name) {
//   console.log("Hi, " + name);
// };

// hello([1, 2, 3]);

// let sum = function(a, b) {
//   return a + b;
// };

// let arr = [];
// arr.push(sum(3, 7));
// console.log(arr);



//  ===================  arrow functions
// let sum = (a, b) => {

//   return `Your numbers are: ${a} , ${b} and sum = ` + (a + b)
// };

// console.log(sum(3, 9));
//console.log()

// let toPay = (price, weight) => price * weight;

// console.log(toPay(3.22, 7));

// Если у нас только один аргумент, то круглые скобки
// вокруг параметров можно опустить:

// let double = n => n * 2;
// console.log(double(456));

// let greeting = name => ;


// Если аргументов нет, круглые скобки будут пустыми,
// но они должны присутствовать:


// let hello = () => console.log("Hello!");
// hello();

// если нужна более сложная стрелочная функция, с несколькими выражениями,
// то это также возможно, нужно лишь заключить их в фигурные скобки.
// При этом важно! – в таких скобках для возврата значения нужно
// использовать "return"

// let sum = (a, b) => {
//   let result = a + b;
//   return result;
// };
// console.log(sum(4, 6));

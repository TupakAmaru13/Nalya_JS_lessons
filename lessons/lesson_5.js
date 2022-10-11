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

// let j = 7
// while (j != 0) {
//   console.log(j);
//   j--
// }



// const fruits = ['apple', 'pears', 'plums', 'grape']
// let index = 0
// while (index < fruits.length){
//     console.log(fruits[index])
//     index++
// }

// ================= do ... while

// do {
//   // code block
// } while (condition);


// let k = 0;
//  do {
//   console.log( k );
//   k++;
// } while (k > 3)

//example in replit




//===================== break;  continue

// Директива break ==> полностью прекращает выполнение цикла

// continue ==> прерывает текущую итерацию циклов и
// продолжает выполнение цикла со следующей итерации

// for (let i = 0; i <= 10; i++) {
  
//   if ( i == 7 ) break;
//   console.log(i);
  
// }

// for (let i = 0; i <= 100; i++) {
  
//   if ( i % 2 === 0) continue;//
//     console.log(i);
// }





// Нельзя использовать break/continue справа от оператора „?“ (тернарный оператор - ternary operator)
// syntax:
// условие ? выражение1 : выражение2


// for (let i = 0; i < 10; i++) { 
//     (i < 5) ? console.log(i) : continue; 
// }
// let a = 7;
// (a < 5) ? console.log(a) : console.log("Hi");



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

for (let i = 5; i >= 1; i--) { //отвечает за количество строк
  let str = "";
  for (let j = i ; j >= 1 ; j--) { //отвечает за наполнение строки
    
    str = str + j; 
  }
    
    console.log(str);
}
//  if (i == 2) continue;
//как достать элемент из вложенного массива


//
// let arr = [1, ["a", 'b', [5, 7]], 3, "Herro ok"]
// //         0   ________________   2     3
// //                  1
// //                       ______
// //              0    1      2
// //                        0  1 
// console.log(typeof arr[3])
// //let str = 
//     console.log(arr[3][5])
//как проверить пустой массив

// let arr2 = [1, 3]
// console.log(typeof arr2)

// if (arr2.length == 0){
//     console.log("it's empty")
// }



/**
 * 1.1 Напишите программу по согласованию отпуска в зависимости от месяца. Если месяц “July” или “August”, то программа должна показать - ‘approved’, если другие месяцы, то - “denied”.
 */

let myMonth = 'JulY'
//let month = myMonth.toLowerCase()

if (myMonth == 'July' || myMonth == 'August'){
   console.log('approved')
}
else console.log('denied')

/**
 * 1.2 Напишите простенький калькулятор (*, /, +, -). Проверьте ваш код на охват исключений для арифметических операций.
У вас должны быть две переменные для исходных чисел и одна для оператора. В зависимости от оператора, должно происходить то или иное арифметическое действие и выводиться результат в консоль.
 */
 let num1
 let num2 
 let operator 

 if(operator == "+"){
   console.log(num1 + num2)
 }
 else if (operator == "-") {
    console.log(num1 - num2)
 }
 else if (operator == "*") {
    console.log(num1 * num2)
 }
 else if (operator == "/" && num2 !=0) {
   
    console.log(num1 / num2)
 }
 else console.log('Please, enter correct number!')

 /**
  * 1.3 Решите задачу с помощью пройденных тем:
«Улитка ползёт вверх по стене высотой 5 метров. Каждый день она проползает вверх на 3 метра, а каждую ночь съезжает вниз на 2 метра. За сколько дней она доползёт до вершины стены.»
  */
let up = 3
let down = -2
let distance = 0
let days = 0

//1
if(distance < 5){
   distance += up 
   days++
   console.log(` - Current distance at the end of the day is ${distance} meter(s)` , '\n', `Snail spend ${days} day(s) in total`)
} 
else console.log('Finish')
//2
if (distance < 5) {
   distance += down + up
   days++
   console.log(` - Current distance at the end of the day is ${distance} meter(s)`, '\n', `Snail spend ${days} day(s) in total`)
}
else console.log('Finish')
//3
if (distance < 5) {
   distance += down +up
   days++
   console.log(` - Current distance at the end of the day is ${distance} meter(s)`, '\n', `Snail spend ${days} day(s) in total`)
}
else console.log('Finish')
//4
if (distance < 5) {
   distance += down + up
   days++
   console.log(` - Current distance at the end of the day is ${distance} meter(s)`, '\n', `Snail spend ${days} day(s) in total`)
}
else console.log('Finish')



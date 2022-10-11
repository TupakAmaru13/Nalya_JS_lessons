/**
 * 1.
 * Внедрите в свой код с Кофе, как минимум 2 функции (на ваше усмотрение) и вызовите их в коде.
   show coffeeFunction
 */
/**
 * 2. Напишите функцию с калькулятором (используйте предыдущий код), в которую, в качестве параметров, передаются три переменные, две - числовые и третья отвечает за знак арифметической операции (*, /, -, +). Проверьте работу функции.
example:  function calculate(a, b, operator){}

 */

function calc(a, b, sign){
   let result = 0
   if(isNaN(a) || isNaN(b)) result = "Please, enter a number!"
   else{
      if (sign == "+") result = a + b
      else if (sign == "-") result = a - b
      else if (sign == "*") result = a * b
      else if (sign == "/" && b == 0) {
         result = "Division by 0 is not allowed! Enter another number"
      }
      else if (sign == "/" && b != 0) result = a / b
      else (result = "Please, enter right input!")
   }
   return result
}

console.log(calc(2, 4, "dfd"))

/**
 *3. Напишите функцию, которая создает и выводит в консоль кастомное приветствие с именем, которое вы передаете в функцию.look coffeeFunction

 */
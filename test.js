import { isArray } from "cypress/types/lodash"

let a = 10
let b = 4
 function culc(a, b){
   let c = a + b
   return c
 }
console.log(culc(3, 7))
let x = culc(3, 7)

console.log(x)

let obj = new Object()
let arr = []
isArray()
arr.push(4)
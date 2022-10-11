//console.log("Hello QA!")
//sifer
let text = "You are the best QA ever"
let newText = ''
let count = 0
for(let i = 0; i < text.length; i++){
    
   if(count % 2 == 0){
    newText = newText + text[i] + "br"}
    
   count += 2
}

console.log(newText)

let text2 = ''
for(let i = 0; i < newText.length; i+= 3 ){
    
   text2 = text2 + newText[i]
    
}
console.log(text2)

















// // str.repeat(n)
// console.log(str.repeat(7));
//=============================
// console.log(newS.trim());

// https://www.w3schools.com/jsref/jsref_trim_string.asp
//  ------------ Reverse
//==================================
// x = x.toLowerCase();

// Нельзя использовать break/continue справа от оператора „?“
// let a = 7;
// (a > 5) ? console.log(a) : continue;

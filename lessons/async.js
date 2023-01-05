//promice
//Объект Promise используется для отложенных и асинхронных вычислений.
//has 2 parameters : resolve, reject - functions 

// const promise1 = new Promise((resolve, reject) => {
//    setTimeout(() => {
//       resolve('everything is ok');
//    }, 3000);
// });

// promise1.then((value) => {
//    console.log(value);
//    // expected output: "foo"
// });

// //promice methods
// // promise1.then(() => { });    //in then we operate with resolve
// // promise1.catch();         //catch will called if called reject, then will be ignored

// console.log(promise1);
// expected output: [object Promise]

//-----------------------------------------------
// function someFunction() {
//    return new Promise((resolve, reject) => {
//       setTimeout(() => {
//          resolve('Hello');
//       }, 1000);
//    });
// }
//what is happening
//someFunction()->function ->{
//    value: undefined
//    onFulfill: []   //each then function will come here
//    onRejected:[]     // each catch function will come here
// }

// someFunction()
//    .then(console.log)
//    .catch(console.error)

function someFunction() {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve('Hello');
      }, 5000);
   });
}

someFunction()
   .then(response=>{
      console.log(response)
      return response + '!'
   })
   .then(console.log)
   .catch(console.error)
   .finally(()=>{console.error('this is an error')})

let str = "Hello!"
let ms = 10
function delay() {
   return new Promise((resolve) => setTimeout(() => {
      resolve("helo");
   }, 10));
}

delay(ms, str).then(response => {
   console.log(response)
   return response + '!'
   })
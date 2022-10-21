// const arr1 = [7, 4, 5, 6, 8];

// function callback(arr1) {
//    let out = '';
//    let arr2 = []
//    for (let i = 0; i < arr1.length; i++) {
//       out = '*' + arr1[i] ;
//       arr2.push(out)
//    }
   
//    console.log(arr2);
// }

// callback(arr1) 
let s = "3D2a5d2f"

function stringExpansion(s) {
   let totalStr = ''
   let totalStr2 = ''
   let count = 0
   let arr = []
   let newArrayFromString = s.split("")
   for (let i = 0; i < newArrayFromString.length; i++) {
      let el = parseInt(newArrayFromString[i])
      let str = ''
      let num = 0

      if (isNaN(el) == false) {
         arr.push(el)
      }
      if (arr.length === 0) {
         num = 1
      }
      else num = arr[arr.length - 1]
      if (isNaN(el)) {
         str += newArrayFromString[i]
         // if(num == 0)
         totalStr = str.repeat(num)
         totalStr2 += totalStr
      }
      if (isNaN(el) == false) {
         count++
      }

   }
   if (count == 0) {
      return s
   }

   return totalStr2

}

console.log(stringExpansion(s))
/**
 * if(newArrayFromString[i] != NaN){
         
      }
 * let str = newArrayFromString[i + 1]
         let num = newArrayFromString[i]
         string += newArrayFromString[i]
         console.log(str, num, string)
 */
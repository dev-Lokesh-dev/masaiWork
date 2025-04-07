// // // // const nameRegex = /^[A-Za-z\s]+$/

// // // // // console.log(nameRegex.test('lokes@h'));

// // // // // console.log(name);


// // // // // const name = 'loke'

// // // // // let a = 5
// // // // // if(true){
// // // // //     let a = 5
// // // // // }

// // // // let arr = [1, [2, [3, 4], 5], 6]
 

// // // // function flattenArray(arr) {
// // // //     return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), []);
// // // //   }

// // // //   console.log(flattenArray(arr));



// // // // let y ='aba'

// // // // function isPalindrome(str) {
// // // //   const cleaned = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
// // // //   let left = 0, right = cleaned.length - 1;
// // // //   while (left < right) {
// // // //     if (cleaned[left] !== cleaned[right]) return false;
// // // //     left++;
// // // //     right--;
// // // //   }
// // // //   return true;
// // // // }
// // // // console.log(isPalindrome(y))

// // // // function pail(x){
// // // //   let left = 0
// // // // let right = x.length -1 ;
// // // // while(left < right){
// // // //   if(x[left] != x[right]){
// // // //     return console.log('no')
// // // //   }
// // // //   left++
// // // //   right--
// // // // }

// // // // return console.log('yes')
// // // // } 

// // // // pail(y)


// // // // function lss(s){
// // // //   let set = new Set();

// // // //   let left = 0
// // // //   let max = 0

// // // //   for(let i =0 ;i < s.length;i++){
// // // //     if(set.has(s[i])){
// // // //       set.delete(s[left]);
// // // //       left++
// // // //     }
// // // //     set.add(s[i])

// // // //     max = Math.max(max,i-left+1)
// // // //   }
// // // //   return max
// // // // }

// // // // console.log(lss('abcabcbb'));

// // console.log("Start");

// // process.nextTick(() => console.log("Next Tick"));
// // setImmediate(() => console.log("Set Immediate"));

// // console.log("End");




// // // function binary(arr,tar){
// // //   let left = 0
// // //   let right = arr.length - 1;
// // //   while(left <= right){
// // //     let mid = Math.floor((left+right)/2);

// // //     if(arr[mid] == tar) return mid;
// // //     else if(arr[mid] < tar) left = mid + 1
// // //     else right = mid - 1


// // //   }
// // //   return - 1
// // // }
// // // console.log(
// // //   binary([1, 3, 5, 7, 9, 11], 7));


  
// // console.log(this);

// // what will it return
// function add(a,b) {
//     let c = a + b;
// }
  
//   let result = add(1,2);
//   console.log(result)


//   //callback is a function that is being used as an argument to another function
// //Higher Order Function => a function that or accepts another function as an argument or return a function

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// //[3,6,9,12,15,18,21,24] //multiplied 3 with each element
// //[3,9,15,21] //filtered all the odd
// //48 sum

// function multiply(arr, elem, cb) {
//   setTimeout(() => {
//     if (typeof elem !== "number") {
//       cb("The elem has to be a number", null);
//     }
//     let ans = arr.map((item) => item * elem);
//     cb(null,ans);
//   }, 1000);
// }

// function filterOdd(arr, cb) {
//   setTimeout(() => {
//     let oddArr = arr.filter(function (item) {
//       return item % 2;
//     });
//     cb(oddArr);
//   }, 1000);
// }

// function findSum(arr, cb) {
//   setTimeout(() => {
//     let sum = arr.reduce((acc, item) => {
//       return acc + item;
//     }, 0);
//     cb(sum);
//   }, 1000);
// }

// function print(val) {
//   console.log(val);
// }

// multiply(arr, "3", (error, val) => {
//   if (error) {
//     throw new Error(error);
//   }
//   console.log(val);
  
// });

// //to do handle error in syncronous code





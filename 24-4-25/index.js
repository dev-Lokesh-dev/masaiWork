// 1. Question: For each day’s temperature in an array, determine how many days you’d have to wait until a warmer day. If no warmer day comes, use 0.

let arr = [73, 74, 75, 71, 69, 72, 76, 73]

let res = []
for(let i = 0;i < arr.length;i++){
    let count = 0
    let y = false
    for(let j = i + 1;j < arr.length;j++){
        count++
        if(arr[i] < arr[j]){
            y = true
            break
        }
    }
    if(y) res.push(count)
    else res.push(0)
}
console.log(res)



// 2.   Question: Given bar heights of a histogram, find the area of the largest rectangle you can fit under the bars.




// 3.Question: In a 2D grid of 0’s and 1’s, find the largest square containing only 1’s and return its area.

matrix = [
    [1, 0, 1, 0, 0],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 0, 0, 1, 0]
  ]
  
   
   let maxSide = 0;
  
      for (let i = 0; i < matrix.length; i++) {
          for (let j = 0; j < matrix[0].length; j++) {
            
              if (matrix[i][j] === 1 && i > 0 && j > 0) {
                  matrix[i][j] = 1 + Math.min(
                      matrix[i - 1][j],
                      matrix[i][j - 1],
                      matrix[i - 1][j - 1]
                  );
              }
  
              maxSide = Math.max(maxSide, matrix[i][j]);
          }
      }
  
       console.log(maxSide * maxSide);



// 4. Question: Find the length of the longest substring of a given string that reads the same forwards and backwards.

let s =  "babad"
let max = 0
for(let i = 0;i < s.length;i++){
    let x = ''
    for(let j = 0;j < s.length;j++){
        x += s[j]
        if(x === [...x].reverse().join('')) {
            max = Math.max(max,x.length)
        }
    }
}

console.log(max)



// 5. Question: Given an integer array and a window size k, slide the window from left to right and record the maximum in each position.

let arrr = [1, 3, -1, -3, 5, 3, 6, 7],  k = 3

let result = []
for(let i = 0;i < arrr.length - k + 1;i++){
    let x = arrr.slice(i,i + k);
    let max = Math.max(...x)
    result.push(max)
}

console.log(result)
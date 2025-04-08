// Given an array of integers arr[] of size n, the task is to rotate the array elements to the left by d

let arr = [1,2,3,4,5,6]
let d = 2

function ArrayRotation(arr,d){
    while(d>0){
        let x = arr.shift();
        arr.push(x)
        d--
    }
    console.log(arr);
    
}

ArrayRotation(arr,d)


//1. Question: Compute the factorial of a non-negative integer

function factorial(n){
    let fact = 1
    for(let i = 1;i <= n;i++){
        fact *=i
    }

    return fact
}

console.log(factorial(5));



//2. Question: Count how many times a given value appears in an array.

function countAppear(arr,tar){
    return arr.reduce((acc,item)=>{
        if(item == tar)acc++
        return acc
    },0)
}

console.log(countAppear([2, 3, 2, 4, 2],4));

//3. Question: Remove all zeros from an integer array, preserving order.

function removeZeros(arr){
    return arr.filter((item)=>item!=0)
}

console.log(removeZeros([0, 1, 0, 2, 3, 0, 4]));


//4. Question: Rotate an integer array to the right by k positions


function rotateArr(arr,k){
    while(k != 0){
        let x = arr.pop()
        arr.unshift(x)
        k--
    }
    return arr
}

console.log(rotateArr([1, 2, 3, 4, 5],2));



//5. Question: Merge two sorted integer arrays into one sorted array.

function mergeArr(arr1,arr2){
    for(let i = 0;i < arr2.length;i++){
        arr1.push(arr2[i])
    }
    return arr1.sort()
}

console.log(mergeArr([1, 3, 5],[2, 4, 6]));

//6. Question: Find the second largest element in an integer array.

function secondLargestElement(arr){
    
}



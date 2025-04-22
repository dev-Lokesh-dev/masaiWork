// create a custom promise

const customPromise = new Promise((resolve, reject) => {
    let solved = true
    setTimeout(() => {
        if(solved){
            resolve('promise is resolved')
        }else{
            reject('promise is rejected')
        }
    }, 300);
})

customPromise.then((res)=>console.log(res)).catch((err)=>console.log(err))


// Polyfills for map, filter, reduce









// Debounce Function


function debounce(fun,delay){

    let timer;

    return function (){
        let context = this;
        let args = arguments;

        clearInterval(timer);

        timer = setTimeout(function(){
            fun.apply(context,args)
        },delay)
    }
};

function sayHello(name) {
    console.log('Hello,', name);
  }
  
  const debouncedHello = debounce(sayHello, 1000);
  
  debouncedHello('Alice');  // waits 1s
  debouncedHello('Bob');    // cancels 'Alice', waits 1s
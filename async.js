
console.log("hello world")

function callback(){
    console.log("hello from  calllback fucntion")
}

setTimeout(callback, 1000); //async

console.log("hello after callback fucntion")

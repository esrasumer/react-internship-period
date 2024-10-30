//reduce: dizinin her değeri için bir işlev yürütür

function SayilarinToplami(arr){
    return arr.reduce((acc,curr) => acc+curr)
}

console.log(SayilarinToplami([1,2,3,4]));
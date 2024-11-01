//reduce: dizinin her değeri için bir işlev yürütür
function SayilarinToplami(arr) {
    return arr.reduce((acc, curr) => acc + curr)
}
console.log(SayilarinToplami([1, 2, 3, 4]));

//filter: 
function PozitifSayilarinToplami(arr) {
    return arr.filter((x) => x > 0).reduce((acc, curr) => acc + curr, 0)
}
console.log(PozitifSayilarinToplami([1, 5, 2, 8, 16, -16, -100000]))

//polindrom:
function tersCevirme(str) {
    let tersYazi = str.split('').reverse().join('')
    return str === tersYazi ? true : false
}
console.log(tersCevirme('ada'))
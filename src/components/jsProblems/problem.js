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
console.log(tersCevirme('esra'))
console.log(tersCevirme('ada'))

//for if

function minVeMaxSayiBulma(arr) {
    if (arr.length === 0) {
        return "boş küme"
    }
    let minSayi = arr[0];
    let maxSayi = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minSayi) {
            minSayi = arr[i]
        }
        if (arr[i] > maxSayi) {
            maxSayi = arr[i]
        }
    }
    return [minSayi, maxSayi];
}
console.log(minVeMaxSayiBulma([5, 8, 0, 2134, -9]))
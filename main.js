console.log ("Hello")
// Kava 1 Add ++++++++++

function add (a,b) {
    return a+b
}
let sum= add (2,4)
console.log(sum)

// kave 2 Multiply+++++++++++++

function multiply(a,b) {
    let index=0
    let answer=0
    while(index<b) {
        answer=add(a,answer)
        index=index + 1
    }
    return answer
}
let times= multiply (6,4)
console.log (times)

// kave 3 Power++++++++++++

function power (x,n) {
let index=0
let answer=1
while (index < n){
    answer= multiply (x,answer)
    index=index +1
}
return answer
}
let number =power(2,8)
console.log (number);

// kava 4 Factorial+++++++++

function factorial (n) {
    let index=1
    let answer=1
    while (index <= n){
        answer= multiply (index,answer)
        index=index +1
    }
    return answer
    }
    let factor = factorial(5)
    console.log (factor);

// kava bonus fibonacci++++++++++
    function fibonacci (n) {
        let index=3
        let answer=1
        let a =0
        let b = 1
        while (index <= n){
            answer= add (a,b)
            a=b
            b=answer
            index=index +1
        }
        return answer
        }
        let sequence = fibonacci(8)
        console.log (sequence);

// function multiply(x) {
//     return x+x+x+x;
// }
// console.log(multiply(6,true,"24"));
// // 24

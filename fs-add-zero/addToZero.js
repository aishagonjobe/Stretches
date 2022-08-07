// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]

// Write your solution below:

let isZero = false;
for (let i = 0; i < array.length; i++){
    for (let k = 0; k < array.length; k ++){
        if (array[i] + array[k] === 0){
            isZero = true
        }
    }
}

console.log(isZero)
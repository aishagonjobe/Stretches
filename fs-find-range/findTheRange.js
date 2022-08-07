// Starting array
let array = [28, 43, -12, 30, 4, 0, -36]

// Write your solution below:
let smallestNumber = array[0];
let largestNumber = array[0];

for (let i = 0; i < array.length; i++){
    for (let k = 0; k < array.length; k++){
        if (array[i] < smallestNumber){
            smallestNumber = array[i]
        }
        if (array [i] > largestNumber){
            largestNumber = array[i]
        }
    }
}

console.log([smallestNumber, largestNumber]);
let numbers = [1, 2, 3];
let bignumbers = [100, 200, 300, 400, 500];

console.log(bignumbers.length);

for( let i = numbers.length -1 ; i >= 0 ; i--) {
    console.log(numbers[i]);
}

numbers.push(10)
numbers.unshift(13)
numbers.splice(1, 0, 20)
numbers.splice(6, 1, 25)


show(numbers);

function show (arr){
    for( let i = 0 ; i < arr.length ; i++) {
        console.log(arr[i]);
    }
}

function showDom (element, arr){
   document.getElementById(element).innerHTML = ""
    for( let i = 0 ; i < arr.length ; i++) {
        console.log(arr[i]);
    } 
}

let Math = numbers.concat(bignumbers);

console.log(Math);
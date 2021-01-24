// Code your solutions in this file

let names = ["Lisa", "Kaitlin", "Jan"];

function writeCards(names, event) {
    let newArr = [];
    for (let i = 0; i < names.length; i++) {
        newArr.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return newArr;
}

function countDown( num) {
    while (num > 0) {
        console.log(num);
        num -= 1;
    }
    console.log(num);
}
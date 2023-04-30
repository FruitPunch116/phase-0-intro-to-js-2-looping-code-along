// Code your solutions in this file


const names = ["Guadalupe", "Ollie", "Aki"];
let surprise = "surprise";

function writeCards(names, surprise) {
    const messages = [];
   for (let i = 0; i < names.length; i ++) { 
    const message = `Thank you, ${names[i]}, for the wonderful ${surprise} gift!`;
    messages.push(message);
    console.log(message);
    }
console.log(messages);
    return messages;
}

function countDown() {
    let counter = 10;
    while (counter >= 0) {
    console.log(counter);
    counter --;
}
return countDown;
}

countDown(4);
console.log(countDown(4));
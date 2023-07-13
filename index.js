//names array deleted

function writeCards(names, surprise) {
    const messages = [];
   for (let i = 0; i < names.length; i ++) { 
    const message = `Thank you, ${names[i]}, for the wonderful ${surprise} gift!`;
    messages.push(message);
    // console.log(message);
    }
    // console.log(messages);
    return messages;
};

function countDown(number) /*(number) parameter to function*/{
    //counter is now number
    while (number >= 0) {
    console.log(number); //Not testing process
    number --;
}
    return countDown;
};

countDown(10);
countDown(4);
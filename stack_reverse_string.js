function reverseString(str) {

    const stack = [];

    for (let char of str) {

        stack.push(char);
    }

    let reversedStr = '';


    while (stack.length > 0) {

        reversedStr += stack.pop();
    }

    return reversedStr;
}

const reversedString = reverseString("hello world");

console.log(reversedString); // Output: "dlrow olleh"
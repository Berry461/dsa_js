const palindrome = str => str.split('').reverse().join('') === str;

console.log(palindrome("madam")); // true
console.log(palindrome("hello")); // false
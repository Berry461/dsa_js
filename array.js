// Creating a custom array class

class MyArray {

    constructor() {

        this.length = 0;

        this.data = {};
    }
    
    // Push Method Implementation

    push(item) {
        this.data[this.length] = item;

        this.length++;

        return this.length;

    }

    // Get Method Implementation

    get(index) {
        return this.data[index];
    }

    // Pop Methed Implementation

    pop() {
        const lastItem = this.data[this.length - 1];

        delete this.data[this.length - 1];

        this.length--;

        return lastItem;
    }

    // Shift Method Implementation

    shift() {
        const firstItem = this.data[0]

        for (let i = 0 ; i < this.length; i++) {
            
            this.data[i] = this.data[i + 1] 
        }

        delete this.data[this.length - 1]

        this.length--

        return firstItem

    }

    // Delete Method Implementation

    delete (index) {

        const item = this.data[index] 

        for (let i = index; i < this.length -1; i++) {

            this.data[i] = this.data[i + 1];
        }

        delete this.data[this.length - 1];

        this.length--;

        return item;
    }

    

}

const myNewArray = new MyArray();

myNewArray.push('apple');

myNewArray.push('pawpaw');

myNewArray.push('pineapple');

myNewArray.push('orange');

console.log(myNewArray);

console.log(myNewArray.get(2));

myNewArray.pop();

console.log(myNewArray);

console.log(myNewArray.shift());

console.log(myNewArray);

console.log(myNewArray.delete(0));

console.log(myNewArray);
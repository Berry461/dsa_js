class Node {

    constructor(value) {

        this.value = value;

        this.next = null;

        this.prev = null;


    }
}

class DoubleLinkedList {

    constructor(value) {    

        const newNode = new Node(value);

        this.head = newNode;

        this.tail = newNode;

        this.length = 1;       

    }

    push(value) {

        const newNode  = new Node(value);

        if(!this.head) {

            this.head = newNode;

            this.tail = newNode;

        }

        this.tail.next = newNode;

        newNode.prev = this.tail;

        this.tail = newNode;

        this.length++;

        return this;

    }
    
}

let myDoublyLinkedList = new DoubleLinkedList(0);

myDoublyLinkedList.push(1);

//myDoublyLinkedList.push(2);

//myDoublyLinkedList.push(3);

console.log(myDoublyLinkedList);

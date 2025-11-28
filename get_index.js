class Node {

    constructor(value) {

        this.head = value;

        this.next = null;

    }
}

class LinkedList {

    constructor(value) {

        this.head = new Node(value)

        this.tail = this.head

        this.length = 1;

    }

push(value) {

        let newNode  = new Node(value);

        if(!this.head) {

            this.head = newNode;

            this.tail = newNode;
        } else {

            this.tail.next = newNode;

            this.tail = newNode;  // Missing this line - update the tail!
        
        }

        this.length++;
    }

get(index) {

    let counter = 0;

    let temp = this.head;

    while(temp) {

        if(counter === index) {

            return temp

        }
        
        counter++;

        temp = temp.next;

    }

    return null;
}

}


const myLinkedList = new LinkedList(0);

myLinkedList.push(1);

myLinkedList.push(2);  

myLinkedList.push(3);

console.log(myLinkedList.get(2));
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
        }


        this.tail.next = newNode;

        this.length++;
    }

    pop() {

        if (!this.head) {

            return undefined;

        }

        let temp = this.head

        let prev = this.head

        while (temp.next) {

            prev = temp

            temp = prev.next

        }

        this.tail = prev;

        this.tail.next = null; 

        this.length--;


        if (this.length == 0) {

            this.head = null;

            this.tail = null;
        }

        return temp;

    }

    unshift(value) {

        const newNode = new Node(value)

        if (!this.head) {

            this.head = newNode

            this.tail = newNode

        }

        newNode.next = this.head;

        this.head = newNode;

        this.length++;

        return this;

    }

    shift() {
        
        if (!this.head) {

            return undefined;

            // Point the first node/element

            let temp = this.head

            // Move the head to the next node/element 

            this.head = this.head.next 

            // Remove the first element 

            temp.next = null;

            this.length--;


            if(this.length == 0) {
                
                this.tail = null;
            }

            return temp; 

        }
    }

    getFirst() {

        return this.head;
    }

    getLast() {

        if(!this.head) {

            return null
            
        }

        let temp = this.head;

        while(temp) {

            if(temp.next) {

                return temp

            }

            temp = temp.next;
        }
    }
 }

const myLinkedList = new LinkedList(1);

myLinkedList.push(10);

myLinkedList.unshift(0);

myLinkedList.pop(10);

//myLinkedList.shift();

console.log(myLinkedList.getFirst());

console.log(myLinkedList.getLast());

console.log(myLinkedList)
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
    
insert(index, value) {

    if(index === 0) {  

        return this.unshift(value);
    }

    if(index === this.length) {

        return this.push(value);
    }

    const newNode = new Node(value);

    // Use the get method to access the node right before the desired position (index-1)
    

    const temp = this.get(index - 1);

    newNode.next = temp.next;

    temp.next = newNode;

    this.length++;

    return true
}

}

const myLinkedList = new LinkedList(0);

myLinkedList.push(1);

myLinkedList.push(2);

myLinkedList.push(3);

console.log(myLinkedList.insert(0, 20));

console.log(myLinkedList);
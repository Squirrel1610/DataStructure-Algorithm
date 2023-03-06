//FIFO (first in first out)
//using Singly linked list to implement (using function push and shift)

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    //add at the end
    enqueue(val) {
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = this.first;
        }else {
            this.last.next = newNode;
            this.last = newNode;
        }

        return ++this.length;
    }

    //remove at the first
    dequeue() {
        if(this.length <= 0 ) return null;
        var removedNode = this.first;
        if(this.length === 1) {
            this.first = null;
            this.last = null;
        }else if(this.length > 1){
            this.first = this.first.next;
        }

        this.length--;
        return removedNode;
    }
}

var queue = new Queue();

console.log(queue.enqueue(0));
console.log(queue.enqueue(1));
console.log(queue.enqueue(2));
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
//LIFO (last in first out)
//we use singly linked list (use function shift and unshift) to implement stack 

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    push(val) {
        var newNode = new Node(val);
        if(!this.first) {
            this.first = newNode;
            this.last = this.first;
        }else {
            newNode.next = this.first;
            this.first = newNode;
        }

        this.length++;
        return this.length;
    }

    pop() {
        if(this.length <= 0 ) return null;
        var removedNode = this.first;
        if(this.length === 1 ){
            this.first = null;
            this.last = null;
        }else if(this.length > 1){
            this.first = this.first.next;
        }

        this.length--;
        return removedNode;
    }
}

var stack = new Stack();
stack.push(0);
stack.push(1);
stack.push(3);
stack.pop();
stack.pop();
stack.pop();
console.log(stack.pop());


console.log(stack);
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DLL {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        var newTail = new Node(val);
        if(!this.head){
            this.head = newTail;
            this.tail = newTail;
        }else {
            this.tail.next = newTail;
            newTail.prev = this.tail;
            this.tail = newTail;
        }
        this.length++;
        return this;
    }

    pop() {
        if(!this.head) return;
        var currentTail = this.tail;
        if(this.length == 1){
            this.head = null;
            this.tail = null;
        }
        else{
            this.tail = currentTail.prev;
            this.tail.next = null;
            currentTail.prev = null;
        }
        this.length --;
        return currentTail;
    }

    //pop at head
    shift() {
        if(!this.head) return;
        var oldHead = this.head;
        if(this.length == 1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }

        this.length--;
        return oldHead;
    }

    //push at head
    unshift(val) {
        var newHead = new Node(val);
        if(this.length == 0){
            this.head = newHead;
            this.tail = this.head;
        }else{
            this.head.prev = newHead;
            newHead.next = this.head;
            this.head = newHead;
        }

        this.length++;
        return this;
    }

    get(index) {
        if(index < 0 || index >= this.length ) return null;
        
        var i, current;
        if(index <= this.length/2){
            //loop from head
            current = this.head;
            i = 0;
            while(i !== index){
                current = current.next;
                i++;
            }
        }else{
            //loop from tail
            current = this.tail;
            i = this.length - 1;
            while(i !== index){
                current = current.prev;
                i--;
            }
        }

        return current;
    }

    set(index, val) {
        var nodeToSet = this.get(index);
        if(nodeToSet) {
            nodeToSet.val = val;
            return true;
        }
        return false;
    }

    insert(index, val) {
        if(index < 0 || index > this.length) return false;
        
        if(index === this.length ) {
            this.push(val);
            return true;
        }

        if(index === 0) {
            this.unshift(val);
            return true;
        }

        var node = new Node(val);
        var current = this.get(index);
        var prev = current.prev;
        node.prev = prev;
        prev.next = node;
        node.next = current;
        current.prev = node;

        this.length++;
        return true;
    }

    remove(index) {
        if(index < 0 || index >= this.length) return;

        if(index === this.length -1 ) return this.pop();

        if(index === 0) return this.shift();

        var removedNode = this.get(index);
        var prevNode = removedNode.prev;
        var nextNode = removedNode.next;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;

        removedNode.prev = null;
        removedNode.next = null;
        this.length--;
        return removedNode;
    }

    print() {
        var arr = [];
        var current = this?.head;
        for(var i = 0; i < this.length; i++) {
            arr.push(current.val);
            current = current.next;
        }

        console.log(arr);
    } 

    reverse() {
        if(!this.head) return this;

        //swap head and tail
        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let counter = 0;
        let prev = null;
        let next;

        while(counter < this.length) {
            next = node.next;
            node.prev = next;
            node.next = prev;

            prev = node;
            node = next;

            counter++; 
        }

        return this;
    }
}

var list = new DLL();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
// console.log(list.unshift(0));
// console.log(list.set(0,3));
// list.insert(1,0);
// console.log(list.remove(1));
// console.log(list);
list.reverse();
list.print();

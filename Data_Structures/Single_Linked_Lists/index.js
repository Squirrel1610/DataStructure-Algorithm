class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SingleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        var node = new Node(val);
        if(this.head == null){
            this.head = node;
            this.tail = this.head;
        }else{
            this.tail.next = node;
            this.tail = node;

        }
        this.length++;
        
        return this;
    }

    pop() {
        if(!this.head || !this.tail || this.length == 0) return;
        
        var current = this.head;
        var newTail = current;
        while(current.next) {
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length-- ;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }

        return current; 
    }

    //pop at head
    shift() {
        if(!this.head || !this.tail || this.length == 0) return;

        var current = this.head;
        this.head = current.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return current
    }

    //push at head
    unshift(val) {
        var newHead = new Node(val);
        if(!this.head){
            this.head = newHead;
            this.tail = this.head;
        }else{
            newHead.next = this.head;
            this.head = newHead;
        }
        this.length++;

        return this;
    }

    get(index) {
        if(index < 0 || index >= this.length) return null;

        var i = 0, current = this.head;
        while(i !== index){
            current = current.next;
            i++;
        }

        return current;
    }

    set(index, val) {
        var node = this.get(index);
        if(!node) return false;
        //reference type: [], {}
        node.val = val;
        return true;
    }

    insert(index, val) {
        if(index < 0 || index > this.length){
            return false;
        }else if(index == this.length){
            this.push(val);
        }else if(index == 0 ) {
            this.unshift(val);
        }else {
            var newNode = new Node(val);
            newNode.next = this.get(index);
            var preNode = this.get(index - 1);
            preNode.next = newNode;
            this.length ++;
        }

        return true;     
    }

    remove(index) {
        if(index < 0 || index >= this.length) {
            return;
        }else if(index == this.length -1) {
            return this.pop();
        }else if(index == 0) {
            return this.shift();
        }else {
            var pre = this.get(index - 1);
            var removedNode = pre.next;
            pre.next = removedNode.next;
            this.length--;
            return removedNode;
        }
    }

    reverse() {
        var node = this.head;
        this.head = this.tail;
        this.tail = node;

        var next, prev = null;
        for(var i = 0 ; i < this.length ; i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        
        return this;
    }

    print() {
        var arr = [];
        var current = this.head;
        while(current){
            arr.push(current.val);
            current = current.next;
        }

        return arr;
    }
}

var list1 = new SingleLinkedList();
list1.push(1);
list1.push(2);
list1.push(3);
console.log(list1.reverse());
console.log(list1.print());
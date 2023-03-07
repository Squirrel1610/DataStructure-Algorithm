//Binary heap almost same with BST
//Max binary heap has value of each parent node is always greater than its child nodes
//Max binary heap is opposite

//Store binary heap by array
//parent: index => child: 2*index + 1 && 2*index + 2

class MaxBinaryHeap {
    constructor() {
        this.values = [41,39,33,18,27,12];
    }

    insert(element) {
        if(this.values.length === 0){
            this.values.push(element);
        }else {
            this.values.push(element);
            this.bubbleUp();
        }
    }

    bubbleUp() {
        var index = this.values.length - 1;
        const element = this.values[index];

        while(index > 0) {
            var parentIndex = Math.floor((index - 1)/2);
            var parent = this.values[parentIndex];
            if(parent >= element) break;
            this.values[parentIndex] = element;
            this.values[index] = parent;
            index = parentIndex;
        }
    }

    extractMax() {
        const max = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            //bubble down
            this.sinkDown();
        }

        return max;
    }

    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];

        while(true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;

            let leftChild, rightChild;
            let swap = null;
            if(leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if(leftChild > element){
                    swap = leftChildIdx;
                }
            }

            if(rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)){
                    swap = rightChildIdx;
                }
            }

            if(swap === null) break;

            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

var heap = new MaxBinaryHeap();
// heap.insert(55);
heap.extractMax();
console.log(heap);


class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }
}

//BFS: breadth first search
function BFS(binaryTree) {
    var queue = [];
    var visited = [];
    var parent = binaryTree.root;

    if(!parent) return visited;

    queue.push(parent);
    while(queue.length){
        parent = queue.shift();
        visited.push(parent.value);
        if(parent.left) queue.push(parent.left);
        if(parent.right) queue.push(parent.right);
    }

    return visited;
}

var tree = new BinaryTree();
tree.root = new Node(0);
tree.root.left = new Node(1);
tree.root.right = new Node(2);
tree.root.left.left = new Node(3);

console.log(BFS(tree));
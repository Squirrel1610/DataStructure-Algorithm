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

//DFS: depth first search (inOrder)
function dfs_inOrder(binaryTree) {
    var visited = [];
    var current = binaryTree.root;

    if(!current) return visited;

    function traversal(node) {
        if(node.left) traversal(node.left);
        visited.push(node.value);
        if(node.right) traversal(node.right);
    }

    traversal(current);
    return visited;
    
}

var tree = new BinaryTree();
tree.root = new Node(10);
tree.root.left = new Node(6);
tree.root.right = new Node(15);
tree.root.right.right = new Node(20);
tree.root.left.left = new Node(3);
tree.root.left.right = new Node(8);

console.log(dfs_inOrder(tree));
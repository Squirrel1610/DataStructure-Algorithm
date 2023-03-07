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

//DFS: depth first search (postOrder)
function dfs_postOrder(binaryTree) {
    var visited = [];
    var current = binaryTree.root;

    if(!current) return visited;

    function traversal(node) {
        if(node.left) traversal(node.left);
        if(node.right) traversal(node.right);
        visited.push(node.value);
    }

    traversal(current);
    return visited;
    
}

var tree = new BinaryTree();
tree.root = new Node(0);
tree.root.left = new Node(1);
tree.root.right = new Node(2);
tree.root.left.left = new Node(3);

console.log(dfs_postOrder(tree));
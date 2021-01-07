class Node {
    data: any;
    left: any;
    right: any;
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

export default class BinarySearch {
    root: any;
    constructor() {
        this.root = null;
    }
    insert(data: number) {
        let node = new Node(data)

        // init parent to tree
        if (this.root === null) {
            this.root = node
        } else {
            this.insertNode(this.root, node)
        }
    }

    insertNode(root, node) {
        // new < previous node
        if (node.data < root.data) {
            if (root.left === null) {
                root.left = node
            } else {
                this.insertNode(root.left, node)
            } 
        } else {
            if (root.right === null) {
                root.right = node
            }else {
                this.insertNode(root.right, node); 
            }
        }
    }

    getRoot () {
        return this.root
    }

}
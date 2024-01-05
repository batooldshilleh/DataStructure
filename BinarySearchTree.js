class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    
    insert(value) {
      this.root = this._insertRecursive(this.root, value);
    }
  
    _insertRecursive(root, value) {
      if (!root) {
        return new TreeNode(value);
      }
  
      if (value < root.value) {
        root.left = this._insertRecursive(root.left, value);
      } else if (value > root.value) {
        root.right = this._insertRecursive(root.right, value);
      }
  
      return root;
    }
  
    
    search(value) {
      return this._searchRecursive(this.root, value);
    }
  
    _searchRecursive(node, value) {
      if (!node || node.value === value) {
        return node;
      }
  
      if (value < node.value) {
        return this._searchRecursive(node.left, value);
      } else {
        return this._searchRecursive(node.right, value);
      }
    }
  
    
    findMin() {
      let current = this.root;
      while (current.left) {
        current = current.left;
      }
      return current.value;
    }
  
    
    findMax() {
      let current = this.root;
      while (current.right) {
        current = current.right;
      }
      return current.value;
    }
  
    
    inOrderTraversal(callback) {
      this._inOrderTraversalRecursive(this.root, callback);
    }
  
    _inOrderTraversalRecursive(node, callback) {
      if (node) {
        this._inOrderTraversalRecursive(node.left, callback);
        callback(node.value);
        this._inOrderTraversalRecursive(node.right, callback);
      }
    }
  }
  
  const bst = new BinarySearchTree();
  bst.insert(5);
  bst.insert(3);
  bst.insert(7);
  bst.insert(2);
  bst.insert(4);
  bst.insert(6);
  bst.insert(8);
  
  console.log("In-order traversal:");
  bst.inOrderTraversal(value => console.log(value));
  
  console.log("\nSearch for value 6:", bst.search(6));
  console.log("Minimum value:", bst.findMin());
  console.log("Maximum value:", bst.findMax());
  
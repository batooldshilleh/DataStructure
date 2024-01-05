class TreeNode {
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
  
    
    preOrderTraversal(callback) {
      this._preOrderTraversalRecursive(this.root, callback);
    }
  
    _preOrderTraversalRecursive(node, callback) {
      if (node) {
        callback(node.value);
        this._preOrderTraversalRecursive(node.left, callback);
        this._preOrderTraversalRecursive(node.right, callback);
      }
    }
  
    
    postOrderTraversal(callback) {
      this._postOrderTraversalRecursive(this.root, callback);
    }
  
    _postOrderTraversalRecursive(node, callback) {
      if (node) {
        this._postOrderTraversalRecursive(node.left, callback);
        this._postOrderTraversalRecursive(node.right, callback);
        callback(node.value);
      }
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
  }
  
 
  const binaryTree = new BinaryTree();
  binaryTree.insert(5);
  binaryTree.insert(3);
  binaryTree.insert(7);
  binaryTree.insert(2);
  binaryTree.insert(4);
  binaryTree.insert(6);
  binaryTree.insert(8);
  
  console.log("In-order traversal:");
  binaryTree.inOrderTraversal(value => console.log(value));
  
  console.log("\nPre-order traversal:");
  binaryTree.preOrderTraversal(value => console.log(value));
  
  console.log("\nPost-order traversal:");
  binaryTree.postOrderTraversal(value => console.log(value));
  
  console.log("\nSearch for value 6:", binaryTree.search(6));
  
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    
    insert(data) {
      const newNode = new Node(data);
  
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  
    
    delete(data) {
      if (!this.head) {
        return;
      }
  
      if (this.head.data === data) {
        this.head = this.head.next;
        return;
      }
  
      let current = this.head;
      let prev = null;
  
      while (current && current.data !== data) {
        prev = current;
        current = current.next;
      }
  
      if (!current) {
        return; 
      }
  
      prev.next = current.next;
    }
  
    
    search(data) {
      let current = this.head;
  
      while (current) {
        if (current.data === data) {
          return true; 
        }
        current = current.next;
      }
  
      return false; 
    }
  
    
    display() {
      let current = this.head;
  
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    }
  }
  
  
  const linkedList = new LinkedList();
  linkedList.insert(1);
  linkedList.insert(2);
  linkedList.insert(3);
  
  console.log('Original Linked List:');
  linkedList.display();
  
  linkedList.delete(2);
  console.log('\nLinked List after deleting node with value 2:');
  linkedList.display();
  
  console.log('\nSearch for node with value 3:', linkedList.search(3)); 
  console.log('Search for node with value 2:', linkedList.search(2)); 
  
class Stack {
    constructor() {
      this.items = [];
    }
  
    push(element) {
      this.items.push(element);
    }
  
    
    pop() {
      if (this.isEmpty()) {
        return "Underflow"; 
      }
      return this.items.pop();
    }
  
    peek() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.items[this.items.length - 1];
    }
  
    
    isEmpty() {
      return this.items.length === 0;
    }
  
    
    display() {
      console.log(this.items);
    }
  }

  const stack = new Stack();
  
  stack.push(1);
  stack.push(2);
  stack.push(3);
  
  console.log("Original Stack:");
  stack.display();
  
  console.log("\nPeek at the top element:", stack.peek());
  
  console.log("\nPopped element:", stack.pop());
  console.log("Stack after popping:");
  stack.display();
  
  console.log("\nIs the stack empty?", stack.isEmpty());
  
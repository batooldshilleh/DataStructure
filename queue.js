class Queue {
    constructor() {
      this.items = [];
    }
  
    
    enqueue(element) {
      this.items.push(element);
    }
  
    
    dequeue() {
      if (this.isEmpty()) {
        return "Underflow"; 
      }
      return this.items.shift();
    }
  
    
    peek() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.items[0];
    }
  
    
    isEmpty() {
      return this.items.length === 0;
    }
  
    
    display() {
      console.log(this.items);
    }
  }
  

  const queue = new Queue();
  
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  
  console.log("Original Queue:");
  queue.display();
  
  console.log("\nPeek at the front element:", queue.peek());
  
  console.log("\nDequeued element:", queue.dequeue());
  console.log("Queue after dequeuing:");
  queue.display();
  
  console.log("\nIs the queue empty?", queue.isEmpty());
  
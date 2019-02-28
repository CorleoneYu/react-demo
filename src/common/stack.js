class Stack {
  constructor(stack=[]) {
    this.stack = [...stack];
  }

  length() {
    return this.stack.length;
  }

  top() {
    if (this.stack.length === 0) {
      return null;
    }

    return this.stack[this.stack.length-1]; 
  }

  push(data) {
    this.stack.push(data);
    return;
  }

  pop() {
    return this.stack.pop();
  }

  empty() {
    return this.stack.length === 0;
  }
}

export default Stack;
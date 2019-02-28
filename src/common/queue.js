class Queue {
  constructor(data=[]) {
    this.data = [...data];
  }

  length() {
    return this.data.length;
  }

  top() {
    if (this.data.length === 0) {
      return null;
    }

    return this.data[0]; 
  }

  push(data) {
    this.data.push(data);
    return;
  }

  shift() {
    return this.data.shift();
  }

  empty() {
    return this.data.length === 0;
  }
}

export default Queue;
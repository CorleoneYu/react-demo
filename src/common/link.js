class Link {
  constructor(data=0, next=null) {
    this.data = data;
    this.next = next;
  }

  length() {
    let current = this;
    let count = 0;
    while(current) {
      count++;
      current = current.next;
    }
    return count;
  }

  tail() {
    let tail = this;
    while(tail.next) {
      tail = tail.next;
    }
    return tail;
  }

  find(data) {
    let current = this;
    while (current) {
      if (current.data == data) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  insert(data) {
    let tail = this.tail();
    let node = new Link(data);
    tail.next = node;
    return true;
  }

  delete(data) {
    console.log('F');
  }
}

export default Link;
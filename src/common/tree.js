import Stack from 'common/stack';
import Queue from 'common/queue';

class Tree {
  constructor({data=0, left=null, right=null}) {
    this.data = data;
    this.left = left;
    this.right = right;
  }

  valueOf() {
    return this.data;
  }

  height() {
    if (!this.left && !this.right) {
      return 1;
    }
    
    let lh = 0;
    if (this.left) {
      lh = this.left.height() + 1;
    }

    let rh = 0;
    if (this.right) {
      rh = this.right.height() + 1;
    }

    return lh > rh ? lh : rh;
  }

  //data left right前序遍历 非递归
  DLR() {
    let stack = new Stack([this]);
    let data = [];
    let current = null;

    while(!stack.empty()) {
      current = stack.pop();
      data.push(current);

      if (current.right) {
        stack.push(current.right);
      }

      if (current.left) {
        stack.push(current.left);
      }
    }
    return data;
  }

  //left data right中序遍历 非递归
  //todo: 修改到了this-> 挂载了isTravle
  LDR() {
    let stack = new Stack([this]);
    let data = [];
    let current = null;

    while(!stack.empty()) {
      current = stack.top();
      while(current.left && !current.left.isTravle) {
        current = current.left;
        stack.push(current);
      }
      current = stack.pop();
      current.isTravle = true;
      data.push(current);

      if (current.right) {
        stack.push(current.right);
      }
    }

    return data;
  }

  //left right data后序遍历 非递归
  //todo: 修改到了this-> 基于isTravle=true后改为isTravle=false
  LRD() {
    let stack = new Stack([this]);
    let data = [];
    let current = null;

    while(!stack.empty()) {
      current = stack.top();

      if (current.left && current.left.isTravle) {
        stack.push(current.left);
      } else if (current.right && current.right.isTravle) {
        stack.push(current.right);
      } else {
        current = stack.pop();
        current.isTravle = false;
        data.push(current.data);
      }
    }

    console.log(data);
    return data;
  }

  static createTree(idx, data) {
    if (data.length <= 0) {
      return null;
    }
    let node = new Tree({data: data[idx]})
    if (idx*2+1 < data.length) {
      node.left = this.createTree(idx*2+1, data, node)
    }
  
    if (idx*2+2 < data.length) {
      node.right = this.createTree(idx*2+2, data, node);
    }
  
    return node;
  }
}

export default Tree;
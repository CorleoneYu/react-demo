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
  
  LDR() {
    /** 
     * 自写的版本
     * todo: fix 挂载了 isTravle
     */
    // let stack = new Stack([this]);
    // let data = [];
    //let current = null;
    // while(!stack.empty()) {
    //   current = stack.top();
    //   while(current.left && !current.left.isTravle) {
    //     current = current.left;
    //     stack.push(current);
    //   }
    //   current = stack.pop();
    //   current.isTravle = true;
    //   data.push(current);

    //   if (current.right) {
    //     stack.push(current.right);
    //   }
    // }

    /** 
     * 左神版本
     */
    let stack = new Stack();
    let data = [];
    let current = this;
    while( !stack.empty() || current) {
      if (current) {
        stack.push(current);
        current = current.left;
      } else {
        current = stack.pop();
        data.push(current);
        current = current.right;
      }
    }
    return data;
  }

  //left right data后序遍历 非递归
  LRD() {
    /** 
     * 自写版本
     * todo: 修改到了this-> 基于isTravle=true后改为isTravle=false
     */
    // let stack = new Stack([this]);
    // let data = [];
    // let current = null;
    // while(!stack.empty()) {
    //   current = stack.top();

    //   if (current.left && current.left.isTravle) {
    //     stack.push(current.left);
    //   } else if (current.right && current.right.isTravle) {
    //     stack.push(current.right);
    //   } else {
    //     current = stack.pop();
    //     current.isTravle = false;
    //     data.push(current.data);
    //   }
    // }

    let current = this;
    let stack1 = new Stack([current]);
    let data = [];
    while (!stack1.empty()) {
      current = stack1.pop();
      data.push(current);
      if (current.left) {
        stack1.push(current.left);
      }

      if (current.right) {
        stack1.push(current.right)
      }
    }

    data.reverse();

    return data;
  }

  // 层级遍历
  TB() {
    let queue = new Queue();
    let current = this;
    let data = [];
    while(!queue.empty() || current) {
      if (current) {
        queue.push(current.left);
        queue.push(current.right);
        data.push(current.data);
      } 
      current = queue.shift();
      
    }
    return data;
  }

  /** 
   * 前序遍历序列化
   */
  serialByRre() {
    let res = `${this.data}!`;
    
    if (this.left) {
      res += this.left.serialByRre();
    } else {
      res += '#!';
    }

    if (this.right) {
      res += this.right.serialByRre();
    } else {
      res += '#!';
    }

    return res;
  }

  /** 前序递归反序列号
   * 参数：前序序列化字符串
   * 调用reserialByPre()输出根节点
   */
  static reserial(str) {
    let nodeAry = str.split('!');
    return Tree.reserialByPre(nodeAry);
  }

  static reserialByPre(nodeAry) {
    let node = nodeAry.shift();
    if (node === '#') {
      return null;
    }
    node = new Tree({data: parseInt(node)});
    node.left = Tree.reserialByPre(nodeAry);
    node.right = Tree.reserialByPre(nodeAry);
    return node;
  }

}

export default Tree;
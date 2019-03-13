import Tree from 'common/tree';

export default class FullTree extends Tree {
  static createTree(idx, data) {
    if (data.length <= 0) {
      return null;
    }
    let node = new FullTree({data: data[idx]})
    if (idx*2+1 < data.length) {
      node.left = this.createTree(idx*2+1, data, node)
    }
  
    if (idx*2+2 < data.length) {
      node.right = this.createTree(idx*2+2, data, node);
    }
  
    return node;
  }

  height() {
    let h = 1;
    let current = this;
    while(current.left) {
      current = current.left;
      h++;
    }

    return h;
  }

  nodesCount() {
    let h = this.height();
    let count = FullTree._nodesCount(this, 1, h);
    return count;
  }
  static _nodesCount(node, level, h) {
    if (level === h) {
      return 1;
    }

    if (node.right && node.right.height() + level === h) {
      //若右子树达到最底层 说明左子树是满的 高度h-level
      return (Math.pow(2,h - level) + FullTree._nodesCount(node.right, level+1, h));
    } else {
      //若右子树没有到达最底层 说明右子树是满的 高度h-levle-1
      return (Math.pow(2, h - level - 1) + FullTree._nodesCount(node.left, level+1, h));
    }
    
  }
}
import React, {Component} from "react";
import ReactDOM from "react-dom";

import { randomData, arySwap } from 'common/ultils';
import Tree from 'common/tree';
import Stack from 'common/stack';
import Queue from 'common/queue';

import TreeNode from 'base/TreeNode';
import DataQueue from 'base/DataQueue';
import DataStack from 'base/DataStack';

import './style.less';

import {
  Button, message
} from 'antd';

class HuffmanCoding extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tree: null,
      stack: new Stack(),
      queue: new Queue()
    }
  }

  init = () => {
    let data = randomData(8);
    data.sort((a, b)=>{
      return b - a;
    })
    
    let nodeAry = data.map((item)=> {
      return new Tree({data: item});
    })

    let stack = new Stack(nodeAry);
    console.log("stack", stack);
    this.setState({
      stack,
      tree: null,
      queue: new Queue()
    })
  }

  handle = () => {
    let { tree, stack, queue } = this.state;
    if (stack.empty() && queue.empty()) {
      message.success("已完成编码");
      return;
    }

    let left = this.findMin(stack, queue);
    let right = this.findMin(stack, queue);
    let node = new Tree({
      data: left + right,
      left, right
    })
    
    if (stack.empty() && queue.empty()) {
      message.success("已完成编码");
    } else {
      queue.push(node);
    }

    tree = node;
    console.log(left, right, node);
    this.setState({
      tree,
      stack,
      queue
    })
  }

  findMin= (stack, queue) => {
    let result = -1;
    if (!stack.empty() && queue.empty()) {
      result =  stack.pop();
    } else if (!queue.empty() && stack.empty()) {
      result = queue.shift();
    } else if (!queue.empty() && !stack.empty()) {
      if (queue.top() < stack.top()) {
        result = queue.shift();
      } else {
        result = stack.pop();
      }
    }
    console.log("finMin", result);
    return result;
  }
  componentWillMount() {
    this.init();
  }

  render() {
    let { tree, stack, queue } = this.state;
    return (
      <div>
        <h1>HuffmanCoding</h1>
        <Button type="primary" onClick={this.handle}>下一步</Button>
        <Button className="ml10" onClick={this.init}>初始化</Button>
        <div className="mt20"><DataStack data={stack.stack}/></div> 
        <div className="mt20"><DataQueue data={queue.data}/></div> 
        { tree && <div className="mt20"><TreeNode node={tree}/></div> }
      </div>
    )
  }

  
}

export default HuffmanCoding;

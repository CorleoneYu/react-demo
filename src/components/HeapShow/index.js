import React, {Component} from "react";
import ReactDOM from "react-dom";

import { random, randomData, arySwap } from 'common/ultils';
import DataQueue from 'base/DataQueue';
import TreeNode from 'base/TreeNode';
import Tree from 'common/tree';
import Heap from 'common/heap';

import './style.less';

import {
  Button, message, Input
} from 'antd';

class HeapShow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      heap: new Heap(Heap.SMA),
      heapTree: null
    }
  }

  init = () => {
    this.setState({
      heap: new Heap(Heap.SMA),
      heapTree: null
    })
  }

  pop = () => {
    let { heap } = this.state;
    let r = heap.pop();
    let heapTree = Tree.createTree(0, heap.data);
    this.setState({
      heap,
      heapTree
    })
  }

  insert = (val) => {
    let { heap } = this.state;
    heap.insert(val);
    let heapTree = Tree.createTree(0, heap.data);
    this.setState({
      heap,
      heapTree
    })
  }

  componentDidMount() {
    this.init();
  }

  render() {
    let { heap, heapTree } = this.state;
    return (
      <div>
        <h1>HeapShow</h1>
        <div className="df">
          <Button type="primary" onClick={this.init}>init</Button>
          <div className="ml20 w300">
            <Input.Search  placeholder="输入整数" enterButton="insert" onSearch={this.insert}/>
          </div>
          <Button className="ml20" type="primary" onClick={this.pop}>pop</Button>
        </div>
        <div className="mt10">
        {
          heap && <DataQueue data={heap.data}/>
        }
        </div>
        
        <div className="mt20">
        {
          heapTree && <TreeNode node={heapTree}/>
        }
        </div>
        
        
      </div>
    )
  }

  
}

export default HeapShow;

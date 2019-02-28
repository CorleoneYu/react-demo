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
  Button, message, Input
} from 'antd';

class TreeShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
     tree: null,
     DLR: null,
     LDR: null,
     LRD: null
    }
  }
  
  componentDidMount() {
    this.init();
  }

  init = (nums=10) => {
    let data = randomData(nums);
    let tree = Tree.createTree(0, data);
    let DLR = tree.DLR();
    let LDR = tree.LDR();
    console.log(tree);
    let LRD = tree.LRD();
    this.setState({
      tree,
      DLR,
      LDR,
      LRD,
    })
  }

  render() {
    let { tree, DLR, LDR, LRD } = this.state;
    return (
      <div>
        <h1>Tree Show</h1>
        <div>
          <div className="df">
            <div className="w300">
              <Input.Search placeholder="输入整数" enterButton="init" onSearch={this.init}/>
            </div>
          </div>
          <div className="mt20">{ tree && <TreeNode node={tree} /> }</div>
          <div className="mt10">
            <span>高度：{ tree && tree.height()}</span>
          </div>
          <div className="mt10">前序遍历{ DLR && <DataQueue data={DLR} /> }</div>
          <div className="mt10">中序遍历{ LDR && <DataQueue data={LDR} /> }</div>
          <div className="mt10">后序遍历{ LRD && <DataQueue data={LRD} /> }</div>
        </div>
        
        
        
      </div>
    )
  }
}

export default TreeShow;

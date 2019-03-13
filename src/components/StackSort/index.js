import React, {Component} from "react";
import ReactDOM from "react-dom";

import Stack from "common/stack";

import { randomData } from 'common/ultils';
import DataList from 'base/DataList';

import './Algorithm.js';

import './style.less';

import {
  Button, message
} from 'antd';

class StackSort extends Component {
  constructor(props) {
    super(props);

    let data = randomData();
    let length = data.length;
    let SStack = new Stack();
    let RStack = new Stack(data);
    let current = RStack.pop();
    
    let count = 0;
    this.state = {
      SStack, RStack, current, length, count,
      target: 'javascript:alert(%27XSS%27)'
    }
    
  }

  init = () => {
    let data = randomData();
    let length = data.length;
    let SStack = new Stack();
    let RStack = new Stack(data);
    let current = RStack.pop();
    this.setState({
      SStack, RStack, current, length, count: 0
    })
  }

  sort = () => {
    let { SStack, current, RStack, length, count } = this.state;
    if (SStack.stack.length === length ) {
      message.success("已完成排序")
      return;
    }

    if (SStack.empty() || SStack.top() <= current) {
      SStack.push(current);
      if (!RStack.empty()) {
        current = RStack.pop();
      } else {
        current = 0;
      }
      
    } else {
      RStack.push(SStack.pop())
    }
    this.setState({
      SStack, current, RStack, count: ++count
    })
  }

  render() {
    let { SStack, current, RStack, length, count } = this.state;
    let { target } = this.state;
    let RStackClone = [...RStack.stack];
    RStackClone.reverse();

    console.log(this.props);
    return (
      <div>
        <h1>Stack Sort</h1>
        <a href={target}>跳转</a>
        <img src="http://www.shashafushi.cn:8080/api/BigType/getBig" alt=""/>
        <form action="http://www.shashafushi.cn:8080/api/BigType/getBig" method="POST"></form>
        <Button className="mr20" type="primary" onClick={this.init}>初始化</Button>
        <Button className="mr20" type="primary" onClick={this.sort}>下一步</Button>
        <span>排序次数：{count}</span>
        <div styleName="stack-box" className="tc mt20">
          <div className="mr20 w500">
            <DataList data={SStack.stack}/>
            <div>sorted Stack</div>
          </div>
          <div className="mr20">
            <DataList data={[current]}/>
            <div>current</div>
          </div>
          <div className="w500">
            <DataList data={RStackClone} />
            <div>random Stack</div>
          </div>
        </div>    
      </div>
    )
  }
}

export default StackSort;

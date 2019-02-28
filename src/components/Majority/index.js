import React, {Component} from "react";
import ReactDOM from "react-dom";

import { randomData, arySwap } from 'common/ultils';

import DataQueue from 'base/DataQueue';

import './style.less';

import {
  Button, message
} from 'antd';

class Majority extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [1, 4, 5, 2, 7, 3, 4, 4, 4, 4, 4, 4],
      count: 0,
      idx: 0,
      maj: null
    }
  }

  init = () => {
    this.setState({
      data: [],
      count: 0,
      idx: 0,
      maj: null
    })
  }

  handle = () => {
    let { data, count, idx, maj } = this.state; 
    if (idx > data.length || idx === data.length) {
      message.info("end");
      return;
    }
    if (count === 0) {
      maj = data[idx];
      count++;
    } else {
      maj === data[idx] ? count++ : count--;
    }
    idx++;
    this.setState({
      count, idx, maj
    })
  }

  check = ()=> {
    let { maj, data } = this.state;
    let count = 0;
    data.forEach( val => {
      val === maj && count++;
    })

    if (count *2 > data.length) {
      message.success(`${maj} is majority`);
    } else {
      message.info(`${maj} isn't majority`);
    }
  }

  render() {
    let { data, count, idx, maj } = this.state;
    return (
      <div>
        <h1>Majority</h1>
        <Button onClick={this.init}>初始化</Button>
        <Button className="ml10" type="primary" onClick={this.handle}>next</Button>
        <Button className="ml10" type="primary" onClick={this.check}>check</Button>
        <div className="mt10">
          <span>idx: {idx}</span>
          <span className="ml20">maj: {maj ? maj : '暂无' }</span>
          <span className="ml20">count: {count}</span>
          { data && <DataQueue data={data}/> }
        </div>
        
      </div>
    )
  }
}

export default Majority;

import React, {Component} from "react";
import ReactDOM from "react-dom";

import Stack from "common/stack";

import { randomData } from 'common/ultils';
import DataLink from 'base/DataLink';

import './style.less';

import {
  Button, message, Input
} from 'antd';
import Link from "../../common/link";

class HashLink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 10,
      hashTable: null
    }
  }
  
  componentDidMount() {
    this.init();
  }

  init = () => {
    let hashTable = [];
    for (let i=0; i<10; i++) {
      hashTable.push(new Link(i));
    }

    this.setState({
      hashTable
    })
  }

  insert = (data) => {
    let { mode, hashTable } = this.state;
    let target = data % mode;
    if (hashTable[target].find(data)) {
      message.error("this number is existed");
      return;
    } else {
      hashTable[target].insert(data);
      this.setState({
        hashTable
      })
    }
  }

  delete = () => {

  }

  render() {
    let { hashTable } = this.state;
    return (
      <div>
        <h1>HashLink</h1>
        <div styleName="operation">
          <Button type="primary" onClick={this.init}>init</Button>
          <div className="ml20 w300">
            <Input.Search placeholder="输入整数" enterButton="insert" onSearch={this.insert}/>
          </div>
          <div className="ml20 w300">
            <Input.Search placeholder="输入整数" enterButton="delete" onSearch={this.delete}/>
          </div>
        </div>
        <div styleName="hash">
          {
            hashTable && hashTable.map( (item, idx) => (
              <div className="mr10" key={idx}><DataLink link={item}/></div>
            ))
          }
        </div>
        
      </div>
    )
  }
}

export default HashLink;

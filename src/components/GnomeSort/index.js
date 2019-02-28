import React, {Component} from "react";
import ReactDOM from "react-dom";

import { randomData, arySwap } from 'common/ultils';
import DataList from 'base/DataList';

import './style.less';

import {
  Button, message
} from 'antd';

function gnomeSort(ary) {
  let length = ary.length;
  for (let k=1; k < length; k++) {
    for (let i = k; 0 < i && ary[i-1] > ary[i]; i--) {
      arySwap(ary, i-1, i);
    }
  }
}

class GnomeSort extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      sortedIdx: 0,
      current: 0,
    }
  }

  init = () => {
    let data = randomData();
    console.log("unSort", data);
    
    this.setState({
      data,
      sortedIdx: 0,
      current: 0
    })
  }

  sort = () => {
    let { data, current, sortedIdx } = this.state;
    let length = data.length;

    if (sortedIdx >= length ) {
      message.success("已完成排序");
      return;
    }
   
    if ( data[current] > data[current+1]) {
      arySwap(data, current, current+1);

      if (current > 0) {
        current--;
      }
    } else {
      if (current === sortedIdx) {
        sortedIdx++;
      }
      if (current < sortedIdx) {
        current = sortedIdx;
      } else {
        current++;
      }
      
    }

    this.setState({
      data, current, sortedIdx
    })
  }

  componentDidMount() {
    this.init();
  }

  render() {
    let { data, sortedIdx, current } = this.state;
    return (
      <div>
        <h1>GnomeSort</h1>
        <Button className="mr20" type="primary" onClick={this.init}>初始化</Button>
        <Button className="mr20" type="primary" onClick={this.sort}>下一步</Button>
        <div className="mt20">
          <div>current: {current}</div>
          <div>sortedIdx: {sortedIdx}</div>
          <DataList data={data}/>
        </div>
      </div>
    )
  }

  
}

export default GnomeSort;

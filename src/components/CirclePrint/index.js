import React, {Component} from "react";
import ReactDOM from "react-dom";

import Stack from "common/stack";

import { randomData } from 'common/ultils';
import DataQueue from 'base/DataQueue';

import {
  Button, message
} from 'antd';

class CirClePrint extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doubleAry: null,
      matrix: null,
      row: 4,
      col: 4,
      path: [],
    }
    console.log(history);

  }
  
  componentDidMount() {
    this.init();
  }


  createMatrix = () => {
    let { row, col } = this.state;
    let ary = [];
    for (let i = 0; i < row; i++) {
      ary.push([]);
    }

    let sum = row * col;
    let rowIdx = 0;
    for (let i = 0; i < sum; i++) {
      if (i % col === 0 && i != 0) {
        rowIdx++;
      }
      ary[rowIdx].push(i+1);
    }

    return ary;
  }

  /** 
   * 打印矩阵边界
   * 参数：左上角 右下角
   * 类型：{row, col}
   */
  printEdge({ LT, RB, path}) {
    let { doubleAry } = this.state;

    try {
      if (LT.row === RB.row) {
        //一行
        for (let i = LT.col; i < RB.col; i++ ) {
          path.push(doubleAry[LT.row][i]);
          console.log(`doubleAry[${LT.row}][${i}]: ${doubleAry[LT.row][i]}`)
        }
        return;
      } 
  
      if (LT.col === RB.col) {
        //一列
        for (let i = LT.row; i < RB.row; i++) {
          path.push(doubleAry[i][LT.col]);
          console.log(`doubleAry[${i}][${LT.col}]: ${doubleAry[i][LT.col]}`);
        }
        return;
      }
  
      for (let i = LT.col; i < RB.col; i++) {
        path.push(doubleAry[LT.row][i]);
        console.log(`doubleAry[${LT.row}][${i}]: ${doubleAry[LT.row][i]}`);
      }
  
      for (let i = LT.row; i < RB.row; i++) {
        path.push(doubleAry[i][RB.col]);
        console.log(`doubleAry[${i}][${RB.col}]: ${doubleAry[i][RB.col]}`);
      }
  
      for (let i = RB.col; i > LT.col; i--) {
        path.push(doubleAry[RB.row][i]);
        console.log(`doubleAry[${RB.row}][${i}]: ${doubleAry[RB.row][i]}`);
      }
  
      for (let i = RB.row; i > LT.row; i--) {
        path.push(doubleAry[i][LT.col]);
        console.log(`doubleAry[${i}][${LT.col}]: ${doubleAry[i][LT.col]}`);
      }
    } catch( err) {
      message.info("doubleAry err");
    }
    
  }

  /** 
   * 正方形矩阵原地旋转90°
   */
  rotateMatrix = () => {
    let { matrix, col, row } = this.state;
    let left = 0, top = 0, right = col-1, bottom = row-1;

    while(left < right && top < bottom) {
      for (let i = 0; i < right - left; i++) {
        let tmp = matrix[top][left+i];
        // 左边一列 一一赋值给 上面一行
        matrix[top][left+i] = matrix[bottom-i][left];
        // 下面一行 一一赋值给 左边一列
        matrix[bottom-i][left] = matrix[bottom][right-i];
        // 右边一列 一一赋值给 下面一行
        matrix[bottom][right-i] = matrix[top+i][right];
        // // 上面一行 一一赋值给 右边一列
        matrix[top+i][right] = tmp;
      }
      left += 1;
      right -= 1;
      bottom -= 1;
      top += 1;
    }

    console.log('martix', matrix);
    this.setState({
      matrix
    })
  }

  init = () => {
    let ary = this.createMatrix();
    let matrix = this.createMatrix();

    this.setState({
      matrix,
      doubleAry: ary,
    }, ()=>{
      this.print();
      this.rotateMatrix();
    });

  }

  print = () => {
    let { doubleAry, row, col, path } = this.state;
    let LT = { row: 0, col: 0 };
    let RB = { row: row-1, col: row-1 };
    
    while (LT.row < RB.row && LT.col < RB.col) {
      this.printEdge({LT, RB, path});
      LT.row += 1;
      LT.col += 1;
      RB.row -= 1;
      RB.col -= 1;
    }

    this.setState({
      path
    })
  }

  render() {
    let { doubleAry, row, col, path, matrix } = this.state;

    return (
      <div>
        <h1>CirClePrint</h1>
        <p>row: {row}, col: {col}</p>
        <div className="mt20">
        {
          doubleAry && doubleAry.map( (ary, idx) => (
            <div key={idx} className="mt10">
              <DataQueue  data={ary}/>
            </div>
          ))
        }
        </div>
        <div className="mt10">
          <DataQueue  data={path}/>
        </div>
        <h1 className="mt10">Martix Rotate</h1>
        <div className="mt20">
        {
          matrix && matrix.map( (ary, idx) => (
            <div key={idx} className="mt10">
              <DataQueue  data={ary}/>
            </div>
          ))
        }
        </div>
      </div>
    )
  }
}

export default CirClePrint;

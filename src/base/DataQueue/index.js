import React, {Component} from "react";
import ReactDOM from "react-dom";

import './style.less';

class DataQueue extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { data } = this.props;
    return (
      <div styleName="queue">
        {
          data.map( (item, idx)=>(
            <div styleName="queue-item" key={idx}>{+item}</div>
          ))
        }
      </div>
    )
  }

  
}

export default DataQueue;

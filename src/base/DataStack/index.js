import React, {Component} from "react";
import ReactDOM from "react-dom";

import './style.less';

class DataStack extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { data } = this.props;
    return (
      <div styleName="stack">
        {
          data.map( (item, idx)=>(
            <div styleName="stack-item" key={idx}>{+item}</div>
          ))
        }
      </div>
    )
  }

  
}

export default DataStack;

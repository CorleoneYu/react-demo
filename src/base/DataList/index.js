import React, {Component} from "react";
import ReactDOM from "react-dom";

import './style.less';

class DataList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { data } = this.props;

    return (
      <div styleName="data-list">
        {
          data.map( (item, idx) => (
            <div styleName="data-item" 
            key={idx} style={ { height: `${item * 0.5}rem`, lineHeight: `${item * 0.5}rem` }}>
              <span>{item}</span>
            </div>
          ))
        }
      </div>
    )
  }

  
}

export default DataList;

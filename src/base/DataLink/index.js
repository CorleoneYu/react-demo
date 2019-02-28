import React, {Component} from "react";
import ReactDOM from "react-dom";

import './style.less';

class DataLink extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { link } = this.props;

    return (
      <div styleName="link">
        <div styleName="link-item">{link.data}</div>
        { link.next && <img className="down-img" src="/img/down.png" alt="down"/> }
        { link.next && <DataLink link={link.next}/> }
      </div>
    )
  }

  
}

export default DataLink;

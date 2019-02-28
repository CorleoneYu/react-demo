import React, {Component} from "react";
import ReactDOM from "react-dom";

import './style.less';

class TreeNode extends Component {
 
  render() {
    let { node } = this.props;

    return (
      <div styleName="tree">
        <div styleName="node">
          <p>{node.data}</p> 
        </div>
        <div styleName="children">
          {
            node.left && <div styleName="left"><TreeNode node={node.left} /></div>
          }
          {
            node.right && <div styleName="right"><TreeNode node={node.right} /></div>
          }
        </div>
        
        
      </div>
    )
  }

  
}

export default TreeNode;

import React, {Component} from "react";
import ReactDOM from "react-dom";

import { 
  Link, BrowserRouter as Router, Route, Switch, Redirect
} from 'react-router-dom';

import './style.less';

import store from './store/index';
import { Provider } from 'react-redux';

import {
  Layout, Menu, Breadcrumb, Icon,
} from 'antd';

const {
  Header, Content, Footer, Sider,
} = Layout;
const SubMenu = Menu.SubMenu;

import StackSort from 'components/StackSort';
import GnomeSort from 'components/GnomeSort';
import HuffmanCoding from 'components/HuffmanCoding';
import HashLink from 'components/HashLink';
import TreeShow from 'components/TreeShow';
import Majority from 'components/Majority';
import HeapShow from 'components/HeapShow';
import CirclePrint from 'components/CirclePrint';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Layout style={{ minHeight: '100vh'}}>
            <Sider >
              <Menu theme="dark" mode="inline" 
              defaultOpenKeys={["sub1", "sub2", "sub3"]}>
                <SubMenu key="sub1" title="sort" >
                  <Menu.Item key="1">
                    <Link to="/StackSort">Stack Sort</Link>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <Link to="/GnomeSort">Gnome Sort</Link>
                  </Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title="algorithm" >
                  <Menu.Item key="3">
                    <Link to="/HuffmanCoding">Huffman Coding</Link>
                  </Menu.Item>
                  <Menu.Item key="4">
                    <Link to="/HashLink">HashLink</Link>
                  </Menu.Item>
                  <Menu.Item key="5">
                    <Link to="/Majority">Majority</Link>
                  </Menu.Item>
                  <Menu.Item key="8">
                    <Link to="/CirclePrint">CirclePrint</Link>
                  </Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" title="data structure" >
                  <Menu.Item key="6">
                    <Link to="/TreeShow">Tree Show</Link>
                  </Menu.Item>
                  <Menu.Item key="7">
                    <Link to="/HeapShow">Heap Show</Link>
                  </Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            
            <Content className="bgwhite pl20 pr20">
              <Switch>
                <Route path="/StackSort" component={StackSort} />
                <Route path="/GnomeSort" component={GnomeSort} />
                <Route path="/HuffmanCoding" component={HuffmanCoding} />
                <Route path="/HashLink" component={HashLink} />
                <Route path="/Majority" component={Majority} />
                <Route path="/TreeShow" component={TreeShow} />
                <Route path="/HeapShow" component={HeapShow} />
                <Route path="/CirclePrint" component={CirclePrint} />
              
                <Redirect to="/StackSort" />
              </Switch>
            </Content>
          </Layout>
        </Router>
      </Provider>
    )
  }
}

export default App;

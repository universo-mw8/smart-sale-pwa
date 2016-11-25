import React, { Component } from 'react';
import { HashRouter, Match, Link } from 'react-router';

import { Layout, Header, Drawer, Navigation, Content } from 'react-mdl';

import About from './components/About';
import Home from './components/Home';

class MatchAndHideDrawer extends Component {
  render() {
    return <Match {...this.props} />;
  }
}

export default () => (
  <HashRouter>
    <Layout fixedHeader>
      <Header title="Smart Sale"/>
      <Drawer title="Smart Sale">
        <Navigation>
          <Link to="/">Capturar QRCode</Link>
        </Navigation>
      </Drawer>
      <Content>
        <MatchAndHideDrawer exactly pattern="/" component={ Home } />
        <MatchAndHideDrawer pattern="/about" component={ About } />
      </Content>
    </Layout>
  </HashRouter>
);

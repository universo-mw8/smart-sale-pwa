'use strict'

import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
import { Layout, Content } from 'react-mdl'
// import LogoImg from '../dist/images/icon-48x48.png'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      result: 'No result'
    }
  }
  handleScan (data) {
    this.setState({
      result: data
    })
  }
  handleError (err) {
    console.log(err)
  }
  render () {
    const previewStyle = {
      height: '360px',
      width: '100%'
    }

    return (
      <Layout fixedHeader fixedDrawer >
        <Content>
          <QrReader
            previewStyle={previewStyle}
            handleError={this.handleError}
            handleScan={this.handleScan.bind(this)} />
          <p>{this.state.result}</p>
        </Content>
      </Layout>
    )
  }
}

export default App

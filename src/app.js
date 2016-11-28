'use strict'

import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
import QRCode from 'qrcode.react'
import { Layout, Content } from 'react-mdl'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showCamera: true,
      showSuccess: false,
      result: null
    }
  }
  handleScan (data) {
    setTimeout(() => {
      this.setState({
        result: this.generateQRCode()
      }, () => {
        this.setState({ showCamera: false })
        this.setState({ showSuccess: true })
      })
      console.log(this.state.result)
    }, 500)
  }
  handleError (err) {
    console.log(err)
  }
  generateQRCode () {
    let identifier = Math.floor((Math.random() * 1000) + 1)
    return `${identifier};342432432;Bepantol Derma;30%;2017-01-31T18:46:19-0300;1318630`
  }
  render () {
    const previewStyle = {
      height: '460px',
      width: '100%'
    }

    return (
      <Layout>
        {this.state.showCamera &&
          <Content className='reader'>
            <QrReader
              previewStyle={previewStyle}
              handleError={this.handleError}
              handleScan={this.handleScan.bind(this)} />
          </Content>
        }
        {this.state.showSuccess &&
          <Content className='success'>
            <h4>
              Parabéns va até a loja xxxxx e apresente este QrCode para ganhar seu desconto de 20%
            </h4>
            <QRCode size={256} value={this.state.result} />
          </Content>
        }
      </Layout>
    )
  }
}

export default App

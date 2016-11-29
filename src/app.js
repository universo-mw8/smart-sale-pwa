'use strict'

import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
import QRCode from 'qrcode.react'
import { Layout, Header, Content } from 'react-mdl'

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
    this.setState({
      result: this.generateQRCode()
    }, () => {
      this.setState({ showCamera: false })
      this.setState({ showSuccess: true })
    })
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
      <Layout fixedHeader >
        <Header title='Smart Sale App' />
        <Content>
          <div className='logo-mw8' />
          {this.state.showCamera &&
            <Content className='reader'>
              <h4 className='success-message'>
                Olá,&nbsp;
                <span className='success-message-user'>
                  Waldo Sousa
                </span>
              </h4>
              <p className='success-message-info'>
                Aproxime a câmera para realizar a leitura do QRCode
              </p>
              <QrReader
                previewStyle={previewStyle}
                handleError={this.handleError}
                handleScan={this.handleScan.bind(this)} />
            </Content>
          }
          {this.state.showSuccess &&
            <Content className='success-box'>
              <h4 className='success-message'>
                <span className='success-message-user'>
                  Waldo Sousa
                </span>
              </h4>
              <p className='success-message-info'>
                Parabéns, Vá até a farmácia mais próxima e apresente este QRCode para ganhar seu desconto de 20%
              </p>
              <QRCode size={256} value={this.state.result} />
            </Content>
        }
        </Content>
      </Layout>
    )
  }
}

export default App

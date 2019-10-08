import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
import { Link } from 'react-router-dom'

export default class Test extends Component {
    state = {
        result: ''
      }
     
      handleScan = data => {
        if (data) {
          this.setState({
            result: data
          })
        }
      }
      handleError = err => {
        console.error(err)
      }

    render() {
        return (
            <div className="qrreader-wrapper">
              <div className="qrreader-container container">
                <div className="columns is-centered">
                  <div className="column is-5 box">
                    <p className="has-text-centered">Escanea el codigo QR presentado por el usuario</p>
                    <br/>
                      <div className="qr-code-reader">
                        <QrReader
                        delay={300}
                        onError={this.handleError}
                        onScan={this.handleScan}
                        style={{ width: '40%' }}
                        />
                      </div>
                    <br/>
                    <p className="has-text-centered">{this.state.result}</p>
                    <div className='button-contribution'>
                            <button className='button is-primary'> 
                                <Link to={'/centers'}>Centros</Link>
                            </button>
                        </div>
                  </div>
                </div>
              </div>
            </div>
          )
        }
    }

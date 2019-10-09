import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import CENTER_SERVICE from '../../services/centers'

export default class Test extends Component {
    state = {
        result: '',
        contribution: {
          quantity: '',
          unity: ''
        }
      }
     

      addContribution = async () => {
        const {data} = await CENTER_SERVICE.addContribution(this.state.contribution)
        console.log(data);
      }

      onSubmit = (e) => {
        e.preventDefault();
        this.addContribution()
        this.props.history.push('/contribution-list')
      };

      handleInput = (e) => {
        const { contribution } = this.state;
        const key = e.target.name;
        contribution[key] = e.target.value;
        this.setState({ contribution });
    }

      handleScan = data => {
        if (data) {
          this.setState({
            result: data
          })
          const details = data.replace(" ","-")
          axios.get('https://young-beyond-07801.herokuapp.com/api/levelup/'+details)
        }
      }
      handleError = err => {
        console.error(err)
      }

    render() {
      let {contribution} = this.state
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
                    {this.state.result ? 
                        <>
                        <p>Registra la contribucion del usuario!</p>
                        <form className="columns is-5 box" onSubmit={this.onSubmit}>
                        <div className="field">
                          <div className="control">
                          <input className="input is-primary" onChange={this.handleInput} name="quantity" value={contribution.quantity} type="text" placeholder="cantidad"/>
                          </div>
                        </div>
                        <div className="field">
                          <div className="control">
                          <input className="input is-primary"  onChange={this.handleInput} name="unity" value={contribution.unity} type="text" placeholder="ejemplo: litros, kilos"/>
                          </div>
                        </div>
                        <div>
                          <input className="button is-primary is-fullwidth" type="submit" value="Agregar contribucion"/>
                        </div>
                        </form>
                      </>
                      :
                      ''
                  }


                    <div className='button-contribution'>
                      <NavLink to='/centers'>
                        <button className='button is-primary'>Centros</button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        }
    }

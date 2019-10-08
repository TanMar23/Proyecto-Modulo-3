import React, { Component } from 'react'
import {MyContext} from '../../context/index'
import QRCode from 'qrcode.react';
import { NavLink } from 'react-router-dom'


export default class Contribution extends Component {

    render() {
        return (
            <div className="qrcode-wrapper">
                <div className="qrcode-container container">
                    <div className="columns is-centered">
                    <div className="column is-5 box">
                        <br/>
                        <p className="has-text-centered">Muestra  este codigo en el centro de acopio para que quede registrada tu aportacion!</p>
                        <div className='qrcode'>
                        <QRCode value={this.context.state.loggedUser._id} />
                        </div>
                        <br/>
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

Contribution.contextType = MyContext;

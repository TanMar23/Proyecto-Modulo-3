import React, { Component } from 'react'
import {MyContext} from '../../context/index'
import QRCode from 'qrcode.react';
import { Link } from 'react-router-dom'


export default class Contribution extends Component {

    render() {
        return (
            <div>
                <div>
                    <p>Muestra  este codigo en el centro de acopio para que quede registrada tu aportacion!</p>
                    <div className='qrcode'>
                    <QRCode value={this.context.state.loggedUser._id} />
                    </div>
                    <br/>
                    <button className='button is-primary'> 
                          <Link to={'/centers'}>Centros</Link>
                    </button>
                </div>
            </div>
        )
    }
}

Contribution.contextType = MyContext;

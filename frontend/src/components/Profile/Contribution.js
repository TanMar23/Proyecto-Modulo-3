import React, { Component } from 'react'
import {MyContext} from '../../context/index'
import QRCode from 'qrcode.react';
import { NavLink } from 'react-router-dom'
import axios from 'axios';


export default class Contribution extends Component {

    generate(n) {
        var add = 1, max = 12 - add;   // 12 is the min safe number Math.random() can generate without it starting to pad the end with zeros.   

        if ( n > max ) {
                return this.generate(max) + this.generate(n - max);
        }

        max        = Math.pow(10, n+add);
        var min    = max/10; // Math.pow(10, n) basically
        var number = Math.floor( Math.random() * (max - min + 1) ) + min;

        return ("" + number).substring(add); 
    }

    uploadPin(pin){
        const details={id:this.context.state.loggedUser._id, pin:pin}
        axios.post(`https://young-beyond-07801.herokuapp.com/api/levelup`,details)
    }

    render() {
        const pin = this.generate(4)
        this.uploadPin(pin)
        console.log(pin)
        return (
            <div className="qrcode-wrapper">
                <div className="qrcode-container container">
                    <div className="columns is-centered">
                    <div className="column is-5 box">
                        <br/>
                        <p className="has-text-centered">Muestra  este codigo en el centro de acopio para que quede registrada tu aportacion!</p>
                        <div className='qrcode'>
                        <QRCode value={this.context.state.loggedUser._id+' '+pin} />
                        </div>
                        <div className='button-contribution'>
                            <NavLink to='/centers'>
                                <button className='button is-primary'>Centros</button>
                            </NavLink>
                            <NavLink to='/profile'>
                                <button className='button is-primary'>Perfil</button>
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

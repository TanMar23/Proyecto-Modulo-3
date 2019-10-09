import React, { Component } from 'react'
import Layout from './../Layout'
import { NavLink } from 'react-router-dom'


export default class Home extends Component {
  state ={
    user: JSON.parse(localStorage.getItem('user'))
  };
  render() {
    const {user} = this.state
    return (
      <Layout history={this.props.history}>
        <div>
            <div className="columns">
              <div className="column is-4">
                <div className="home-container container">
                <img src="https://source.unsplash.com/uqxe2L1Aq0g/400x700" width='400px' height='800px' alt="green city"/>
                </div>
              </div>
              <div className="column is-8">
                <br/>
                <p className='has-text-centered'>Bienvenido a green finder!</p>
                <div className='home-button'>
                  { user.role === 'ADMIN'? 
                 <>
                  <NavLink exact to='/centers'>
                    <button className='button is-large is-primary'> Centros </button>
                  </NavLink>
                  
                  <NavLink exact to='/test'>
                  <button className='button is-large is-primary'>Registrar contribucion</button>
                  </NavLink>
                 </>
                 :
                 <>
                  <NavLink exact to='/centers'>
                    <button className='button is-large is-primary'> Centros </button>
                  </NavLink>
                 </>
                }
                </div>
               

                <div class="tabs is-boxed">
                  <ul>
                    <li class="is-active"><a>Quienes somos?</a></li>
                    <li><a>Por que green finder?</a></li>
                    <li><a>Como funciona?</a></li>
                  </ul>
                </div>
            
                
              </div>
            </div>
        </div>
      </Layout>
    );
  }
}

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
                <img src="https://source.unsplash.com/uqxe2L1Aq0g/400x700" width='400px' height='1000px' alt="green city"/>
                </div>
              </div>
              <div className="column is-8">
                <br/>
                <div className='top-home'>
                  <h1 className='has-text-centered is-size-4'>Bienvenido a green finder!</h1>
                  <div className='home-button'>
                    { user.role === 'ADMIN'? 
                  <>
                    <NavLink exact to='/centers'>
                      <button className='button is-medium is-primary'> Centros </button>
                    </NavLink>
                    
                    <NavLink exact to='/test'>
                    <button className='button is-medium is-primary'>Registrar contribucion</button>
                    </NavLink>
                  </>
                  :
                  <>
                    <NavLink exact to='/centers'>
                      <button className='button is-medium is-primary'> Centros </button>
                    </NavLink>
                  </>
                  }
                  </div>
                </div>
               
                {/* Empieza boxes */}
                <div className="question-wrapper">
                  <div className="columns is-centered">
                    <div className="column box is-8">
                      <h3 className='has-text-centered'>¿Quiénes somos?</h3>
                      <p>Somos una empresa 100% mexicana dedicada a fomentar una mejor cultura del manejo de desechos</p>
                    </div>
                  </div>
                </div>
                  <br/>
                <div className="question-wrapper">
                  <div className="columns is-centered">
                    <div className="column box is-8">
                      <h3 className='has-text-centered'>¿Por qué green finder?</h3>
                      <div className='img-greenfinder'>
                      <img src="/images/tiempos_desechos.jpg" width='300px' height='200px' alt="tiempos desechos"/>
                      </div>
                    </div>
                  </div>
                </div>
                <br/>
                <div className="question-wrapper">
                  <div className="columns is-centered">
                    <div className="column box is-8">
                      <h3 className='has-text-centered'>¿Cómo funciona?</h3>
                      <p>Te muestra los centros de acopio de residuos en la CDMX y sus alrededores. Por cada aportacion que hagas subes de nivel</p>
                    </div>
                  </div>
                </div>
                  <br/>
              </div>
            </div>
        </div>
      </Layout>
    );
  }
}


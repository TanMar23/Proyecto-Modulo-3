import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Layout from './../Layout'



export default class Home extends Component {
  render() {
    return (
    
            <Layout history={this.props.history}>
              <div>
                  <div className="columns">
                    <div className="column is-7">
                      <p>Quienes somos?</p>
                      <p>Por que green finder?</p>
                      <p>Como funciona?</p>
                    </div>
                    <div className="column is-5">
        
                      <div className='home-button'>
                        <button className='button is-large is-success'> 
                          <Link to={'/centers'}>Centros</Link>
                        </button>
                      </div>
                      <div className='home-button'>
                        <button className='button is-large is-success'>
                          <Link to={'/level'}>Nivel</Link> 
                        </button>
                      </div>
                      <div className='home-button'>
                        <button className='button is-large is-success'>
                          <Link to={'/rewards'}>Recompensas</Link>
                        </button>
                      </div>
                      
                    </div>
                  </div>
              </div>
         </Layout>
          );
  }
}

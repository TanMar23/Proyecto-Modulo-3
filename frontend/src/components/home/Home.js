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
                     <div className="container">
                     <p>Quienes somos?</p>
                     <img src="https://images.unsplash.com/photo-1493794179168-82ca7cb00437?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80" width='400px' height='350px' alt="a lot of people walking in the street"/>
                      <p>Por que green finder?</p>
                      <img src="https://images.unsplash.com/photo-1518833791667-be4ec78386f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80" width='400px' height='350px' alt="green city"/>
                      <p>Como funciona?</p>
                      <img src="https://images.unsplash.com/photo-1493794179168-82ca7cb00437?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80" width='400px' height='350px' alt="a lot of people walking in the street"/>
                     </div>
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

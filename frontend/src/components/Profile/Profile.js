import React, { Component } from 'react';
import { MyContext } from '../../context';
import Layout from '../Layout'
// import MY_SERVICE from '../../services/index'

class Profile extends Component {
  state={
    user:{
      email: '',
      name: '',
      lastName: '',
      level: ''
    }
  }

  componentDidMount() {

    if (!this.context.state.loggedUser) return this.props.history.push('/login')
    const userData = this.context.state.loggedUser
    this.setState( userData )
  }

  render() {
    const user = this.state

    return (
      <Layout history={this.props.history}>
        <div className="profile-wrapper">
          <div className="columns is-centered">
            <div className="column is-4 box">
              <div>
                <div className="profile-images">
                    {user.level === 1 ?
                    <img src="/images/seeds.svg" width='180px' height="250px" alt="seed"/>  
                    :
                    user.level === 2 ?
                    <img src="/images/germinacion.svg" width='200px' height="300px" alt="germinacion"/> 
                    :
                    user.level === 3 ?
                    <img src="/images/plantita.svg" width='200px' height="300px" alt="plantita"/> 
                    :
                    <img src="/images/tree.svg" width='200px' height="300px" alt="arbolito"/> 
                  }
                </div>
                <div className="profile-p">
                  <p>Nivel: {user.level}</p>
                  <p>Nombre: {user.name} </p>
                  <p>Apellido: {user.lastName} </p>
                  <p>Email: {user.email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

Profile.contextType = MyContext;

export default Profile;
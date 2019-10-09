import React, { Component } from 'react';
import { MyContext } from '../../context';
import Layout from '../Layout'
import MY_SERVICE from '../../services/index'

class Profile extends Component {
  state={
    email: '',
    name: '',
    lastName: '',
    level: ''
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
        <div>
          <p>Nombre: {user.name} </p>
          <p>Apellido: {user.lastName} </p>
          <p>Email: {user.email}</p>
          <p>Nivel: {user.level}</p>
          <p>HOla</p>
        </div>
      </Layout>
    );
  }
}

Profile.contextType = MyContext;

export default Profile;
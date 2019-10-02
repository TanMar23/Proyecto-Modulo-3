import React, { Component } from 'react';
import MY_SERVICE from '../../services/index';

class Signup extends Component {
    state = {
      user: {
        name: "",
        lastname: "",
        email: "",
        password: ""
      }
    };
  
    handleInput = (e) => {
      const { user } = this.state;
      const key = e.target.name;
      user[key] = e.target.value;
      this.setState({ user });
    };
  
    onSubmit = (e) => {
      e.preventDefault();
      MY_SERVICE.signup(this.state.user)
        .then((response) => {
          let userMsg = response.data.msg
          console.log(userMsg);
          this.props.history.push('/login')
        })
        .catch((error) => {
          console.log(error);
        });
    };
  
    render() {
      const {userMsg} = this.state.user
      return (
        <div className="signup-wrapper">
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="columns is-centered">
          <div >
            <p className="message is-success">{userMsg}</p>
            <form className="columns is-5" onSubmit={this.onSubmit}>
              <div className="column">
                <h1 className="title is-1 has-text-light">Sign up</h1>
                  <label className="label has-text-light is-size-4">Email:</label>
                  <input className="input" onChange={this.handleInput} type="email" name="email"/>
             
                
                  <label className="label has-text-light is-size-4">Nombre:</label>
                  <input className="input" onChange={this.handleInput} type="text" name="name"/>
              
                  <label className="label has-text-light is-size-4">Apellido:</label>
                  <input className="input" onChange={this.handleInput} type="text" name="lastName"/>
             
                  <label className="label has-text-light is-size-4">Contraseña:</label>
                  <input className="input" onChange={this.handleInput} type="password" name="password"/>
               
                <div>
                <input className="button is-primary is-fullwidth" type="submit" value="Signup"/>
                </div>
              </div>
            </form>
          </div>
        </div>
        </div>
      );
    }
  }

  
  export default Signup;


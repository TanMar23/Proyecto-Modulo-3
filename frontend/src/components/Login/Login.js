
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MY_SERVICE from '../../services/index';
import { MyContext } from '../../context';


class Login extends Component {
    state = {
        user: {}
    }

    handleInput = (e) => {
        const { user } = this.state;
        const key = e.target.name;
        user[key] = e.target.value;    
        this.setState({ user });
    }

    logUser = (loggedUser) => {
        this.setState({ loggedUser })
    }

    onSubmit = (e) => {
        e.preventDefault();
        MY_SERVICE.login(this.state.user)
        .then((response) => {
            this.context.logUser(response.data.user);
            localStorage.setItem('user', JSON.stringify(response.data.user))
            this.props.history.push('/home');
        })
        .catch((error) => {
            console.log(error);
        });
    };

    render() {
        return (
            <div className="login-wrapper">
                   <br/>
            <br/>
            <br/>
            <br/>
            
             <div className="columns is-centered">
                 <div className="column is-5">
                 <h1 className="title is-1 has-text-light has-text-centered">Iniciar sesión</h1>
                        <form onSubmit={this.onSubmit}>
                            <label className="label has-text-light is-size-4 has-text-centered">Email</label>
                            <input className="input" type="email" name="email" placeholder="Email" onChange={this.handleInput}/>
                            <label className="label has-text-light is-size-4 has-text-centered">Contraseña</label>
                            <input className="input" type="password" name="password" placeholder="Password" onChange={this.handleInput}/>
                            <div className='login-button'>
                                <input className="button is-primary" type="submit" value="Iniciar sesión" />
                            </div>
                        </form>
                    <h3 className="has-text-light is-size-5">Si aún no tienes una cuenta, puedes crearla <Link to={"/signup"}>aquí   </Link></h3>   
                 </div>
             </div>
            </div>
        )
    }
}
Login.contextType = MyContext;
export default Login
import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios'


export default class Center extends Component {
    state = {
        center: {}
    }

    getCenter = async () => {
        console.log(this.props.match.params.id)
        const response = await axios.get(`http://localhost:3000/api/center/${this.props.match.params.id}`)        
        this.setState({
            center: response.data.place
        })
    }

    componentDidMount() {
        this.getCenter()
    }


    render() {
        const { center } = this.state
       console.log(center);
        return (
            <div>
                <p>Categoria: {this.state.center.tipoResiduo}</p>
                <p>Nombre: {this.state.center.empresa}</p>
                <p>Como llegar?</p>
                <p>Direccion: {this.state.center.address}</p>
                <p>Contacto</p>
                <p>Email: {this.state.center.email ? this.state.center.email : 'No disponible'}</p>
                <p>Numero: {this.state.center.contactNumber ? this.state.center.contactNumber : 'No disponible'}</p>
                <p>Website: {this.state.center.website ? this.state.center.website : 'No disponible'}</p>
            </div>
        )
    }
}


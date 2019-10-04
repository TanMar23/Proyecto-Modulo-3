import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class Centers extends Component {
    state={
        centers: undefined,
        center: {}
    }

    getCenters = async () => {
        const response = await axios.get('http://localhost:3000/api/centers')        
        this.setState({
            centers: response.data.places
        })
    }

    getFilteredCenters = async () => {
        console.log("center: " +this.state.center)
        const response = await axios.get(`http://localhost:3000/api/centers/${this.state.center}`)   
        this.setState({
            centers: response.data.centersInCategory 
        })        
    }

    updateValue = (e) =>{
        this.setState({center:e.target.value})
    }

    componentDidMount() {
        this.getFilteredCenters()
        this.getCenters()

    }


    // onClick = (e) => {
    //     e.preventDefault();
    //     .then((response) => {
    //         this.context.logUser(response.data.user);
    //         this.props.history.push('/home');
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });
    // };

    //Array.filter
    //Crear un onclick y agregarlo al boton
    //Crear handle inout para el select
    //Pasar centerscategory
    //values de los options del select deben ser nombres de categorias

    render() {
        const { centers } = this.state
        console.log("Centers:"+centers);
        
        return (
            <div>
                <div className="columns is-centered">
                    <div className="column is-6">
                        <p>Centros</p> 
                    </div>
                </div>

              
                    <div className="columns is-centered">
                        <div className="column is-4">
                            <div className="field has-addons">
                                <div className="control is-expanded">
                                    <div className="select is-fullwidth">
                                    <select name="tipoResiduo" id='tipoResiduo' onChange={this.updateValue}>
                                        <option value="ACEITE COMESTIBLE USADO">Aceite comestible usado</option>
                                        <option value="ACEITE Y LUBRICANTE AUTOMOTRIZ USADO">Aceite y lubricante automotriz usado</option>
                                        <option value="ELECTRONICOS Y ELECTRODOMESTICOS">Electronicos y electrodomesticos</option>
                                        <option value="MEDICAMENTOS CADUCOS">Medicamentos caducos</option>
                                        <option value="METALES">Metales</option>
                                        <option value="PAPEL Y CARTON">Papel y carton</option>
                                        <option value="PET">PET</option>
                                        <option value="PILAS Y BATERIAS">Pilas y baterias</option>
                                        <option value="RESIDUOS DE CONSTRUCCION">Residuos de construccion</option>
                                        <option value="RESIDUOS SANITARIOS">Residuos Sanitarios</option>
                                        <option value="VIDRIO">Vidrio</option>
                                    </select>
                                    </div>
                                </div>
                                <div className="control">
                                    <button type="submit" className="button is-primary" onClick={this.getFilteredCenters}>Filtrar</button>
                                </div>
                            </div>
                        </div>
                        </div>
                    
                    <div className="columns is-centered">
                    <div className="column is-7">
                    {centers ? centers.map((center, i) => 
                        <table className= "box table" key={i}>
                            <tbody>
                                <tr>
                                <td>{center.empresa}</td>
                                <td><Link to={`/center/${center._id}`}>Ver</Link></td>
                                </tr>
                            </tbody>
                        </table>
                        ) : <p>Cargando...</p>}
                    </div>
                </div>
            </div>
        )
    }
}








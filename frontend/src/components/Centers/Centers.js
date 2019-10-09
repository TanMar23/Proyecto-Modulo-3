import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Layout from '../Layout'
import axios from 'axios'

export default class Centers extends Component {
    state={
        centers: undefined,
        center: {}
    }

    getCenters = async () => {
        const response = await axios.get('https://young-beyond-07801.herokuapp.com/api/centers')        
        this.setState({
            centers: response.data.places
        })
    }

    getFilteredCenters = async () => {
        const response = await axios.get(`https://young-beyond-07801.herokuapp.com/api/centers/${this.state.center}`)   
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

    render() {
        const { centers } = this.state
        
        return (

            <Layout history={this.props.history}>

            <div>
                <div className="columns is-centered">
                    <div className="column is-6">
                        <br/>
                        <p className="has-text-centered">CENTROS DE ACOPIO</p> 
                    </div>
                </div>

              {/* Filter Categoria */}
                    <div className="columns is-centered">
                        <div className="column is-4">
                            <div className="field has-addons">
                                <div className="control is-expanded">
                                    <div className="select is-fullwidth">
                                    <select name="tipoResiduo" id='tipoResiduo' onChange={this.updateValue}>
                                        <option disabled selected>Seleccione una categoría</option>
                                        <option value="ACEITE COMESTIBLE USADO">Aceite comestible usado</option>
                                        <option value="ACEITE Y LUBRICANTE AUTOMOTRIZ USADO">Aceite y lubricante automotriz usado</option>
                                        <option value="ELECTRONICOS Y ELECTRODOMESTICOS">Electrónicos y electrodomésticos</option>
                                        <option value="MEDICAMENTOS CADUCOS">Medicamentos caducos</option>
                                        <option value="METALES">Metales</option>
                                        <option value="PAPEL Y CARTON">Papel y cartón</option>
                                        <option value="PET">PET</option>
                                        <option value="PILAS Y BATERIAS">Pilas y baterías</option>
                                        <option value="RESIDUOS DE CONSTRUCCION">Residuos de construcción</option>
                                        <option value="RESIDUOS SANITARIOS">Residuos Sanitarios</option>
                                        <option value="VIDRIO">Vidrio</option>
                                    </select>
                                    </div>
                                </div>
                                <div className="control">
                                    <button type="submit" className="button is-primary" onClick={this.getFilteredCenters}>Filtrar</button>
                                </div>
                                <div className="control">
                                    <button type="submit" className="button is-primary" onClick={this.getCenters}>Ver todos</button>
                                </div>
                            </div>
                    
                        </div>
                        </div>
                     
               
                <div className="columns is-centered">
                    <div className="column is-7">
                        <p className="has-text-centered">¿Conoces algún centro que no este aquí?</p>
                        <div className='add-center-button'>
                            <NavLink exact to='/create-new'>
                            <button className='button is-primary'>Agregar nuevo centro</button>
                            </NavLink>
                        </div>
                    
                        {centers ? centers.map((center, i) => 
                        <table className= "box table" key={i}>
                            <tbody>
                                <tr>
                                <td>{center.empresa}</td>
                                <div className="ver-button">
                                <td><Link to={`/center/${center._id}`}>Ver</Link></td>
                                </div>
                                </tr>
                            </tbody>
                        </table>
                        ) : <p>Cargando...</p>}
                    </div>
                </div>
            </div>
            </Layout>

        )
    }
}







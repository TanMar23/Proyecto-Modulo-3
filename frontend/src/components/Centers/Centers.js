import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class Centers extends Component {
    state={
        centers: undefined
    }

    getCenters = async () => {
        const response = await axios.get('http://localhost:3000/api/centers')        
        this.setState({
            centers: response.data.places
        })
    }

    componentDidMount() {
        this.getCenters()
    }

    render() {
        const { centers } = this.state
        console.log(centers);
        
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
                                    <select name="country">
                                        <option value="Argentina">Aceite comestible usado</option>
                                        <option value="Bolivia">Aceite y lubricante automotriz usado</option>
                                        <option value="Brazil">Electronicos y electrodomesticos</option>
                                        <option value="Chile">Medicamentos caducos</option>
                                        <option value="Colombia">Metales</option>
                                        <option value="Ecuador">Papel y carton</option>
                                        <option value="Guyana">PET</option>
                                        <option value="Paraguay">Pilas y baterias</option>
                                        <option value="Peru">Residuos de construccion</option>
                                        <option value="Suriname">Residuos Sanitarios</option>
                                        <option value="Uruguay">Vidrio</option>
                                    </select>
                                    </div>
                                </div>
                                <div className="control">
                                    <button type="submit" className="button is-primary">Filtrar</button>
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








import React, { Component } from 'react'
import axios from 'axios'
import Layout from '../Layout'

export default class ContributionList extends Component {
    state={
        contributions:[]
    }

    getContributions = async () => {
        const response = await axios.get('https://young-beyond-07801.herokuapp.com/api/contribution-list')        
        this.setState({
            contributions: response.data.contributions
        })
    }

    componentDidMount(){
     this.getContributions()   
    }

    deleteContribution = (id) => {
        axios.delete(`https://young-beyond-07801.herokuapp.com/api/contribution/${id}`)
        .then(response => {
            this.setState(prevState => {
                return {
                    ...prevState,
                    contributions: prevState.contributions.filter(e => e._id !== response.data.contribution._id)
                }
            })
        })
        .catch(err => console.log(err))
    }

    render() {
        const { contributions } = this.state
        
        return (
            <Layout history={this.props.history}>
            <div>
                <br/>
                <h3 className='has-text-centered'>Contribuciones</h3>
                <br/>
                <div className="contribution-wrapper">
                    <div className="columns is-centered">
                        <div className="column is-5">
                            <div>
                                {contributions ? contributions.map((contribution, i) => 
                                <table className= "box table" key={contribution._id}>
                                    <tbody>
                                        <tr>
                                        <td>Cantidad: {contribution.quantity}</td>
                                        <td>Unidad: {contribution.unity}</td>
                                        <td>
                                            <button className="button is-primary"
                                                onClick = {() => this.deleteContribution(contribution._id)}>
                                                Borrar
                                            </button>
                                        </td>
                                        </tr>
                                        </tbody>
                                        </table>
                                ) : <p>Cargando...</p>
                                }
                            </div>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
            </Layout>
        )
    }
}
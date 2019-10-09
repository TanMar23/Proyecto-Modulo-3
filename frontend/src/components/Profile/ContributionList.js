import React, { Component } from 'react'
import axios from 'axios'
import Layout from '../Layout'

export default class ContributionList extends Component {
    state={
        contributions:[]
    }

    getContributions = async () => {
        const response = await axios.get('http://localhost:3000/api/contribution-list')        
        this.setState({
            contributions: response.data.contributions
        })
    }

    componentDidMount(){
     this.getContributions()   
    }

    deleteContribution = (id) => {
        axios.delete(`http://localhost:3000/api/contribution/${id}`)
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
                <h3 className='has-text-centered'>Contribuciones</h3>
            {contributions ? contributions.map((contribution, i) => 
                <table className= "box table" key={contribution._id}>
                    <tbody>
                        <tr>
                        <td>{contribution.quantity}</td>
                        <td>{contribution.unity}</td>
                        <td>
                            <button
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
            </Layout>
        )
    }
}